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

navMenu.addEventListener("");
filtertop.addEventListener("");