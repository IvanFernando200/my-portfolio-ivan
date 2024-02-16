const d = document;
const $iconsDOM = d.querySelectorAll(".home__layer");
const $homeDOM = d.getElementById("home");

function parallax(e) {
  $iconsDOM.forEach((ico) => {
    const speed = ico.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    ico.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
$homeDOM.addEventListener("mousemove", parallax);
export default parallax;