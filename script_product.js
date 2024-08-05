const slideshowContainer = document.querySelector('.products-slideshow-container');
const slides = document.querySelectorAll('.mySlides');

let currentSlideIndex = 0;
function showNextSlide() {
slides[currentSlideIndex].classList.remove('fade');

currentSlideIndex = (currentSlideIndex + 1) % slides.length;
slides[currentSlideIndex].classList.add('fade');
}

setInterval(showNextSlide, 3000); 

// Get all wishlist buttons
const wishlistBtns = document.querySelectorAll('.wishlist-btn');

// Add event listener to each wishlist button
wishlistBtns.forEach((btn) => {
btn.addEventListener('click', () => {
    // Toggle the 'active' class on the button
    btn.classList.toggle('active');
});
});
