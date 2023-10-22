const menuToggleBtn = document.getElementById("toggle");
const closeMenuBtn = document.getElementById("close-btn");
const navMenu = document.querySelector("nav ul");

menuToggleBtn.addEventListener("click", function () {
  if (navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    navMenu.setAttribute("aria-expanded", false);
    menuToggleBtn.style.display = "none";
    // document.body.style.overflowY = "unset";
  } else {
    navMenu.classList.add("active");
    navMenu.setAttribute("aria-expanded", true);
    menuToggleBtn.style.display = "block";
    // document.body.style.overflowY = "hidden";
  }
});

closeMenuBtn.addEventListener("click", function () {
  navMenu.classList.remove("active");
});

const darkModeToggleBtn = document.getElementById("dark-mode-toggle-btn");
const label = document.querySelector("label");
const moon = darkModeToggleBtn.querySelector(".moon");
const sun = darkModeToggleBtn.querySelector(".sun");
const logo = document.querySelector(".logo");
const smallHeading = document.querySelector(".small-heading");
const h1 = document.querySelector("h1");
const benefits = document.querySelectorAll(".benefits span");
const aboutLink = document.querySelector(".about-link");

moon.addEventListener("click", toggleDarkMode);
sun.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    logo.setAttribute("src", "./assets/alarado-icon-homepage.svg");
    smallHeading.style.color = "#223344";
    h1.style.color = "#223344";
    aboutLink.style.color = "#111729";
    benefits.forEach((benefit) => (benefit.style.color = "#223344"));
  } else {
    document.body.classList.add("dark-mode");
    logo.setAttribute("src", "./assets/alarado-icon-homepage-dark-mode.svg");
    smallHeading.style.color = "#FFFFFF";
    h1.style.color = "#FFFFFF";
    aboutLink.style.color = "#FFFFFF";
    benefits.forEach((benefit) => (benefit.style.color = "#909193"));
  }
}
