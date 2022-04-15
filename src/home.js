const renderHome = () => {
  
  const main = document.querySelector("main")

  const homeSection = document.createElement("section")
  homeSection.id = "home"
  homeSection.classList.add("section","home-section", "display-none")
  homeSection.innerHTML = `<h1>Welcome!</h1>`

  main.appendChild(homeSection)
}

export default renderHome