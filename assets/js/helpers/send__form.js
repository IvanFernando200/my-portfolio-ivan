/* const d = document;
const $formulario = d.querySelector("#form"),
  $modal = d.querySelector("#modal"),
  $closeBtn = d.querySelector("#btn__close-modal");

function openModal() {
  $modal.open = true;
}

function sendEmail(e) {
  e?.preventDefault();
  const params = {
    name: d.getElementById("name").value,
    email: d.getElementById("email").value,
    subject: d.getElementById("subject").value,
    message: d.getElementById("message").value,
  };
  if (params.name && params.email && params.subject && params.message) {
    emailjs
      .send("service_fs10ojh", "service_fs10ojh", params)
      .then(openModal());
  }
}

$closeBtn.addEventListener("click", $closeBtn);
$formulario.addEventListener("submit", sendEmail);

 */

const btn = document.querySelector(".contact__form-button");
function sendEmail(event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_cviddov";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
}
document.getElementById("form").addEventListener("submit", sendEmail);

export default sendEmail;

/* (()=>{
  document.querySelector('.hijo').addEventListener('click',e=>{
    if(e.target.clossest('.padre')){
      window.alert(e.target.closest('.agregar').dataset.id)
    }
  })

  // Contadores
  const counter = document.querySelector('.counters');
  
})() */
