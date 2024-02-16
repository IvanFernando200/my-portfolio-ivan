const d = document;
export default function timeToYear(id, limitDate) {
  const $id = d.getElementById(id),
    countDownDate = new Date(limitDate);

  let countDownTime = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countDownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutes = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

    $id.innerHTML = `<h3 style="color: #009">Faltan: <br>${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds</h3>`;
    // if (limitTime < 0) {
    //   clearInterval(countDownTime);
    // }

  }, 1000);
}
