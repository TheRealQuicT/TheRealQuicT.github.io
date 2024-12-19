// Toggle the navigation menu when hamburger is clicked
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Close mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll('.nav-links a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.nav-links');
    mobileMenu.classList.remove('active'); // Remove the 'active' class to hide the menu
  });
});

// Auto slide functions as before (no changes needed for this part)
let currentIndex = 0;
let autoSlideInterval = null; // Variable to store the interval ID

function updateCarousel() {
  const images = document.querySelector('.carousel-images');
  const imageWidth = images.querySelector('.carousel-item').clientWidth;
  images.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

function nextSlide() {
  const items = document.querySelectorAll('.carousel-item');
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
  startAutoSlide(); // Restart the interval to reset the timer
}

function prevSlide() {
  const items = document.querySelectorAll('.carousel-item');
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
  startAutoSlide(); // Restart the interval to reset the timer
}

function startAutoSlide() {
  stopAutoSlide(); // Stop any existing auto slide
  autoSlideInterval = setInterval(nextSlide, 5000); // Start new auto slide
}

function stopAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
}

startAutoSlide(); // Start the auto-slide when the page loads
