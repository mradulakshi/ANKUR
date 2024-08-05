// Get the slideshow container and slides
const slideshowContainer = document.querySelector('.products-slideshow-container');
const slides = document.querySelectorAll('.mySlides');

// Set the current slide index
let currentSlideIndex = 0;

// Function to show the next slide
function showNextSlide() {
  // Hide the current slide
slides[currentSlideIndex].classList.remove('fade');

  // Increment the slide index
currentSlideIndex = (currentSlideIndex + 1) % slides.length;

  // Show the next slide
slides[currentSlideIndex].classList.add('fade');
}

// Set the slideshow interval
setInterval(showNextSlide, 3000); // change the interval time to your liking

/******************************************************************** */

