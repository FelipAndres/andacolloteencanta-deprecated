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
/* harmony import */ var _toggle_nav_mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle-nav--mobile */ "./src/js/toggle-nav--mobile.js");
/* harmony import */ var _toggle_nav_mobile__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_toggle_nav_mobile__WEBPACK_IMPORTED_MODULE_3__);





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

/***/ "./src/js/toggle-nav--mobile.js":
/*!**************************************!*\
  !*** ./src/js/toggle-nav--mobile.js ***!
  \**************************************/
/***/ (() => {

const primaryNav = document.querySelector('.menu');
const navToggle = document.querySelector('.mobile-nav-toggle');
navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute('data-visible');
  console.log(visibility);

  if (visibility === "false") {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === "true") {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsQ0FBQ0csWUFBWCxDQUF3QixjQUF4QixDQUFuQjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsVUFBWjs7QUFDRSxNQUFHQSxVQUFVLEtBQUssT0FBbEIsRUFBMEI7QUFDeEJGLElBQUFBLFVBQVUsQ0FBQ00sWUFBWCxDQUF3QixjQUF4QixFQUF3QyxJQUF4QztBQUNBTCxJQUFBQSxTQUFTLENBQUNLLFlBQVYsQ0FBdUIsZUFBdkIsRUFBd0MsSUFBeEM7QUFDRCxHQUhELE1BR08sSUFBR0osVUFBVSxLQUFLLE1BQWxCLEVBQXlCO0FBQzlCRixJQUFBQSxVQUFVLENBQUNNLFlBQVgsQ0FBd0IsY0FBeEIsRUFBd0MsS0FBeEM7QUFDQUwsSUFBQUEsU0FBUyxDQUFDSyxZQUFWLENBQXVCLGVBQXZCLEVBQXdDLEtBQXhDO0FBQ0Q7QUFFRixDQVhEOzs7Ozs7Ozs7Ozs7QUNIQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9qcy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9qcy9zY3JvbGwtbmF2LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvanMvc2xpZGVzaG93LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvanMvdG9nZ2xlLW5hdi0tbW9iaWxlLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2Fzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gIC8vIExvb3Agb3ZlciB0aGUgZW50cmllc1xyXG4gIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAvLyBJZiB0aGUgZWxlbWVudCBpcyB2aXNpYmxlXHJcbiAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgLy8gQWRkIHRoZSBhbmltYXRpb24gY2xhc3NcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ21vdmVJblJpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxub2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydGFzX19jb250YWluZXInKSk7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcclxuICBvYnNlcnZlci5vYnNlcnZlKHN0aWNreUVsbSlcclxufVxyXG5cclxuY29uc3Qgb2JzZXJ2ZXIxID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gIC8vIExvb3Agb3ZlciB0aGUgZW50cmllc1xyXG4gIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAvLyBJZiB0aGUgZWxlbWVudCBpcyB2aXNpYmxlXHJcbiAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgLy8gQWRkIHRoZSBhbmltYXRpb24gY2xhc3NcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ21vdmVJbkxlZnQnKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG5vYnNlcnZlcjEub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydGFzX19jb250YWluZXItLXByb2R1Y3RvcycpKTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gIG9ic2VydmVyMS5vYnNlcnZlKHN0aWNreUVsbSlcclxufVxyXG5cclxuXHJcbmNvbnN0IG9ic2VydmVyMiA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAvLyBMb29wIG92ZXIgdGhlIGVudHJpZXNcclxuICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgLy8gSWYgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZVxyXG4gICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgIC8vIEFkZCB0aGUgYW5pbWF0aW9uIGNsYXNzXHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCd0b3B0b2JvdHRvbScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbm9ic2VydmVyMi5vYnNlcnZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS0tcycpKTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gIG9ic2VydmVyMi5vYnNlcnZlKHN0aWNreUVsbSlcclxufVxyXG5cclxuY29uc3Qgb2JzZXJ2ZXIzID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gIC8vIExvb3Agb3ZlciB0aGUgZW50cmllc1xyXG4gIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAvLyBJZiB0aGUgZWxlbWVudCBpcyB2aXNpYmxlXHJcbiAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgLy8gQWRkIHRoZSBhbmltYXRpb24gY2xhc3NcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3RvcHRvYm90dG9tJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxub2JzZXJ2ZXIzLm9ic2VydmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLS1wJykpO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgb2JzZXJ2ZXIzLm9ic2VydmUoc3RpY2t5RWxtKVxyXG59IiwiaW1wb3J0IFwiLi9zY3JvbGwtbmF2LmpzXCI7XHJcbmltcG9ydCBcIi4vYW5pbWF0aW9uLmpzXCI7XHJcbmltcG9ydCBcIi4vc2xpZGVzaG93LmpzXCI7XHJcbmltcG9ydCBcIi4vdG9nZ2xlLW5hdi0tbW9iaWxlXCI7IiwiLypDYW1iaWFyIHkgQW5pbWFyIGxhIE5BVkJBUiAqL1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixmdW5jdGlvbigpIHtcclxuICBsZXQgbG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb1wiKTtcclxuICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtLW9uc2Nyb2xsXCIpO1xyXG4gIGxldCB3aW5kb3dQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuXHJcbiAgaWYgKHdpbmRvd1Bvc2l0aW9uID4gMjQwKSB7XHJcbiAgICAgIFxyXG4gICAgICBuYXYuY2xhc3NMaXN0LnJlcGxhY2UoXCJuYXYtLW9uc2Nyb2xsXCIsXCJvbnNjcm9sbFwiLCB3aW5kb3dQb3NpdGlvbik7XHJcbiAgfSBlbHNlIGlmICh3aW5kb3dQb3NpdGlvbiA8IDE4MCl7XHJcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVwbGFjZShcIm9uc2Nyb2xsXCIsXCJuYXYtLW9uc2Nyb2xsXCIsIHdpbmRvd1Bvc2l0aW9uKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gbXlGdW5jdGlvbigpe1xyXG4gIGNvbnN0IG5hdl90ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZfX21vYmlsZVwiKTtcclxuICBjb25zdCBuYXZfdGV4dF9vbnNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2X19tb2JpbGUtb25zY3JvbGxcIik7XHJcbiAgY29uc3QgZG93bl9hcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG93bi1hcnJvd1wiKTtcclxuICBjb25zdCB1cF9hcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXAtYXJyb3dcIik7XHJcbiAgXHJcbiAgaWYgKG5hdl90ZXh0LnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xyXG4gICAgbmF2X3RleHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgdXBfYXJyb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG93bl9hcnJvdy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuYXZfdGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgdXBfYXJyb3cuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGRvd25fYXJyb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxuXHJcbn1cclxuICAgIFxyXG5cclxuLy9NZW51XHJcbi8vIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYtbW9iaWxlXCIpO1xyXG5cclxuLy8gcGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbi8vICAgY29uc3QgY2hpbGQgPSBlLnRhcmdldC5tYXRjaGVzKFwiLnVpbC1hbmdsZS1kb3VibGUtZG93biwgLnVpbCB1aWwtYW5nbGUtZG91YmxlLXVwICpcIik7XHJcblxyXG4vLyAgIGlmIChjaGlsZCkgeyBcclxuXHJcbi8vICAgICBjb25zdCBuYXZfdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2X19tb2JpbGVcIik7XHJcbi8vICAgICBjb25zdCBkb3duX2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3duLWFycm93XCIpO1xyXG4vLyAgICAgY29uc3QgdXBfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwLWFycm93XCIpO1xyXG4gICAgXHJcbi8vICAgICBpZiAobmF2X3RleHQuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XHJcbi8vICAgICAgIG5hdl90ZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuLy8gICAgICAgdXBfYXJyb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4vLyAgICAgICBkb3duX2Fycm93LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBuYXZfdGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4vLyAgICAgICB1cF9hcnJvdy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4vLyAgICAgICBkb3duX2Fycm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuLy8gICAgIH1cclxuLy8gICB9fSk7Ly8gSWYgY2hpbGQgaXMgY2xpY2tcclxuICAgIFxyXG5cclxuIiwidmFyIHNsaWRlSW5kZXggPSAwO1xyXG5zaG93U2xpZGVzKCk7XHJcblxyXG5mdW5jdGlvbiBzaG93U2xpZGVzKCkge1xyXG4gIHZhciBpO1xyXG4gIHZhciBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXlTbGlkZXNcIik7XHJcbiAgZm9yIChpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbiAgc2xpZGVJbmRleCsrO1xyXG4gIGlmIChzbGlkZUluZGV4ID4gc2xpZGVzLmxlbmd0aCkge3NsaWRlSW5kZXggPSAxfVxyXG4gIHNsaWRlc1tzbGlkZUluZGV4LTFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgc2V0VGltZW91dChzaG93U2xpZGVzLCA1MDAwKTsgLy8gQ2hhbmdlIGltYWdlIGV2ZXJ5IDIgc2Vjb25kc1xyXG59ICIsImNvbnN0IHByaW1hcnlOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xyXG5jb25zdCBuYXZUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW5hdi10b2dnbGUnKTtcclxuXHJcbm5hdlRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5jb25zdCB2aXNpYmlsaXR5ID0gcHJpbWFyeU5hdi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJsZScpO1xyXG5jb25zb2xlLmxvZyh2aXNpYmlsaXR5KTtcclxuICBpZih2aXNpYmlsaXR5ID09PSBcImZhbHNlXCIpe1xyXG4gICAgcHJpbWFyeU5hdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJsZScsIHRydWUpO1xyXG4gICAgbmF2VG9nZ2xlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUgKTtcclxuICB9IGVsc2UgaWYodmlzaWJpbGl0eSA9PT0gXCJ0cnVlXCIpe1xyXG4gICAgcHJpbWFyeU5hdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJsZScsIGZhbHNlKTtcclxuICAgIG5hdlRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApO1xyXG4gIH1cclxuXHJcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2pzL2FwcFwiO1xyXG5pbXBvcnQgXCIuL3Nhc3MvYXBwLnNjc3NcIjtcclxuIl0sIm5hbWVzIjpbIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJvYnNlcnZlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93Iiwib25sb2FkIiwic3RpY2t5RWxtIiwib2JzZXJ2ZXIxIiwib2JzZXJ2ZXIyIiwib2JzZXJ2ZXIzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvZ28iLCJnZXRFbGVtZW50QnlJZCIsIm5hdiIsIndpbmRvd1Bvc2l0aW9uIiwic2Nyb2xsWSIsInJlcGxhY2UiLCJteUZ1bmN0aW9uIiwibmF2X3RleHQiLCJuYXZfdGV4dF9vbnNjcm9sbCIsImRvd25fYXJyb3ciLCJ1cF9hcnJvdyIsInN0eWxlIiwiZGlzcGxheSIsInNsaWRlSW5kZXgiLCJzaG93U2xpZGVzIiwiaSIsInNsaWRlcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwicHJpbWFyeU5hdiIsIm5hdlRvZ2dsZSIsInZpc2liaWxpdHkiLCJnZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwic2V0QXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIifQ==