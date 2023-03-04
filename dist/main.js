/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderAbout = () => {
  
  const main = document.querySelector("main")

  const aboutSection = document.createElement("section")
  aboutSection.id = "about"
  aboutSection.classList.add("section","about-section","display-none")
  aboutSection.innerHTML = `
  <h1>About</h1>
  <p>I'm a longtime vegetarian, and an even longer-time lover of Indian food, so I thought to create the menu for possibly the ideal restaurant for me.</p>
  <p>The term <dfn aria-describedby="#definition">ahimsa</dfn> refers to <span id="definition">nonviolence toward all living things</span>, and seemed the perfect name for this project. So perfect, in fact, that there are vegan and vegetarian restaurants with this name everywhere. This project is not affiliated with any of them, nor have I taken any of the menus, descriptions, prices, or pictures from any of them.</p>
  <p>All pictures are taken from freesites like MyStock and Pixabay. Descriptions of food items are adapted from Wikipedia entries. Prices are based on my own impressions.</p>
  <p>Enjoy!</p>
  `

  main.appendChild(aboutSection)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAbout);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderContact = () => {
  
  const main = document.querySelector("main")

  const contactSection = document.createElement("section")
  contactSection.id = "contact"
  contactSection.classList.add("section","contact-section","display-none")
  contactSection.innerHTML = `
    <h1>Contact Us</h1>
    <form action="" method="">
      <div class="form-inputs">
          <div class="formgroup required">
              <label for="fullname">Name</label>
              <input type="text" name="fullname" id="fullname" required>
          </div>
          <div class="formgroup required">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" required>
          </div>
          <div class="formgroup">
              <label for="phone">Phone</label>
              <input type="tel" name="phone" id="phone">
          </div>
          <div class="formgroup required">
              <label for="message">Message</label>
              <textarea id="message" name="message" required></textarea>
          </div>
      </div>
      <button type="submit">Send Message</button>
    </form>
  `

  main.appendChild(contactSection)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderFooter = () => {

  const currentYear = new Date().getFullYear()

  const footer = document.createElement("footer")
  footer.classList.add("site-footer")
  footer.innerHTML = `
    <p class="colophon">&copy;${currentYear} Kevin Missett</p>
  `
  document.body.appendChild(footer)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderFooter);

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderHeader = () => {

  const header = document.createElement("header")
  header.classList.add("site-header")
  header.innerHTML = `
  <div class="site-title">Ahimsa</div>
    <nav class="site-nav">
      <button class="nav-button" data-section="home">Home</button>
      <button class="nav-button" data-section="menu">Menu</button>
      <button class="nav-button" data-section="about">About</button>
      <button class="nav-button" data-section="contact">Contact</button>
    </nav>`
  document.body.appendChild(header)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHeader);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderHome = () => {
  
  const main = document.querySelector("main")

  const homeSection = document.createElement("section")
  homeSection.id = "home"
  homeSection.classList.add("section","home-section", "display-none")
  homeSection.innerHTML = `<h1>Welcome!</h1>`

  main.appendChild(homeSection)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.json */ "./src/menu.json");

// menu categories given by menuJSON[i]
// category name = menuJSON[i].category
// items subarray = menuJSON[i].category.items
// individual item = menuJSON[i].category.items[j]
// item values = name, description, price, gfAvailable, veganAvailable

// TODO: add pictures

class Menu {
  constructor(menu) {
    this.categories = [...menu]
  }

  buildMenuItem(item) {
    const gfSpan = (item.gfAvailable) ? ` <span class="gfa" aria-label="available gluten-free">(g)</span>` : ""
    const veganSpan = (item.veganAvailable) ? ` <span class="va" aria-label="available vegan">(v)</span>` : ""
    return `<li><h3>${item.name}</h3><p class="price">${item.price}</p><p class="description">${item.description}${gfSpan}${veganSpan}</p></li>`
  }

  buildMenuCategory(category) {
    const translation = (category.translation) ? '<p class="translation">' + category.translation + '</p>' : ""
    let menuItems = ""
    for (let i=0; i < category.items.length; i++) {menuItems += this.buildMenuItem(category.items[i])}
    return `<div class="menu-category"><header class="menu-category-header"><h2>${category.category}</h2>${translation}</header><ul>${menuItems}</ul></div>`
  }
}

const renderMenu = () => {
  
  const menu = new Menu(_menu_json__WEBPACK_IMPORTED_MODULE_0__)
  
  const menuSection = document.createElement("section")
  menuSection.id = "menu"
  menuSection.classList.add("section","menu-section","display-none")
  
  let menuSectionInner = "<header class=\"menu-header\"><h1>Our Menu</h1><p><span>(v): vegan available</span><span>(g): gluten-free available</span></p></header>"
  for(let i=0; i < menu.categories.length; i++) {menuSectionInner += menu.buildMenuCategory(menu.categories[i])}
  menuSection.innerHTML = menuSectionInner
  
  document.querySelector("main").appendChild(menuSection)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);

/***/ }),

