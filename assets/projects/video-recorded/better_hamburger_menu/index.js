import scrollTopBtn from "./assets/js/btn_scroll.js";
import countDown from "./assets/js/count_down.js";
import darkTheme from "./assets/js/dark_theme.js";
import hamburgerMenu from "./assets/js/hamburget_menu.js";
import responsiveMedia from "./assets/js/responsive_videos.js";
import { digitalAlarm, digitalClock } from "./assets/js/reloj.js";
import moveBall from "./assets/js/teclado.js";
import responsiveTester from "./assets/js/responsibe_tester.js";
import deviceDetection from "./assets/js/device_detection.js";
import networkStatus from "./assets/js/red_detection.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel_btn", ".panel");
  digitalClock("clock", "#start-clock", "#stop-clock");
  digitalAlarm("./assets/media/alarm.mp3", "#start-alarm", "#stop-alarm");
  countDown(
    "october 04, 2024, 20:23:00",
    "countdown",
    "Congratulations, now meylin will tell you my love, like you ever wanted"
  );
  scrollTopBtn(".scroll_top");
  responsiveMedia(
    "youtube",
    "(min-width: 1000px)",
    "<a href='https://youtu.be/GrAchTdepsU?si=KPK1IAbp4LwzUOsZ' target='_blank'>24k Gold</a>",
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/GQNthuipMDo?si=oku2QF_Y88h0P_Et" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsiveTester("responsive-tester");
  deviceDetection("device-detection");
});

d.addEventListener("keydown", (e) => {
  moveBall(e, "container", "child");
});

darkTheme(".dark__theme");
networkStatus();
