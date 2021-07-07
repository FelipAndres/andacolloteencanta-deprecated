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

//Menu

  var nav_text = document.getElementById("nav__mobile");
  var down_arrow = document.getElementById("down-arrow");
  var up_arrow = document.getElementById("up-arrow");
  
  function menumobile(){
  
    if (nav_text.style.display === "block") {
      nav_text.style.display = "none";
      up_arrow.style.display = "none";
      down_arrow.style.display = "block";
    } else {
      nav_text.style.display = "block";
      up_arrow.style.display = "block";
      down_arrow.style.display = "none";
    }
  }
  // nav_text.addEventListener('click', menumobile());
  down_arrow.addEventListener.addEventListener('click', menumobile());
  up_arrow.addEventListener.addEventListener('click', menumobile());
  

