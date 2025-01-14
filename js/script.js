import AOS from "aos";
import "aos/dist/aos.css";
import courtsDiagonal from '../assets/courts diagonal.webp';
import courtsStraight from '../assets/courts straight.webp';
import leftArrow from '../assets/left-arrow.png';



// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});


//carousel
const carouselImages = document.querySelector('.venue__details-courts__carousel__images');
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');
const totalImages = document.querySelectorAll('.venue__details-courts__carousel__images img').length;

let currentIndex = 0;

const updateCarousel = () => {
    const width = document.querySelector('.venue__details-courts__carousel').clientWidth; // Correct width of the container
    carouselImages.style.transform = `translateX(-${currentIndex * width}px)`; // Adjust position based on the current index
};

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages; // Wrap around to the first image
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Wrap around to the last image
    updateCarousel();
});


// Select the mobile menu button and the menu
const menuToggle = document.getElementById('menuToggle');
const headerMenu = document.getElementById('headerMenu');
const body = document.body;

// Add click event listener to the mobile menu button
menuToggle.addEventListener('click', () => {
    // Toggle the 'active' class on the menu
    headerMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Close menu when clicking a link
const menuLinks = headerMenu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        headerMenu.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!headerMenu.contains(event.target) && 
        !menuToggle.contains(event.target) && 
        headerMenu.classList.contains('active')) {
        headerMenu.classList.remove('active');
        body.classList.remove('menu-open');
    }
});