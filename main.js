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
title.style.backgroundImage = "url('../../../distImg/photo.JPG')"
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
// sec tab

const title = document.createElement('div')

title.innerHTML = 'Best pizza maker in the world'
title.classList.add('container')
title.style.backgroundImage = "url('../../../distImg/menu.JPG')"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixVQUFVOztBQUVoQjs7Ozs7Ozs7Ozs7Ozs7O0FDcERoQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCOzs7Ozs7Ozs7Ozs7Ozs7QUNoQmhCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVxRDs7Ozs7OztVQ2ZyRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnFFO0FBQ3BDO0FBQ0E7QUFDTTs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaURBQVk7QUFDdEM7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJDQUFVO0FBQ3BDO0FBQ0E7QUFDQSxJQUFJLDZEQUF3QjtBQUM1QjtBQUNBLDRCQUE0QiwyQ0FBVTtBQUN0QyxLQUFLO0FBQ0wsSUFBSSxnRUFBMkI7QUFDL0I7QUFDQSw0QkFBNEIsOENBQWE7QUFDekMsS0FBSztBQUNMLElBQUksNkRBQXdCO0FBQzVCO0FBQ0EsNEJBQTRCLDJDQUFVO0FBQ3RDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG50aXRsZS5pbm5lckhUTUwgPSAnY29udGFjdCB1cydcblxudGl0bGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xudGl0bGUuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nXG50aXRsZS5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcidcbnRpdGxlLnN0eWxlLmdhcCA9ICc1MHB4J1xudGl0bGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyYXknXG50aXRsZS5zdHlsZS5oZWlnaHQgPSAnOTV2aCdcblxuY29uc3QgZmFjZWJvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZmFjZWJvb2suY2xhc3NMaXN0LmFkZCgnZmFjZWJvb2snKVxuZmFjZWJvb2suc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuY29uc3QgZmFjZWJvb2tzdmcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWZhY2Vib29rXCI+PHBhdGggZD1cIk0xOCAyaC0zYTUgNSAwIDAgMC01IDV2M0g3djRoM3Y4aDR2LThoM2wxLTRoLTRWN2ExIDEgMCAwIDEgMS0xaDN6XCI+PC9wYXRoPjwvc3ZnPidcbmZhY2Vib29rLmlubmVySFRNTCA9IGZhY2Vib29rc3ZnXG50aXRsZS5hcHBlbmRDaGlsZChmYWNlYm9vaylcbmNvbnN0IGZhY2Vib29rdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5mYWNlYm9va3RleHQuaW5uZXJIVE1MID0gJ2ZhY2Vib29rLmNvbSdcbmZhY2Vib29rLmFwcGVuZENoaWxkKGZhY2Vib29rdGV4dClcblxuY29uc3QgaW5zdGFncmFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbmluc3RhZ3JhbS5jbGFzc0xpc3QuYWRkKCdpbnN0YWdyYW0nKVxuaW5zdGFncmFtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbmNvbnN0IGluc3RhZ3JhbXN2ZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItaW5zdGFncmFtXCI+PHJlY3QgeD1cIjJcIiB5PVwiMlwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHJ4PVwiNVwiIHJ5PVwiNVwiPjwvcmVjdD48cGF0aCBkPVwiTTE2IDExLjM3QTQgNCAwIDEgMSAxMi42MyA4IDQgNCAwIDAgMSAxNiAxMS4zN3pcIj48L3BhdGg+PGxpbmUgeDE9XCIxNy41XCIgeTE9XCI2LjVcIiB4Mj1cIjE3LjUxXCIgeTI9XCI2LjVcIj48L2xpbmU+PC9zdmc+J1xuaW5zdGFncmFtLmlubmVySFRNTCA9IGluc3RhZ3JhbXN2Z1xudGl0bGUuYXBwZW5kQ2hpbGQoaW5zdGFncmFtKVxuY29uc3QgaW5zdGFncmFtdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5pbnN0YWdyYW10ZXh0LmlubmVySFRNTCA9ICdpbnN0YWdybS5jb20nXG5pbnN0YWdyYW0uYXBwZW5kQ2hpbGQoaW5zdGFncmFtdGV4dClcblxuY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxucGhvbmUuY2xhc3NMaXN0LmFkZCgncGhvbmUnKVxucGhvbmUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuY29uc3QgcGhvbmVzdmcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXBob25lXCI+PHBhdGggZD1cIk0yMiAxNi45MnYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3IDE5LjUgMTkuNSAwIDAgMS02LTYgMTkuNzkgMTkuNzkgMCAwIDEtMy4wNy04LjY3QTIgMiAwIDAgMSA0LjExIDJoM2EyIDIgMCAwIDEgMiAxLjcyIDEyLjg0IDEyLjg0IDAgMCAwIC43IDIuODEgMiAyIDAgMCAxLS40NSAyLjExTDguMDkgOS45MWExNiAxNiAwIDAgMCA2IDZsMS4yNy0xLjI3YTIgMiAwIDAgMSAyLjExLS40NSAxMi44NCAxMi44NCAwIDAgMCAyLjgxLjdBMiAyIDAgMCAxIDIyIDE2LjkyelwiPjwvcGF0aD48L3N2Zz4nXG5waG9uZS5pbm5lckhUTUwgPSBwaG9uZXN2Z1xudGl0bGUuYXBwZW5kQ2hpbGQocGhvbmUpXG5jb25zdCBwaG9uZXRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxucGhvbmV0ZXh0LmlubmVySFRNTCA9ICcwOTA5MTEzMjUxMzUnXG5waG9uZS5hcHBlbmRDaGlsZChwaG9uZXRleHQpXG5cbmNvbnN0IGdpdGh1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuZ2l0aHViLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL05hVmlzMG1wbGUnXG5naXRodWIuY2xhc3NMaXN0LmFkZCgnZ2l0aHViJylcbmdpdGh1Yi50ZXh0Q29udGVudCA9ICdHaXRIdWInXG5naXRodWIuc3R5bGUuY29sb3IgPSAnYmxhY2snXG5naXRodWIuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSdcbnRpdGxlLmFwcGVuZENoaWxkKGdpdGh1YilcbmNvbnN0IGdpdGh1YnN2ZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItZ2l0aHViXCI+PHBhdGggZD1cIk05IDE5Yy01IDEuNS01LTIuNS03LTNtMTQgNnYtMy44N2EzLjM3IDMuMzcgMCAwIDAtLjk0LTIuNjFjMy4xNC0uMzUgNi40NC0xLjU0IDYuNDQtN0E1LjQ0IDUuNDQgMCAwIDAgMjAgNC43NyA1LjA3IDUuMDcgMCAwIDAgMTkuOTEgMVMxOC43My42NSAxNiAyLjQ4YTEzLjM4IDEzLjM4IDAgMCAwLTcgMEM2LjI3LjY1IDUuMDkgMSA1LjA5IDFBNS4wNyA1LjA3IDAgMCAwIDUgNC43N2E1LjQ0IDUuNDQgMCAwIDAtMS41IDMuNzhjMCA1LjQyIDMuMyA2LjYxIDYuNDQgN0EzLjM3IDMuMzcgMCAwIDAgOSAxOC4xM1YyMlwiPjwvcGF0aD48L3N2Zz4nXG5naXRodWIuaW5uZXJIVE1MID0gYCR7Z2l0aHVic3ZnfU5hVmlzMG1wbGVgXG5cbmV4cG9ydCB7IHRpdGxlIH1cbiIsIi8vIGZpcnN0IGJvZHkgdGFiXG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxudGl0bGUuaW5uZXJIVE1MID0gJ0Jlc3QgcGl6emEgbWFrZXIgaW4gdGhlIHdvcmQnXG50aXRsZS5zdHlsZS5jb2xvciA9ICcjZjFmNWY5J1xudGl0bGUuc3R5bGUuZm9udFNpemUgPSAnNTBweCdcbmNvbnN0IHBhcnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5wYXJ0Mi5pbm5lckhUTUwgPSAncGl6emFhYWFhYWFhYWFhYSdcbnRpdGxlLmFwcGVuZChwYXJ0MilcblxudGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcbnRpdGxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi8uLi8uLi9kaXN0SW1nL3Bob3RvLkpQRycpXCJcbnRpdGxlLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvbnRhaW4nXG50aXRsZS5zdHlsZS5oZWlnaHQgPSAnOTV2aCdcblxuZXhwb3J0IHsgdGl0bGUgfVxuIiwiLy8gc2VjIHRhYlxuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbnRpdGxlLmlubmVySFRNTCA9ICdCZXN0IHBpenphIG1ha2VyIGluIHRoZSB3b3JsZCdcbnRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXG50aXRsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vLi4vLi4vZGlzdEltZy9tZW51LkpQRycpXCJcbnRpdGxlLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvbnRhaW4nXG50aXRsZS5zdHlsZS5oZWlnaHQgPSAnOTV2aCdcbmV4cG9ydCB7IHRpdGxlIH1cbiIsImNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5idG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRuQ29udGFpbmVyJylcblxuY29uc3QgYnRuSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5idG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuSG9tZSlcbmJ0bkhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSdcblxuY29uc3QgYnRuTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5idG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuTWVudSlcbmJ0bk1lbnUudGV4dENvbnRlbnQgPSAnTWVudSdcblxuY29uc3QgYnRuQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5idG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFjdClcbmJ0bkNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCdcblxuZXhwb3J0IHsgYnRuQ29udGFpbmVyLCBidG5Ib21lLCBidG5NZW51LCBidG5Db250YWN0IH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYnRuQ29udGFpbmVyLCBidG5Ib21lLCBidG5NZW51LCBidG5Db250YWN0IH0gZnJvbSAnLi90YWIuanMnXG5pbXBvcnQgKiBhcyBIb21lIGZyb20gJy4vaG9tZS5qcydcbmltcG9ydCAqIGFzIE1lbnUgZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0ICogYXMgQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnXG5cbmRvY3VtZW50LmJvZHkuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuZG9jdW1lbnQuYm9keS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbidcblxuY29uc3QgaGVhZHBhcnQgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBzZXRoZWFkID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICBjb250YWluZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtZXZlbmx5J1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkcGFydCcpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcilcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShjb250YWluZXIsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZClcbiAgfVxuICByZXR1cm4geyBzZXRoZWFkIH1cbn0pKClcblxuY29uc3QgbWlkcGFydCA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtaWRwYXJ0JylcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gIC8vIGRlZmF1bHQgcGFnZSBpcyBob21lXG4gIGNvbnN0IGRlZmF1bHRUYWIgPSAoKSA9PiB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKEhvbWUudGl0bGUpXG4gIH1cbiAgY29uc3Qgc2hvd1RhYiA9ICgpID0+IHtcbiAgICBidG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoTWVudS50aXRsZSlcbiAgICB9KVxuICAgIGJ0bkNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChDb250YWN0LnRpdGxlKVxuICAgIH0pXG4gICAgYnRuSG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKEhvbWUudGl0bGUpXG4gICAgfSlcbiAgfVxuICBkZWZhdWx0VGFiKClcbiAgcmV0dXJuIHsgZGVmYXVsdFRhYiwgc2hvd1RhYiB9XG59KSgpXG5cbmhlYWRwYXJ0LnNldGhlYWQoKVxubWlkcGFydC5zaG93VGFiKClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==