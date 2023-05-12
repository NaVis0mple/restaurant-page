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
/* harmony import */ var _img_home_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/home.jpg */ "./src/img/home.jpg");
// first body tab

const title = document.createElement('div')

title.innerHTML = 'Best pizza maker in the word'
title.style.color = '#f1f5f9'
title.style.fontSize = '50px'
const part2 = document.createElement('p')
part2.innerHTML = 'pizzaaaaaaaaaaaa'
title.append(part2)

title.classList.add('container')
title.style.backgroundImage = `url(${_img_home_jpg__WEBPACK_IMPORTED_MODULE_0__})`
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

/***/ "./src/img/home.jpg":
/*!**************************!*\
  !*** ./src/img/home.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7eb89a46cfdeb8098da4.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixVQUFVOztBQUVoQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEaEI7QUFDb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLDBDQUFPLENBQUM7QUFDN0M7QUFDQTs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQmhCO0FBQ29DO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsMENBQU8sQ0FBQztBQUM3QztBQUNBO0FBQ2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFcUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZyRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJxRTtBQUNwQztBQUNBO0FBQ007QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaURBQVk7QUFDdEM7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJDQUFVO0FBQ3BDO0FBQ0E7QUFDQSxJQUFJLDZEQUF3QjtBQUM1QjtBQUNBLDRCQUE0QiwyQ0FBVTtBQUN0QyxLQUFLO0FBQ0wsSUFBSSxnRUFBMkI7QUFDL0I7QUFDQSw0QkFBNEIsOENBQWE7QUFDekMsS0FBSztBQUNMLElBQUksNkRBQXdCO0FBQzVCO0FBQ0EsNEJBQTRCLDJDQUFVO0FBQ3RDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxudGl0bGUuaW5uZXJIVE1MID0gJ2NvbnRhY3QgdXMnXG5cbnRpdGxlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbnRpdGxlLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJ1xudGl0bGUuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInXG50aXRsZS5zdHlsZS5nYXAgPSAnNTBweCdcbnRpdGxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmF5J1xudGl0bGUuc3R5bGUuaGVpZ2h0ID0gJzk1dmgnXG5cbmNvbnN0IGZhY2Vib29rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmZhY2Vib29rLmNsYXNzTGlzdC5hZGQoJ2ZhY2Vib29rJylcbmZhY2Vib29rLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbmNvbnN0IGZhY2Vib29rc3ZnID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1mYWNlYm9va1wiPjxwYXRoIGQ9XCJNMTggMmgtM2E1IDUgMCAwIDAtNSA1djNIN3Y0aDN2OGg0di04aDNsMS00aC00VjdhMSAxIDAgMCAxIDEtMWgzelwiPjwvcGF0aD48L3N2Zz4nXG5mYWNlYm9vay5pbm5lckhUTUwgPSBmYWNlYm9va3N2Z1xudGl0bGUuYXBwZW5kQ2hpbGQoZmFjZWJvb2spXG5jb25zdCBmYWNlYm9va3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZmFjZWJvb2t0ZXh0LmlubmVySFRNTCA9ICdmYWNlYm9vay5jb20nXG5mYWNlYm9vay5hcHBlbmRDaGlsZChmYWNlYm9va3RleHQpXG5cbmNvbnN0IGluc3RhZ3JhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5pbnN0YWdyYW0uY2xhc3NMaXN0LmFkZCgnaW5zdGFncmFtJylcbmluc3RhZ3JhbS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG5jb25zdCBpbnN0YWdyYW1zdmcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWluc3RhZ3JhbVwiPjxyZWN0IHg9XCIyXCIgeT1cIjJcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiByeD1cIjVcIiByeT1cIjVcIj48L3JlY3Q+PHBhdGggZD1cIk0xNiAxMS4zN0E0IDQgMCAxIDEgMTIuNjMgOCA0IDQgMCAwIDEgMTYgMTEuMzd6XCI+PC9wYXRoPjxsaW5lIHgxPVwiMTcuNVwiIHkxPVwiNi41XCIgeDI9XCIxNy41MVwiIHkyPVwiNi41XCI+PC9saW5lPjwvc3ZnPidcbmluc3RhZ3JhbS5pbm5lckhUTUwgPSBpbnN0YWdyYW1zdmdcbnRpdGxlLmFwcGVuZENoaWxkKGluc3RhZ3JhbSlcbmNvbnN0IGluc3RhZ3JhbXRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaW5zdGFncmFtdGV4dC5pbm5lckhUTUwgPSAnaW5zdGFncm0uY29tJ1xuaW5zdGFncmFtLmFwcGVuZENoaWxkKGluc3RhZ3JhbXRleHQpXG5cbmNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnBob25lLmNsYXNzTGlzdC5hZGQoJ3Bob25lJylcbnBob25lLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbmNvbnN0IHBob25lc3ZnID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1waG9uZVwiPjxwYXRoIGQ9XCJNMjIgMTYuOTJ2M2EyIDIgMCAwIDEtMi4xOCAyIDE5Ljc5IDE5Ljc5IDAgMCAxLTguNjMtMy4wNyAxOS41IDE5LjUgMCAwIDEtNi02IDE5Ljc5IDE5Ljc5IDAgMCAxLTMuMDctOC42N0EyIDIgMCAwIDEgNC4xMSAyaDNhMiAyIDAgMCAxIDIgMS43MiAxMi44NCAxMi44NCAwIDAgMCAuNyAyLjgxIDIgMiAwIDAgMS0uNDUgMi4xMUw4LjA5IDkuOTFhMTYgMTYgMCAwIDAgNiA2bDEuMjctMS4yN2EyIDIgMCAwIDEgMi4xMS0uNDUgMTIuODQgMTIuODQgMCAwIDAgMi44MS43QTIgMiAwIDAgMSAyMiAxNi45MnpcIj48L3BhdGg+PC9zdmc+J1xucGhvbmUuaW5uZXJIVE1MID0gcGhvbmVzdmdcbnRpdGxlLmFwcGVuZENoaWxkKHBob25lKVxuY29uc3QgcGhvbmV0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnBob25ldGV4dC5pbm5lckhUTUwgPSAnMDkwOTExMzI1MTM1J1xucGhvbmUuYXBwZW5kQ2hpbGQocGhvbmV0ZXh0KVxuXG5jb25zdCBnaXRodWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbmdpdGh1Yi5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9OYVZpczBtcGxlJ1xuZ2l0aHViLmNsYXNzTGlzdC5hZGQoJ2dpdGh1YicpXG5naXRodWIudGV4dENvbnRlbnQgPSAnR2l0SHViJ1xuZ2l0aHViLnN0eWxlLmNvbG9yID0gJ2JsYWNrJ1xuZ2l0aHViLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnXG50aXRsZS5hcHBlbmRDaGlsZChnaXRodWIpXG5jb25zdCBnaXRodWJzdmcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWdpdGh1YlwiPjxwYXRoIGQ9XCJNOSAxOWMtNSAxLjUtNS0yLjUtNy0zbTE0IDZ2LTMuODdhMy4zNyAzLjM3IDAgMCAwLS45NC0yLjYxYzMuMTQtLjM1IDYuNDQtMS41NCA2LjQ0LTdBNS40NCA1LjQ0IDAgMCAwIDIwIDQuNzcgNS4wNyA1LjA3IDAgMCAwIDE5LjkxIDFTMTguNzMuNjUgMTYgMi40OGExMy4zOCAxMy4zOCAwIDAgMC03IDBDNi4yNy42NSA1LjA5IDEgNS4wOSAxQTUuMDcgNS4wNyAwIDAgMCA1IDQuNzdhNS40NCA1LjQ0IDAgMCAwLTEuNSAzLjc4YzAgNS40MiAzLjMgNi42MSA2LjQ0IDdBMy4zNyAzLjM3IDAgMCAwIDkgMTguMTNWMjJcIj48L3BhdGg+PC9zdmc+J1xuZ2l0aHViLmlubmVySFRNTCA9IGAke2dpdGh1YnN2Z31OYVZpczBtcGxlYFxuXG5leHBvcnQgeyB0aXRsZSB9XG4iLCIvLyBmaXJzdCBib2R5IHRhYlxuaW1wb3J0IGhvbWVqcGcgZnJvbSAnLi9pbWcvaG9tZS5qcGcnXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbnRpdGxlLmlubmVySFRNTCA9ICdCZXN0IHBpenphIG1ha2VyIGluIHRoZSB3b3JkJ1xudGl0bGUuc3R5bGUuY29sb3IgPSAnI2YxZjVmOSdcbnRpdGxlLnN0eWxlLmZvbnRTaXplID0gJzUwcHgnXG5jb25zdCBwYXJ0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxucGFydDIuaW5uZXJIVE1MID0gJ3BpenphYWFhYWFhYWFhYWEnXG50aXRsZS5hcHBlbmQocGFydDIpXG5cbnRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXG50aXRsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aG9tZWpwZ30pYFxudGl0bGUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY29udGFpbidcbnRpdGxlLnN0eWxlLmhlaWdodCA9ICc5NXZoJ1xuXG5leHBvcnQgeyB0aXRsZSB9XG4iLCIvLyBzZWMgdGFiXG5pbXBvcnQgbWVudWpwZyBmcm9tICcuL2ltZy9tZW51LmpwZydcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxudGl0bGUuaW5uZXJIVE1MID0gJ0Jlc3QgcGl6emEgbWFrZXIgaW4gdGhlIHdvcmxkJ1xudGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcbnRpdGxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHttZW51anBnfSlgXG50aXRsZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb250YWluJ1xudGl0bGUuc3R5bGUuaGVpZ2h0ID0gJzk1dmgnXG5leHBvcnQgeyB0aXRsZSB9XG4iLCJjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J0bkNvbnRhaW5lcicpXG5cbmNvbnN0IGJ0bkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkhvbWUpXG5idG5Ib21lLnRleHRDb250ZW50ID0gJ0hvbWUnXG5cbmNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bk1lbnUpXG5idG5NZW51LnRleHRDb250ZW50ID0gJ01lbnUnXG5cbmNvbnN0IGJ0bkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhY3QpXG5idG5Db250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnXG5cbmV4cG9ydCB7IGJ0bkNvbnRhaW5lciwgYnRuSG9tZSwgYnRuTWVudSwgYnRuQ29udGFjdCB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgYnRuQ29udGFpbmVyLCBidG5Ib21lLCBidG5NZW51LCBidG5Db250YWN0IH0gZnJvbSAnLi90YWIuanMnXG5pbXBvcnQgKiBhcyBIb21lIGZyb20gJy4vaG9tZS5qcydcbmltcG9ydCAqIGFzIE1lbnUgZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0ICogYXMgQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnXG5kb2N1bWVudC5ib2R5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbmRvY3VtZW50LmJvZHkuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nXG5cbmNvbnN0IGhlYWRwYXJ0ID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2V0aGVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgY29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWV2ZW5seSdcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZHBhcnQnKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpXG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpXG4gIH1cbiAgcmV0dXJuIHsgc2V0aGVhZCB9XG59KSgpXG5cbmNvbnN0IG1pZHBhcnQgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWlkcGFydCcpXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAvLyBkZWZhdWx0IHBhZ2UgaXMgaG9tZVxuICBjb25zdCBkZWZhdWx0VGFiID0gKCkgPT4ge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChIb21lLnRpdGxlKVxuICB9XG4gIGNvbnN0IHNob3dUYWIgPSAoKSA9PiB7XG4gICAgYnRuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKE1lbnUudGl0bGUpXG4gICAgfSlcbiAgICBidG5Db250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoQ29udGFjdC50aXRsZSlcbiAgICB9KVxuICAgIGJ0bkhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChIb21lLnRpdGxlKVxuICAgIH0pXG4gIH1cbiAgZGVmYXVsdFRhYigpXG4gIHJldHVybiB7IGRlZmF1bHRUYWIsIHNob3dUYWIgfVxufSkoKVxuXG5oZWFkcGFydC5zZXRoZWFkKClcbm1pZHBhcnQuc2hvd1RhYigpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=