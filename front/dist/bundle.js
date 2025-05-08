/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./burgers.js":
/*!********************!*\
  !*** ./burgers.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cheeseburger: () => (/* binding */ Cheeseburger),\n/* harmony export */   Hamburger: () => (/* binding */ Hamburger)\n/* harmony export */ });\nclass Hamburger {\n    static SIZE_CLASSIC = {name: 'hamburger classic size', cost: 60};\n    static SIZE_LARGE = {name: 'hamburger large size', cost: 80};\n\n    static STUFFING_CHEESE = {name: 'sheese', cost: 7};\n    static STUFFING_MEAT = {name: 'meat', cost: 10};\n    static STUFFING_SAUCE = {name: 'sauce', cost: 5};\n\n    constructor(size, stuffings = []) {\n        this.size = size;\n        this.stuffings = stuffings;\n    };\n    \n    addStuffing(stuffing) {\n        this.stuffings.push(stuffing);\n    };\n\n    calculatePrice() {\n        let totalPrice = this.size.cost;\n        for (let stuffing of this.stuffings) {\n            totalPrice += stuffing.cost;\n        }\n        return totalPrice;\n    }\n\n    getDescription() {\n        let stuffingsNames = this.stuffings.map(s => s.name).join(', ');\n        return `Гамбургер (${this.size.name}) з начинками: ${stuffingsNames}. Ціна: ${this.calculatePrice()} грн.`;\n    }\n\n}\n\nclass Cheeseburger extends Hamburger {\n    static SIZE_CLASSIC = {name: 'cheeseburger classic size', cost: 65};\n    static SIZE_LARGE = { name: 'cheeseburger large size', cost: 85 };\n    \n    constructor(size, stuffings = []) {\n     super(size, stuffings);\n    }\n\n    getDescription() {\n        let stuffingsNames = this.stuffings.map(s => s.name).join(', ');\n        return `Чізбургер (${this.size.name}), додатково: ${stuffingsNames}. Ціна: ${this.calculatePrice()} грн.`;\n    }\n}\n\n//# sourceURL=webpack://hillel-front-end-pro/./burgers.js?");

/***/ }),

