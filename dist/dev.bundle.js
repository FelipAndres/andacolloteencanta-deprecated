/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/animation.js":
/*!*****************************!*\
  !*** ./src/js/animation.js ***!
  \*****************************/
/***/ (() => {

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

window.onload = function () {
  observer.observe(stickyElm);
};

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

window.onload = function () {
  observer1.observe(stickyElm);
};

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

window.onload = function () {
  observer2.observe(stickyElm);
};

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

window.onload = function () {
  observer3.observe(stickyElm);
};

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scroll_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-nav.js */ "./src/js/scroll-nav.js");
/* harmony import */ var _scroll_nav_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scroll_nav_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation.js */ "./src/js/animation.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_animation_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slideshow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideshow.js */ "./src/js/slideshow.js");
/* harmony import */ var _slideshow_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slideshow_js__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/scroll-nav.js":
/*!******************************!*\
  !*** ./src/js/scroll-nav.js ***!
  \******************************/
/***/ (() => {

/*Cambiar y Animar la NAVBAR */
window.addEventListener("scroll", function () {
  let logo = document.getElementById("logo");
  let nav = document.getElementById("nav--onscroll");
  let windowPosition = window.scrollY;

  if (windowPosition > 240) {
    nav.classList.replace("nav--onscroll", "onscroll", windowPosition);
  } else if (windowPosition < 180) {
    nav.classList.replace("onscroll", "nav--onscroll", windowPosition);
  }
});

function myFunction() {
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
} //Menu
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

/***/ }),

/***/ "./src/js/slideshow.js":
/*!*****************************!*\
  !*** ./src/js/slideshow.js ***!
  \*****************************/
/***/ (() => {

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/app.scss */ "./src/sass/app.scss");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9qcy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9qcy9zY3JvbGwtbmF2LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvanMvc2xpZGVzaG93LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2Fzcy9hcHAuc2Nzcz81N2IwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgLy8gTG9vcCBvdmVyIHRoZSBlbnRyaWVzXHJcbiAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgIC8vIElmIHRoZSBlbGVtZW50IGlzIHZpc2libGVcclxuICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAvLyBBZGQgdGhlIGFuaW1hdGlvbiBjbGFzc1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnbW92ZUluUmlnaHQnKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0YXNfX2NvbnRhaW5lcicpKTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gIG9ic2VydmVyLm9ic2VydmUoc3RpY2t5RWxtKVxyXG59XHJcblxyXG5jb25zdCBvYnNlcnZlcjEgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgLy8gTG9vcCBvdmVyIHRoZSBlbnRyaWVzXHJcbiAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgIC8vIElmIHRoZSBlbGVtZW50IGlzIHZpc2libGVcclxuICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAvLyBBZGQgdGhlIGFuaW1hdGlvbiBjbGFzc1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnbW92ZUluTGVmdCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbm9ic2VydmVyMS5vYnNlcnZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0YXNfX2NvbnRhaW5lci0tcHJvZHVjdG9zJykpO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgb2JzZXJ2ZXIxLm9ic2VydmUoc3RpY2t5RWxtKVxyXG59XHJcblxyXG5cclxuY29uc3Qgb2JzZXJ2ZXIyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gIC8vIExvb3Agb3ZlciB0aGUgZW50cmllc1xyXG4gIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAvLyBJZiB0aGUgZWxlbWVudCBpcyB2aXNpYmxlXHJcbiAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgLy8gQWRkIHRoZSBhbmltYXRpb24gY2xhc3NcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3RvcHRvYm90dG9tJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxub2JzZXJ2ZXIyLm9ic2VydmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLS1zJykpO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgb2JzZXJ2ZXIyLm9ic2VydmUoc3RpY2t5RWxtKVxyXG59XHJcblxyXG5jb25zdCBvYnNlcnZlcjMgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgLy8gTG9vcCBvdmVyIHRoZSBlbnRyaWVzXHJcbiAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgIC8vIElmIHRoZSBlbGVtZW50IGlzIHZpc2libGVcclxuICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAvLyBBZGQgdGhlIGFuaW1hdGlvbiBjbGFzc1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgndG9wdG9ib3R0b20nKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG5vYnNlcnZlcjMub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtLXAnKSk7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcclxuICBvYnNlcnZlcjMub2JzZXJ2ZShzdGlja3lFbG0pXHJcbn0iLCJpbXBvcnQgXCIuL3Njcm9sbC1uYXYuanNcIjtcclxuaW1wb3J0IFwiLi9hbmltYXRpb24uanNcIjtcclxuaW1wb3J0IFwiLi9zbGlkZXNob3cuanNcIjsiLCIvKkNhbWJpYXIgeSBBbmltYXIgbGEgTkFWQkFSICovXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGZ1bmN0aW9uKCkge1xyXG4gIGxldCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvXCIpO1xyXG4gIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi0tb25zY3JvbGxcIik7XHJcbiAgbGV0IHdpbmRvd1Bvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG5cclxuICBpZiAod2luZG93UG9zaXRpb24gPiAyNDApIHtcclxuICAgICAgXHJcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVwbGFjZShcIm5hdi0tb25zY3JvbGxcIixcIm9uc2Nyb2xsXCIsIHdpbmRvd1Bvc2l0aW9uKTtcclxuICB9IGVsc2UgaWYgKHdpbmRvd1Bvc2l0aW9uIDwgMTgwKXtcclxuICAgICAgbmF2LmNsYXNzTGlzdC5yZXBsYWNlKFwib25zY3JvbGxcIixcIm5hdi0tb25zY3JvbGxcIiwgd2luZG93UG9zaXRpb24pO1xyXG4gIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBteUZ1bmN0aW9uKCl7XHJcbiAgY29uc3QgbmF2X3RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdl9fbW9iaWxlXCIpO1xyXG4gIGNvbnN0IG5hdl90ZXh0X29uc2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZfX21vYmlsZS1vbnNjcm9sbFwiKTtcclxuICBjb25zdCBkb3duX2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3duLWFycm93XCIpO1xyXG4gIGNvbnN0IHVwX2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cC1hcnJvd1wiKTtcclxuICBcclxuICBpZiAobmF2X3RleHQuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICBuYXZfdGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB1cF9hcnJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBkb3duX2Fycm93LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdl90ZXh0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB1cF9hcnJvdy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG93bl9hcnJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG5cclxufVxyXG4gICAgXHJcblxyXG4vL01lbnVcclxuLy8gY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdi1tb2JpbGVcIik7XHJcblxyXG4vLyBwYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuLy8gICBjb25zdCBjaGlsZCA9IGUudGFyZ2V0Lm1hdGNoZXMoXCIudWlsLWFuZ2xlLWRvdWJsZS1kb3duLCAudWlsIHVpbC1hbmdsZS1kb3VibGUtdXAgKlwiKTtcclxuXHJcbi8vICAgaWYgKGNoaWxkKSB7IFxyXG5cclxuLy8gICAgIGNvbnN0IG5hdl90ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZfX21vYmlsZVwiKTtcclxuLy8gICAgIGNvbnN0IGRvd25fYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvd24tYXJyb3dcIik7XHJcbi8vICAgICBjb25zdCB1cF9hcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXAtYXJyb3dcIik7XHJcbiAgICBcclxuLy8gICAgIGlmIChuYXZfdGV4dC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcclxuLy8gICAgICAgbmF2X3RleHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4vLyAgICAgICB1cF9hcnJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbi8vICAgICAgIGRvd25fYXJyb3cuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIG5hdl90ZXh0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbi8vICAgICAgIHVwX2Fycm93LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbi8vICAgICAgIGRvd25fYXJyb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4vLyAgICAgfVxyXG4vLyAgIH19KTsvLyBJZiBjaGlsZCBpcyBjbGlja1xyXG4gICAgXHJcblxyXG4iLCJ2YXIgc2xpZGVJbmRleCA9IDA7XHJcbnNob3dTbGlkZXMoKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dTbGlkZXMoKSB7XHJcbiAgdmFyIGk7XHJcbiAgdmFyIHNsaWRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJteVNsaWRlc1wiKTtcclxuICBmb3IgKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxuICBzbGlkZUluZGV4Kys7XHJcbiAgaWYgKHNsaWRlSW5kZXggPiBzbGlkZXMubGVuZ3RoKSB7c2xpZGVJbmRleCA9IDF9XHJcbiAgc2xpZGVzW3NsaWRlSW5kZXgtMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICBzZXRUaW1lb3V0KHNob3dTbGlkZXMsIDUwMDApOyAvLyBDaGFuZ2UgaW1hZ2UgZXZlcnkgMiBzZWNvbmRzXHJcbn0gIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vanMvYXBwXCI7XHJcbmltcG9ydCBcIi4vc2Fzcy9hcHAuc2Nzc1wiO1xyXG4iXSwibmFtZXMiOlsib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInRhcmdldCIsImNsYXNzTGlzdCIsImFkZCIsIm9ic2VydmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJvbmxvYWQiLCJzdGlja3lFbG0iLCJvYnNlcnZlcjEiLCJvYnNlcnZlcjIiLCJvYnNlcnZlcjMiLCJhZGRFdmVudExpc3RlbmVyIiwibG9nbyIsImdldEVsZW1lbnRCeUlkIiwibmF2Iiwid2luZG93UG9zaXRpb24iLCJzY3JvbGxZIiwicmVwbGFjZSIsIm15RnVuY3Rpb24iLCJuYXZfdGV4dCIsIm5hdl90ZXh0X29uc2Nyb2xsIiwiZG93bl9hcnJvdyIsInVwX2Fycm93Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2xpZGVJbmRleCIsInNob3dTbGlkZXMiLCJpIiwic2xpZGVzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9