/***/ "./src/menu.json":
/*!***********************!*\
  !*** ./src/menu.json ***!
  \***********************/
/***/ ((module) => {

module.exports = JSON.parse('[{"category":"chaat","translation":"snacks","items":[{"name":"samosa","description":"crispy fried turnovers stuffed with green peas and potatoes","price":6,"veganAvailable":true},{"name":"gobi pakora","description":"fresh cauliflower deep-fried in a spiced chickpea batter","price":8,"veganAvailable":true},{"name":"kadhi pakora","description":"onion fritters simmered in a creamy, tangy, and spiced yogurt curry","price":14,"gfAvailable":true},{"name":"dahi vada","description":"fried dumplings made from a spiced chickpea batter, then soaked in a yogurt sauce and topped with chaat masala","price":8},{"name":"aloo chaat","description":"parboiled potatoes, fried and mixed with chopped onions, spices, and chutney","price":6,"gfAvailable":true,"veganAvailable":true}]},{"category":"paneer","translation":"cheese cubes","items":[{"name":"palak paneer","description":"paneer cooked with fresh chopped spinach and herbs","price":14,"gfAvailable":true},{"name":"paneer tikka masala","description":"cheese broiled in tandoor and cooked in a rich creamy tomato, onion sauce with ginger, garlic, and herbs","price":15.5,"gfAvailable":true},{"name":"shahi paneer","description":"homemade cheese cubes cooked in a creamy tomato and onion sauce","price":14,"gfAvailable":true}]},{"category":"aloo","translation":"potatoes","items":[{"name":"aloo gobhi","description":"fresh cauliflower and potatoes cooked with ginger, garlic, tomatoes, and spices","price":14,"gfAvailable":true,"veganAvailable":true},{"name":"dum aloo","description":"spiced potatoes with homemade cheese","price":14,"gfAvailable":true},{"name":"aloo tikki","description":"fried potato patties, filled with a spiced pea mixture, served with an array of sauces","price":14,"gfAvailable":true,"veganAvailable":true}]},{"category":"dal","translation":"lentils","items":[{"name":"dal makhani","description":"lentils cooked with green onions, ginger, garlic, and choice of chef\'s herbs","price":13,"gfAvailable":true,"veganAvailable":true},{"name":"palak dal","description":"lentils with spinach, topped with an oil infused with cumin, mustard seed, and curry leaves","price":13,"gfAvailable":true,"veganAvailable":true}]},{"category":"chana","translation":"chickpeas","items":[{"name":"punjabi chana","description":"chickpeas, onions, and fresh tomatoes cooked in traditional spices","price":13,"gfAvailable":true,"veganAvailable":true}]},{"category":"subzi","translation":"vegetables","items":[{"name":"navrattan korma","description":"garden fresh vegetables cooked with yogurt, coconut, fruits, and nuts","price":13.5,"gfAvailable":true},{"name":"bhindi masala","description":"fresh okra cooked with fresh onions, ginger, and tomatoes","price":14.5,"gfAvailable":true,"veganAvailable":true},{"name":"mixed vegetables","description":"fresh vegetables cooked with ginger, garlic, onion, and mildly spiced thick sauce","price":14,"gfAvailable":true,"veganAvailable":true},{"name":"baingan bhartha","description":"fresh eggplants roasted in a clay oven and cooked with green peas, fresh tomatoes, onions, ginger, and garlic","price":14,"gfAvailable":true}]},{"category":"sides and sauces","items":[{"name":"raita","description":"fresh whipped yogurt with grated carrots, cucumbers, and spices","price":3.5},{"name":"mango chutney","description":"sweet and sour mango relish","price":2.5},{"name":"achar","description":"mixed pickles","price":2.5},{"name":"papadam","description":"A thin, crisp bread made from lentil flour","price":3},{"name":"rice","description":"basmati rice","price":3.5}]},{"category":"desserts","items":[{"name":"kheer","description":"Indian rice pudding","price":3.5},{"name":"gulab jamun","description":"honey-rolled milk balls","price":3.5},{"name":"kulfi","description":"indian-style ice cream flavored with nuts and cardamom seeds","price":4},{"name":"mango ice cream","description":"mango ice cream","price":4},{"name":"molten chocolate cake","description":"a soft chocolate cake with a liquid center","price":4},{"name":"banana caramel cheesecake","description":"banana caramel cheesecake","price":8}]},{"category":"beverages","items":[{"name":"mango lassi","description":"fresh mangoes with yogurt","price":3.5},{"name":"salt lassi","description":"fresh yogurt with salt spices","price":3},{"name":"sweet lassi","description":"fresh yogurt with sweet and cardamom","price":3},{"name":"water bottle","description":"20 oz","price":1.25},{"name":"Coke","description":"20 oz","price":2.25},{"name":"Diet Coke","description":"20 oz","price":2.25},{"name":"Ginger Ale","description":"20 oz","price":2.25},{"name":"Sprite","description":"20 oz","price":2.25}]}]');

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer */ "./src/footer.js");









const pageLoad = (() => {
  
  // This is future-proofing, in case I decide to make a non-JS version for
  // people who visit with JS turned off. I don't like the idea of sites being
  // unusable for people with slow connections or data limits.
  document.body.innerHTML = ""

  ;(0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])()
      
  //main
  const main = document.createElement("main")
  document.body.appendChild(main)

  ;(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])()
  ;(0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])()
  ;(0,_about__WEBPACK_IMPORTED_MODULE_3__["default"])()
  ;(0,_contact__WEBPACK_IMPORTED_MODULE_5__["default"])()

  ;(0,_footer__WEBPACK_IMPORTED_MODULE_6__["default"])()
  
  // set menu page as active initially
  document.getElementById("menu").classList.remove("display-none")
  document.querySelector(`[data-section="menu"]`).classList.add("active")
  
  

})()

