document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.venue__details-courts__carousel__images');
    const prevButton = document.querySelector('.carousel__button--prev');
    const nextButton = document.querySelector('.carousel__button--next');
    
    if (carouselImages && prevButton && nextButton) {
        const totalImages = document.querySelectorAll('.venue__details-courts__carousel__images img').length;
        let currentIndex = 0;

        const updateCarousel = () => {
            const width = document.querySelector('.venue__details-courts__carousel').clientWidth;
            carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
        };

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateCarousel();
        });

        // Initial update
        updateCarousel();

        // Update on window resize
        window.addEventListener('resize', updateCarousel);
    }
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