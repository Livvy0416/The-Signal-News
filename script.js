const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const aboutToggle = document.getElementById("aboutToggle");
const aboutSubLinks = document.getElementById("aboutSubLinks");
const aboutArrow = document.getElementById("aboutArrow");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// Toggle sub-links for About Us
aboutToggle.addEventListener("click", () => {
  const isOpen = aboutSubLinks.style.display === "flex";
  aboutSubLinks.style.display = isOpen ? "none" : "flex";
  aboutArrow.textContent = isOpen ? "▾" : "▴";
});

