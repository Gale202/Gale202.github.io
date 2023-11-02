//tuve que crear un nuevo archivo js porque no comparten todas las funciones las 3 paginas.

document
  .querySelector(".nav__responsive-button")
  .addEventListener("click", () => {
    document.querySelector(".nav__responsive").style.display = "flex";
    document.querySelector(".back_menu").style.display = "flex";
  });

document.querySelector(".back_menu").addEventListener("click", () => {
  document.querySelector(".nav__responsive").style.display = "none";
  document.querySelector(".back_menu").style.display = "none";
});

document.getElementById("pa").addEventListener("click", () => {
  document.getElementById("ro").style.display = "none";
  document.querySelector(".container-video__pa").style.display = "block";
});

document.getElementById("ro").addEventListener("click", () => {
  document.getElementById("pa").style.display = "none";
  document.querySelector(".container-video__ro").style.display =
    "block";
});
