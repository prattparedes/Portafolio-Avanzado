// template_3vuycph
// service_v0vpc6f
// bwIWr7XwpIPXx7B-1

let isModalOpen = false 
let contrastToggle = false


function toggleContrast() {
  if (contrastToggle) {
    contrastToggle = !contrastToggle
    return document.body.classList.remove("dark-theme")
  }
  document.body.classList += " dark-theme"
  contrastToggle = !contrastToggle
}


function contact(event) {
  event.preventDefault(); //Por defecto los forms cuando son submit la pagina se refresca, para evitar eso usamos event.preventDefault()
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible"
  emailjs
    .sendForm(
      "service_v0vpc6f",
      "template_3vuycph",
      event.target,
      "bwIWr7XwpIPXx7B-1"
    )
    .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly on pratt.paredes@gmail.com"
        )
    })
}


function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false
    return document.body.classList.remove("modal--open")
  }
  isModalOpen = !isModalOpen
  document.body.classList += " modal--open"
}
