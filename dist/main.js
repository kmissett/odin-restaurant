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
  <p><span id="definition">The term <dfn aria-describedby="#definition">ahimsa</dfn> refers to nonviolence toward all living things, and seemed the perfect name for this project. So perfect, in fact, that there are vegan and vegetarian restaurants with this name everywhere. This project is not affiliated with any of them, nor have I taken any of the menus, descriptions, prices, or pictures from any of them.</p>
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
      <button class="nav-button active" data-section="home">Home</button>
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
  homeSection.classList.add("section","home-section")
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

// menu groups given by menuJSON[i]
// group name = menuJSON[i].group
// items subarray = menuJSON[i].group.items
// individual item = menuJSON[i].group.items[j]
// item values = name, description, price, gfAvailable, veganAvailable

// TODO: add pictures

class Menu {
  constructor(menu) {
    this.groups = [...menu]
  }

  buildMenuItem = (group, item) => {
    const gfSpan = (item.gfAvailable === true) ? `<span class="gf-available" aria-label="available gluten-free">(G)</span>` : ""
    const veganSpan = (item.veganAvailable === true) ? `<span class="vegan-available" aria-label="available vegan">(V)</span>` : ""
    const menuItem = document.createElement("li")
    menuItem.classList.add("menu-item")
    menuItem.innerHTML = `
      <h3>${item.name}${gfSpan}${veganSpan}</h3>
      <p class="menu-item-description">${item.description}</p>
      <p class="menu-item-price">${item.price}</p>
      `
    group.appendChild(menuItem)
  }

  buildMenuGroup = (group) => {
    const menuGroup = document.createElement("div")
    menuGroup.classList.add("menu-group")
    menuGroup.innerHTML = `
    <h2 class="menu-group-title">${group.group}</h2>
    <p class="menu-group-translation">${group.translation}</p>
    `
    const menuItems = document.createElement("ul")
    menuItems.classList.add("menu-items")
    
    group.items.forEach(item=> this.buildMenuItem(menuItems, item))
    
    menuGroup.appendChild(menuItems)
    return menuGroup
    //menuSection.appendChild(menuGroup)
  }
}

const renderMenu = () => {

  const main = document.querySelector("main")

  const menuSection = document.createElement("section")
  menuSection.id = "menu"
  menuSection.classList.add("section","menu-section","display-none")
  menuSection.innerHTML = `
    <header>
      <h1>Our Menu</h1>
      <p>(V): vegan available</p>
      <p>(G): gluten-free available</p>
    </header>`

  main.appendChild(menuSection)

  const menu = new Menu(_menu_json__WEBPACK_IMPORTED_MODULE_0__)
  
  for (let i=0; i < menu.groups.length; i++) {
    const menuGroup = menu.buildMenuGroup(menu.groups[i])
    menuSection.appendChild(menuGroup)
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);

/***/ }),

/***/ "./src/menu.json":
/*!***********************!*\
  !*** ./src/menu.json ***!
  \***********************/
