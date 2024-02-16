const d = document;
export function digitalClock(id, btnStart, btnStop) {
  const $id = d.getElementById(id);
  let tempo;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnStart)) {
      tempo = setInterval(() => {
        $id.innerHTML = `<h3>${new Date().toLocaleTimeString()}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearInterval(tempo);
      $id.innerHTML = null;
      d.querySelector(btnStart).disabled = false;
    }
  });
}
export function digitalAlarm(srcAudio, btnStart, btnStop) {
  const $audio = d.createElement("audio");
  $audio.src = srcAudio;
  let alarm;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnStart)) {
      alarm = setTimeout(() => {
        $audio.play();
      }, 3000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearTimeout(alarm);
      $audio.pause();
      $audio.currentTime = 0; // resetear
      d.querySelector(btnStart).disabled = false;
    }
  });
}