/***/ "./coffee.js":
/*!*******************!*\
  !*** ./coffee.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cappuccino: () => (/* binding */ Cappuccino),\n/* harmony export */   Latte: () => (/* binding */ Latte)\n/* harmony export */ });\nclass Cappuccino {\n    static SIZE_CLASSIC = {name: 'cappuccino classic size', cost: 40};\n    static SIZE_LARGE = {name: 'cappuccino large size', cost: 60};\n\n    static TOPPING_VANILLA = {name: 'topping vanilla', cost: 5};\n    static TOPPING_CHOCOLATE = {name: 'topping chocolate', cost: 7};\n\n    constructor(size, toppings = []) {\n        this.size = size;\n        this.toppings = toppings;\n    };\n    \n    addToppings(topping) {\n        this.toppings.push(topping);\n    };\n\n    calculatePrice() {\n        let totalPrice = this.size.cost;\n        for (let topping of this.toppings) {\n            totalPrice += topping.cost; \n        }\n        return totalPrice;\n    }\n\n    getDescription() {\n        let toppingsNames = this.toppings.map(t => t.name).join(', ') || 'без топінгів';\n        return `Капучино (${this.size.name}) з: ${toppingsNames}. Ціна: ${this.calculatePrice()} грн.`;\n    }\n}\n\nclass Latte extends Cappuccino {\n    static SIZE_CLASSIC = {name: 'latte classic size', cost: 45};\n    static SIZE_LARGE = { name: 'latte large size', cost: 65 };\n    \n    constructor(size, toppings = []) {\n     super(size, toppings);\n    }\n\n    getDescription() {\n        let toppingsNames = this.toppings.map(t => t.name).join(', ') || 'без топінгів';\n        return `Латте (${this.size.name}) з: ${toppingsNames}. Ціна: ${this.calculatePrice()} грн.`;\n    }\n}\n\n//# sourceURL=webpack://hillel-front-end-pro/./coffee.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _burgers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burgers.js */ \"./burgers.js\");\n/* harmony import */ var _coffee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coffee.js */ \"./coffee.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n\n\n\n\nlet menuButtons = document.querySelector('.menu-div');\nlet containerCoffee = document.querySelector('#container-coffee');\nlet containerBurger = document.querySelector('#container-burger');\nlet containerOrders = document.querySelector('#container-orders');\nlet orders = [];\n\nmenuButtons.addEventListener('click', (e) => {\n    switch (e.target.id) {\n        case 'coffee-btn':\n            containerCoffee.classList.remove('d-none');\n            containerBurger.classList.add('d-none');\n            containerOrders.classList.add('d-none');\n            break;\n        case 'burgers-btn':\n            containerCoffee.classList.add('d-none');\n            containerBurger.classList.remove('d-none');\n            containerOrders.classList.add('d-none');\n            break;\n        case 'orders-btn':\n            showOrders()\n    }\n});\n\nfunction showOrders() {\n    containerCoffee.classList.add('d-none');\n    containerBurger.classList.add('d-none');\n    containerOrders.classList.remove('d-none');\n\n    if (orders.length === 0) {\n            console.log('кошик пустий')\n    } else {\n        let listHTML = '<ul class=\"list-group\">';\n        orders.forEach(order => {\n        listHTML += `<li class=\"list-group-item\">${order.getDescription()}</li>`;\n        });\n    listHTML += '</ul>';\n    listHTML += '<button type=\"button\" class=\"btn btn-primary\" id=\"add-order\">Оформити замовлення</button>'; \n    containerOrders.innerHTML = listHTML;\n    const orderButton = document.querySelector('#add-order');\n        orderButton.addEventListener('click', async () => {\n            await fetch(\"http://localhost:3000/orders\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                },\n                body: JSON.stringify(orders),\n        })    \n        });\n    };\n};\n\n////////////////////////////////////////////////////////////////////////\n////////////////////////////////////////////////////////////////////////\nlet cardButtons = document.querySelectorAll('.card-body > button');\ncardButtons.forEach(button => button.addEventListener('click', (e) => {\n    if (e.target.id === 'add-cappuccino-btn') {\n        let cappuccinoSize;\n        if (document.querySelector('#large-capp').checked){\n            cappuccinoSize = _coffee_js__WEBPACK_IMPORTED_MODULE_1__.Cappuccino.SIZE_LARGE;\n        } else {\n            cappuccinoSize = _coffee_js__WEBPACK_IMPORTED_MODULE_1__.Cappuccino.SIZE_CLASSIC;\n        };\n\n        let selectedToppingsCapp = [];\n        if (document.querySelector('#capp-vanilla').checked) {\n            selectedToppingsCapp.push(_coffee_js__WEBPACK_IMPORTED_MODULE_1__.Cappuccino.TOPPING_VANILLA);\n        }\n        if (document.querySelector('#capp-choco').checked) {\n            selectedToppingsCapp.push(_coffee_js__WEBPACK_IMPORTED_MODULE_1__.Cappuccino.TOPPING_CHOCOLATE);\n        }\n        \n        let cappuccino = new _coffee_js__WEBPACK_IMPORTED_MODULE_1__.Cappuccino(cappuccinoSize, selectedToppingsCapp);\n        orders.push(cappuccino);\n        document.querySelector('#card-cappucino form').reset();\n    } else if (e.target.id === 'add-latte-btn') {\n        let latteSize;\n        if (document.querySelector('#large-latte').checked){\n            latteSize = _coffee_js__WEBPACK_IMPORTED_MODULE_1__.Latte.SIZE_LARGE;\n        } else {\n            latteSize = _coffee_js__WEBPACK_IMPORTED_MODULE_1__.Latte.SIZE_CLASSIC;\n        };\n\n        let selectedToppingsLatte = [];\n        if (document.querySelector('#latte-vanilla').checked) {\n            selectedToppingsLatte.push(_coffee_js__WEBPACK_IMPORTED_MODULE_1__.Latte.TOPPING_VANILLA);\n        }\n        if (document.querySelector('#latte-choco').checked) {\n            selectedToppingsLatte.push(_coffee_js__WEBPACK_IMPORTED_MODULE_1__.Latte.TOPPING_CHOCOLATE);\n        }\n        \n        let latte = new _coffee_js__WEBPACK_IMPORTED_MODULE_1__.Latte(latteSize, selectedToppingsLatte);\n        orders.push(latte);\n        document.querySelector('#card-latte form').reset();\n    } else if (e.target.id === 'add-hamburger-btn') {\n        let hamburgerSize;\n        if (document.querySelector('#large-hamburger').checked){\n            hamburgerSize = _burgers_js__WEBPACK_IMPORTED_MODULE_0__.Hamburger.SIZE_LARGE;\n        } else {\n            hamburgerSize = _burgers_js__WEBPACK_IMPORTED_MODULE_0__.Hamburger.SIZE_CLASSIC;\n        };\n\n        let selectedStuffingsHam = [];\n        if (document.querySelector('#hamburger-cheese').checked) {\n            selectedStuffingsHam.push(_burgers_js__WEBPACK_IMPORTED_MODULE_0__.Hamburger.STUFFING_CHEESE);\n        }\n        if (document.querySelector('#hamburger-meat').checked) {\n            selectedStuffingsHam.push(_burgers_js__WEBPACK_IMPORTED_MODULE_0__.Hamburger.STUFFING_MEAT);\n        }\n        if (document.querySelector('#hamburger-sauce').checked) {\n            selectedStuffingsHam.push(_burgers_js__WEBPACK_IMPORTED_MODULE_0__.Hamburger.STUFFING_SAUCE);\n        };\n\n        let hamburger = new _burgers_js__WEBPACK_IMPORTED_MODULE_0__.Hamburger(hamburgerSize, selectedStuffingsHam);\n        orders.push(hamburger);\n        document.querySelector('#card-hamburger form').reset();\n    } else if (e.target.id === 'add-cheeseburger-btn') {\n        let cheeseburgerSize;\n        if (document.querySelector('#large-сheeseburger').checked){\n            cheeseburgerSize = _burgers_js__WEBPACK_IMPORTED_MODULE_0__.Cheeseburger.SIZE_LARGE;\n        } else {\n            cheeseburgerSize = _burgers_js__WEBPACK_IMPORTED_MODULE_0__.Cheeseburger.SIZE_CLASSIC;\n        };\n\n        let selectedStuffingsCheese = [];\n        if (document.querySelector('#сheeseburger-cheese').checked) {\n            selectedStuffingsCheese.push(_burgers_js__WEBPACK_IMPORTED_MODULE_0__.Cheeseburger.STUFFING_CHEESE);\n        }\n        if (document.querySelector('#сheeseburger-meat').checked) {\n            selectedStuffingsCheese.push(_burgers_js__WEBPACK_IMPORTED_MODULE_0__.Cheeseburger.STUFFING_MEAT);\n        }\n        if (document.querySelector('#сheeseburger-sauce').checked) {\n            selectedStuffingsCheese.push(_burgers_js__WEBPACK_IMPORTED_MODULE_0__.Cheeseburger.STUFFING_SAUCE);\n        };\n\n        let cheeseburger = new _burgers_js__WEBPACK_IMPORTED_MODULE_0__.Cheeseburger(cheeseburgerSize, selectedStuffingsCheese);\n        orders.push(cheeseburger);\n        document.querySelector('#card-cheeseburger form').reset();\n    }\n}));\n\n\n\n\n//# sourceURL=webpack://hillel-front-end-pro/./script.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://hillel-front-end-pro/./style.css?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;