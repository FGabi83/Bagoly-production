/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/javascripts/modules/accordion.js":
/*!*************************************************!*\
  !*** ./public/javascripts/modules/accordion.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function accordion() {
  var button = document.querySelector('.js-accordion--btn');
  var content = document.querySelector('.js-accordion--content');
  function toggleText() {
    if (button.textContent === 'Tovább') {
      button.textContent = 'Vissza';
    } else {
      button.textContent = 'Tovább';
    }
  }
  button.addEventListener('click', function () {
    content.classList.toggle('js-active');
    console.log(content);
    toggleText();
  });
}
;
/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./public/javascripts/modules/activeNavItem.js":
/*!*****************************************************!*\
  !*** ./public/javascripts/modules/activeNavItem.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function activeNavItem() {
  var links = document.querySelectorAll('.js-nav--item');
  var path = window.location.pathname;
  var pathArray = path.split('/');
  var currentPath = pathArray[pathArray.length - 1];
  links.forEach(function (link) {
    var linkPath = link.getAttribute('href');
    var linkArray = linkPath.split('/');
    var linkCurrentPath = linkArray[linkArray.length - 1];
    if (linkCurrentPath === currentPath || linkCurrentPath + ".html" === currentPath) {
      link.classList.add('js-nav--item__active');
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (activeNavItem);

/***/ }),

/***/ "./public/javascripts/modules/dropdownMenu.js":
/*!****************************************************!*\
  !*** ./public/javascripts/modules/dropdownMenu.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function dropdownMenu() {
  var navMenu = document.querySelector(".js-nav--menu");
  var navWrapper = document.querySelector(".js-nav--wrapper");
  navMenu.addEventListener("click", function () {
    navWrapper.classList.toggle("js-is-open");
    navMenu.classList.toggle("js-highlight");
  });
}
/* harmony default export */ __webpack_exports__["default"] = (dropdownMenu);

/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!******************************************!*\
  !*** ./public/javascripts/bagoly-app.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./public/css/style.css");
/* harmony import */ var _modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dropdownMenu */ "./public/javascripts/modules/dropdownMenu.js");
/* harmony import */ var _modules_activeNavItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/activeNavItem */ "./public/javascripts/modules/activeNavItem.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordion */ "./public/javascripts/modules/accordion.js");




(0,_modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_activeNavItem__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_accordion__WEBPACK_IMPORTED_MODULE_3__["default"])();
}();
/******/ })()
;
//# sourceMappingURL=App.bundle.js.map