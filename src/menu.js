import menuJSON from "./menu.json"
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

  const menu = new Menu(menuJSON)
  
  for (let i=0; i < menu.groups.length; i++) {
    const menuGroup = menu.buildMenuGroup(menu.groups[i])
    menuSection.appendChild(menuGroup)
  }
}

export default renderMenu