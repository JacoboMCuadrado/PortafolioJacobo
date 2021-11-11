var slideIndex = 0;
var isMouseIn = false;
showSlides();

let images = document.getElementsByClassName("unit");

function halt(){
    isMouseIn = true;
}

function resume(){
    isMouseIn = false;
}

function showSlides() { 
  if(isMouseIn == false){      
    var i;
    var slides = document.getElementsByClassName("unit");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
  }else{

    }
    setTimeout(showSlides, 3000); //Cambio cada 3 segundos
}

function plusSlides(n) {
    moveSlides(slideIndex += n);
}
  
function currentSlide(n) {
    moveSlides(slideIndex = n);
}

function moveSlides(n) {
    var i;
    var slides = document.getElementsByClassName("unit");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
}
