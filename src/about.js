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

export default renderAbout