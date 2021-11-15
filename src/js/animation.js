const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('moveInRight');
    }
  });
});

observer.observe(document.querySelector('.cartas__container'));

window.onload = function(){
  observer.observe(stickyElm)
}

const observer1 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('moveInLeft');
    }
  });
});

observer1.observe(document.querySelector('.cartas__container--productos'));

window.onload = function(){
  observer1.observe(stickyElm)
}


const observer2 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('toptobottom');
    }
  });
});

observer2.observe(document.querySelector('.aside--s'));

window.onload = function(){
  observer2.observe(stickyElm)
}

const observer3 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('toptobottom');
    }
  });
});

observer3.observe(document.querySelector('.aside--p'));

window.onload = function(){
  observer3.observe(stickyElm)
}