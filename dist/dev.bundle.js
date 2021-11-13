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

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation.js */ "./src/js/animation.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_animation_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scroll_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll-nav.js */ "./src/js/scroll-nav.js");
/* harmony import */ var _scroll_nav_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scroll_nav_js__WEBPACK_IMPORTED_MODULE_1__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQXZCLEVBQStCSCxDQUFDLEVBQWhDLEVBQW9DO0FBQ2xDQyxJQUFBQSxNQUFNLENBQUNELENBQUQsQ0FBTixDQUFVSixLQUFWLENBQWdCQyxPQUFoQixHQUEwQixNQUExQjtBQUNEOztBQUNEQyxFQUFBQSxVQUFVOztBQUNWLE1BQUlBLFVBQVUsR0FBR0csTUFBTSxDQUFDRSxNQUF4QixFQUFnQztBQUFDTCxJQUFBQSxVQUFVLEdBQUcsQ0FBYjtBQUFlOztBQUNoREcsRUFBQUEsTUFBTSxDQUFDSCxVQUFVLEdBQUMsQ0FBWixDQUFOLENBQXFCRixLQUFyQixDQUEyQkMsT0FBM0IsR0FBcUMsT0FBckM7QUFDQU8sRUFBQUEsVUFBVSxDQUFDTCxVQUFELEVBQWEsSUFBYixDQUFWLENBVG9CLENBU1U7QUFDL0I7Ozs7Ozs7Ozs7OztBQ2JEOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2pzL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2pzL3Njcm9sbC1uYXYuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9qcy9zbGlkZXNob3cuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zYXNzL2FwcC5zY3NzPzU3YjAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAvLyBMb29wIG92ZXIgdGhlIGVudHJpZXNcclxuICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgLy8gSWYgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZVxyXG4gICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgIC8vIEFkZCB0aGUgYW5pbWF0aW9uIGNsYXNzXHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdtb3ZlSW5SaWdodCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRhc19fY29udGFpbmVyJykpO1xyXG5cclxuY29uc3Qgb2JzZXJ2ZXIxID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gIC8vIExvb3Agb3ZlciB0aGUgZW50cmllc1xyXG4gIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAvLyBJZiB0aGUgZWxlbWVudCBpcyB2aXNpYmxlXHJcbiAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgLy8gQWRkIHRoZSBhbmltYXRpb24gY2xhc3NcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ21vdmVJbkxlZnQnKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG5vYnNlcnZlcjEub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydGFzX19jb250YWluZXItLXByb2R1Y3RvcycpKTtcclxuXHJcblxyXG5cclxuY29uc3Qgb2JzZXJ2ZXIyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gIC8vIExvb3Agb3ZlciB0aGUgZW50cmllc1xyXG4gIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAvLyBJZiB0aGUgZWxlbWVudCBpcyB2aXNpYmxlXHJcbiAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgLy8gQWRkIHRoZSBhbmltYXRpb24gY2xhc3NcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3RvcHRvYm90dG9tJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxub2JzZXJ2ZXIyLm9ic2VydmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLS1zJykpO1xyXG5cclxuY29uc3Qgb2JzZXJ2ZXIzID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gIC8vIExvb3Agb3ZlciB0aGUgZW50cmllc1xyXG4gIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAvLyBJZiB0aGUgZWxlbWVudCBpcyB2aXNpYmxlXHJcbiAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgLy8gQWRkIHRoZSBhbmltYXRpb24gY2xhc3NcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3RvcHRvYm90dG9tJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxub2JzZXJ2ZXIzLm9ic2VydmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLS1wJykpOyIsImltcG9ydCBcIi4vYW5pbWF0aW9uLmpzXCI7XHJcbmltcG9ydCBcIi4vc2Nyb2xsLW5hdi5qc1wiO1xyXG5pbXBvcnQgXCIuL3NsaWRlc2hvdy5qc1wiOyIsIi8qQ2FtYmlhciB5IEFuaW1hciBsYSBOQVZCQVIgKi9cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsZnVuY3Rpb24oKSB7XHJcbiAgbGV0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ29cIik7XHJcbiAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LS1vbnNjcm9sbFwiKTtcclxuICBsZXQgd2luZG93UG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcblxyXG4gIGlmICh3aW5kb3dQb3NpdGlvbiA+IDI0MCkge1xyXG4gICAgICBcclxuICAgICAgbmF2LmNsYXNzTGlzdC5yZXBsYWNlKFwibmF2LS1vbnNjcm9sbFwiLFwib25zY3JvbGxcIiwgd2luZG93UG9zaXRpb24pO1xyXG4gIH0gZWxzZSBpZiAod2luZG93UG9zaXRpb24gPCAxODApe1xyXG4gICAgICBuYXYuY2xhc3NMaXN0LnJlcGxhY2UoXCJvbnNjcm9sbFwiLFwibmF2LS1vbnNjcm9sbFwiLCB3aW5kb3dQb3NpdGlvbik7XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG15RnVuY3Rpb24oKXtcclxuICBjb25zdCBuYXZfdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2X19tb2JpbGVcIik7XHJcbiAgY29uc3QgbmF2X3RleHRfb25zY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdl9fbW9iaWxlLW9uc2Nyb2xsXCIpO1xyXG4gIGNvbnN0IGRvd25fYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvd24tYXJyb3dcIik7XHJcbiAgY29uc3QgdXBfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwLWFycm93XCIpO1xyXG4gIFxyXG4gIGlmIChuYXZfdGV4dC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcclxuICAgIG5hdl90ZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHVwX2Fycm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRvd25fYXJyb3cuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgbmF2X3RleHQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIHVwX2Fycm93LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBkb3duX2Fycm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcblxyXG59XHJcbiAgICBcclxuXHJcbi8vTWVudVxyXG4vLyBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2LW1vYmlsZVwiKTtcclxuXHJcbi8vIHBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4vLyAgIGNvbnN0IGNoaWxkID0gZS50YXJnZXQubWF0Y2hlcyhcIi51aWwtYW5nbGUtZG91YmxlLWRvd24sIC51aWwgdWlsLWFuZ2xlLWRvdWJsZS11cCAqXCIpO1xyXG5cclxuLy8gICBpZiAoY2hpbGQpIHsgXHJcblxyXG4vLyAgICAgY29uc3QgbmF2X3RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdl9fbW9iaWxlXCIpO1xyXG4vLyAgICAgY29uc3QgZG93bl9hcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG93bi1hcnJvd1wiKTtcclxuLy8gICAgIGNvbnN0IHVwX2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cC1hcnJvd1wiKTtcclxuICAgIFxyXG4vLyAgICAgaWYgKG5hdl90ZXh0LnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xyXG4vLyAgICAgICBuYXZfdGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbi8vICAgICAgIHVwX2Fycm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuLy8gICAgICAgZG93bl9hcnJvdy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgbmF2X3RleHQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuLy8gICAgICAgdXBfYXJyb3cuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuLy8gICAgICAgZG93bl9hcnJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbi8vICAgICB9XHJcbi8vICAgfX0pOy8vIElmIGNoaWxkIGlzIGNsaWNrXHJcbiAgICBcclxuXHJcbiIsInZhciBzbGlkZUluZGV4ID0gMDtcclxuc2hvd1NsaWRlcygpO1xyXG5cclxuZnVuY3Rpb24gc2hvd1NsaWRlcygpIHtcclxuICB2YXIgaTtcclxuICB2YXIgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm15U2xpZGVzXCIpO1xyXG4gIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG4gIHNsaWRlSW5kZXgrKztcclxuICBpZiAoc2xpZGVJbmRleCA+IHNsaWRlcy5sZW5ndGgpIHtzbGlkZUluZGV4ID0gMX1cclxuICBzbGlkZXNbc2xpZGVJbmRleC0xXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIHNldFRpbWVvdXQoc2hvd1NsaWRlcywgNTAwMCk7IC8vIENoYW5nZSBpbWFnZSBldmVyeSAyIHNlY29uZHNcclxufSAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9qcy9hcHBcIjtcclxuaW1wb3J0IFwiLi9zYXNzL2FwcC5zY3NzXCI7XHJcbiJdLCJuYW1lcyI6WyJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwib2JzZXJ2ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9ic2VydmVyMSIsIm9ic2VydmVyMiIsIm9ic2VydmVyMyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2dvIiwiZ2V0RWxlbWVudEJ5SWQiLCJuYXYiLCJ3aW5kb3dQb3NpdGlvbiIsInNjcm9sbFkiLCJyZXBsYWNlIiwibXlGdW5jdGlvbiIsIm5hdl90ZXh0IiwibmF2X3RleHRfb25zY3JvbGwiLCJkb3duX2Fycm93IiwidXBfYXJyb3ciLCJzdHlsZSIsImRpc3BsYXkiLCJzbGlkZUluZGV4Iiwic2hvd1NsaWRlcyIsImkiLCJzbGlkZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGVuZ3RoIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=