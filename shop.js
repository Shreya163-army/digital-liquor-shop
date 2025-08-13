const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const pagination = document.querySelector('.pagination');
const loopToggle = document.getElementById('loop-toggle'); // New button for loop toggle
const speedInput = document.getElementById('speed-input'); // Input for custom speed

let index = 0;
let autoSlideInterval;
let isLooping = true; // Default looping
let transitionSpeed = 3000; // Default transition speed

function showSlide() {
    const width = images[0].clientWidth;
    slides.style.transform = `translateX(${-index * width}px)`;
    updatePagination();
}

// Next button functionality
nextButton.addEventListener('click', () => {
    index = (index + 1) % images.length;
    showSlide();
});

// Previous button functionality
prevButton.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showSlide();
});

// Automatic slider functionality
function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        if (isLooping || index < images.length - 1) {
            index = (index + 1) % images.length;
            showSlide();
        }
    }, transitionSpeed);
}