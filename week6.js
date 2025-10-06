const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu"); 
const menuButtons = document.querySelector(".menuButtons");
const filtertop = document.querySelector("FilterByTop");
const topListing = document.querySelector("Listing3");
const darkThemeBtn = document.querySelector("darkThemeButton");
const lightThemeBtn = document.querySelector("lightThemeButton");

var menu_shown = false;

function func() {
    if (navMenu.classList.contains("show") && menuButtons.classList.contains("show")) {
        navMenu.classList.replace("show", "hide");
        //menuButtons.classList.replace("show", "hide");
    }
    else if (navMenu.classList.contains("hide")) {
        navMenu.classList.replace("hide", "show");
        //menuButtons.classList.replace("hide", "show");
    }
}

function sortByTop() {
    if (topListing.classList.contains("show") && menuButtons.classList.contains("show")) {
        topListing.classList.remove("show");
        topListing.classList.add("hide");
    }
    else if (topListing.classList.contains("hide")) {
        topListing.classList.remove("hide");
        topListing.classList.add("show");
    }
}

// Save user"s theme choice
function setTheme(theme) {
    localStorage.setItem("userTheme", theme);
    document.body.className = theme;
}

// Load saved theme on page load
window.addEventListener("load", function() {
    const savedTheme = localStorage.getItem("userTheme") || "light";
    document.body.className = savedTheme;
});

darkThemeBtn.addEventListener("click", setTheme("dark"));
lightThemeBtn.addEventListener("click", setTheme("light"));

navMenu.addEventListener("");
filtertop.addEventListener("");