const d = document;
export default function daySchedule() {
  (() => {
    const xhr = new XMLHttpRequest(),
      $xhr = d.getElementById("weekDays"),
      $fragment = d.createDocumentFragment();

    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        const datos = JSON.parse(xhr.response);
        console.log(Object.keys(datos[0]));
        console.log(Object.values(datos[0]));

        for (const el in datos[0]) {
          console.log(el);
          const $li = d.createElement("li");
          $li.innerHTML = `${el} -- ${datos[0][el]}`;
          $fragment.appendChild($li);
        }

        // for (let score of Object.values(datos[0])) {
        //   console.log(score);
        // }

        // datos.forEach((obj) => {
        //   const $li = d.createElement("li");
        //   console.log(obj);
        //   $li.innerHTML = obj.academlo;
        //   $fragment.appendChild($li);
        // });
        $xhr.appendChild($fragment);
      }
    });

    xhr.open("GET", "./assets/horario.json");
    xhr.send();
  })();
}
