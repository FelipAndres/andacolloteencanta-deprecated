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


/***/ }),

/***/ "./src/fonts sync recursive \\.woff\\.woff2\\$":
/*!*****************************************!*\
  !*** ./src/fonts/ sync \.woff\.woff2\$ ***!
  \*****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./src/fonts sync recursive \\.woff\\.woff2\\$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./src/images sync recursive \\.webp\\.jpge\\.jpg\\.png\\.svg$":
/*!*******************************************************!*\
  !*** ./src/images/ sync \.webp\.jpge\.jpg\.png\.svg$ ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./src/images sync recursive \\.webp\\.jpge\\.jpg\\.png\\.svg$";
module.exports = webpackEmptyContext;

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



__webpack_require__("./src/fonts sync recursive \\.woff\\.woff2\\$");

__webpack_require__("./src/images sync recursive \\.webp\\.jpge\\.jpg\\.png\\.svg$");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQSxJQUFJQSxVQUFVLEdBQUcsQ0FBakI7QUFDQUMsVUFBVTs7QUFFVixTQUFTQSxVQUFULEdBQXNCO0FBQ3BCLE1BQUlDLENBQUo7QUFDQSxNQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsVUFBaEMsQ0FBYjs7QUFDQSxPQUFLSCxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0csTUFBdkIsRUFBK0JKLENBQUMsRUFBaEMsRUFBb0M7QUFDbENDLElBQUFBLE1BQU0sQ0FBQ0QsQ0FBRCxDQUFOLENBQVVLLEtBQVYsQ0FBZ0JDLE9BQWhCLEdBQTBCLE1BQTFCO0FBQ0Q7O0FBQ0RSLEVBQUFBLFVBQVU7O0FBQ1YsTUFBSUEsVUFBVSxHQUFHRyxNQUFNLENBQUNHLE1BQXhCLEVBQWdDO0FBQzlCTixJQUFBQSxVQUFVLEdBQUcsQ0FBYjtBQUNEOztBQUNERyxFQUFBQSxNQUFNLENBQUNILFVBQVUsR0FBRyxDQUFkLENBQU4sQ0FBdUJPLEtBQXZCLENBQTZCQyxPQUE3QixHQUF1QyxPQUF2QztBQUNBQyxFQUFBQSxVQUFVLENBQUNSLFVBQUQsRUFBYSxLQUFiLENBQVYsQ0FYb0IsQ0FXVztBQUNoQzs7Ozs7Ozs7OztBQ2ZELE1BQU1TLFVBQVUsR0FBR04sUUFBUSxDQUFDTyxhQUFULENBQXVCLE9BQXZCLENBQW5CO0FBQ0EsTUFBTUMsU0FBUyxHQUFHUixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWxCO0FBRUFDLFNBQVMsQ0FBQ0MsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsTUFBTTtBQUN4QyxRQUFNQyxVQUFVLEdBQUdKLFVBQVUsQ0FBQ0ssWUFBWCxDQUF3QixjQUF4QixDQUFuQjs7QUFFQSxNQUFJRCxVQUFVLEtBQUssT0FBbkIsRUFBNEI7QUFDMUJKLElBQUFBLFVBQVUsQ0FBQ00sWUFBWCxDQUF3QixjQUF4QixFQUF3QyxJQUF4QztBQUNBSixJQUFBQSxTQUFTLENBQUNJLFlBQVYsQ0FBdUIsZUFBdkIsRUFBd0MsSUFBeEM7QUFDRCxHQUhELE1BR08sSUFBSUYsVUFBVSxLQUFLLE1BQW5CLEVBQTJCO0FBQ2hDSixJQUFBQSxVQUFVLENBQUNNLFlBQVgsQ0FBd0IsY0FBeEIsRUFBd0MsS0FBeEM7QUFDQUosSUFBQUEsU0FBUyxDQUFDSSxZQUFWLENBQXVCLGVBQXZCLEVBQXdDLEtBQXhDO0FBQ0Q7QUFDRixDQVZEOzs7Ozs7Ozs7Ozs7QUNIQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRUFDLG9FQUFBOztBQUNBQSxvRkFBQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5kYWNvbGxvdGVlbmNhbnRhLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9hbmRhY29sbG90ZWVuY2FudGEvLi9zcmMvanMvc2xpZGVzaG93LmpzIiwid2VicGFjazovL2FuZGFjb2xsb3RlZW5jYW50YS8uL3NyYy9qcy90b2dnbGUtbmF2LW1vYmlsZS5qcyIsIndlYnBhY2s6Ly9hbmRhY29sbG90ZWVuY2FudGEvLi9zcmMvc2Fzcy9hcHAuc2Nzcz81N2IwIiwid2VicGFjazovL2FuZGFjb2xsb3RlZW5jYW50YS8vVXNlcnMvcGhpbGlwL0xvY2FsIFNpdGVzL3RlZW5jYW50YS9hcHAvcHVibGljL3dwLWNvbnRlbnQvdGhlbWVzL2FuZGFjb2xsb3RlZW5jYW50YS1kZXByZWNhdGVkL3NyYy9mb250c3xzeW5jfC9cXC53b2ZmXFwud29mZjJcXCQvIiwid2VicGFjazovL2FuZGFjb2xsb3RlZW5jYW50YS8vVXNlcnMvcGhpbGlwL0xvY2FsIFNpdGVzL3RlZW5jYW50YS9hcHAvcHVibGljL3dwLWNvbnRlbnQvdGhlbWVzL2FuZGFjb2xsb3RlZW5jYW50YS1kZXByZWNhdGVkL3NyYy9pbWFnZXN8c3luY3wvXFwud2VicFxcLmpwZ2VcXC5qcGdcXC5wbmdcXC5zdmckLyIsIndlYnBhY2s6Ly9hbmRhY29sbG90ZWVuY2FudGEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYW5kYWNvbGxvdGVlbmNhbnRhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FuZGFjb2xsb3RlZW5jYW50YS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW5kYWNvbGxvdGVlbmNhbnRhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYW5kYWNvbGxvdGVlbmNhbnRhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYW5kYWNvbGxvdGVlbmNhbnRhLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vdG9nZ2xlLW5hdi1tb2JpbGUuanNcIjtcclxuaW1wb3J0IFwiLi9zbGlkZXNob3cuanNcIjsiLCJ2YXIgc2xpZGVJbmRleCA9IDA7XHJcbnNob3dTbGlkZXMoKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dTbGlkZXMoKSB7XHJcbiAgdmFyIGk7XHJcbiAgdmFyIHNsaWRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJteVNsaWRlc1wiKTtcclxuICBmb3IgKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxuICBzbGlkZUluZGV4Kys7XHJcbiAgaWYgKHNsaWRlSW5kZXggPiBzbGlkZXMubGVuZ3RoKSB7XHJcbiAgICBzbGlkZUluZGV4ID0gMTtcclxuICB9XHJcbiAgc2xpZGVzW3NsaWRlSW5kZXggLSAxXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIHNldFRpbWVvdXQoc2hvd1NsaWRlcywgNTAwMDApOyAvLyBDaGFuZ2UgaW1hZ2UgZXZlcnkgMiBzZWNvbmRzXHJcbn1cclxuIiwiY29uc3QgcHJpbWFyeU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcclxuY29uc3QgbmF2VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbmF2LXRvZ2dsZVwiKTtcclxuXHJcbm5hdlRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IHZpc2liaWxpdHkgPSBwcmltYXJ5TmF2LmdldEF0dHJpYnV0ZShcImRhdGEtdmlzaWJsZVwiKTtcclxuXHJcbiAgaWYgKHZpc2liaWxpdHkgPT09IFwiZmFsc2VcIikge1xyXG4gICAgcHJpbWFyeU5hdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZpc2libGVcIiwgdHJ1ZSk7XHJcbiAgICBuYXZUb2dnbGUuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0cnVlKTtcclxuICB9IGVsc2UgaWYgKHZpc2liaWxpdHkgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICBwcmltYXJ5TmF2LnNldEF0dHJpYnV0ZShcImRhdGEtdmlzaWJsZVwiLCBmYWxzZSk7XHJcbiAgICBuYXZUb2dnbGUuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vc3JjL2ZvbnRzIHN5bmMgcmVjdXJzaXZlIFxcXFwud29mZlxcXFwud29mZjJcXFxcJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0OyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMgc3luYyByZWN1cnNpdmUgXFxcXC53ZWJwXFxcXC5qcGdlXFxcXC5qcGdcXFxcLnBuZ1xcXFwuc3ZnJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2pzL2FwcC5qc1wiO1xyXG5pbXBvcnQgXCIuL3Nhc3MvYXBwLnNjc3NcIjtcclxuXHJcbnJlcXVpcmUuY29udGV4dCgnLi9mb250cy8nLCB0cnVlLCAvXFwud29mZlxcLndvZmYyXFwkLyk7XHJcbnJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvJywgdHJ1ZSwgL1xcLndlYnBcXC5qcGdlXFwuanBnXFwucG5nXFwuc3ZnJC8pOyJdLCJuYW1lcyI6WyJzbGlkZUluZGV4Iiwic2hvd1NsaWRlcyIsImkiLCJzbGlkZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwicHJpbWFyeU5hdiIsInF1ZXJ5U2VsZWN0b3IiLCJuYXZUb2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwidmlzaWJpbGl0eSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlcXVpcmUiLCJjb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==