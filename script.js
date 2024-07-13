'use strict';

// preload

// Belge yüklendikten sonra yükleme sona erecek

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function (){
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});

// Olay dinleyicisi birden çok öğe ekleme

const addEventOnElements = function ( elements, evenType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(evenType, callback);
    }
}


const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");

}


addEventOnElements(navTogglers, "click", toggleNavbar);



// header

const header = document.querySelector("[data-header]");

let lastScrollPos = 0;

const hideHeader = function () {
    const isScrollBottom = lastScrollPos < Window.scrollY;
    if(isScrollBottom){
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScrollPos = Window.scrollY;
}

window.addEventListener("scroll", function () {
    if(window.scrollY >= 50) {
        header.classList.add("active");
        hideHeader();
    } else {
        header.classList.remove("active");
    }
})
