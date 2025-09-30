// En tu JavaScript — puedes ponerlo al final de tu body o en un archivo .js
document.addEventListener("DOMContentLoaded", function() {
  const cont = document.querySelector(".imagenes-container");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cont.classList.add("visible");
      }
    });
  }, { threshold: 0.3 });
  observer.observe(cont);
});

const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const menu = document.getElementById("menu");

openMenuBtn.addEventListener("click", () => {
  menu.style.display = "flex"; // mostrar menú
});

closeMenuBtn.addEventListener("click", () => {
  menu.style.display = "none"; // ocultar menú
});
