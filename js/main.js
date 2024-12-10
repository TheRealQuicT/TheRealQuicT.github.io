let currentIndex = 0;
let autoSlideInterval = null; // Variable to store the interval ID

// Function to update the carousel's position
function updateCarousel() {
  const images = document.querySelector('.carousel-images');
  const imageWidth = images.querySelector('.carousel-item').clientWidth;
  images.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Function to move to the next slide
function nextSlide() {
  const items = document.querySelectorAll('.carousel-item');
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
  startAutoSlide(); // Restart the interval to reset the timer
}

// Function to move to the previous slide
function prevSlide() {
  const items = document.querySelectorAll('.carousel-item');
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
  startAutoSlide(); // Restart the interval to reset the timer
}

// Function to start the automatic slideshow
function startAutoSlide() {
  stopAutoSlide(); // Ensure no multiple intervals
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 20000); // Change every 20 seconds
}

// Function to stop the automatic slideshow
function stopAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
}

// Event listener to adjust slides on window resize
window.addEventListener('resize', updateCarousel);

// Start the slideshow on page load
startAutoSlide();
