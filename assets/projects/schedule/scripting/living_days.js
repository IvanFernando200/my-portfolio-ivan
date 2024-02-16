const d = document;
export default function livingDays(id) {
  const $id = d.getElementById(id);
  const fecha = new Date("June 7,2002 12:00:00").getTime();
  console.log(fecha);
  setInterval(() => {
    const now = new Date().getTime(),
      tiempoLimite = now - fecha;
    let yearsLive = Math.floor(tiempoLimite / (1000 * 60 * 60 * 24 * 365)),
      daysLive = Math.floor(
        (tiempoLimite % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
      ),
      hoursLive = (
        "0" +
        Math.floor((tiempoLimite % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minitesLive = (
        "0" + Math.floor((tiempoLimite % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      secondsLive = (
        "0" + Math.floor((tiempoLimite % (1000 * 60)) / 1000)
      ).slice(-2);

    $id.innerHTML = `<h3>Living time:<br> ${yearsLive} Años ${daysLive} dias ${hoursLive}:${minitesLive}:${secondsLive}</h3>`;
    let ageInDays = tiempoLimite / (1000 * 60 * 60 * 24);
    $id.innerHTML += `<br> <b style="color:#c00">Edad en dias: ${Math.round(
      ageInDays
    )}</b>`;
  }, 1000);
}
