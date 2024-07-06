// Hamburger Menu Toggle
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Projects Carousel
document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelector('.projects-about-containers');
    const items = document.querySelectorAll('.project-details');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;
    let totalItems = items.length;
    if (window.innerWidth <= 1200) {
        totalItems += 1; // Adjust Carousel Nav for screen difference
    }

    function updateCarousel() {
        if (window.innerWidth <= 600) {
            offset = currentIndex * -87; // Adjust this value as needed for smaller screens
        } else if (window.innerWidth <= 1200) {
            offset = currentIndex * -68.5
        } else {
            offset = currentIndex * -47; // Default value for larger screens
        }
        containers.style.transform = `translateX(${offset}%)`;
    }

    nextBtn.addEventListener('click', function() {
        if (currentIndex < totalItems - 2) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    updateCarousel(); // Initialize carousel position
});