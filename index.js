// template_3vuycph
// service_v0vpc6f
// bwIWr7XwpIPXx7B-1

let isModalOpen = false 
let contrastToggle = false
const scaleFactor = 1 / 20

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape")  // query selector all returns an array
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  for (let i = 0; i < shapes.length; ++i) { 
    const isOdd = i % 2 !== 0;
    const boolInteger = isOdd ? -1 : 1
    shapes[i].style.transform = `translate(${x * boolInteger}px, ${y * boolInteger}px) rotate(${x * 10}deg)`
}}

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
