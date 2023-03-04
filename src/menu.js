import menuJSON from "./menu.json"
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
    return `<li><h3>${item.name}</h3><span class="price">${item.price}</span><p class="description">${item.description}${gfSpan}${veganSpan}</p></li>`
  }

  buildMenuCategory(category) {
    const translation = (category.translation) ? '<p class="translation">' + category.translation + '</p>' : ""
    let menuItems = ""
    for (let i=0; i < category.items.length; i++) {menuItems += this.buildMenuItem(category.items[i])}
    return `<div class="menu-category"><header class="menu-category-header"><h2>${category.category}</h2>${translation}</header><ul>${menuItems}</ul></div>`
  }
}

const renderMenu = () => {
  
  const menu = new Menu(menuJSON)
  
  const menuSection = document.createElement("section")
  menuSection.id = "menu"
  menuSection.classList.add("section","menu-section","display-none")
  
  let menuSectionInner = "<header class=\"menu-header\"><h1>Our Menu</h1><p><span>(v): vegan available</span><span>(g): gluten-free available</span></p></header>"
  for(let i=0; i < menu.categories.length; i++) {menuSectionInner += menu.buildMenuCategory(menu.categories[i])}
  menuSection.innerHTML = menuSectionInner
  
  document.querySelector("main").appendChild(menuSection)
}

export default renderMenu