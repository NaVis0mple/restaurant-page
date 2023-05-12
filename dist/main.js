/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "title": () => (/* binding */ title)
/* harmony export */ });

const title = document.createElement('div')

title.innerHTML = 'contact us'

title.style.display = 'flex'
title.style.flexDirection = 'column'
title.style.alignItems = 'center'
title.style.gap = '50px'
title.style.backgroundColor = 'gray'
title.style.height = '95vh'

const facebook = document.createElement('div')
facebook.classList.add('facebook')
facebook.style.display = 'flex'
const facebooksvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>'
facebook.innerHTML = facebooksvg
title.appendChild(facebook)
const facebooktext = document.createElement('div')
facebooktext.innerHTML = 'facebook.com'
facebook.appendChild(facebooktext)

const instagram = document.createElement('div')
instagram.classList.add('instagram')
instagram.style.display = 'flex'
const instagramsvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>'
instagram.innerHTML = instagramsvg
title.appendChild(instagram)
const instagramtext = document.createElement('div')
instagramtext.innerHTML = 'instagrm.com'
instagram.appendChild(instagramtext)

const phone = document.createElement('div')
phone.classList.add('phone')
phone.style.display = 'flex'
const phonesvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>'
phone.innerHTML = phonesvg
title.appendChild(phone)
const phonetext = document.createElement('div')
phonetext.innerHTML = '090911325135'
phone.appendChild(phonetext)

const github = document.createElement('a')
github.href = 'https://github.com/NaVis0mple'
github.classList.add('github')
github.textContent = 'GitHub'
github.style.color = 'black'
github.style.textDecoration = 'none'
title.appendChild(github)
const githubsvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'
github.innerHTML = `${githubsvg}NaVis0mple`




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "title": () => (/* binding */ title)
/* harmony export */ });
// first body tab

const title = document.createElement('div')

title.innerHTML = 'Best pizza maker in the word'
title.style.color = '#f1f5f9'
title.style.fontSize = '50px'
const part2 = document.createElement('p')
part2.innerHTML = 'pizzaaaaaaaaaaaa'
title.append(part2)

title.classList.add('container')
title.style.backgroundImage = "url('https://navis0mple.github.io/restaurant-page/distImg/photo.JPG')"
title.style.backgroundSize = 'contain'
title.style.height = '95vh'




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "title": () => (/* binding */ title)
/* harmony export */ });
/* harmony import */ var _img_menu_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/menu.jpg */ "./src/img/menu.jpg");
// sec tab

const title = document.createElement('div')

title.innerHTML = 'Best pizza maker in the world'
title.classList.add('container')
title.style.backgroundImage = `url(${_img_menu_jpg__WEBPACK_IMPORTED_MODULE_0__})`
title.style.backgroundSize = 'contain'
title.style.height = '95vh'



/***/ }),

/***/ "./src/tab.js":
/*!********************!*\
  !*** ./src/tab.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "btnContact": () => (/* binding */ btnContact),
/* harmony export */   "btnContainer": () => (/* binding */ btnContainer),
/* harmony export */   "btnHome": () => (/* binding */ btnHome),
/* harmony export */   "btnMenu": () => (/* binding */ btnMenu)
/* harmony export */ });
const btnContainer = document.createElement('div')
btnContainer.classList.add('btnContainer')

const btnHome = document.createElement('button')
btnContainer.appendChild(btnHome)
btnHome.textContent = 'Home'

const btnMenu = document.createElement('button')
btnContainer.appendChild(btnMenu)
btnMenu.textContent = 'Menu'

const btnContact = document.createElement('button')
btnContainer.appendChild(btnContact)
btnContact.textContent = 'Contact'




/***/ }),

/***/ "./src/img/menu.jpg":
/*!**************************!*\
  !*** ./src/img/menu.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89584c8aecf0570955ff.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.js */ "./src/tab.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




document.body.style.display = 'flex'
document.body.style.flexDirection = 'column'

const headpart = (function () {
  const sethead = function () {
    const container = document.createElement('div')
    container.style.display = 'flex'
    container.style.justifyContent = 'space-evenly'
    container.classList.add('headpart')
    container.appendChild(_tab_js__WEBPACK_IMPORTED_MODULE_0__.btnContainer)
    document.body.insertBefore(container, document.body.firstChild)
  }
  return { sethead }
})()

