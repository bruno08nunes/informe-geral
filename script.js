const menu = document.querySelector(".menu")
const links = document.querySelector(".nav_links ul")
menu.addEventListener("click", abrirMenu)

function abrirMenu() {
    if (links.style.display == "flex") {
        links.style.display = "none"
    } else {
        links.style.display = "flex"
    }
}

window.onresize = function () {
    if (window.innerWidth >= 850) {
        links.style.display = "flex"
    }
    else {
        links.style.display = "none"
    }
}

const legenda = document.querySelectorAll(".body-main figcaption")
for (let pos in legenda) {
    legenda[pos].title = legenda[pos].innerText
}