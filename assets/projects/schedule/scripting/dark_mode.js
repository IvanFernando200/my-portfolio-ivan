const d = document;
export default function darkMode(appliedMode, btnMode, classMode) {
  const $body = d.querySelector(appliedMode);
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnMode)) {
      if (e.target.textContent === "🌚") {
        $body.classList.add(classMode);
        e.target.textContent = "🌞";
      } else {
        $body.classList.remove(classMode);
        e.target.textContent = "🌚";
      }
    }
  });
}
