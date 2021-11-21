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
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation.js */ "./src/js/animation.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_animation_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slideshow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideshow.js */ "./src/js/slideshow.js");
/* harmony import */ var _slideshow_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slideshow_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toggle_nav_mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle-nav--mobile */ "./src/js/toggle-nav--mobile.js");
/* harmony import */ var _toggle_nav_mobile__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_toggle_nav_mobile__WEBPACK_IMPORTED_MODULE_2__);




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0FOLElBQUFBLFNBQVMsQ0FBQ00sWUFBVixDQUF1QixlQUF2QixFQUF3QyxLQUF4QztBQUNEO0FBRUYsQ0FYRDs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvanMvYW5pbWF0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvanMvc2xpZGVzaG93LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvanMvdG9nZ2xlLW5hdi0tbW9iaWxlLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2Fzcy9hcHAuc2Nzcz81N2IwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgLy8gTG9vcCBvdmVyIHRoZSBlbnRyaWVzXHJcbiAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgIC8vIElmIHRoZSBlbGVtZW50IGlzIHZpc2libGVcclxuICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAvLyBBZGQgdGhlIGFuaW1hdGlvbiBjbGFzc1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnbW92ZUluUmlnaHQnKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0YXNfX2NvbnRhaW5lcicpKTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gIG9ic2VydmVyLm9ic2VydmUoc3RpY2t5RWxtKVxyXG59XHJcblxyXG5jb25zdCBvYnNlcnZlcjEgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgLy8gTG9vcCBvdmVyIHRoZSBlbnRyaWVzXHJcbiAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgIC8vIElmIHRoZSBlbGVtZW50IGlzIHZpc2libGVcclxuICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAvLyBBZGQgdGhlIGFuaW1hdGlvbiBjbGFzc1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnbW92ZUluTGVmdCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbm9ic2VydmVyMS5vYnNlcnZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0YXNfX2NvbnRhaW5lci0tcHJvZHVjdG9zJykpO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgb2JzZXJ2ZXIxLm9ic2VydmUoc3RpY2t5RWxtKVxyXG59XHJcblxyXG5cclxuY29uc3Qgb2JzZXJ2ZXIyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gIC8vIExvb3Agb3ZlciB0aGUgZW50cmllc1xyXG4gIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAvLyBJZiB0aGUgZWxlbWVudCBpcyB2aXNpYmxlXHJcbiAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgLy8gQWRkIHRoZSBhbmltYXRpb24gY2xhc3NcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3RvcHRvYm90dG9tJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxub2JzZXJ2ZXIyLm9ic2VydmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLS1zJykpO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgb2JzZXJ2ZXIyLm9ic2VydmUoc3RpY2t5RWxtKVxyXG59XHJcblxyXG5jb25zdCBvYnNlcnZlcjMgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgLy8gTG9vcCBvdmVyIHRoZSBlbnRyaWVzXHJcbiAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgIC8vIElmIHRoZSBlbGVtZW50IGlzIHZpc2libGVcclxuICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAvLyBBZGQgdGhlIGFuaW1hdGlvbiBjbGFzc1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgndG9wdG9ib3R0b20nKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG5vYnNlcnZlcjMub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtLXAnKSk7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcclxuICBvYnNlcnZlcjMub2JzZXJ2ZShzdGlja3lFbG0pXHJcbn0iLCJpbXBvcnQgXCIuL2FuaW1hdGlvbi5qc1wiO1xyXG5pbXBvcnQgXCIuL3NsaWRlc2hvdy5qc1wiO1xyXG5pbXBvcnQgXCIuL3RvZ2dsZS1uYXYtLW1vYmlsZVwiOyIsInZhciBzbGlkZUluZGV4ID0gMDtcclxuc2hvd1NsaWRlcygpO1xyXG5cclxuZnVuY3Rpb24gc2hvd1NsaWRlcygpIHtcclxuICB2YXIgaTtcclxuICB2YXIgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm15U2xpZGVzXCIpO1xyXG4gIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG4gIHNsaWRlSW5kZXgrKztcclxuICBpZiAoc2xpZGVJbmRleCA+IHNsaWRlcy5sZW5ndGgpIHtzbGlkZUluZGV4ID0gMX1cclxuICBzbGlkZXNbc2xpZGVJbmRleC0xXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIHNldFRpbWVvdXQoc2hvd1NsaWRlcywgNTAwMCk7IC8vIENoYW5nZSBpbWFnZSBldmVyeSAyIHNlY29uZHNcclxufSAiLCJjb25zdCBwcmltYXJ5TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcclxuY29uc3QgbmF2VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1uYXYtdG9nZ2xlJyk7XHJcblxyXG5uYXZUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuY29uc3QgdmlzaWJpbGl0eSA9IHByaW1hcnlOYXYuZ2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnKTtcclxuY29uc29sZS5sb2codmlzaWJpbGl0eSk7XHJcbiAgaWYodmlzaWJpbGl0eSA9PT0gXCJmYWxzZVwiKXtcclxuICAgIHByaW1hcnlOYXYuc2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnLCB0cnVlKTtcclxuICAgIG5hdlRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlICk7XHJcbiAgfSBlbHNlIGlmKHZpc2liaWxpdHkgPT09IFwidHJ1ZVwiKXtcclxuICAgIHByaW1hcnlOYXYuc2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnLCBmYWxzZSk7XHJcbiAgICBuYXZUb2dnbGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTtcclxuICB9XHJcblxyXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9qcy9hcHBcIjtcclxuaW1wb3J0IFwiLi9zYXNzL2FwcC5zY3NzXCI7XHJcbiJdLCJuYW1lcyI6WyJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwib2JzZXJ2ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsIm9ubG9hZCIsInN0aWNreUVsbSIsIm9ic2VydmVyMSIsIm9ic2VydmVyMiIsIm9ic2VydmVyMyIsInNsaWRlSW5kZXgiLCJzaG93U2xpZGVzIiwiaSIsInNsaWRlcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwicHJpbWFyeU5hdiIsIm5hdlRvZ2dsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2aXNpYmlsaXR5IiwiZ2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsInNldEF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=