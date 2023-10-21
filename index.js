const menuToggleBtn = document.getElementById("toggle");
const closeMenuBtn = document.getElementById("close-btn");
const navMenu = document.querySelector("nav ul");

menuToggleBtn.addEventListener("click", function () {
  if (navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    navMenu.setAttribute("aria-expanded", false);
    menuToggleBtn.style.display = "none";
    document.body.style.overflowY = "unset";
  } else {
    navMenu.classList.add("active");
    navMenu.setAttribute("aria-expanded", true);
    menuToggleBtn.style.display = "block";
    document.body.style.overflowY = "hidden";
  }
});

closeMenuBtn.addEventListener("click", function () {
  navMenu.classList.remove("active");
});
