let menu = document.querySelector(".menu")
let links = document.querySelector(".nav_links ul")
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