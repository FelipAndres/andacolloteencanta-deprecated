/*Cambiar y Animar la NAVBAR */

window.addEventListener("scroll",function() {
  let logo = document.getElementById("logo");
  let nav = document.getElementById("nav--onscroll");
  let windowPosition = window.scrollY;


  if (windowPosition > 240) {
      
      nav.classList.replace("nav--onscroll","onscroll", windowPosition);
  } else if (windowPosition < 180){
      nav.classList.replace("onscroll","nav--onscroll", windowPosition);
  }
});


