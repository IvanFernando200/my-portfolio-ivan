const d = document,
  ls = localStorage;
export default function darkTheme(btn) {
  const $btn = d.querySelector(btn);

  const $elements = d.querySelectorAll("[data-dark]");
  let sun = "🌞",
    moon = "🌚";

  const darkMode = () => {
      $elements.forEach((el) => el.classList.add("dark__mode"));
      $btn.textContent = sun;
      ls.setItem("theme", "dark");
    },
    lightMode = () => {
      $elements.forEach((el) => el.classList.remove("dark__mode"));
      $btn.textContent = moon;
      ls.setItem("theme", "light");
    };
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if (e.target.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme")===null) lightMode();
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
    // console.log(ls.getItem("theme"));
  });
}
