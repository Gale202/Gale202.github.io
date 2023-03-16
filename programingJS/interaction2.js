//tuve que crear un nuevo archivo js porque no comparten todas las funciones las 3 paginas.


document.querySelector(".nav__responsive-button").addEventListener("click",() => {
    document.querySelector(".nav__responsive").style.display = "flex";
    document.querySelector(".back_menu").style.display = "flex"
})

document.querySelector(".back_menu").addEventListener("click", () => {
    document.querySelector(".nav__responsive").style.display = "none";
    document.querySelector(".back_menu").style.display = "none"
})