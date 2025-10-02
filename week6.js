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
const filtertop = document.querySelector('FilterByTop');
const topListing = document.querySelector('Listing3');
const darkThemeBtn = document.querySelector("darkThemeButton");
const lightThemeBtn = document.querySelector("lightThemeButton");

function sortByTop() {
    if (topListing.classList.contains("show")) {
        topListing.classList.remove("show")
        topListing.classList.add("hide")
    }
    else if (topListing.classList.contains("hide")) {
        topListing.classList.remove("hide")
        topListing.classList.add("show")
    }
}

// Save user's theme choice
function setTheme(theme) {
    localStorage.setItem('userTheme', theme);
    document.body.className = theme;
}

// Load saved theme on page load
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('userTheme') || 'light';
    document.body.className = savedTheme;
});

darkThemeBtn.addEventListener('click', setTheme('dark'));
lightThemeBtn.addEventListener('click', setTheme('light'));

navMenu.addEventListener("");
filtertop.addEventListener("");