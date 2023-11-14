let searchBtn = document.querySelector("#search-btn");
let searchbar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");
let btnSearch = document.querySelector("#btn-search");
let menu =document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");



window.onscroll = () => {
    searchBtn.classList.remove('fa-times')
    searchbar.classList.remove('active')
}
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})


formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active')
})


// ici notre slider



//...............................................//
//...............................................//



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides,2000);
}



 
