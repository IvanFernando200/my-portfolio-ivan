const d = document;
export function digitalClock(clock, btnPlay, btnStop) {
  let time;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      time = setInterval(() => {
        d.querySelector(
          clock 
        ).innerHTML = `<h3>${new Date().toLocaleTimeString()}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearInterval(time);
      d.querySelector(clock).innerHTML = null; //----------
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
export function digitalAlarm(alarmSrc, btnPlay, btnStop) {
  const $audio = d.createElement("audio");
  $audio.src = alarmSrc;
  let alarm;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarm = setTimeout(() => {
        $audio.play();
      }, 2000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearTimeout(alarm);
      $audio.pause();
      $audio.currentTime = 0; //-----------
      d.getElementById(btnPlay).disabled = false;
    }
  });
}
