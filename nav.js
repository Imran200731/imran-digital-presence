// ========================================
// MOBILE NAVIGATION
// ========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-open");

        if (navLinks.classList.contains("mobile-open")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("mobile-open");
            menuToggle.textContent = "☰";
        });
    });
}