const slides = document.querySelectorAll('.slides img')
let slideIndex = 0; //index of a current slide
let intervalId = null;//set interval function will return an ID so we can work with it
//null means no value

document.addEventListener("DOMContentLoaded", initializeSlider)//we call for slider when whole site has loaded

function initializeSlider() { //this will popup first image when we display site
    if(slides.length > 0) { //if there are slides
        slides[slideIndex].classList.add("displaySlide")
        intervalId = setInterval(nextSlide, 5000)//after 5 sec display next img
    }//if there are no slides dont do anythign xd
    
    
}

function showSlide(index) { //index of a next slide we would want to go to
    if(index >= slides.length) {
        slideIndex = 0;
    }else if (index < 0){
        slideIndex = slides.length - 1;
    }
    
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");//for each to iterate through all of then
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);
}