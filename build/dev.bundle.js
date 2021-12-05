/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle_nav_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle-nav-mobile.js */ "./src/js/toggle-nav-mobile.js");
/* harmony import */ var _toggle_nav_mobile_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_toggle_nav_mobile_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slideshow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideshow.js */ "./src/js/slideshow.js");
/* harmony import */ var _slideshow_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slideshow_js__WEBPACK_IMPORTED_MODULE_1__);



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
  setTimeout(showSlides, 50000); // Change image every 2 seconds
}

/***/ }),

/***/ "./src/js/toggle-nav-mobile.js":
/*!*************************************!*\
  !*** ./src/js/toggle-nav-mobile.js ***!
  \*************************************/
/***/ (() => {

const primaryNav = document.querySelector(".menu");
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
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
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app.js */ "./src/js/app.js");
/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/app.scss */ "./src/sass/app.scss");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQSxJQUFJQSxVQUFVLEdBQUcsQ0FBakI7QUFDQUMsVUFBVTs7QUFFVixTQUFTQSxVQUFULEdBQXNCO0FBQ3BCLE1BQUlDLENBQUo7QUFDQSxNQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsVUFBaEMsQ0FBYjs7QUFDQSxPQUFLSCxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0csTUFBdkIsRUFBK0JKLENBQUMsRUFBaEMsRUFBb0M7QUFDbENDLElBQUFBLE1BQU0sQ0FBQ0QsQ0FBRCxDQUFOLENBQVVLLEtBQVYsQ0FBZ0JDLE9BQWhCLEdBQTBCLE1BQTFCO0FBQ0Q7O0FBQ0RSLEVBQUFBLFVBQVU7O0FBQ1YsTUFBSUEsVUFBVSxHQUFHRyxNQUFNLENBQUNHLE1BQXhCLEVBQWdDO0FBQzlCTixJQUFBQSxVQUFVLEdBQUcsQ0FBYjtBQUNEOztBQUNERyxFQUFBQSxNQUFNLENBQUNILFVBQVUsR0FBRyxDQUFkLENBQU4sQ0FBdUJPLEtBQXZCLENBQTZCQyxPQUE3QixHQUF1QyxPQUF2QztBQUNBQyxFQUFBQSxVQUFVLENBQUNSLFVBQUQsRUFBYSxLQUFiLENBQVYsQ0FYb0IsQ0FXVztBQUNoQzs7Ozs7Ozs7OztBQ2ZELE1BQU1TLFVBQVUsR0FBR04sUUFBUSxDQUFDTyxhQUFULENBQXVCLE9BQXZCLENBQW5CO0FBQ0EsTUFBTUMsU0FBUyxHQUFHUixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWxCO0FBRUFDLFNBQVMsQ0FBQ0MsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsTUFBTTtBQUN4QyxRQUFNQyxVQUFVLEdBQUdKLFVBQVUsQ0FBQ0ssWUFBWCxDQUF3QixjQUF4QixDQUFuQjs7QUFFQSxNQUFJRCxVQUFVLEtBQUssT0FBbkIsRUFBNEI7QUFDMUJKLElBQUFBLFVBQVUsQ0FBQ00sWUFBWCxDQUF3QixjQUF4QixFQUF3QyxJQUF4QztBQUNBSixJQUFBQSxTQUFTLENBQUNJLFlBQVYsQ0FBdUIsZUFBdkIsRUFBd0MsSUFBeEM7QUFDRCxHQUhELE1BR08sSUFBSUYsVUFBVSxLQUFLLE1BQW5CLEVBQTJCO0FBQ2hDSixJQUFBQSxVQUFVLENBQUNNLFlBQVgsQ0FBd0IsY0FBeEIsRUFBd0MsS0FBeEM7QUFDQUosSUFBQUEsU0FBUyxDQUFDSSxZQUFWLENBQXVCLGVBQXZCLEVBQXdDLEtBQXhDO0FBQ0Q7QUFDRixDQVZEOzs7Ozs7Ozs7Ozs7QUNIQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5kYWNvbGxvdGVlbmNhbnRhLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9hbmRhY29sbG90ZWVuY2FudGEvLi9zcmMvanMvc2xpZGVzaG93LmpzIiwid2VicGFjazovL2FuZGFjb2xsb3RlZW5jYW50YS8uL3NyYy9qcy90b2dnbGUtbmF2LW1vYmlsZS5qcyIsIndlYnBhY2s6Ly9hbmRhY29sbG90ZWVuY2FudGEvLi9zcmMvc2Fzcy9hcHAuc2Nzcz8yNjEwIiwid2VicGFjazovL2FuZGFjb2xsb3RlZW5jYW50YS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbmRhY29sbG90ZWVuY2FudGEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYW5kYWNvbGxvdGVlbmNhbnRhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hbmRhY29sbG90ZWVuY2FudGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hbmRhY29sbG90ZWVuY2FudGEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hbmRhY29sbG90ZWVuY2FudGEvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi90b2dnbGUtbmF2LW1vYmlsZS5qc1wiO1xyXG5pbXBvcnQgXCIuL3NsaWRlc2hvdy5qc1wiOyIsInZhciBzbGlkZUluZGV4ID0gMDtcclxuc2hvd1NsaWRlcygpO1xyXG5cclxuZnVuY3Rpb24gc2hvd1NsaWRlcygpIHtcclxuICB2YXIgaTtcclxuICB2YXIgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm15U2xpZGVzXCIpO1xyXG4gIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG4gIHNsaWRlSW5kZXgrKztcclxuICBpZiAoc2xpZGVJbmRleCA+IHNsaWRlcy5sZW5ndGgpIHtcclxuICAgIHNsaWRlSW5kZXggPSAxO1xyXG4gIH1cclxuICBzbGlkZXNbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgc2V0VGltZW91dChzaG93U2xpZGVzLCA1MDAwMCk7IC8vIENoYW5nZSBpbWFnZSBldmVyeSAyIHNlY29uZHNcclxufVxyXG4iLCJjb25zdCBwcmltYXJ5TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xyXG5jb25zdCBuYXZUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1uYXYtdG9nZ2xlXCIpO1xyXG5cclxubmF2VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgdmlzaWJpbGl0eSA9IHByaW1hcnlOYXYuZ2V0QXR0cmlidXRlKFwiZGF0YS12aXNpYmxlXCIpO1xyXG5cclxuICBpZiAodmlzaWJpbGl0eSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICBwcmltYXJ5TmF2LnNldEF0dHJpYnV0ZShcImRhdGEtdmlzaWJsZVwiLCB0cnVlKTtcclxuICAgIG5hdlRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRydWUpO1xyXG4gIH0gZWxzZSBpZiAodmlzaWJpbGl0eSA9PT0gXCJ0cnVlXCIpIHtcclxuICAgIHByaW1hcnlOYXYuc2V0QXR0cmlidXRlKFwiZGF0YS12aXNpYmxlXCIsIGZhbHNlKTtcclxuICAgIG5hdlRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9qcy9hcHAuanNcIjtcclxuaW1wb3J0IFwiLi9zYXNzL2FwcC5zY3NzXCI7XHJcbiJdLCJuYW1lcyI6WyJzbGlkZUluZGV4Iiwic2hvd1NsaWRlcyIsImkiLCJzbGlkZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwicHJpbWFyeU5hdiIsInF1ZXJ5U2VsZWN0b3IiLCJuYXZUb2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwidmlzaWJpbGl0eSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=