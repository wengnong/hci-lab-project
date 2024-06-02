const slides = document.querySelectorAll(".home-slider img");
const slides2 = document.querySelectorAll(".home-slider p");
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", initializeCarousel);
document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

function initializeCarousel(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("display-image");
    }
    if(slides2.length > 0){
        slides2[slideIndex].classList.add("display-p");
    }
}

function showSlide(index){
    if(index < 0){
        slideIndex = slides.length - 1;
        slideIndex = slides2.length - 1;
    }
    else if(index >= slides.length){
        slideIndex = 0;
    }
    slides.forEach(slide => {
        slide.classList.remove("display-image");
    });
    slides2.forEach(parag => {
        parag.classList.remove("display-p");
    });
    slides[slideIndex].classList.add("display-image");
    slides2[slideIndex].classList.add("display-p");
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}