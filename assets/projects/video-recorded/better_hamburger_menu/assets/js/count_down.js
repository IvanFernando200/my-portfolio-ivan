const d = document;
export default function countDown(limitDate, id, finalMessage) {
  const $id = d.getElementById(id);
  let tempo = setInterval(() => {
    const limitTime = new Date(limitDate).getTime() - Date.now();
    // el Date.now() --- es el actualiza
    let days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
      minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);
      
    $id.innerHTML = `<h3>Left: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds </h3>`;
    if (limitTime < 0) {
      clearInterval(tempo);
      $id.innerHTML = `<h3>${finalMessage}</h3>`;
    }
  }, 1000);
}
