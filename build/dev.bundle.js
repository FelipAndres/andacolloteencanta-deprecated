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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQSxJQUFJQSxVQUFVLEdBQUcsQ0FBakI7QUFDQUMsVUFBVTs7QUFFVixTQUFTQSxVQUFULEdBQXNCO0FBQ3BCLE1BQUlDLENBQUo7QUFDQSxNQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsVUFBaEMsQ0FBYjs7QUFDQSxPQUFLSCxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0csTUFBdkIsRUFBK0JKLENBQUMsRUFBaEMsRUFBb0M7QUFDbENDLElBQUFBLE1BQU0sQ0FBQ0QsQ0FBRCxDQUFOLENBQVVLLEtBQVYsQ0FBZ0JDLE9BQWhCLEdBQTBCLE1BQTFCO0FBQ0Q7O0FBQ0RSLEVBQUFBLFVBQVU7O0FBQ1YsTUFBSUEsVUFBVSxHQUFHRyxNQUFNLENBQUNHLE1BQXhCLEVBQWdDO0FBQzlCTixJQUFBQSxVQUFVLEdBQUcsQ0FBYjtBQUNEOztBQUNERyxFQUFBQSxNQUFNLENBQUNILFVBQVUsR0FBRyxDQUFkLENBQU4sQ0FBdUJPLEtBQXZCLENBQTZCQyxPQUE3QixHQUF1QyxPQUF2QztBQUNBQyxFQUFBQSxVQUFVLENBQUNSLFVBQUQsRUFBYSxLQUFiLENBQVYsQ0FYb0IsQ0FXVztBQUNoQzs7Ozs7Ozs7OztBQ2ZELE1BQU1TLFVBQVUsR0FBR04sUUFBUSxDQUFDTyxhQUFULENBQXVCLE9BQXZCLENBQW5CO0FBQ0EsTUFBTUMsU0FBUyxHQUFHUixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWxCO0FBRUFDLFNBQVMsQ0FBQ0MsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsTUFBTTtBQUN4QyxRQUFNQyxVQUFVLEdBQUdKLFVBQVUsQ0FBQ0ssWUFBWCxDQUF3QixjQUF4QixDQUFuQjs7QUFFQSxNQUFJRCxVQUFVLEtBQUssT0FBbkIsRUFBNEI7QUFDMUJKLElBQUFBLFVBQVUsQ0FBQ00sWUFBWCxDQUF3QixjQUF4QixFQUF3QyxJQUF4QztBQUNBSixJQUFBQSxTQUFTLENBQUNJLFlBQVYsQ0FBdUIsZUFBdkIsRUFBd0MsSUFBeEM7QUFDRCxHQUhELE1BR08sSUFBSUYsVUFBVSxLQUFLLE1BQW5CLEVBQTJCO0FBQ2hDSixJQUFBQSxVQUFVLENBQUNNLFlBQVgsQ0FBd0IsY0FBeEIsRUFBd0MsS0FBeEM7QUFDQUosSUFBQUEsU0FBUyxDQUFDSSxZQUFWLENBQXVCLGVBQXZCLEVBQXdDLEtBQXhDO0FBQ0Q7QUFDRixDQVZEOzs7Ozs7Ozs7Ozs7QUNIQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRUFDLG9FQUFBOztBQUNBQSxvRkFBQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5kYWNvbGxvdGVlbmNhbnRhLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9hbmRhY29sbG90ZWVuY2FudGEvLi9zcmMvanMvc2xpZGVzaG93LmpzIiwid2VicGFjazovL2FuZGFjb2xsb3RlZW5jYW50YS8uL3NyYy9qcy90b2dnbGUtbmF2LW1vYmlsZS5qcyIsIndlYnBhY2s6Ly9hbmRhY29sbG90ZWVuY2FudGEvLi9zcmMvc2Fzcy9hcHAuc2Nzcz81N2IwIiwid2VicGFjazovL2FuZGFjb2xsb3RlZW5jYW50YS8vVXNlcnMvcGhpbGlwL0xvY2FsIFNpdGVzL2RldmVsb3BtZW50LW1haW4vYXBwL3B1YmxpYy93cC1jb250ZW50L3RoZW1lcy9hbmRhY29sbG90ZWVuY2FudGEtZGVwcmVjYXRlZC9zcmMvZm9udHN8c3luY3wvXFwud29mZlxcLndvZmYyXFwkLyIsIndlYnBhY2s6Ly9hbmRhY29sbG90ZWVuY2FudGEvL1VzZXJzL3BoaWxpcC9Mb2NhbCBTaXRlcy9kZXZlbG9wbWVudC1tYWluL2FwcC9wdWJsaWMvd3AtY29udGVudC90aGVtZXMvYW5kYWNvbGxvdGVlbmNhbnRhLWRlcHJlY2F0ZWQvc3JjL2ltYWdlc3xzeW5jfC9cXC53ZWJwXFwuanBnZVxcLmpwZ1xcLnBuZ1xcLnN2ZyQvIiwid2VicGFjazovL2FuZGFjb2xsb3RlZW5jYW50YS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbmRhY29sbG90ZWVuY2FudGEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYW5kYWNvbGxvdGVlbmNhbnRhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hbmRhY29sbG90ZWVuY2FudGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hbmRhY29sbG90ZWVuY2FudGEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hbmRhY29sbG90ZWVuY2FudGEvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi90b2dnbGUtbmF2LW1vYmlsZS5qc1wiO1xyXG5pbXBvcnQgXCIuL3NsaWRlc2hvdy5qc1wiOyIsInZhciBzbGlkZUluZGV4ID0gMDtcclxuc2hvd1NsaWRlcygpO1xyXG5cclxuZnVuY3Rpb24gc2hvd1NsaWRlcygpIHtcclxuICB2YXIgaTtcclxuICB2YXIgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm15U2xpZGVzXCIpO1xyXG4gIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG4gIHNsaWRlSW5kZXgrKztcclxuICBpZiAoc2xpZGVJbmRleCA+IHNsaWRlcy5sZW5ndGgpIHtcclxuICAgIHNsaWRlSW5kZXggPSAxO1xyXG4gIH1cclxuICBzbGlkZXNbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgc2V0VGltZW91dChzaG93U2xpZGVzLCA1MDAwMCk7IC8vIENoYW5nZSBpbWFnZSBldmVyeSAyIHNlY29uZHNcclxufVxyXG4iLCJjb25zdCBwcmltYXJ5TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xyXG5jb25zdCBuYXZUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1uYXYtdG9nZ2xlXCIpO1xyXG5cclxubmF2VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgdmlzaWJpbGl0eSA9IHByaW1hcnlOYXYuZ2V0QXR0cmlidXRlKFwiZGF0YS12aXNpYmxlXCIpO1xyXG5cclxuICBpZiAodmlzaWJpbGl0eSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICBwcmltYXJ5TmF2LnNldEF0dHJpYnV0ZShcImRhdGEtdmlzaWJsZVwiLCB0cnVlKTtcclxuICAgIG5hdlRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRydWUpO1xyXG4gIH0gZWxzZSBpZiAodmlzaWJpbGl0eSA9PT0gXCJ0cnVlXCIpIHtcclxuICAgIHByaW1hcnlOYXYuc2V0QXR0cmlidXRlKFwiZGF0YS12aXNpYmxlXCIsIGZhbHNlKTtcclxuICAgIG5hdlRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9ICgpID0+IChbXSk7XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9zcmMvZm9udHMgc3luYyByZWN1cnNpdmUgXFxcXC53b2ZmXFxcXC53b2ZmMlxcXFwkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7IiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLndlYnBcXFxcLmpwZ2VcXFxcLmpwZ1xcXFwucG5nXFxcXC5zdmckXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vanMvYXBwLmpzXCI7XHJcbmltcG9ydCBcIi4vc2Fzcy9hcHAuc2Nzc1wiO1xyXG5cclxucmVxdWlyZS5jb250ZXh0KCcuL2ZvbnRzLycsIHRydWUsIC9cXC53b2ZmXFwud29mZjJcXCQvKTtcclxucmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy8nLCB0cnVlLCAvXFwud2VicFxcLmpwZ2VcXC5qcGdcXC5wbmdcXC5zdmckLyk7Il0sIm5hbWVzIjpbInNsaWRlSW5kZXgiLCJzaG93U2xpZGVzIiwiaSIsInNsaWRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsInN0eWxlIiwiZGlzcGxheSIsInNldFRpbWVvdXQiLCJwcmltYXJ5TmF2IiwicXVlcnlTZWxlY3RvciIsIm5hdlRvZ2dsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2aXNpYmlsaXR5IiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVxdWlyZSIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9