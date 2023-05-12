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
// sec tab

const title = document.createElement('div')

title.innerHTML = 'Best pizza maker in the world'
title.classList.add('container')
title.style.backgroundImage = "url('https://navis0mple.github.io/restaurant-page/distImg/menu.JPG')"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixVQUFVOztBQUVoQjs7Ozs7Ozs7Ozs7Ozs7O0FDcERoQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCOzs7Ozs7Ozs7Ozs7Ozs7QUNoQmhCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVxRDs7Ozs7OztVQ2ZyRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnFFO0FBQ3BDO0FBQ0E7QUFDTTtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpREFBWTtBQUN0QztBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkNBQVU7QUFDcEM7QUFDQTtBQUNBLElBQUksNkRBQXdCO0FBQzVCO0FBQ0EsNEJBQTRCLDJDQUFVO0FBQ3RDLEtBQUs7QUFDTCxJQUFJLGdFQUEyQjtBQUMvQjtBQUNBLDRCQUE0Qiw4Q0FBYTtBQUN6QyxLQUFLO0FBQ0wsSUFBSSw2REFBd0I7QUFDNUI7QUFDQSw0QkFBNEIsMkNBQVU7QUFDdEMsS0FBSztBQUNMO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbnRpdGxlLmlubmVySFRNTCA9ICdjb250YWN0IHVzJ1xuXG50aXRsZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG50aXRsZS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbidcbnRpdGxlLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJ1xudGl0bGUuc3R5bGUuZ2FwID0gJzUwcHgnXG50aXRsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JheSdcbnRpdGxlLnN0eWxlLmhlaWdodCA9ICc5NXZoJ1xuXG5jb25zdCBmYWNlYm9vayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5mYWNlYm9vay5jbGFzc0xpc3QuYWRkKCdmYWNlYm9vaycpXG5mYWNlYm9vay5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG5jb25zdCBmYWNlYm9va3N2ZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItZmFjZWJvb2tcIj48cGF0aCBkPVwiTTE4IDJoLTNhNSA1IDAgMCAwLTUgNXYzSDd2NGgzdjhoNHYtOGgzbDEtNGgtNFY3YTEgMSAwIDAgMSAxLTFoM3pcIj48L3BhdGg+PC9zdmc+J1xuZmFjZWJvb2suaW5uZXJIVE1MID0gZmFjZWJvb2tzdmdcbnRpdGxlLmFwcGVuZENoaWxkKGZhY2Vib29rKVxuY29uc3QgZmFjZWJvb2t0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmZhY2Vib29rdGV4dC5pbm5lckhUTUwgPSAnZmFjZWJvb2suY29tJ1xuZmFjZWJvb2suYXBwZW5kQ2hpbGQoZmFjZWJvb2t0ZXh0KVxuXG5jb25zdCBpbnN0YWdyYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaW5zdGFncmFtLmNsYXNzTGlzdC5hZGQoJ2luc3RhZ3JhbScpXG5pbnN0YWdyYW0uc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuY29uc3QgaW5zdGFncmFtc3ZnID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1pbnN0YWdyYW1cIj48cmVjdCB4PVwiMlwiIHk9XCIyXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgcng9XCI1XCIgcnk9XCI1XCI+PC9yZWN0PjxwYXRoIGQ9XCJNMTYgMTEuMzdBNCA0IDAgMSAxIDEyLjYzIDggNCA0IDAgMCAxIDE2IDExLjM3elwiPjwvcGF0aD48bGluZSB4MT1cIjE3LjVcIiB5MT1cIjYuNVwiIHgyPVwiMTcuNTFcIiB5Mj1cIjYuNVwiPjwvbGluZT48L3N2Zz4nXG5pbnN0YWdyYW0uaW5uZXJIVE1MID0gaW5zdGFncmFtc3ZnXG50aXRsZS5hcHBlbmRDaGlsZChpbnN0YWdyYW0pXG5jb25zdCBpbnN0YWdyYW10ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbmluc3RhZ3JhbXRleHQuaW5uZXJIVE1MID0gJ2luc3RhZ3JtLmNvbSdcbmluc3RhZ3JhbS5hcHBlbmRDaGlsZChpbnN0YWdyYW10ZXh0KVxuXG5jb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5waG9uZS5jbGFzc0xpc3QuYWRkKCdwaG9uZScpXG5waG9uZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG5jb25zdCBwaG9uZXN2ZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItcGhvbmVcIj48cGF0aCBkPVwiTTIyIDE2LjkydjNhMiAyIDAgMCAxLTIuMTggMiAxOS43OSAxOS43OSAwIDAgMS04LjYzLTMuMDcgMTkuNSAxOS41IDAgMCAxLTYtNiAxOS43OSAxOS43OSAwIDAgMS0zLjA3LTguNjdBMiAyIDAgMCAxIDQuMTEgMmgzYTIgMiAwIDAgMSAyIDEuNzIgMTIuODQgMTIuODQgMCAwIDAgLjcgMi44MSAyIDIgMCAwIDEtLjQ1IDIuMTFMOC4wOSA5LjkxYTE2IDE2IDAgMCAwIDYgNmwxLjI3LTEuMjdhMiAyIDAgMCAxIDIuMTEtLjQ1IDEyLjg0IDEyLjg0IDAgMCAwIDIuODEuN0EyIDIgMCAwIDEgMjIgMTYuOTJ6XCI+PC9wYXRoPjwvc3ZnPidcbnBob25lLmlubmVySFRNTCA9IHBob25lc3ZnXG50aXRsZS5hcHBlbmRDaGlsZChwaG9uZSlcbmNvbnN0IHBob25ldGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5waG9uZXRleHQuaW5uZXJIVE1MID0gJzA5MDkxMTMyNTEzNSdcbnBob25lLmFwcGVuZENoaWxkKHBob25ldGV4dClcblxuY29uc3QgZ2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG5naXRodWIuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vTmFWaXMwbXBsZSdcbmdpdGh1Yi5jbGFzc0xpc3QuYWRkKCdnaXRodWInKVxuZ2l0aHViLnRleHRDb250ZW50ID0gJ0dpdEh1YidcbmdpdGh1Yi5zdHlsZS5jb2xvciA9ICdibGFjaydcbmdpdGh1Yi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJ1xudGl0bGUuYXBwZW5kQ2hpbGQoZ2l0aHViKVxuY29uc3QgZ2l0aHVic3ZnID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1naXRodWJcIj48cGF0aCBkPVwiTTkgMTljLTUgMS41LTUtMi41LTctM20xNCA2di0zLjg3YTMuMzcgMy4zNyAwIDAgMC0uOTQtMi42MWMzLjE0LS4zNSA2LjQ0LTEuNTQgNi40NC03QTUuNDQgNS40NCAwIDAgMCAyMCA0Ljc3IDUuMDcgNS4wNyAwIDAgMCAxOS45MSAxUzE4LjczLjY1IDE2IDIuNDhhMTMuMzggMTMuMzggMCAwIDAtNyAwQzYuMjcuNjUgNS4wOSAxIDUuMDkgMUE1LjA3IDUuMDcgMCAwIDAgNSA0Ljc3YTUuNDQgNS40NCAwIDAgMC0xLjUgMy43OGMwIDUuNDIgMy4zIDYuNjEgNi40NCA3QTMuMzcgMy4zNyAwIDAgMCA5IDE4LjEzVjIyXCI+PC9wYXRoPjwvc3ZnPidcbmdpdGh1Yi5pbm5lckhUTUwgPSBgJHtnaXRodWJzdmd9TmFWaXMwbXBsZWBcblxuZXhwb3J0IHsgdGl0bGUgfVxuIiwiLy8gZmlyc3QgYm9keSB0YWJcblxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG50aXRsZS5pbm5lckhUTUwgPSAnQmVzdCBwaXp6YSBtYWtlciBpbiB0aGUgd29yZCdcbnRpdGxlLnN0eWxlLmNvbG9yID0gJyNmMWY1ZjknXG50aXRsZS5zdHlsZS5mb250U2l6ZSA9ICc1MHB4J1xuY29uc3QgcGFydDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbnBhcnQyLmlubmVySFRNTCA9ICdwaXp6YWFhYWFhYWFhYWFhJ1xudGl0bGUuYXBwZW5kKHBhcnQyKVxuXG50aXRsZS5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxudGl0bGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2h0dHBzOi8vbmF2aXMwbXBsZS5naXRodWIuaW8vcmVzdGF1cmFudC1wYWdlL2Rpc3RJbWcvcGhvdG8uSlBHJylcIlxudGl0bGUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY29udGFpbidcbnRpdGxlLnN0eWxlLmhlaWdodCA9ICc5NXZoJ1xuXG5leHBvcnQgeyB0aXRsZSB9XG4iLCIvLyBzZWMgdGFiXG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxudGl0bGUuaW5uZXJIVE1MID0gJ0Jlc3QgcGl6emEgbWFrZXIgaW4gdGhlIHdvcmxkJ1xudGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcbnRpdGxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdodHRwczovL25hdmlzMG1wbGUuZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcGFnZS9kaXN0SW1nL21lbnUuSlBHJylcIlxudGl0bGUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY29udGFpbidcbnRpdGxlLnN0eWxlLmhlaWdodCA9ICc5NXZoJ1xuZXhwb3J0IHsgdGl0bGUgfVxuIiwiY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidG5Db250YWluZXInKVxuXG5jb25zdCBidG5Ib21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Ib21lKVxuYnRuSG9tZS50ZXh0Q29udGVudCA9ICdIb21lJ1xuXG5jb25zdCBidG5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5NZW51KVxuYnRuTWVudS50ZXh0Q29udGVudCA9ICdNZW51J1xuXG5jb25zdCBidG5Db250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWN0KVxuYnRuQ29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0J1xuXG5leHBvcnQgeyBidG5Db250YWluZXIsIGJ0bkhvbWUsIGJ0bk1lbnUsIGJ0bkNvbnRhY3QgfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBidG5Db250YWluZXIsIGJ0bkhvbWUsIGJ0bk1lbnUsIGJ0bkNvbnRhY3QgfSBmcm9tICcuL3RhYi5qcydcbmltcG9ydCAqIGFzIEhvbWUgZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0ICogYXMgTWVudSBmcm9tICcuL21lbnUuanMnXG5pbXBvcnQgKiBhcyBDb250YWN0IGZyb20gJy4vY29udGFjdC5qcydcbmRvY3VtZW50LmJvZHkuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuZG9jdW1lbnQuYm9keS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbidcblxuY29uc3QgaGVhZHBhcnQgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBzZXRoZWFkID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICBjb250YWluZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtZXZlbmx5J1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkcGFydCcpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcilcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShjb250YWluZXIsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZClcbiAgfVxuICByZXR1cm4geyBzZXRoZWFkIH1cbn0pKClcblxuY29uc3QgbWlkcGFydCA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtaWRwYXJ0JylcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gIC8vIGRlZmF1bHQgcGFnZSBpcyBob21lXG4gIGNvbnN0IGRlZmF1bHRUYWIgPSAoKSA9PiB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKEhvbWUudGl0bGUpXG4gIH1cbiAgY29uc3Qgc2hvd1RhYiA9ICgpID0+IHtcbiAgICBidG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoTWVudS50aXRsZSlcbiAgICB9KVxuICAgIGJ0bkNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChDb250YWN0LnRpdGxlKVxuICAgIH0pXG4gICAgYnRuSG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKEhvbWUudGl0bGUpXG4gICAgfSlcbiAgfVxuICBkZWZhdWx0VGFiKClcbiAgcmV0dXJuIHsgZGVmYXVsdFRhYiwgc2hvd1RhYiB9XG59KSgpXG5cbmhlYWRwYXJ0LnNldGhlYWQoKVxubWlkcGFydC5zaG93VGFiKClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==