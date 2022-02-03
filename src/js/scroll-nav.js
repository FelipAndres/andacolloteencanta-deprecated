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

function myFunction(){
  const nav_text = document.getElementById("nav__mobile");
  const nav_text_onscroll = document.getElementById("nav__mobile-onscroll");
  const down_arrow = document.getElementById("down-arrow");
  const up_arrow = document.getElementById("up-arrow");
  
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
    

//Menu
// const parent = document.querySelector("nav-mobile");

// parent.addEventListener('click', function(e){
//   const child = e.target.matches(".uil-angle-double-down, .uil uil-angle-double-up *");

//   if (child) { 

//     const nav_text = document.getElementById("nav__mobile");
//     const down_arrow = document.getElementById("down-arrow");
//     const up_arrow = document.getElementById("up-arrow");
    
//     if (nav_text.style.display === "block") {
//       nav_text.style.display = "none";
//       up_arrow.style.display = "none";
//       down_arrow.style.display = "block";
//     } else {
//       nav_text.style.display = "block";
//       up_arrow.style.display = "block";
//       down_arrow.style.display = "none";
//     }
//   }});// If child is click
    

