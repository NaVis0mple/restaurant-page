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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.js */ "./src/tab.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var https_navis0mple_github_io_restaurant_page_distImg_photo_JPG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! https://navis0mple.github.io/restaurant-page/distImg/photo.JPG */ "https://navis0mple.github.io/restaurant-page/distImg/photo.JPG");
/* harmony import */ var https_navis0mple_github_io_restaurant_page_distImg_menu_JPG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! https://navis0mple.github.io/restaurant-page/distImg/menu.JPG */ "https://navis0mple.github.io/restaurant-page/distImg/menu.JPG");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_navis0mple_github_io_restaurant_page_distImg_photo_JPG__WEBPACK_IMPORTED_MODULE_4__, https_navis0mple_github_io_restaurant_page_distImg_menu_JPG__WEBPACK_IMPORTED_MODULE_5__]);
([https_navis0mple_github_io_restaurant_page_distImg_photo_JPG__WEBPACK_IMPORTED_MODULE_4__, https_navis0mple_github_io_restaurant_page_distImg_menu_JPG__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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




/***/ }),

/***/ "https://navis0mple.github.io/restaurant-page/distImg/menu.JPG":
false,

/***/ "https://navis0mple.github.io/restaurant-page/distImg/photo.JPG":
false

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixVQUFVOztBQUVoQjs7Ozs7Ozs7Ozs7Ozs7O0FDcERoQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQnFEO0FBQ3BDO0FBQ0E7QUFDTTtBQUMwQztBQUNBOztBQUVqRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpREFBWTtBQUN0QztBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkNBQVU7QUFDcEM7QUFDQTtBQUNBLElBQUksNkRBQXdCO0FBQzVCO0FBQ0EsNEJBQTRCLDJDQUFVO0FBQ3RDLEtBQUs7QUFDTCxJQUFJLGdFQUEyQjtBQUMvQjtBQUNBLDRCQUE0Qiw4Q0FBYTtBQUN6QyxLQUFLO0FBQ0wsSUFBSSw2REFBd0I7QUFDNUI7QUFDQSw0QkFBNEIsMkNBQVU7QUFDdEMsS0FBSztBQUNMO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFcUQ7Ozs7Ozs7Ozs7Ozs7VUNmckQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxDQUFDO1dBQ0Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBLHNHQUFzRztXQUN0RztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7Ozs7O1dDaEVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG50aXRsZS5pbm5lckhUTUwgPSAnY29udGFjdCB1cydcblxudGl0bGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xudGl0bGUuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nXG50aXRsZS5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcidcbnRpdGxlLnN0eWxlLmdhcCA9ICc1MHB4J1xudGl0bGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyYXknXG50aXRsZS5zdHlsZS5oZWlnaHQgPSAnOTV2aCdcblxuY29uc3QgZmFjZWJvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZmFjZWJvb2suY2xhc3NMaXN0LmFkZCgnZmFjZWJvb2snKVxuZmFjZWJvb2suc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuY29uc3QgZmFjZWJvb2tzdmcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWZhY2Vib29rXCI+PHBhdGggZD1cIk0xOCAyaC0zYTUgNSAwIDAgMC01IDV2M0g3djRoM3Y4aDR2LThoM2wxLTRoLTRWN2ExIDEgMCAwIDEgMS0xaDN6XCI+PC9wYXRoPjwvc3ZnPidcbmZhY2Vib29rLmlubmVySFRNTCA9IGZhY2Vib29rc3ZnXG50aXRsZS5hcHBlbmRDaGlsZChmYWNlYm9vaylcbmNvbnN0IGZhY2Vib29rdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5mYWNlYm9va3RleHQuaW5uZXJIVE1MID0gJ2ZhY2Vib29rLmNvbSdcbmZhY2Vib29rLmFwcGVuZENoaWxkKGZhY2Vib29rdGV4dClcblxuY29uc3QgaW5zdGFncmFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbmluc3RhZ3JhbS5jbGFzc0xpc3QuYWRkKCdpbnN0YWdyYW0nKVxuaW5zdGFncmFtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbmNvbnN0IGluc3RhZ3JhbXN2ZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItaW5zdGFncmFtXCI+PHJlY3QgeD1cIjJcIiB5PVwiMlwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHJ4PVwiNVwiIHJ5PVwiNVwiPjwvcmVjdD48cGF0aCBkPVwiTTE2IDExLjM3QTQgNCAwIDEgMSAxMi42MyA4IDQgNCAwIDAgMSAxNiAxMS4zN3pcIj48L3BhdGg+PGxpbmUgeDE9XCIxNy41XCIgeTE9XCI2LjVcIiB4Mj1cIjE3LjUxXCIgeTI9XCI2LjVcIj48L2xpbmU+PC9zdmc+J1xuaW5zdGFncmFtLmlubmVySFRNTCA9IGluc3RhZ3JhbXN2Z1xudGl0bGUuYXBwZW5kQ2hpbGQoaW5zdGFncmFtKVxuY29uc3QgaW5zdGFncmFtdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5pbnN0YWdyYW10ZXh0LmlubmVySFRNTCA9ICdpbnN0YWdybS5jb20nXG5pbnN0YWdyYW0uYXBwZW5kQ2hpbGQoaW5zdGFncmFtdGV4dClcblxuY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxucGhvbmUuY2xhc3NMaXN0LmFkZCgncGhvbmUnKVxucGhvbmUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuY29uc3QgcGhvbmVzdmcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXBob25lXCI+PHBhdGggZD1cIk0yMiAxNi45MnYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3IDE5LjUgMTkuNSAwIDAgMS02LTYgMTkuNzkgMTkuNzkgMCAwIDEtMy4wNy04LjY3QTIgMiAwIDAgMSA0LjExIDJoM2EyIDIgMCAwIDEgMiAxLjcyIDEyLjg0IDEyLjg0IDAgMCAwIC43IDIuODEgMiAyIDAgMCAxLS40NSAyLjExTDguMDkgOS45MWExNiAxNiAwIDAgMCA2IDZsMS4yNy0xLjI3YTIgMiAwIDAgMSAyLjExLS40NSAxMi44NCAxMi44NCAwIDAgMCAyLjgxLjdBMiAyIDAgMCAxIDIyIDE2LjkyelwiPjwvcGF0aD48L3N2Zz4nXG5waG9uZS5pbm5lckhUTUwgPSBwaG9uZXN2Z1xudGl0bGUuYXBwZW5kQ2hpbGQocGhvbmUpXG5jb25zdCBwaG9uZXRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxucGhvbmV0ZXh0LmlubmVySFRNTCA9ICcwOTA5MTEzMjUxMzUnXG5waG9uZS5hcHBlbmRDaGlsZChwaG9uZXRleHQpXG5cbmNvbnN0IGdpdGh1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuZ2l0aHViLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL05hVmlzMG1wbGUnXG5naXRodWIuY2xhc3NMaXN0LmFkZCgnZ2l0aHViJylcbmdpdGh1Yi50ZXh0Q29udGVudCA9ICdHaXRIdWInXG5naXRodWIuc3R5bGUuY29sb3IgPSAnYmxhY2snXG5naXRodWIuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSdcbnRpdGxlLmFwcGVuZENoaWxkKGdpdGh1YilcbmNvbnN0IGdpdGh1YnN2ZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItZ2l0aHViXCI+PHBhdGggZD1cIk05IDE5Yy01IDEuNS01LTIuNS03LTNtMTQgNnYtMy44N2EzLjM3IDMuMzcgMCAwIDAtLjk0LTIuNjFjMy4xNC0uMzUgNi40NC0xLjU0IDYuNDQtN0E1LjQ0IDUuNDQgMCAwIDAgMjAgNC43NyA1LjA3IDUuMDcgMCAwIDAgMTkuOTEgMVMxOC43My42NSAxNiAyLjQ4YTEzLjM4IDEzLjM4IDAgMCAwLTcgMEM2LjI3LjY1IDUuMDkgMSA1LjA5IDFBNS4wNyA1LjA3IDAgMCAwIDUgNC43N2E1LjQ0IDUuNDQgMCAwIDAtMS41IDMuNzhjMCA1LjQyIDMuMyA2LjYxIDYuNDQgN0EzLjM3IDMuMzcgMCAwIDAgOSAxOC4xM1YyMlwiPjwvcGF0aD48L3N2Zz4nXG5naXRodWIuaW5uZXJIVE1MID0gYCR7Z2l0aHVic3ZnfU5hVmlzMG1wbGVgXG5cbmV4cG9ydCB7IHRpdGxlIH1cbiIsIi8vIGZpcnN0IGJvZHkgdGFiXG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxudGl0bGUuaW5uZXJIVE1MID0gJ0Jlc3QgcGl6emEgbWFrZXIgaW4gdGhlIHdvcmQnXG50aXRsZS5zdHlsZS5jb2xvciA9ICcjZjFmNWY5J1xudGl0bGUuc3R5bGUuZm9udFNpemUgPSAnNTBweCdcbmNvbnN0IHBhcnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5wYXJ0Mi5pbm5lckhUTUwgPSAncGl6emFhYWFhYWFhYWFhYSdcbnRpdGxlLmFwcGVuZChwYXJ0MilcblxudGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcbnRpdGxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdodHRwczovL25hdmlzMG1wbGUuZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcGFnZS9kaXN0SW1nL3Bob3RvLkpQRycpXCJcbnRpdGxlLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvbnRhaW4nXG50aXRsZS5zdHlsZS5oZWlnaHQgPSAnOTV2aCdcblxuZXhwb3J0IHsgdGl0bGUgfVxuIiwiaW1wb3J0IHsgYnRuQ29udGFpbmVyLCBidG5Ib21lLCBidG5NZW51LCBidG5Db250YWN0IH0gZnJvbSAnLi90YWIuanMnXG5pbXBvcnQgKiBhcyBIb21lIGZyb20gJy4vaG9tZS5qcydcbmltcG9ydCAqIGFzIE1lbnUgZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0ICogYXMgQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnXG5pbXBvcnQgaW1nIGZyb20gJ2h0dHBzOi8vbmF2aXMwbXBsZS5naXRodWIuaW8vcmVzdGF1cmFudC1wYWdlL2Rpc3RJbWcvcGhvdG8uSlBHJztcbmltcG9ydCBpbWcxIGZyb20gJ2h0dHBzOi8vbmF2aXMwbXBsZS5naXRodWIuaW8vcmVzdGF1cmFudC1wYWdlL2Rpc3RJbWcvbWVudS5KUEcnO1xuXG5kb2N1bWVudC5ib2R5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbmRvY3VtZW50LmJvZHkuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nXG5cbmNvbnN0IGhlYWRwYXJ0ID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2V0aGVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgY29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWV2ZW5seSdcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZHBhcnQnKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpXG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpXG4gIH1cbiAgcmV0dXJuIHsgc2V0aGVhZCB9XG59KSgpXG5cbmNvbnN0IG1pZHBhcnQgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWlkcGFydCcpXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAvLyBkZWZhdWx0IHBhZ2UgaXMgaG9tZVxuICBjb25zdCBkZWZhdWx0VGFiID0gKCkgPT4ge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChIb21lLnRpdGxlKVxuICB9XG4gIGNvbnN0IHNob3dUYWIgPSAoKSA9PiB7XG4gICAgYnRuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKE1lbnUudGl0bGUpXG4gICAgfSlcbiAgICBidG5Db250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoQ29udGFjdC50aXRsZSlcbiAgICB9KVxuICAgIGJ0bkhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChIb21lLnRpdGxlKVxuICAgIH0pXG4gIH1cbiAgZGVmYXVsdFRhYigpXG4gIHJldHVybiB7IGRlZmF1bHRUYWIsIHNob3dUYWIgfVxufSkoKVxuXG5oZWFkcGFydC5zZXRoZWFkKClcbm1pZHBhcnQuc2hvd1RhYigpXG4iLCIvLyBzZWMgdGFiXG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxudGl0bGUuaW5uZXJIVE1MID0gJ0Jlc3QgcGl6emEgbWFrZXIgaW4gdGhlIHdvcmxkJ1xudGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcbnRpdGxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdodHRwczovL25hdmlzMG1wbGUuZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcGFnZS9kaXN0SW1nL21lbnUuSlBHJylcIlxudGl0bGUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY29udGFpbidcbnRpdGxlLnN0eWxlLmhlaWdodCA9ICc5NXZoJ1xuZXhwb3J0IHsgdGl0bGUgfVxuIiwiY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidG5Db250YWluZXInKVxuXG5jb25zdCBidG5Ib21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Ib21lKVxuYnRuSG9tZS50ZXh0Q29udGVudCA9ICdIb21lJ1xuXG5jb25zdCBidG5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5NZW51KVxuYnRuTWVudS50ZXh0Q29udGVudCA9ICdNZW51J1xuXG5jb25zdCBidG5Db250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWN0KVxuYnRuQ29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0J1xuXG5leHBvcnQgeyBidG5Db250YWluZXIsIGJ0bkhvbWUsIGJ0bk1lbnUsIGJ0bkNvbnRhY3QgfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInZhciB3ZWJwYWNrUXVldWVzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBxdWV1ZXNcIikgOiBcIl9fd2VicGFja19xdWV1ZXNfX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgd2VicGFja0Vycm9yID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBlcnJvclwiKSA6IFwiX193ZWJwYWNrX2Vycm9yX19cIjtcbnZhciByZXNvbHZlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUgJiYgIXF1ZXVlLmQpIHtcblx0XHRxdWV1ZS5kID0gMTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9LCAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSkpO1xuXHRxdWV1ZSAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9