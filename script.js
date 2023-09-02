// Faz o menu hamburguinho
const menu = document.querySelector(".menu")
const links = document.querySelector(".nav_links ul")
menu.addEventListener("click", abrirMenu)

function abrirMenu() {
    // Quando clica faz isso
    if (links.style.display == "flex") {
        links.style.display = "none"
    } else {
        links.style.display = "flex"
    }
}

window.onresize = function () {
    // Quando a janela é redimensionada muda o estilo
    if (window.innerWidth >= 850) {
        links.style.display = "flex"
    }
    else {
        links.style.display = "none"
    }
}

// Adiciona uma legenda ao passar o mouse por cima
const legendas = document.querySelectorAll(".body-main figcaption")
for (let pos in legendas) {
    legendas[pos].title = legendas[pos].innerText
}