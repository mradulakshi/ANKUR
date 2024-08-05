const slideshowContainer = document.querySelector('.products-slideshow-container');
const slides = document.querySelectorAll('.mySlides');

let currentSlideIndex = 0;
function showNextSlide() {
slides[currentSlideIndex].classList.remove('fade');
  
currentSlideIndex = (currentSlideIndex + 1) % slides.length;
slides[currentSlideIndex].classList.add('fade');
}

setInterval(showNextSlide, 3000); 



