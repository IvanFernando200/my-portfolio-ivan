const d = document;
export default function hamburgerMenu(menu, btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      d.querySelector(btn).classList.toggle("is-active");
      d.querySelector(menu).classList.toggle("is-active");
    }
    if (e.target.matches(`${menu} *`)) {
      d.querySelector(menu).classList.remove("is-active");
      d.querySelector(btn).classList.remove("is-active");
    }
  });
}
