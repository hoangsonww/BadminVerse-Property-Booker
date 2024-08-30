'use strict';

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

for (let i = 0; i < navbarLinks.length; i++) {
    navElemArr.push(navbarLinks[i]);
}

for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function () {
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
    });
}

function openModal() {
    document.getElementById("addListingModal").style.display = "block";
}

function closeModal() {
    document.getElementById("addListingModal").style.display = "none";
}

const addListingButton = document.querySelector('.header-top-btn');
addListingButton.addEventListener('click', openModal);

function openBookingModal() {
    document.getElementById("bookingModal").style.display = "block";
}

function closeBookingModal() {
    document.getElementById("bookingModal").style.display = "none";
}

const makeBookingButton = document.querySelector('.hero-content .btn');
makeBookingButton.addEventListener('click', openBookingModal);

function scrollToPropertySection() {
    const propertySection = document.getElementById("property");
    if (propertySection) {
        propertySection.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
}

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    window.scrollY >= 400 ? header.classList.add("active")
        : header.classList.remove("active");
});
