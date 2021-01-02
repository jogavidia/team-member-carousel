const slideContent = document.querySelectorAll(".slide-content");
const slideContainer = document.querySelector(".slides-container");

const nextBtn = document.querySelector(".next-btn");
const prevtBtn = document.querySelector(".prev-btn");

let numberOfSlides = slideContent.length;
let slideWidth = slideContent[0].clientWidth;
let currentSlide = 0;

// set up the slider
function init(){
    /*
    slideContent[0] = 0
    slideContent[1] = 100%
    slideContent[0] = 200%
    */
   slideContent.forEach((div, i) => {
        div.style.left = i * 100 + "%"
   });

   slideContent[0].classList.add("active");

}
init();

// next button
nextBtn.addEventListener("click", () => {
    if(currentSlide >= numberOfSlides - 1){
        goToSlide(0);
        currentSlide = 0;
        return;
    }
    currentSlide++;
    goToSlide(currentSlide);
});

// prev button
prevtBtn.addEventListener("click", () => {
    if(currentSlide <= 0){
        goToSlide(numberOfSlides -1);
        currentSlide = numberOfSlides -1;
        return;
    }
    currentSlide--;
    goToSlide(currentSlide);
});

// go to slide
function goToSlide(slideNumber){
    slideContainer.style.transform = "translateX(-" +
    slideWidth * slideNumber + "px)";
}

window.onresize = function(){
    slideWidth = slideContent[0].clientWidth;
    slideContainer.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
    //console.log(slideWidth);
}







