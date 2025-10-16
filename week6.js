const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu"); 
const menuButtons = document.querySelector(".menuButtons");
const filtertop = document.querySelector("FilterByTop");
const topListing = document.querySelector("Listing3");
const darkThemeBtn = document.querySelector("darkThemeButton");
const lightThemeBtn = document.querySelector("lightThemeButton");
const thirteenlistings = document.querySelector(".age13");
const sixteenlistings = document.querySelector(".age16");
const eighteenlistings = document.querySelector(".age18");
const twentyonelistings = document.querySelector(".age21");

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

function sortBy13() {
    thirteenlistings.classList.add("show");
    if (thirteenlistings.classList.contains("hide")) {
        thirteenlistings.classList.remove("hide");
    }
    sixteenlistings.classList.remove("show");
    sixteenlistings.classList.add("hide");
    eighteenlistings.classList.remove("show");
    eighteenlistings.classList.add("hide");
    twentyonelistings.classList.remove("show");
    twentyonelistings.classList.add("hide");
}

function sortBy16() {
    sixteenlistings.classList.add("show");
    if (sixteenlistings.classList.contains("hide")) {
        sixteenlistings.classList.remove("hide");
    }
    thirteenlistings.classList.remove("show");
    thirteenlistings.classList.add("hide");
    eighteenlistings.classList.remove("show");
    eighteenlistings.classList.add("hide");
    twentyonelistings.classList.remove("show");
    twentyonelistings.classList.add("hide");
}

function sortBy18() {
    eighteenlistings.classList.add("show");
    if (eighteenlistings.classList.contains("hide")) {
        eighteenlistings.classList.remove("hide");
    }
    thirteenlistings.classList.remove("show");
    thirteenlistings.classList.add("hide");
    sixteenlistings.classList.remove("show");
    sixteenlistings.classList.add("hide");
    twentyonelistings.classList.remove("show");
    twentyonelistings.classList.add("hide");
}

function sortBy21() {
    twentyonelistings.classList.add("show");
    if (twentyonelistings.classList.contains("hide")) {
        twentyonelistings.classList.remove("hide");
    }
    thirteenlistings.classList.remove("show");
    thirteenlistings.classList.add("hide");
    eighteenlistings.classList.remove("show");
    eighteenlistings.classList.add("hide");
    sixteenlistings.classList.remove("show");
    sixteenlistings.classList.add("hide");
}

function clearFilter() {
    thirteenlistings.classList.remove("hide");
    thirteenlistings.classList.add("show");
    sixteenlistings.classList.remove("hide");
    sixteenlistings.classList.add("show");
    eighteenlistings.classList.remove("hide");
    eighteenlistings.classList.add("show");
    twentyonelistings.classList.remove("hide");
    twentyonelistings.classList.add("show");
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
