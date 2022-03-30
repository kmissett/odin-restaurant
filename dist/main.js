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
  <p>All pictures are taken from freesites like Unsplash and Pixabay. Descriptions of food items are adapted from Wikipedia entries. Prices are based on my own impressions.</p>
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
  menuSection.innerHTML = "<h1>Our Menu</h1>"

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

module.exports = JSON.parse('[{"group":"shuruat","translation":"appetizers","items":[{"name":"samosa (2 pc)","description":"two crispy fried turnovers stuffed with green peas and potatoes","price":5},{"name":"aloo tikki chaat","description":"mashed potatoes and green peas patties served with yogurt, onion, chickpeas, and chutney","price":8,"gfAvailable":true},{"name":"papdi chaat","description":"crispy flour crackers served with yogurt, potatoes, onions, chickpeas, and chutney","price":7.5},{"name":"gobhi pakora","description":"fresh cauliflower deep-fried in a spiced chickpea batter","price":8,"veganAvailable":true},{"name":"palak chaat","description":"spinach crackers served with chickpeas, potatoes, and sauces","price":8},{"name":"masala fries","description":"Indian-style spicy potato french fries","price":9,"gfAvailable":true},{"name":"reshmi kabab (6 pc)","description":"ground chick\'n marinated in curd, cream, cashews, and spices, then grilled in a tandoor","price":12,"gfAvailable":true}]},{"group":"tandoori breads","items":[{"name":"naan","description":"tandoor-baked white bread","price":3},{"name":"garlic naan","description":"stuffed with fresh garlic and herbs","price":3.5},{"name":"pashawari naan","description":"naan stuffed with cashew nuts, raisins, almonds, and sweet coconut","price":5.5},{"name":"aloo naan","description":"bread stuffed with delicately spiced potatoes and ginger","price":4},{"name":"onion kulcha","description":"scrumptious unleavened bread stuffed with onions, fresh cilantro, and cumin seeds","price":3.8},{"name":"paneer kulcha","description":"exotic unleavened bread stuffed with homemade cheese","price":5},{"name":"tandoori roti","description":"tandoor-baked whole wheat bread","price":3,"veganAvailable":true},{"name":"bread basket","description":"pashwari, paneer, onion, and garlic naan served with mango chutney","price":15}]},{"group":"tandoori khazana","translation":"tandoori treasures","items":[{"name":"ginger garlic jhinga","description":"fresh jumbo shrimp gently seasoned and slowly broiled in tandoor with chef\'s special fresh spices","price":19.5,"gfAvailable":true},{"name":"lamb seekh kabab","description":"ground lamb seasoned with onion, bell pepper, fresh cilantro, cloves, and herbs","price":19,"gfAvailable":true},{"name":"punjabi tikka","description":"boneless cubes of chicken breast marinated in yogurt, fenugreek leaves, ginger, garlic, and spices, then barbecued in tandoor","price":16,"gfAvailable":true},{"name":"tandoori murg","description":"chicken marinated in yogurt, lemon, and herbs, then barbecued in tandoor","price":16,"gfAvailable":true},{"name":"fish tikka","description":"fresh salmon marinated in yogurt, cinnamon, ginger, garlic, and spices, then barbecued in tandoor","price":19.5,"gfAvailable":true},{"name":"paneer tikka","description":"cubes of cheese marinated in yogurt, fenugreek leaves, ginger, garlic, and spices, then barbecued in tandoor","price":15.5,"gfAvailable":true}]},{"group":"samunderi se","translation":"seafood","items":[{"name":"shrimp tikka karahi","description":"shrimp sautéed with fresh garlic, ginger, scallions, green bell pepper and tomatoes","price":19,"gfAvailable":true},{"name":"shrimp tikka masala","description":"shrimp cooked in rich creamy tomato onion sauce, and herbs","price":19.5,"gfAvailable":true},{"name":"shrimp tikka vindaloo","description":"shrimp cooked with potatoes in a sharply spiced sauce","price":19.5,"gfAvailable":true},{"name":"fish tikka masala","description":"fish cooked in rich creamy tomato onion sauce, and herbs","price":19.5,"gfAvailable":true},{"name":"fish tikka vindaloo","description":"fish cooked with potatoes in a sharply spiced sauce","price":19.5,"gfAvailable":true}]},{"group":"murg khazana","translation":"chicken treasures","items":[{"name":"punjabi tikka masala","description":"boneless cubes of chicken broiled in the tandoor and cooked in a rich creamy tomato onion sauce with herbs","price":16,"gfAvailable":true},{"name":"murg korma","description":"boneless chicken cooked with exotic spices, herbs, and nuts in a mild creamy onion sauce","price":16,"gfAvailable":true},{"name":"murg vindaloo","description":"boneless chicken cooked with potatoes in a sharply spiced sauce","price":16,"gfAvailable":true},{"name":"murg saag","description":"boneless chicken cooked with chopped fresh spinach and herbs","price":16,"gfAvailable":true},{"name":"murg makhani","description":"chicken broiled in the tandoor and cooked in rich creamy tomato onion sauce and herbs","price":14},{"name":"murg karahi","description":"boneless chicken sautéed with fresh garlic, ginger, scallions, green bell pepper and tomatoes","price":16,"gfAvailable":true},{"name":"murg madras","description":"chicken cooked with onion sauce and coconut","price":16},{"name":"chilly chicken","description":"(chef\'s special) marinated boneless chicken cooked punjabi style with fresh onion, bell pepper, tomato, and herbs","price":17},{"name":"chicken curry","description":"chicken curry","price":16}]},{"group":"gosht laziz","translation":"delicious lamb","items":[{"name":"lamb karahi","description":"cubes of lamb sautéed with fresh ginger, garlic, scallions, green bell peppers, and tomatoes","price":19,"gfAvailable":true},{"name":"lamb vindaloo","description":"cubes of lamb cooked with potatoes in a sharply spiced sauce","price":19,"gfAvailable":true},{"name":"lamb masala","description":"cubes of lamb cooked in a rich creamy tomato onion sauce, fenugreek leaves, and herbs","price":18,"gfAvailable":true},{"name":"lamb korma","description":"lamb cooked with exotic spices, herbs, and nuts in a mild creamy onion sauce","price":19,"gfAvailable":true},{"name":"lamb roganjosh","description":"cubes of lamb cooked in chopped tomatoes and light sauce","price":19,"gfAvailable":true},{"name":"lamb saag","description":"cubes of lamb cooked with chopped fresh spinach and herbs","price":19},{"name":"lamb kofta","description":"ground lamb cooked with chopped fresh spinach and herbs","price":19},{"name":"goat curry","description":"cubes of bone cooked in chopped tomatoes and light sauce","price":24,"gfAvailable":true}]},{"group":"subzi mandi","translation":"vegetable specialties","items":[{"name":"paneer tikka masala","description":"cheese broiled in tandoor and cooked in a rich creamy tomato, onion sauce with ginger, garlic, and herbs","price":15.5,"gfAvailable":true},{"name":"shahi paneer","description":"homemade cheese cubes cooked in a creamy tomato and onion sauce","price":14,"gfAvailable":true},{"name":"malai kofta","description":"mixed vegetable balls cooked in mildly spiced creamy sauce","price":14,"gfAvailable":true},{"name":"navrattan korma","description":"garden fresh vegetables cooked with yogurt, coconut, fruits, and nuts","price":13.5,"gfAvailable":true},{"name":"dum aloo","description":"spiced potatoes with homemade cheese","price":14,"gfAvailable":true},{"name":"bhindi masala","description":"fresh okra cooked with fresh onions, ginger, and tomatoes","price":14.5,"gfAvailable":true,"veganAvailable":true},{"name":"mixed vegetables","description":"fresh vegetables cooked with ginger, garlic, onion, and mildly spiced thick sauce","price":14,"gfAvailable":true,"veganAvailable":true},{"name":"aloo gobhi","description":"fresh cauliflower and potatoes cooked with ginger, garlic, tomatoes, and spices","price":14,"gfAvailable":true,"veganAvailable":true},{"name":"punjabi chana","description":"chickpeas, onions, and fresh tomatoes cooked in traditional spices","price":13,"gfAvailable":true,"veganAvailable":true},{"name":"dal makhani","description":"lentils cooked with green onions, ginger, garlic, and choice of chef\'s herbs","price":13,"gfAvailable":true,"veganAvailable":true},{"name":"palak paneer","description":"homemade cheese cubes cooked with fresh chopped spinach and herbs","price":14,"gfAvailable":true},{"name":"baingan bhartha","description":"fresh eggplants roasted in a clay oven and cooked with green peas, fresh tomatoes, onions, ginger, and garlic","price":14,"gfAvailable":true},{"name":"kadi pakora","description":"Fritters simmered in a creamy, tangy, and spiced yogurt curry","price":14,"gfAvailable":true}]},{"group":"biryani","translation":"mixed rice dishes","items":[{"name":"vegetable biryani","description":"Indian basmati rice cooked with fresh vegetables, cashew nuts, and golden raisins","price":15},{"name":"chicken biryani","description":"Indian basmati rice cooked with boneless chicken, onions, fresh ginger, nuts, and delicate spices","price":16},{"name":"lamb biryani","description":"Indian basmati rice cooked with tender cubes of lamb, onions, herbs, nuts, and spices","price":19.5},{"name":"shere-e-punjab special biryani","description":"Chef\'s own combination of authentic Indian spices, cooked with tender pieces of lamb, chicken, and fresh vegetables","price":20}]},{"group":"sides and sauces","items":[{"name":"raita","description":"fresh whipped yogurt with grated carrots, cucumbers, and spices","price":3.5},{"name":"mango chutney","description":"sweet and sour mango relish","price":2.5},{"name":"achar","description":"mixed pickles","price":2.5},{"name":"papadam","description":"A thin, crisp bread made from lentil flour","price":3},{"name":"rice","description":"basmati rice","price":3.5}]},{"group":"desserts","items":[{"name":"kheer","description":"Indian rice pudding","price":3.5},{"name":"gulab jamun","description":"honey-rolled milk balls","price":3.5},{"name":"kulfi","description":"indian-style ice cream flavored with nuts and cardamom seeds","price":4},{"name":"mango ice cream","description":"mango ice cream","price":4},{"name":"molten chocolate cake","description":"a soft chocolate cake with a liquid center","price":4},{"name":"banana caramel cheesecake","description":"banana caramel cheesecake","price":8}]},{"group":"beverages","items":[{"name":"mango lassi","description":"fresh mangoes with yogurt","price":3.5},{"name":"salt lassi","description":"fresh yogurt with salt spices","price":3},{"name":"sweet lassi","description":"fresh yogurt with sweet and cardamom","price":3},{"name":"water bottle","description":"20 oz","price":1.25},{"name":"Coke","description":"20 oz","price":2.25},{"name":"Diet Coke","description":"20 oz","price":2.25},{"name":"Ginger Ale","description":"20 oz","price":2.25},{"name":"Sprite","description":"20 oz","price":2.25}]}]');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNsQmY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ2RmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixFQUFFLGFBQWE7QUFDN0M7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ1pmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNmZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDWm1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVU7QUFDM0MseUNBQXlDLGlCQUFpQjtBQUMxRCxtQ0FBbUMsV0FBVztBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQyx3Q0FBd0Msa0JBQWtCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCLHVDQUFRO0FBQ2hDO0FBQ0EsZ0JBQWdCLHdCQUF3QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztVQ2hFZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm9CO0FBQ2U7QUFDSjtBQUNFO0FBQ0Y7QUFDTTtBQUNGOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxvREFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsa0RBQVU7QUFDWixFQUFFLG1EQUFXO0FBQ2IsRUFBRSxrREFBVTtBQUNaLEVBQUUscURBQWE7O0FBRWYsRUFBRSxvREFBWTtBQUNkLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCByZW5kZXJBYm91dCA9ICgpID0+IHtcbiAgXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKVxuXG4gIGNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXG4gIGFib3V0U2VjdGlvbi5pZCA9IFwiYWJvdXRcIlxuICBhYm91dFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIixcImFib3V0LXNlY3Rpb25cIixcImRpc3BsYXktbm9uZVwiKVxuICBhYm91dFNlY3Rpb24uaW5uZXJIVE1MID0gYFxuICA8aDE+QWJvdXQ8L2gxPlxuICA8cD5JJ20gYSBsb25ndGltZSB2ZWdldGFyaWFuLCBhbmQgYW4gZXZlbiBsb25nZXItdGltZSBsb3ZlciBvZiBJbmRpYW4gZm9vZCwgc28gSSB0aG91Z2h0IHRvIGNyZWF0ZSB0aGUgbWVudSBmb3IgcG9zc2libHkgdGhlIGlkZWFsIHJlc3RhdXJhbnQgZm9yIG1lLjwvcD5cbiAgPHA+PHNwYW4gaWQ9XCJkZWZpbml0aW9uXCI+VGhlIHRlcm0gPGRmbiBhcmlhLWRlc2NyaWJlZGJ5PVwiI2RlZmluaXRpb25cIj5haGltc2E8L2Rmbj4gcmVmZXJzIHRvIG5vbnZpb2xlbmNlIHRvd2FyZCBhbGwgbGl2aW5nIHRoaW5ncywgYW5kIHNlZW1lZCB0aGUgcGVyZmVjdCBuYW1lIGZvciB0aGlzIHByb2plY3QuIFNvIHBlcmZlY3QsIGluIGZhY3QsIHRoYXQgdGhlcmUgYXJlIHZlZ2FuIGFuZCB2ZWdldGFyaWFuIHJlc3RhdXJhbnRzIHdpdGggdGhpcyBuYW1lIGV2ZXJ5d2hlcmUuIFRoaXMgcHJvamVjdCBpcyBub3QgYWZmaWxpYXRlZCB3aXRoIGFueSBvZiB0aGVtLCBub3IgaGF2ZSBJIHRha2VuIGFueSBvZiB0aGUgbWVudXMsIGRlc2NyaXB0aW9ucywgcHJpY2VzLCBvciBwaWN0dXJlcyBmcm9tIGFueSBvZiB0aGVtLjwvcD5cbiAgPHA+QWxsIHBpY3R1cmVzIGFyZSB0YWtlbiBmcm9tIGZyZWVzaXRlcyBsaWtlIFVuc3BsYXNoIGFuZCBQaXhhYmF5LiBEZXNjcmlwdGlvbnMgb2YgZm9vZCBpdGVtcyBhcmUgYWRhcHRlZCBmcm9tIFdpa2lwZWRpYSBlbnRyaWVzLiBQcmljZXMgYXJlIGJhc2VkIG9uIG15IG93biBpbXByZXNzaW9ucy48L3A+XG4gIDxwPkVuam95ITwvcD5cbiAgYFxuXG4gIG1haW4uYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJBYm91dCIsImNvbnN0IHJlbmRlckNvbnRhY3QgPSAoKSA9PiB7XG4gIFxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIilcblxuICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXG4gIGNvbnRhY3RTZWN0aW9uLmlkID0gXCJjb250YWN0XCJcbiAgY29udGFjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIixcImNvbnRhY3Qtc2VjdGlvblwiLFwiZGlzcGxheS1ub25lXCIpXG4gIGNvbnRhY3RTZWN0aW9uLmlubmVySFRNTCA9IGBcbiAgICA8aDE+Q29udGFjdCBVczwvaDE+XG4gIGBcblxuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RTZWN0aW9uKVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDb250YWN0IiwiY29uc3QgcmVuZGVyRm9vdGVyID0gKCkgPT4ge1xuXG4gIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5cbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKVxuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcInNpdGUtZm9vdGVyXCIpXG4gIGZvb3Rlci5pbm5lckhUTUwgPSBgXG4gICAgPHAgY2xhc3M9XCJjb2xvcGhvblwiPiZjb3B5OyR7Y3VycmVudFllYXJ9IEtldmluIE1pc3NldHQ8L3A+XG4gIGBcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckZvb3RlciIsImNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwic2l0ZS1oZWFkZXJcIilcbiAgaGVhZGVyLmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz1cInNpdGUtdGl0bGVcIj5BaGltc2E8L2Rpdj5cbiAgICA8bmF2IGNsYXNzPVwic2l0ZS1uYXZcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJuYXYtYnV0dG9uIGFjdGl2ZVwiIGRhdGEtc2VjdGlvbj1cImhvbWVcIj5Ib21lPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwibmF2LWJ1dHRvblwiIGRhdGEtc2VjdGlvbj1cIm1lbnVcIj5NZW51PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwibmF2LWJ1dHRvblwiIGRhdGEtc2VjdGlvbj1cImFib3V0XCI+QWJvdXQ8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJuYXYtYnV0dG9uXCIgZGF0YS1zZWN0aW9uPVwiY29udGFjdFwiPkNvbnRhY3Q8L2J1dHRvbj5cbiAgICA8L25hdj5gXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIZWFkZXIiLCJjb25zdCByZW5kZXJIb21lID0gKCkgPT4ge1xuICBcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpXG5cbiAgY29uc3QgaG9tZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICBob21lU2VjdGlvbi5pZCA9IFwiaG9tZVwiXG4gIGhvbWVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIsXCJob21lLXNlY3Rpb25cIilcbiAgaG9tZVNlY3Rpb24uaW5uZXJIVE1MID0gYDxoMT5XZWxjb21lITwvaDE+YFxuXG4gIG1haW4uYXBwZW5kQ2hpbGQoaG9tZVNlY3Rpb24pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhvbWUiLCJpbXBvcnQgbWVudUpTT04gZnJvbSBcIi4vbWVudS5qc29uXCJcbi8vIG1lbnUgZ3JvdXBzIGdpdmVuIGJ5IG1lbnVKU09OW2ldXG4vLyBncm91cCBuYW1lID0gbWVudUpTT05baV0uZ3JvdXBcbi8vIGl0ZW1zIHN1YmFycmF5ID0gbWVudUpTT05baV0uZ3JvdXAuaXRlbXNcbi8vIGluZGl2aWR1YWwgaXRlbSA9IG1lbnVKU09OW2ldLmdyb3VwLml0ZW1zW2pdXG4vLyBpdGVtIHZhbHVlcyA9IG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgZ2ZBdmFpbGFibGUsIHZlZ2FuQXZhaWxhYmxlXG5cbi8vIFRPRE86IGFkZCBwaWN0dXJlc1xuXG5jbGFzcyBNZW51IHtcbiAgY29uc3RydWN0b3IobWVudSkge1xuICAgIHRoaXMuZ3JvdXBzID0gWy4uLm1lbnVdXG4gIH1cblxuICBidWlsZE1lbnVJdGVtID0gKGdyb3VwLCBpdGVtKSA9PiB7XG4gICAgY29uc3QgZ2ZTcGFuID0gKGl0ZW0uZ2ZBdmFpbGFibGUgPT09IHRydWUpID8gYDxzcGFuIGNsYXNzPVwiZ2YtYXZhaWxhYmxlXCIgYXJpYS1sYWJlbD1cImF2YWlsYWJsZSBnbHV0ZW4tZnJlZVwiPihHKTwvc3Bhbj5gIDogXCJcIlxuICAgIGNvbnN0IHZlZ2FuU3BhbiA9IChpdGVtLnZlZ2FuQXZhaWxhYmxlID09PSB0cnVlKSA/IGA8c3BhbiBjbGFzcz1cInZlZ2FuLWF2YWlsYWJsZVwiIGFyaWEtbGFiZWw9XCJhdmFpbGFibGUgdmVnYW5cIj4oVik8L3NwYW4+YCA6IFwiXCJcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIilcbiAgICBtZW51SXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICA8aDM+JHtpdGVtLm5hbWV9JHtnZlNwYW59JHt2ZWdhblNwYW59PC9oMz5cbiAgICAgIDxwIGNsYXNzPVwibWVudS1pdGVtLWRlc2NyaXB0aW9uXCI+JHtpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxwIGNsYXNzPVwibWVudS1pdGVtLXByaWNlXCI+JHtpdGVtLnByaWNlfTwvcD5cbiAgICAgIGBcbiAgICBncm91cC5hcHBlbmRDaGlsZChtZW51SXRlbSlcbiAgfVxuXG4gIGJ1aWxkTWVudUdyb3VwID0gKGdyb3VwKSA9PiB7XG4gICAgY29uc3QgbWVudUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1lbnVHcm91cC5jbGFzc0xpc3QuYWRkKFwibWVudS1ncm91cFwiKVxuICAgIG1lbnVHcm91cC5pbm5lckhUTUwgPSBgXG4gICAgPGgyIGNsYXNzPVwibWVudS1ncm91cC10aXRsZVwiPiR7Z3JvdXAuZ3JvdXB9PC9oMj5cbiAgICA8cCBjbGFzcz1cIm1lbnUtZ3JvdXAtdHJhbnNsYXRpb25cIj4ke2dyb3VwLnRyYW5zbGF0aW9ufTwvcD5cbiAgICBgXG4gICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG4gICAgbWVudUl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1zXCIpXG4gICAgXG4gICAgZ3JvdXAuaXRlbXMuZm9yRWFjaChpdGVtPT4gdGhpcy5idWlsZE1lbnVJdGVtKG1lbnVJdGVtcywgaXRlbSkpXG4gICAgXG4gICAgbWVudUdyb3VwLmFwcGVuZENoaWxkKG1lbnVJdGVtcylcbiAgICByZXR1cm4gbWVudUdyb3VwXG4gICAgLy9tZW51U2VjdGlvbi5hcHBlbmRDaGlsZChtZW51R3JvdXApXG4gIH1cbn1cblxuY29uc3QgcmVuZGVyTWVudSA9ICgpID0+IHtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIilcblxuICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXG4gIG1lbnVTZWN0aW9uLmlkID0gXCJtZW51XCJcbiAgbWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIixcIm1lbnUtc2VjdGlvblwiLFwiZGlzcGxheS1ub25lXCIpXG4gIG1lbnVTZWN0aW9uLmlubmVySFRNTCA9IFwiPGgxPk91ciBNZW51PC9oMT5cIlxuXG4gIG1haW4uYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pXG5cbiAgY29uc3QgbWVudSA9IG5ldyBNZW51KG1lbnVKU09OKVxuICBcbiAgZm9yIChsZXQgaT0wOyBpIDwgbWVudS5ncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtZW51R3JvdXAgPSBtZW51LmJ1aWxkTWVudUdyb3VwKG1lbnUuZ3JvdXBzW2ldKVxuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVHcm91cClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNZW51IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5pbXBvcnQgcmVuZGVySGVhZGVyIGZyb20gXCIuL2hlYWRlclwiXG5pbXBvcnQgcmVuZGVySG9tZSBmcm9tIFwiLi9ob21lXCJcbmltcG9ydCByZW5kZXJBYm91dCBmcm9tIFwiLi9hYm91dFwiXG5pbXBvcnQgcmVuZGVyTWVudSBmcm9tIFwiLi9tZW51XCJcbmltcG9ydCByZW5kZXJDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIlxuaW1wb3J0IHJlbmRlckZvb3RlciBmcm9tIFwiLi9mb290ZXJcIlxuXG5jb25zdCBwYWdlTG9hZCA9ICgoKSA9PiB7XG4gIFxuICAvLyBUaGlzIGlzIGZ1dHVyZS1wcm9vZmluZywgaW4gY2FzZSBJIGRlY2lkZSB0byBtYWtlIGEgbm9uLUpTIHZlcnNpb24gZm9yXG4gIC8vIHBlb3BsZSB3aG8gdmlzaXQgd2l0aCBKUyB0dXJuZWQgb2ZmLiBJIGRvbid0IGxpa2UgdGhlIGlkZWEgb2Ygc2l0ZXMgYmVpbmdcbiAgLy8gdW51c2FibGUgZm9yIHBlb3BsZSB3aXRoIHNsb3cgY29ubmVjdGlvbnMgb3IgZGF0YSBsaW1pdHMuXG4gIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gXCJcIlxuXG4gIHJlbmRlckhlYWRlcigpXG4gICAgICBcbiAgLy9tYWluXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pXG5cbiAgcmVuZGVySG9tZSgpXG4gIHJlbmRlckFib3V0KClcbiAgcmVuZGVyTWVudSgpXG4gIHJlbmRlckNvbnRhY3QoKVxuXG4gIHJlbmRlckZvb3RlcigpXG59KSgpXG5cbmNvbnN0IHNlY3Rpb25CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYnV0dG9uXCIpXG5jb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VjdGlvblwiKVxuXG5jb25zdCBzaG93UGFnZSA9IChlKSA9PiB7ICBcbiAgLy8gZG9uJ3QgZG8gYW55dGhpbmcgaWYgc29tZW9uZSBjbGlja3MgdGhlIGN1cnJlbnQgYnV0dG9uXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVyblxuICBjb25zdCBzZWN0aW9uVG9TaG93ID0gZS50YXJnZXQuZGF0YXNldC5zZWN0aW9uXG4gIFxuICAvLyBzaG93IGNsaWNrZWQgc2VjdGlvbiwgaGlkZSBvdGhlcnNcbiAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHNlY3Rpb24uaWQgPT09IHNlY3Rpb25Ub1Nob3cgPyBzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5LW5vbmVcIikgOiBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW5vbmVcIikpXG4gIFxuICAvLyBzZXQgYWN0aXZlIGxpbmtcbiAgc2VjdGlvbkJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmRhdGFzZXQuc2VjdGlvbiA9PT0gc2VjdGlvblRvU2hvdyA/IGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpIDogYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG5cbn1cblxuc2VjdGlvbkJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93UGFnZSkpXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==