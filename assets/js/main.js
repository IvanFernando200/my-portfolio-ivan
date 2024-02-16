import parallax from "./components/parallax.js";
import activeMenu from "./components/selected-menu.js";
import updateCopyright from "./helpers/date_update.js";
import resetToHome from "./helpers/reload-page.js";
import sendEmail from "./helpers/send__form.js";
import hamburgerMenu from "./components/hamburger-menu.js";
import darkTheme from "./components/dark-mode.js";
// import { comentary } from "./components/newtest.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".navbar__menu", ".navbar__button");
  parallax();
  activeMenu();
  resetToHome();
  updateCopyright();
  sendEmail();
});
darkTheme("darkmode-toggle", "[data-dark]");
