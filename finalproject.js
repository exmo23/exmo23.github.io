import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
import { getFirestore, collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJciYNepMbVlkftSf2QctYFN07iHa1Nh4",
    authDomain: "atls-2200-final.firebaseapp.com",
    projectId: "atls-2200-final",
    storageBucket: "atls-2200-final.firebasestorage.app",
    messagingSenderId: "409303139308",
    appId: "1:409303139308:web:f3593b608a42ea78b376c9",
    measurementId: "G-B48JX5DGGB"
};

console.log("imported Firebase");

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

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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

const db = getFirestore(app);

async function getPosts(db) {
    const postCol = collection(db, 'posts');
    const colSnapshot = await getDocs(postCol);
    const postList = colSnapshot.docs.map(doc => doc.data());
    const postContent = document.querySelector('content');
    console.log("Got posts: ", postList);
    postContent.innerHTML='';
    postList.forEach(post => {
        console.log(post)
        const postElement = document.createElement('div');
        postElement.classList.add('post-item');
        postElement.innerHTML = `<h3>${post.title || "Untitled"}</h3>\n<p>${post.content || "No content"}</p>`;
        postContent.appendChild(postElement);
    })
    return postList;
}

const newPost = document.getElementById('new-post-form');
const postTitle = document.getElementById('post-title');
const postContent = document.getElementById('post-content');

if(newPost) {
    newPost.addEventListener('submit', async (event) => function(){
        event.preventDefault();
        const title = postTitle.value;
        const content = postContent.value;
        try {
            const postsCol = collection(db, 'posts');
            const docRef = addDoc(postsCol, {
                title: title,
                content, content,
                timestamp: new Date()
            })
            console.log("Successfully saved new entry. ID: ", docRef.id)
        }
        catch(Exception) {
        console.log(Exception)
    }
    }
    );
}
console.log("declared getPosts successfully");
getPosts(db);

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
