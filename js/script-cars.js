const slides = document.querySelectorAll(".collab-carousel img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeCarousel);
document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

function initializeCarousel(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("display-image");
        intervalId = setInterval(nextSlide, 3000);
    }
}

function showSlide(index){
    if(index < 0){
        slideIndex = slides.length - 1;
    }
    else if(index >= slides.length){
        slideIndex = 0;
    }
    slides.forEach(slide => {
        slide.classList.remove("display-image");
    });
    slides[slideIndex].classList.add("display-image");
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}