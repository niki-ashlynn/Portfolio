// set the current year automatically

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}// mobile navigation

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// close mobile menu after clicking a link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// automatically update copyright year

document.getElementById("year").textContent = new Date().getFullYear();
