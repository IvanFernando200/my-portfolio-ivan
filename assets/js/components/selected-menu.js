const d = document;
const $navbarList = d.querySelector(".navbar__list");
const $navbarLinks = d.querySelectorAll(".navbar__link");
const $sections = d.querySelectorAll("section");

function activeMenu(e) {
  if (e && e.type === "click") {
    const clickedLink = e.target.closests(".navbar__link");
    const activeLink = $navbarList.querySelector(".navbar__link.active");

    if (activeLink) {
      activeLink.classList.remove("active");
    }
    if (clickedLink) {
      clickedLink.classList.add("active");
    }
  } else if (e && e.type === "scroll") {
    const scrollPosition = window.scrollY + 50;

    for (let i = $sections.length - 1; i >= 0; i--) {
      if (scrollPosition >= $sections[i].offsetTop) {
        const activeLink = $navbarList.querySelector(".navbar__link.active");
        if (activeLink) {
          activeLink.classList.remove("active");
        }
        $navbarLinks[i].classList.add("active");
        break;
      }
    }
  }
}

$navbarList.addEventListener("click", activeMenu);
window.addEventListener("scroll", activeMenu);

export default activeMenu;
