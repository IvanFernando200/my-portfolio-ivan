const d = document;
let x = 0,
  y = 0;
export default function moveBall(e, container, child) {
  const $container = d.getElementById(container),
    $child = d.getElementById(child),
    limmitStage = $container.getBoundingClientRect(),
    limmitBall = $child.getBoundingClientRect();
  // e.key // l
  // e.keyCode // 76
  // e.code // keyL

  /*   console.log(limmitStage);
  console.log(limmitBall); */
  switch (e.keyCode) {
    case 37:
      if (limmitBall.left > limmitStage.left) {
        e.preventDefault();
        x--;
      }
      break;
    case 38:
      if (limmitBall.top > limmitStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      if (limmitBall.right < limmitStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      if (limmitBall.bottom < limmitStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }
  $child.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  // Atajos:
  // reservados: altKey, ctrlKey, shirftKey
  if (e.altKey && e.keyCode === 65) {
    alert("Well done, You are becomeing a great programer");
  }
  // console.log(e);
  // console.log(e.altKey);
}

{
  // moveBall:::::::::::::::
  // antes: let x=0,y=0;
  // limitStage = $stage.getBoundingClientRect();
  // switch:
  // if(limmitBall.right<limmitStage.right) {e.preventDefatult() x++}
  // $child.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  // atajos:::::::::::::
  // reservados: altKey, ctrlKey, shirftKey
  // if(e.altKey && e.keyCode === 65) alert('well done');
}
