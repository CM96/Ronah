// DOM VARIABLES
const bar=document.querySelector('.hamburger-button'),
      menuOverlay=document.querySelector('.navigation'),
      box=document.querySelectorAll('.box'),
      mySlide=document.getElementsByClassName('slider'),
      arrowLeft=document.querySelector('#arrowLeft'),
      arrowRight=document.querySelector('#arrowRight'),
      slideNumber=document.querySelector('#slide-number');


// HAMBURGER MENU TOGGLE
bar.addEventListener('click',(e)=>{
    bar.classList.toggle('change');
    menuOverlay.classList.toggle('out');
});

// PRODUCT CAROUSEL 

var slideIndex=0;

//hide everything
function resetShow(){
    for(let i=0;i<mySlide.length;i++){
        mySlide[i].style.display="none";
    }
}
function startShow(){
    resetShow();
    mySlide[0].style.display = "block";
    currentSlide();
}
const currentSlide= ()=>{
let currentSlideNum=slideIndex;
slideNumber.innerHTML=`${currentSlideNum+1}/10`;

}
// Show previous
function slideLeft() {
    resetShow();
    mySlide[slideIndex - 1].style.display = "block";
    slideIndex--;
  }
  
  // Show next
  function slideRight() {
    resetShow();
    mySlide[slideIndex + 1].style.display = "block";
    slideIndex++;
  }
  
  // Left arrow click
  arrowLeft.addEventListener("click", function() {
    if (slideIndex === 0) {
      slideIndex = mySlide.length;
    }
    slideLeft();
    currentSlide();
  });
  
  // Right arrow click
  arrowRight.addEventListener("click", function() {
    if (slideIndex === mySlide.length - 1) {
      slideIndex = -1;
    }
    slideRight();
    currentSlide();
  });
  startShow();
// SMOOTH SCROLL TO SECTIONS
  var scroll = new SmoothScroll('.nav-list a[href*="#"]', {
	speed: 600
});