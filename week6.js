 const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu'); 

var menu_shown = false;

function func() {
    if (navMenu.classList.contains("show")) {
        navMenu.classList.remove("show")
        navMenu.classList.add("hide")
    }
    else if (navMenu.classList.contains("hide")) {
        navMenu.classList.remove("hide")
        navMenu.classList.add("show")
    }
}

navMenu.addEventListener("")