const midpart = (function () {
  const container = document.createElement('div')
  container.classList.add('midpart')
  document.body.appendChild(container)
  // default page is home
  const defaultTab = () => {
    container.innerHTML = ''
    container.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_1__.title)
  }
  const showTab = () => {
    _tab_js__WEBPACK_IMPORTED_MODULE_0__.btnMenu.addEventListener('click', () => {
      container.innerHTML = ''
      container.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_2__.title)
    })
    _tab_js__WEBPACK_IMPORTED_MODULE_0__.btnContact.addEventListener('click', () => {
      container.innerHTML = ''
      container.appendChild(_contact_js__WEBPACK_IMPORTED_MODULE_3__.title)
    })
    _tab_js__WEBPACK_IMPORTED_MODULE_0__.btnHome.addEventListener('click', () => {
      container.innerHTML = ''
      container.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_1__.title)
    })
  }
  defaultTab()
  return { defaultTab, showTab }
})()

headpart.sethead()
midpart.showTab()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixVQUFVOztBQUVoQjs7Ozs7Ozs7Ozs7Ozs7O0FDcERoQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJoQjtBQUNvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLDBDQUFPLENBQUM7QUFDN0M7QUFDQTtBQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVGhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRXFEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZyRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJxRTtBQUNwQztBQUNBO0FBQ007QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaURBQVk7QUFDdEM7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJDQUFVO0FBQ3BDO0FBQ0E7QUFDQSxJQUFJLDZEQUF3QjtBQUM1QjtBQUNBLDRCQUE0QiwyQ0FBVTtBQUN0QyxLQUFLO0FBQ0wsSUFBSSxnRUFBMkI7QUFDL0I7QUFDQSw0QkFBNEIsOENBQWE7QUFDekMsS0FBSztBQUNMLElBQUksNkRBQXdCO0FBQzVCO0FBQ0EsNEJBQTRCLDJDQUFVO0FBQ3RDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxudGl0bGUuaW5uZXJIVE1MID0gJ2NvbnRhY3QgdXMnXG5cbnRpdGxlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbnRpdGxlLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJ1xudGl0bGUuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInXG50aXRsZS5zdHlsZS5nYXAgPSAnNTBweCdcbnRpdGxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmF5J1xudGl0bGUuc3R5bGUuaGVpZ2h0ID0gJzk1dmgnXG5cbmNvbnN0IGZhY2Vib29rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmZhY2Vib29rLmNsYXNzTGlzdC5hZGQoJ2ZhY2Vib29rJylcbmZhY2Vib29rLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbmNvbnN0IGZhY2Vib29rc3ZnID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1mYWNlYm9va1wiPjxwYXRoIGQ9XCJNMTggMmgtM2E1IDUgMCAwIDAtNSA1djNIN3Y0aDN2OGg0di04aDNsMS00aC00VjdhMSAxIDAgMCAxIDEtMWgzelwiPjwvcGF0aD48L3N2Zz4nXG5mYWNlYm9vay5pbm5lckhUTUwgPSBmYWNlYm9va3N2Z1xudGl0bGUuYXBwZW5kQ2hpbGQoZmFjZWJvb2spXG5jb25zdCBmYWNlYm9va3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZmFjZWJvb2t0ZXh0LmlubmVySFRNTCA9ICdmYWNlYm9vay5jb20nXG5mYWNlYm9vay5hcHBlbmRDaGlsZChmYWNlYm9va3RleHQpXG5cbmNvbnN0IGluc3RhZ3JhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5pbnN0YWdyYW0uY2xhc3NMaXN0LmFkZCgnaW5zdGFncmFtJylcbmluc3RhZ3JhbS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG5jb25zdCBpbnN0YWdyYW1zdmcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWluc3RhZ3JhbVwiPjxyZWN0IHg9XCIyXCIgeT1cIjJcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiByeD1cIjVcIiByeT1cIjVcIj48L3JlY3Q+PHBhdGggZD1cIk0xNiAxMS4zN0E0IDQgMCAxIDEgMTIuNjMgOCA0IDQgMCAwIDEgMTYgMTEuMzd6XCI+PC9wYXRoPjxsaW5lIHgxPVwiMTcuNVwiIHkxPVwiNi41XCIgeDI9XCIxNy41MVwiIHkyPVwiNi41XCI+PC9saW5lPjwvc3ZnPidcbmluc3RhZ3JhbS5pbm5lckhUTUwgPSBpbnN0YWdyYW1zdmdcbnRpdGxlLmFwcGVuZENoaWxkKGluc3RhZ3JhbSlcbmNvbnN0IGluc3RhZ3JhbXRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaW5zdGFncmFtdGV4dC5pbm5lckhUTUwgPSAnaW5zdGFncm0uY29tJ1xuaW5zdGFncmFtLmFwcGVuZENoaWxkKGluc3RhZ3JhbXRleHQpXG5cbmNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnBob25lLmNsYXNzTGlzdC5hZGQoJ3Bob25lJylcbnBob25lLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbmNvbnN0IHBob25lc3ZnID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1waG9uZVwiPjxwYXRoIGQ9XCJNMjIgMTYuOTJ2M2EyIDIgMCAwIDEtMi4xOCAyIDE5Ljc5IDE5Ljc5IDAgMCAxLTguNjMtMy4wNyAxOS41IDE5LjUgMCAwIDEtNi02IDE5Ljc5IDE5Ljc5IDAgMCAxLTMuMDctOC42N0EyIDIgMCAwIDEgNC4xMSAyaDNhMiAyIDAgMCAxIDIgMS43MiAxMi44NCAxMi44NCAwIDAgMCAuNyAyLjgxIDIgMiAwIDAgMS0uNDUgMi4xMUw4LjA5IDkuOTFhMTYgMTYgMCAwIDAgNiA2bDEuMjctMS4yN2EyIDIgMCAwIDEgMi4xMS0uNDUgMTIuODQgMTIuODQgMCAwIDAgMi44MS43QTIgMiAwIDAgMSAyMiAxNi45MnpcIj48L3BhdGg+PC9zdmc+J1xucGhvbmUuaW5uZXJIVE1MID0gcGhvbmVzdmdcbnRpdGxlLmFwcGVuZENoaWxkKHBob25lKVxuY29uc3QgcGhvbmV0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnBob25ldGV4dC5pbm5lckhUTUwgPSAnMDkwOTExMzI1MTM1J1xucGhvbmUuYXBwZW5kQ2hpbGQocGhvbmV0ZXh0KVxuXG5jb25zdCBnaXRodWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbmdpdGh1Yi5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9OYVZpczBtcGxlJ1xuZ2l0aHViLmNsYXNzTGlzdC5hZGQoJ2dpdGh1YicpXG5naXRodWIudGV4dENvbnRlbnQgPSAnR2l0SHViJ1xuZ2l0aHViLnN0eWxlLmNvbG9yID0gJ2JsYWNrJ1xuZ2l0aHViLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnXG50aXRsZS5hcHBlbmRDaGlsZChnaXRodWIpXG5jb25zdCBnaXRodWJzdmcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWdpdGh1YlwiPjxwYXRoIGQ9XCJNOSAxOWMtNSAxLjUtNS0yLjUtNy0zbTE0IDZ2LTMuODdhMy4zNyAzLjM3IDAgMCAwLS45NC0yLjYxYzMuMTQtLjM1IDYuNDQtMS41NCA2LjQ0LTdBNS40NCA1LjQ0IDAgMCAwIDIwIDQuNzcgNS4wNyA1LjA3IDAgMCAwIDE5LjkxIDFTMTguNzMuNjUgMTYgMi40OGExMy4zOCAxMy4zOCAwIDAgMC03IDBDNi4yNy42NSA1LjA5IDEgNS4wOSAxQTUuMDcgNS4wNyAwIDAgMCA1IDQuNzdhNS40NCA1LjQ0IDAgMCAwLTEuNSAzLjc4YzAgNS40MiAzLjMgNi42MSA2LjQ0IDdBMy4zNyAzLjM3IDAgMCAwIDkgMTguMTNWMjJcIj48L3BhdGg+PC9zdmc+J1xuZ2l0aHViLmlubmVySFRNTCA9IGAke2dpdGh1YnN2Z31OYVZpczBtcGxlYFxuXG5leHBvcnQgeyB0aXRsZSB9XG4iLCIvLyBmaXJzdCBib2R5IHRhYlxuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbnRpdGxlLmlubmVySFRNTCA9ICdCZXN0IHBpenphIG1ha2VyIGluIHRoZSB3b3JkJ1xudGl0bGUuc3R5bGUuY29sb3IgPSAnI2YxZjVmOSdcbnRpdGxlLnN0eWxlLmZvbnRTaXplID0gJzUwcHgnXG5jb25zdCBwYXJ0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxucGFydDIuaW5uZXJIVE1MID0gJ3BpenphYWFhYWFhYWFhYWEnXG50aXRsZS5hcHBlbmQocGFydDIpXG5cbnRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXG50aXRsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnaHR0cHM6Ly9uYXZpczBtcGxlLmdpdGh1Yi5pby9yZXN0YXVyYW50LXBhZ2UvZGlzdEltZy9waG90by5KUEcnKVwiXG50aXRsZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb250YWluJ1xudGl0bGUuc3R5bGUuaGVpZ2h0ID0gJzk1dmgnXG5cbmV4cG9ydCB7IHRpdGxlIH1cbiIsIi8vIHNlYyB0YWJcbmltcG9ydCBtZW51anBnIGZyb20gJy4vaW1nL21lbnUuanBnJ1xuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG50aXRsZS5pbm5lckhUTUwgPSAnQmVzdCBwaXp6YSBtYWtlciBpbiB0aGUgd29ybGQnXG50aXRsZS5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxudGl0bGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke21lbnVqcGd9KWBcbnRpdGxlLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvbnRhaW4nXG50aXRsZS5zdHlsZS5oZWlnaHQgPSAnOTV2aCdcbmV4cG9ydCB7IHRpdGxlIH1cbiIsImNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5idG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRuQ29udGFpbmVyJylcblxuY29uc3QgYnRuSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5idG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuSG9tZSlcbmJ0bkhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSdcblxuY29uc3QgYnRuTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5idG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuTWVudSlcbmJ0bk1lbnUudGV4dENvbnRlbnQgPSAnTWVudSdcblxuY29uc3QgYnRuQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5idG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFjdClcbmJ0bkNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCdcblxuZXhwb3J0IHsgYnRuQ29udGFpbmVyLCBidG5Ib21lLCBidG5NZW51LCBidG5Db250YWN0IH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBidG5Db250YWluZXIsIGJ0bkhvbWUsIGJ0bk1lbnUsIGJ0bkNvbnRhY3QgfSBmcm9tICcuL3RhYi5qcydcbmltcG9ydCAqIGFzIEhvbWUgZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0ICogYXMgTWVudSBmcm9tICcuL21lbnUuanMnXG5pbXBvcnQgKiBhcyBDb250YWN0IGZyb20gJy4vY29udGFjdC5qcydcbmRvY3VtZW50LmJvZHkuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuZG9jdW1lbnQuYm9keS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbidcblxuY29uc3QgaGVhZHBhcnQgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBzZXRoZWFkID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICBjb250YWluZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtZXZlbmx5J1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkcGFydCcpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcilcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShjb250YWluZXIsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZClcbiAgfVxuICByZXR1cm4geyBzZXRoZWFkIH1cbn0pKClcblxuY29uc3QgbWlkcGFydCA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtaWRwYXJ0JylcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gIC8vIGRlZmF1bHQgcGFnZSBpcyBob21lXG4gIGNvbnN0IGRlZmF1bHRUYWIgPSAoKSA9PiB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKEhvbWUudGl0bGUpXG4gIH1cbiAgY29uc3Qgc2hvd1RhYiA9ICgpID0+IHtcbiAgICBidG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoTWVudS50aXRsZSlcbiAgICB9KVxuICAgIGJ0bkNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChDb250YWN0LnRpdGxlKVxuICAgIH0pXG4gICAgYnRuSG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKEhvbWUudGl0bGUpXG4gICAgfSlcbiAgfVxuICBkZWZhdWx0VGFiKClcbiAgcmV0dXJuIHsgZGVmYXVsdFRhYiwgc2hvd1RhYiB9XG59KSgpXG5cbmhlYWRwYXJ0LnNldGhlYWQoKVxubWlkcGFydC5zaG93VGFiKClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==