const d = document,
  ls = localStorage;
export default function darkTheme(btn, dataDark) {
  const $themeBtn = d.getElementById(btn),
    $items = d.querySelectorAll(dataDark);
  console.log($items);
  console.log(ls);

  const darkMode = () => {
    $items.forEach((item) => item.classList.add("dark-mode"));
    ls.setItem("theme", "dark");
  };
  const whiteMode = () => {
    $items.forEach((item) => item.classList.remove("dark-mode"));
    ls.setItem("theme", "white");
  };
  d.addEventListener("click", (e) => {
    if ($themeBtn.checked) {
      darkMode();
    }
    if (!$themeBtn.checked) {
      whiteMode();
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "white");
    if (ls.getItem("theme") === "white") whiteMode();
    if (ls.getItem("theme") === "dark") {
      darkMode();
      $themeBtn.checked = true;
    }
  });
}

/* 
<div class="navbar__toggle--darkmode">
   <input type="checkbox" id="darkmode-toggle"
  class="navbar__toggle--darkmode-input"/>

  <label for="darkmode-toggle" class="navbar__toggle--darkmode-label">
    <i class="bx bx-sun navbar__toggle--darkmode-sun"></i>
    <i class="bx bx-moon navbar__toggle--darkmode-moon"></i>
  </label>
</div>


*/