const sectionButtons = document.querySelectorAll(".nav-button")
const sections = document.querySelectorAll(".section")

const showPage = (e) => {  
  // don't do anything if someone clicks the current button
  if (e.target.classList.contains("active")) return
  const sectionToShow = e.target.dataset.section
  
  // show clicked section, hide others
  sections.forEach(section => section.id === sectionToShow ? section.classList.remove("display-none") : section.classList.add("display-none"))
  
  // set active link
  sectionButtons.forEach(button => button.dataset.section === sectionToShow ? button.classList.add("active") : button.classList.remove("active"))

}

sectionButtons.forEach(button => button.addEventListener("click", showPage))


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNsQmY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ25DZjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRSxhQUFhO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNaZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDZmY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ1ptQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixVQUFVLHdCQUF3QixXQUFXLDZCQUE2QixpQkFBaUIsRUFBRSxPQUFPLEVBQUUsVUFBVTtBQUN0STs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMkJBQTJCLE1BQU07QUFDbkQsa0ZBQWtGLGtCQUFrQixPQUFPLFlBQVksZUFBZSxVQUFVO0FBQ2hKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3Qix1Q0FBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDRCQUE0QixNQUFNO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O1VDM0NmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0I7O0FBRWU7QUFDSjtBQUNFO0FBQ0Y7QUFDTTtBQUNGOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxvREFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsa0RBQVU7QUFDWixFQUFFLGtEQUFVO0FBQ1osRUFBRSxtREFBVztBQUNiLEVBQUUscURBQWE7O0FBRWYsRUFBRSxvREFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgcmVuZGVyQWJvdXQgPSAoKSA9PiB7XG4gIFxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIilcblxuICBjb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICBhYm91dFNlY3Rpb24uaWQgPSBcImFib3V0XCJcbiAgYWJvdXRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIsXCJhYm91dC1zZWN0aW9uXCIsXCJkaXNwbGF5LW5vbmVcIilcbiAgYWJvdXRTZWN0aW9uLmlubmVySFRNTCA9IGBcbiAgPGgxPkFib3V0PC9oMT5cbiAgPHA+SSdtIGEgbG9uZ3RpbWUgdmVnZXRhcmlhbiwgYW5kIGFuIGV2ZW4gbG9uZ2VyLXRpbWUgbG92ZXIgb2YgSW5kaWFuIGZvb2QsIHNvIEkgdGhvdWdodCB0byBjcmVhdGUgdGhlIG1lbnUgZm9yIHBvc3NpYmx5IHRoZSBpZGVhbCByZXN0YXVyYW50IGZvciBtZS48L3A+XG4gIDxwPlRoZSB0ZXJtIDxkZm4gYXJpYS1kZXNjcmliZWRieT1cIiNkZWZpbml0aW9uXCI+YWhpbXNhPC9kZm4+IHJlZmVycyB0byA8c3BhbiBpZD1cImRlZmluaXRpb25cIj5ub252aW9sZW5jZSB0b3dhcmQgYWxsIGxpdmluZyB0aGluZ3M8L3NwYW4+LCBhbmQgc2VlbWVkIHRoZSBwZXJmZWN0IG5hbWUgZm9yIHRoaXMgcHJvamVjdC4gU28gcGVyZmVjdCwgaW4gZmFjdCwgdGhhdCB0aGVyZSBhcmUgdmVnYW4gYW5kIHZlZ2V0YXJpYW4gcmVzdGF1cmFudHMgd2l0aCB0aGlzIG5hbWUgZXZlcnl3aGVyZS4gVGhpcyBwcm9qZWN0IGlzIG5vdCBhZmZpbGlhdGVkIHdpdGggYW55IG9mIHRoZW0sIG5vciBoYXZlIEkgdGFrZW4gYW55IG9mIHRoZSBtZW51cywgZGVzY3JpcHRpb25zLCBwcmljZXMsIG9yIHBpY3R1cmVzIGZyb20gYW55IG9mIHRoZW0uPC9wPlxuICA8cD5BbGwgcGljdHVyZXMgYXJlIHRha2VuIGZyb20gZnJlZXNpdGVzIGxpa2UgTXlTdG9jayBhbmQgUGl4YWJheS4gRGVzY3JpcHRpb25zIG9mIGZvb2QgaXRlbXMgYXJlIGFkYXB0ZWQgZnJvbSBXaWtpcGVkaWEgZW50cmllcy4gUHJpY2VzIGFyZSBiYXNlZCBvbiBteSBvd24gaW1wcmVzc2lvbnMuPC9wPlxuICA8cD5FbmpveSE8L3A+XG4gIGBcblxuICBtYWluLmFwcGVuZENoaWxkKGFib3V0U2VjdGlvbilcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQWJvdXQiLCJjb25zdCByZW5kZXJDb250YWN0ID0gKCkgPT4ge1xuICBcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpXG5cbiAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICBjb250YWN0U2VjdGlvbi5pZCA9IFwiY29udGFjdFwiXG4gIGNvbnRhY3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIsXCJjb250YWN0LXNlY3Rpb25cIixcImRpc3BsYXktbm9uZVwiKVxuICBjb250YWN0U2VjdGlvbi5pbm5lckhUTUwgPSBgXG4gICAgPGgxPkNvbnRhY3QgVXM8L2gxPlxuICAgIDxmb3JtIGFjdGlvbj1cIlwiIG1ldGhvZD1cIlwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5wdXRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1ncm91cCByZXF1aXJlZFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZnVsbG5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZ1bGxuYW1lXCIgaWQ9XCJmdWxsbmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtZ3JvdXAgcmVxdWlyZWRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHJlcXVpcmVkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBob25lXCI+UGhvbmU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIG5hbWU9XCJwaG9uZVwiIGlkPVwicGhvbmVcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybWdyb3VwIHJlcXVpcmVkXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZXNzYWdlXCI+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cIm1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQgTWVzc2FnZTwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgYFxuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb24pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNvbnRhY3QiLCJjb25zdCByZW5kZXJGb290ZXIgPSAoKSA9PiB7XG5cbiAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpXG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwic2l0ZS1mb290ZXJcIilcbiAgZm9vdGVyLmlubmVySFRNTCA9IGBcbiAgICA8cCBjbGFzcz1cImNvbG9waG9uXCI+JmNvcHk7JHtjdXJyZW50WWVhcn0gS2V2aW4gTWlzc2V0dDwvcD5cbiAgYFxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcilcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyRm9vdGVyIiwiY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIilcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJzaXRlLWhlYWRlclwiKVxuICBoZWFkZXIuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwic2l0ZS10aXRsZVwiPkFoaW1zYTwvZGl2PlxuICAgIDxuYXYgY2xhc3M9XCJzaXRlLW5hdlwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdi1idXR0b25cIiBkYXRhLXNlY3Rpb249XCJob21lXCI+SG9tZTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdi1idXR0b25cIiBkYXRhLXNlY3Rpb249XCJtZW51XCI+TWVudTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdi1idXR0b25cIiBkYXRhLXNlY3Rpb249XCJhYm91dFwiPkFib3V0PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwibmF2LWJ1dHRvblwiIGRhdGEtc2VjdGlvbj1cImNvbnRhY3RcIj5Db250YWN0PC9idXR0b24+XG4gICAgPC9uYXY+YFxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcilcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySGVhZGVyIiwiY29uc3QgcmVuZGVySG9tZSA9ICgpID0+IHtcbiAgXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKVxuXG4gIGNvbnN0IGhvbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIilcbiAgaG9tZVNlY3Rpb24uaWQgPSBcImhvbWVcIlxuICBob21lU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwic2VjdGlvblwiLFwiaG9tZS1zZWN0aW9uXCIsIFwiZGlzcGxheS1ub25lXCIpXG4gIGhvbWVTZWN0aW9uLmlubmVySFRNTCA9IGA8aDE+V2VsY29tZSE8L2gxPmBcblxuICBtYWluLmFwcGVuZENoaWxkKGhvbWVTZWN0aW9uKVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIb21lIiwiaW1wb3J0IG1lbnVKU09OIGZyb20gXCIuL21lbnUuanNvblwiXG4vLyBtZW51IGNhdGVnb3JpZXMgZ2l2ZW4gYnkgbWVudUpTT05baV1cbi8vIGNhdGVnb3J5IG5hbWUgPSBtZW51SlNPTltpXS5jYXRlZ29yeVxuLy8gaXRlbXMgc3ViYXJyYXkgPSBtZW51SlNPTltpXS5jYXRlZ29yeS5pdGVtc1xuLy8gaW5kaXZpZHVhbCBpdGVtID0gbWVudUpTT05baV0uY2F0ZWdvcnkuaXRlbXNbal1cbi8vIGl0ZW0gdmFsdWVzID0gbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlLCBnZkF2YWlsYWJsZSwgdmVnYW5BdmFpbGFibGVcblxuLy8gVE9ETzogYWRkIHBpY3R1cmVzXG5cbmNsYXNzIE1lbnUge1xuICBjb25zdHJ1Y3RvcihtZW51KSB7XG4gICAgdGhpcy5jYXRlZ29yaWVzID0gWy4uLm1lbnVdXG4gIH1cblxuICBidWlsZE1lbnVJdGVtKGl0ZW0pIHtcbiAgICBjb25zdCBnZlNwYW4gPSAoaXRlbS5nZkF2YWlsYWJsZSkgPyBgIDxzcGFuIGNsYXNzPVwiZ2ZhXCIgYXJpYS1sYWJlbD1cImF2YWlsYWJsZSBnbHV0ZW4tZnJlZVwiPihnKTwvc3Bhbj5gIDogXCJcIlxuICAgIGNvbnN0IHZlZ2FuU3BhbiA9IChpdGVtLnZlZ2FuQXZhaWxhYmxlKSA/IGAgPHNwYW4gY2xhc3M9XCJ2YVwiIGFyaWEtbGFiZWw9XCJhdmFpbGFibGUgdmVnYW5cIj4odik8L3NwYW4+YCA6IFwiXCJcbiAgICByZXR1cm4gYDxsaT48aDM+JHtpdGVtLm5hbWV9PC9oMz48cCBjbGFzcz1cInByaWNlXCI+JHtpdGVtLnByaWNlfTwvcD48cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtpdGVtLmRlc2NyaXB0aW9ufSR7Z2ZTcGFufSR7dmVnYW5TcGFufTwvcD48L2xpPmBcbiAgfVxuXG4gIGJ1aWxkTWVudUNhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSAoY2F0ZWdvcnkudHJhbnNsYXRpb24pID8gJzxwIGNsYXNzPVwidHJhbnNsYXRpb25cIj4nICsgY2F0ZWdvcnkudHJhbnNsYXRpb24gKyAnPC9wPicgOiBcIlwiXG4gICAgbGV0IG1lbnVJdGVtcyA9IFwiXCJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBjYXRlZ29yeS5pdGVtcy5sZW5ndGg7IGkrKykge21lbnVJdGVtcyArPSB0aGlzLmJ1aWxkTWVudUl0ZW0oY2F0ZWdvcnkuaXRlbXNbaV0pfVxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIm1lbnUtY2F0ZWdvcnlcIj48aGVhZGVyIGNsYXNzPVwibWVudS1jYXRlZ29yeS1oZWFkZXJcIj48aDI+JHtjYXRlZ29yeS5jYXRlZ29yeX08L2gyPiR7dHJhbnNsYXRpb259PC9oZWFkZXI+PHVsPiR7bWVudUl0ZW1zfTwvdWw+PC9kaXY+YFxuICB9XG59XG5cbmNvbnN0IHJlbmRlck1lbnUgPSAoKSA9PiB7XG4gIFxuICBjb25zdCBtZW51ID0gbmV3IE1lbnUobWVudUpTT04pXG4gIFxuICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXG4gIG1lbnVTZWN0aW9uLmlkID0gXCJtZW51XCJcbiAgbWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIixcIm1lbnUtc2VjdGlvblwiLFwiZGlzcGxheS1ub25lXCIpXG4gIFxuICBsZXQgbWVudVNlY3Rpb25Jbm5lciA9IFwiPGhlYWRlciBjbGFzcz1cXFwibWVudS1oZWFkZXJcXFwiPjxoMT5PdXIgTWVudTwvaDE+PHA+PHNwYW4+KHYpOiB2ZWdhbiBhdmFpbGFibGU8L3NwYW4+PHNwYW4+KGcpOiBnbHV0ZW4tZnJlZSBhdmFpbGFibGU8L3NwYW4+PC9wPjwvaGVhZGVyPlwiXG4gIGZvcihsZXQgaT0wOyBpIDwgbWVudS5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7bWVudVNlY3Rpb25Jbm5lciArPSBtZW51LmJ1aWxkTWVudUNhdGVnb3J5KG1lbnUuY2F0ZWdvcmllc1tpXSl9XG4gIG1lbnVTZWN0aW9uLmlubmVySFRNTCA9IG1lbnVTZWN0aW9uSW5uZXJcbiAgXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uKVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNZW51IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5cbmltcG9ydCByZW5kZXJIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCJcbmltcG9ydCByZW5kZXJIb21lIGZyb20gXCIuL2hvbWVcIlxuaW1wb3J0IHJlbmRlckFib3V0IGZyb20gXCIuL2Fib3V0XCJcbmltcG9ydCByZW5kZXJNZW51IGZyb20gXCIuL21lbnVcIlxuaW1wb3J0IHJlbmRlckNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiXG5pbXBvcnQgcmVuZGVyRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiXG5cbmNvbnN0IHBhZ2VMb2FkID0gKCgpID0+IHtcbiAgXG4gIC8vIFRoaXMgaXMgZnV0dXJlLXByb29maW5nLCBpbiBjYXNlIEkgZGVjaWRlIHRvIG1ha2UgYSBub24tSlMgdmVyc2lvbiBmb3JcbiAgLy8gcGVvcGxlIHdobyB2aXNpdCB3aXRoIEpTIHR1cm5lZCBvZmYuIEkgZG9uJ3QgbGlrZSB0aGUgaWRlYSBvZiBzaXRlcyBiZWluZ1xuICAvLyB1bnVzYWJsZSBmb3IgcGVvcGxlIHdpdGggc2xvdyBjb25uZWN0aW9ucyBvciBkYXRhIGxpbWl0cy5cbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBcIlwiXG5cbiAgcmVuZGVySGVhZGVyKClcbiAgICAgIFxuICAvL21haW5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbilcblxuICByZW5kZXJIb21lKClcbiAgcmVuZGVyTWVudSgpXG4gIHJlbmRlckFib3V0KClcbiAgcmVuZGVyQ29udGFjdCgpXG5cbiAgcmVuZGVyRm9vdGVyKClcbiAgXG4gIC8vIHNldCBtZW51IHBhZ2UgYXMgYWN0aXZlIGluaXRpYWxseVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIikuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXktbm9uZVwiKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zZWN0aW9uPVwibWVudVwiXWApLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgXG4gIFxuXG59KSgpXG5cbmNvbnN0IHNlY3Rpb25CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYnV0dG9uXCIpXG5jb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VjdGlvblwiKVxuXG5jb25zdCBzaG93UGFnZSA9IChlKSA9PiB7ICBcbiAgLy8gZG9uJ3QgZG8gYW55dGhpbmcgaWYgc29tZW9uZSBjbGlja3MgdGhlIGN1cnJlbnQgYnV0dG9uXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVyblxuICBjb25zdCBzZWN0aW9uVG9TaG93ID0gZS50YXJnZXQuZGF0YXNldC5zZWN0aW9uXG4gIFxuICAvLyBzaG93IGNsaWNrZWQgc2VjdGlvbiwgaGlkZSBvdGhlcnNcbiAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHNlY3Rpb24uaWQgPT09IHNlY3Rpb25Ub1Nob3cgPyBzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5LW5vbmVcIikgOiBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW5vbmVcIikpXG4gIFxuICAvLyBzZXQgYWN0aXZlIGxpbmtcbiAgc2VjdGlvbkJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmRhdGFzZXQuc2VjdGlvbiA9PT0gc2VjdGlvblRvU2hvdyA/IGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpIDogYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG5cbn1cblxuc2VjdGlvbkJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93UGFnZSkpXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==