import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

// Header Menu Code
const menuToggle = document.getElementById('menuToggle');
const headerMenu = document.getElementById('headerMenu');
const body = document.body;

if (menuToggle && headerMenu) {
    menuToggle.addEventListener('click', () => {
        headerMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    const menuLinks = headerMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            headerMenu.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    document.addEventListener('click', (event) => {
        if (!headerMenu.contains(event.target) &&
            !menuToggle.contains(event.target) &&
            headerMenu.classList.contains('active')) {
            headerMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
}