/***/ ((module) => {

module.exports = JSON.parse('[{"group":"chaat","translation":"snacks","items":[{"name":"samosa","description":"crispy fried turnovers stuffed with green peas and potatoes","price":6,"veganAvailable":true},{"name":"gobi pakora","description":"fresh cauliflower deep-fried in a spiced chickpea batter","price":8,"veganAvailable":true},{"name":"dahi vada","description":"fried dumplings made from a spiced chickpea batter, then soaked in a yogurt sauce and topped with chaat masala","price":8},{"name":"aloo chaat","description":"parboiled potatoes, fried and mixed with chopped onions, spices, and chutney","price":6},{"name":"aloo tikki chaat","description":"parboiled potatoes, fried and mixed with chopped onions, spices, and chutney","price":6}]},{"group":"subzi mandi","translation":"vegetable specialties","items":[{"name":"paneer tikka masala","description":"cheese broiled in tandoor and cooked in a rich creamy tomato, onion sauce with ginger, garlic, and herbs","price":15.5,"gfAvailable":true},{"name":"shahi paneer","description":"homemade cheese cubes cooked in a creamy tomato and onion sauce","price":14,"gfAvailable":true},{"name":"malai kofta","description":"mixed vegetable balls cooked in mildly spiced creamy sauce","price":14,"gfAvailable":true},{"name":"navrattan korma","description":"garden fresh vegetables cooked with yogurt, coconut, fruits, and nuts","price":13.5,"gfAvailable":true},{"name":"dum aloo","description":"spiced potatoes with homemade cheese","price":14,"gfAvailable":true},{"name":"bhindi masala","description":"fresh okra cooked with fresh onions, ginger, and tomatoes","price":14.5,"gfAvailable":true,"veganAvailable":true},{"name":"mixed vegetables","description":"fresh vegetables cooked with ginger, garlic, onion, and mildly spiced thick sauce","price":14,"gfAvailable":true,"veganAvailable":true},{"name":"aloo gobhi","description":"fresh cauliflower and potatoes cooked with ginger, garlic, tomatoes, and spices","price":14,"gfAvailable":true,"veganAvailable":true},{"name":"punjabi chana","description":"chickpeas, onions, and fresh tomatoes cooked in traditional spices","price":13,"gfAvailable":true,"veganAvailable":true},{"name":"dal makhani","description":"lentils cooked with green onions, ginger, garlic, and choice of chef\'s herbs","price":13,"gfAvailable":true,"veganAvailable":true},{"name":"palak paneer","description":"homemade cheese cubes cooked with fresh chopped spinach and herbs","price":14,"gfAvailable":true},{"name":"baingan bhartha","description":"fresh eggplants roasted in a clay oven and cooked with green peas, fresh tomatoes, onions, ginger, and garlic","price":14,"gfAvailable":true},{"name":"kadi pakora","description":"Fritters simmered in a creamy, tangy, and spiced yogurt curry","price":14,"gfAvailable":true}]},{"group":"sides and sauces","items":[{"name":"raita","description":"fresh whipped yogurt with grated carrots, cucumbers, and spices","price":3.5},{"name":"mango chutney","description":"sweet and sour mango relish","price":2.5},{"name":"achar","description":"mixed pickles","price":2.5},{"name":"papadam","description":"A thin, crisp bread made from lentil flour","price":3},{"name":"rice","description":"basmati rice","price":3.5}]},{"group":"desserts","items":[{"name":"kheer","description":"Indian rice pudding","price":3.5},{"name":"gulab jamun","description":"honey-rolled milk balls","price":3.5},{"name":"kulfi","description":"indian-style ice cream flavored with nuts and cardamom seeds","price":4},{"name":"mango ice cream","description":"mango ice cream","price":4},{"name":"molten chocolate cake","description":"a soft chocolate cake with a liquid center","price":4},{"name":"banana caramel cheesecake","description":"banana caramel cheesecake","price":8}]},{"group":"beverages","items":[{"name":"mango lassi","description":"fresh mangoes with yogurt","price":3.5},{"name":"salt lassi","description":"fresh yogurt with salt spices","price":3},{"name":"sweet lassi","description":"fresh yogurt with sweet and cardamom","price":3},{"name":"water bottle","description":"20 oz","price":1.25},{"name":"Coke","description":"20 oz","price":2.25},{"name":"Diet Coke","description":"20 oz","price":2.25},{"name":"Ginger Ale","description":"20 oz","price":2.25},{"name":"Sprite","description":"20 oz","price":2.25}]}]');

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
  ;(0,_about__WEBPACK_IMPORTED_MODULE_3__["default"])()
  ;(0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])()
  ;(0,_contact__WEBPACK_IMPORTED_MODULE_5__["default"])()

  ;(0,_footer__WEBPACK_IMPORTED_MODULE_6__["default"])()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNsQmY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ25DZjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRSxhQUFhO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNaZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDZmY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ1ptQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVO0FBQzNDLHlDQUF5QyxpQkFBaUI7QUFDMUQsbUNBQW1DLFdBQVc7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFlBQVk7QUFDL0Msd0NBQXdDLGtCQUFrQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0IsdUNBQVE7QUFDaEM7QUFDQSxnQkFBZ0Isd0JBQXdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O1VDckVmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0I7QUFDZTtBQUNKO0FBQ0U7QUFDRjtBQUNNO0FBQ0Y7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLG9EQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxrREFBVTtBQUNaLEVBQUUsbURBQVc7QUFDYixFQUFFLGtEQUFVO0FBQ1osRUFBRSxxREFBYTs7QUFFZixFQUFFLG9EQUFZO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IHJlbmRlckFib3V0ID0gKCkgPT4ge1xuICBcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpXG5cbiAgY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIilcbiAgYWJvdXRTZWN0aW9uLmlkID0gXCJhYm91dFwiXG4gIGFib3V0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwic2VjdGlvblwiLFwiYWJvdXQtc2VjdGlvblwiLFwiZGlzcGxheS1ub25lXCIpXG4gIGFib3V0U2VjdGlvbi5pbm5lckhUTUwgPSBgXG4gIDxoMT5BYm91dDwvaDE+XG4gIDxwPkknbSBhIGxvbmd0aW1lIHZlZ2V0YXJpYW4sIGFuZCBhbiBldmVuIGxvbmdlci10aW1lIGxvdmVyIG9mIEluZGlhbiBmb29kLCBzbyBJIHRob3VnaHQgdG8gY3JlYXRlIHRoZSBtZW51IGZvciBwb3NzaWJseSB0aGUgaWRlYWwgcmVzdGF1cmFudCBmb3IgbWUuPC9wPlxuICA8cD48c3BhbiBpZD1cImRlZmluaXRpb25cIj5UaGUgdGVybSA8ZGZuIGFyaWEtZGVzY3JpYmVkYnk9XCIjZGVmaW5pdGlvblwiPmFoaW1zYTwvZGZuPiByZWZlcnMgdG8gbm9udmlvbGVuY2UgdG93YXJkIGFsbCBsaXZpbmcgdGhpbmdzLCBhbmQgc2VlbWVkIHRoZSBwZXJmZWN0IG5hbWUgZm9yIHRoaXMgcHJvamVjdC4gU28gcGVyZmVjdCwgaW4gZmFjdCwgdGhhdCB0aGVyZSBhcmUgdmVnYW4gYW5kIHZlZ2V0YXJpYW4gcmVzdGF1cmFudHMgd2l0aCB0aGlzIG5hbWUgZXZlcnl3aGVyZS4gVGhpcyBwcm9qZWN0IGlzIG5vdCBhZmZpbGlhdGVkIHdpdGggYW55IG9mIHRoZW0sIG5vciBoYXZlIEkgdGFrZW4gYW55IG9mIHRoZSBtZW51cywgZGVzY3JpcHRpb25zLCBwcmljZXMsIG9yIHBpY3R1cmVzIGZyb20gYW55IG9mIHRoZW0uPC9wPlxuICA8cD5BbGwgcGljdHVyZXMgYXJlIHRha2VuIGZyb20gZnJlZXNpdGVzIGxpa2UgTXlTdG9jayBhbmQgUGl4YWJheS4gRGVzY3JpcHRpb25zIG9mIGZvb2QgaXRlbXMgYXJlIGFkYXB0ZWQgZnJvbSBXaWtpcGVkaWEgZW50cmllcy4gUHJpY2VzIGFyZSBiYXNlZCBvbiBteSBvd24gaW1wcmVzc2lvbnMuPC9wPlxuICA8cD5FbmpveSE8L3A+XG4gIGBcblxuICBtYWluLmFwcGVuZENoaWxkKGFib3V0U2VjdGlvbilcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQWJvdXQiLCJjb25zdCByZW5kZXJDb250YWN0ID0gKCkgPT4ge1xuICBcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpXG5cbiAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICBjb250YWN0U2VjdGlvbi5pZCA9IFwiY29udGFjdFwiXG4gIGNvbnRhY3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIsXCJjb250YWN0LXNlY3Rpb25cIixcImRpc3BsYXktbm9uZVwiKVxuICBjb250YWN0U2VjdGlvbi5pbm5lckhUTUwgPSBgXG4gICAgPGgxPkNvbnRhY3QgVXM8L2gxPlxuICAgIDxmb3JtIGFjdGlvbj1cIlwiIG1ldGhvZD1cIlwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5wdXRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1ncm91cCByZXF1aXJlZFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZnVsbG5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZ1bGxuYW1lXCIgaWQ9XCJmdWxsbmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtZ3JvdXAgcmVxdWlyZWRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHJlcXVpcmVkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBob25lXCI+UGhvbmU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIG5hbWU9XCJwaG9uZVwiIGlkPVwicGhvbmVcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybWdyb3VwIHJlcXVpcmVkXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZXNzYWdlXCI+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cIm1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQgTWVzc2FnZTwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgYFxuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb24pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNvbnRhY3QiLCJjb25zdCByZW5kZXJGb290ZXIgPSAoKSA9PiB7XG5cbiAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpXG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwic2l0ZS1mb290ZXJcIilcbiAgZm9vdGVyLmlubmVySFRNTCA9IGBcbiAgICA8cCBjbGFzcz1cImNvbG9waG9uXCI+JmNvcHk7JHtjdXJyZW50WWVhcn0gS2V2aW4gTWlzc2V0dDwvcD5cbiAgYFxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcilcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyRm9vdGVyIiwiY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIilcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJzaXRlLWhlYWRlclwiKVxuICBoZWFkZXIuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwic2l0ZS10aXRsZVwiPkFoaW1zYTwvZGl2PlxuICAgIDxuYXYgY2xhc3M9XCJzaXRlLW5hdlwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdi1idXR0b24gYWN0aXZlXCIgZGF0YS1zZWN0aW9uPVwiaG9tZVwiPkhvbWU8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJuYXYtYnV0dG9uXCIgZGF0YS1zZWN0aW9uPVwibWVudVwiPk1lbnU8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJuYXYtYnV0dG9uXCIgZGF0YS1zZWN0aW9uPVwiYWJvdXRcIj5BYm91dDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdi1idXR0b25cIiBkYXRhLXNlY3Rpb249XCJjb250YWN0XCI+Q29udGFjdDwvYnV0dG9uPlxuICAgIDwvbmF2PmBcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhlYWRlciIsImNvbnN0IHJlbmRlckhvbWUgPSAoKSA9PiB7XG4gIFxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIilcblxuICBjb25zdCBob21lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXG4gIGhvbWVTZWN0aW9uLmlkID0gXCJob21lXCJcbiAgaG9tZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIixcImhvbWUtc2VjdGlvblwiKVxuICBob21lU2VjdGlvbi5pbm5lckhUTUwgPSBgPGgxPldlbGNvbWUhPC9oMT5gXG5cbiAgbWFpbi5hcHBlbmRDaGlsZChob21lU2VjdGlvbilcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySG9tZSIsImltcG9ydCBtZW51SlNPTiBmcm9tIFwiLi9tZW51Lmpzb25cIlxuLy8gbWVudSBncm91cHMgZ2l2ZW4gYnkgbWVudUpTT05baV1cbi8vIGdyb3VwIG5hbWUgPSBtZW51SlNPTltpXS5ncm91cFxuLy8gaXRlbXMgc3ViYXJyYXkgPSBtZW51SlNPTltpXS5ncm91cC5pdGVtc1xuLy8gaW5kaXZpZHVhbCBpdGVtID0gbWVudUpTT05baV0uZ3JvdXAuaXRlbXNbal1cbi8vIGl0ZW0gdmFsdWVzID0gbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlLCBnZkF2YWlsYWJsZSwgdmVnYW5BdmFpbGFibGVcblxuLy8gVE9ETzogYWRkIHBpY3R1cmVzXG5cbmNsYXNzIE1lbnUge1xuICBjb25zdHJ1Y3RvcihtZW51KSB7XG4gICAgdGhpcy5ncm91cHMgPSBbLi4ubWVudV1cbiAgfVxuXG4gIGJ1aWxkTWVudUl0ZW0gPSAoZ3JvdXAsIGl0ZW0pID0+IHtcbiAgICBjb25zdCBnZlNwYW4gPSAoaXRlbS5nZkF2YWlsYWJsZSA9PT0gdHJ1ZSkgPyBgPHNwYW4gY2xhc3M9XCJnZi1hdmFpbGFibGVcIiBhcmlhLWxhYmVsPVwiYXZhaWxhYmxlIGdsdXRlbi1mcmVlXCI+KEcpPC9zcGFuPmAgOiBcIlwiXG4gICAgY29uc3QgdmVnYW5TcGFuID0gKGl0ZW0udmVnYW5BdmFpbGFibGUgPT09IHRydWUpID8gYDxzcGFuIGNsYXNzPVwidmVnYW4tYXZhaWxhYmxlXCIgYXJpYS1sYWJlbD1cImF2YWlsYWJsZSB2ZWdhblwiPihWKTwvc3Bhbj5gIDogXCJcIlxuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKVxuICAgIG1lbnVJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgIDxoMz4ke2l0ZW0ubmFtZX0ke2dmU3Bhbn0ke3ZlZ2FuU3Bhbn08L2gzPlxuICAgICAgPHAgY2xhc3M9XCJtZW51LWl0ZW0tZGVzY3JpcHRpb25cIj4ke2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgPHAgY2xhc3M9XCJtZW51LWl0ZW0tcHJpY2VcIj4ke2l0ZW0ucHJpY2V9PC9wPlxuICAgICAgYFxuICAgIGdyb3VwLmFwcGVuZENoaWxkKG1lbnVJdGVtKVxuICB9XG5cbiAgYnVpbGRNZW51R3JvdXAgPSAoZ3JvdXApID0+IHtcbiAgICBjb25zdCBtZW51R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWVudUdyb3VwLmNsYXNzTGlzdC5hZGQoXCJtZW51LWdyb3VwXCIpXG4gICAgbWVudUdyb3VwLmlubmVySFRNTCA9IGBcbiAgICA8aDIgY2xhc3M9XCJtZW51LWdyb3VwLXRpdGxlXCI+JHtncm91cC5ncm91cH08L2gyPlxuICAgIDxwIGNsYXNzPVwibWVudS1ncm91cC10cmFuc2xhdGlvblwiPiR7Z3JvdXAudHJhbnNsYXRpb259PC9wPlxuICAgIGBcbiAgICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbiAgICBtZW51SXRlbXMuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbXNcIilcbiAgICBcbiAgICBncm91cC5pdGVtcy5mb3JFYWNoKGl0ZW09PiB0aGlzLmJ1aWxkTWVudUl0ZW0obWVudUl0ZW1zLCBpdGVtKSlcbiAgICBcbiAgICBtZW51R3JvdXAuYXBwZW5kQ2hpbGQobWVudUl0ZW1zKVxuICAgIHJldHVybiBtZW51R3JvdXBcbiAgICAvL21lbnVTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVHcm91cClcbiAgfVxufVxuXG5jb25zdCByZW5kZXJNZW51ID0gKCkgPT4ge1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKVxuXG4gIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIilcbiAgbWVudVNlY3Rpb24uaWQgPSBcIm1lbnVcIlxuICBtZW51U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwic2VjdGlvblwiLFwibWVudS1zZWN0aW9uXCIsXCJkaXNwbGF5LW5vbmVcIilcbiAgbWVudVNlY3Rpb24uaW5uZXJIVE1MID0gYFxuICAgIDxoZWFkZXI+XG4gICAgICA8aDE+T3VyIE1lbnU8L2gxPlxuICAgICAgPHA+KFYpOiB2ZWdhbiBhdmFpbGFibGU8L3A+XG4gICAgICA8cD4oRyk6IGdsdXRlbi1mcmVlIGF2YWlsYWJsZTwvcD5cbiAgICA8L2hlYWRlcj5gXG5cbiAgbWFpbi5hcHBlbmRDaGlsZChtZW51U2VjdGlvbilcblxuICBjb25zdCBtZW51ID0gbmV3IE1lbnUobWVudUpTT04pXG4gIFxuICBmb3IgKGxldCBpPTA7IGkgPCBtZW51Lmdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1lbnVHcm91cCA9IG1lbnUuYnVpbGRNZW51R3JvdXAobWVudS5ncm91cHNbaV0pXG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudUdyb3VwKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck1lbnUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcbmltcG9ydCByZW5kZXJIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCJcbmltcG9ydCByZW5kZXJIb21lIGZyb20gXCIuL2hvbWVcIlxuaW1wb3J0IHJlbmRlckFib3V0IGZyb20gXCIuL2Fib3V0XCJcbmltcG9ydCByZW5kZXJNZW51IGZyb20gXCIuL21lbnVcIlxuaW1wb3J0IHJlbmRlckNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiXG5pbXBvcnQgcmVuZGVyRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiXG5cbmNvbnN0IHBhZ2VMb2FkID0gKCgpID0+IHtcbiAgXG4gIC8vIFRoaXMgaXMgZnV0dXJlLXByb29maW5nLCBpbiBjYXNlIEkgZGVjaWRlIHRvIG1ha2UgYSBub24tSlMgdmVyc2lvbiBmb3JcbiAgLy8gcGVvcGxlIHdobyB2aXNpdCB3aXRoIEpTIHR1cm5lZCBvZmYuIEkgZG9uJ3QgbGlrZSB0aGUgaWRlYSBvZiBzaXRlcyBiZWluZ1xuICAvLyB1bnVzYWJsZSBmb3IgcGVvcGxlIHdpdGggc2xvdyBjb25uZWN0aW9ucyBvciBkYXRhIGxpbWl0cy5cbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBcIlwiXG5cbiAgcmVuZGVySGVhZGVyKClcbiAgICAgIFxuICAvL21haW5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbilcblxuICByZW5kZXJIb21lKClcbiAgcmVuZGVyQWJvdXQoKVxuICByZW5kZXJNZW51KClcbiAgcmVuZGVyQ29udGFjdCgpXG5cbiAgcmVuZGVyRm9vdGVyKClcbn0pKClcblxuY29uc3Qgc2VjdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1idXR0b25cIilcbmNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWN0aW9uXCIpXG5cbmNvbnN0IHNob3dQYWdlID0gKGUpID0+IHsgIFxuICAvLyBkb24ndCBkbyBhbnl0aGluZyBpZiBzb21lb25lIGNsaWNrcyB0aGUgY3VycmVudCBidXR0b25cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuXG4gIGNvbnN0IHNlY3Rpb25Ub1Nob3cgPSBlLnRhcmdldC5kYXRhc2V0LnNlY3Rpb25cbiAgXG4gIC8vIHNob3cgY2xpY2tlZCBzZWN0aW9uLCBoaWRlIG90aGVyc1xuICBzZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4gc2VjdGlvbi5pZCA9PT0gc2VjdGlvblRvU2hvdyA/IHNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXktbm9uZVwiKSA6IHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbm9uZVwiKSlcbiAgXG4gIC8vIHNldCBhY3RpdmUgbGlua1xuICBzZWN0aW9uQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uZGF0YXNldC5zZWN0aW9uID09PSBzZWN0aW9uVG9TaG93ID8gYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIikgOiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcblxufVxuXG5zZWN0aW9uQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dQYWdlKSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9