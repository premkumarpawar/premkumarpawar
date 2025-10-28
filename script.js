// ===== Responsive Menu Toggle =====
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

// Optional: Close menu when clicking a link (mobile)
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuToggle.classList.remove('open');
    });
});

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "#f8faff";
        header.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
    } else {
        header.style.background = "#fff";
        header.style.boxShadow = "0 3px 12px rgba(0, 0, 0, 0.08)";
    }
});

