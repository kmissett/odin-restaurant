import "./style.css"

import renderHeader from "./header"
import renderHome from "./home"
import renderAbout from "./about"
import renderMenu from "./menu"
import renderContact from "./contact"
import renderFooter from "./footer"

const pageLoad = (() => {
  
  // This is future-proofing, in case I decide to make a non-JS version for
  // people who visit with JS turned off. I don't like the idea of sites being
  // unusable for people with slow connections or data limits.
  document.body.innerHTML = ""

  renderHeader()
      
  //main
  const main = document.createElement("main")
  document.body.appendChild(main)

  renderHome()
  renderMenu()
  renderAbout()
  renderContact()

  renderFooter()
  
  // set contact page as active initially
  const currentPage = document.getElementById("contact")
  currentPage.classList.remove("display-none")

  document.querySelector(`[data-section="contact"]`).classList.add("active")

})()

const sections = document.querySelectorAll("main > section")

const showPage = (e) => {  
  // don't do anything if someone clicks the current button
  if (e.target.classList.contains("active")) return
  const sectionToShow = e.target.dataset.section
  


  // show clicked section, hide others
  sections.forEach(section => {
    if (section.id === sectionToShow) {
      section.classList.remove("display-none") 
      section.ariaCurrent="page"
    } else {
      section.classList.add("display-none") 
      section.ariaCurrent=""
    }
  })
  
  // set active link
  sectionButtons.forEach(button => button.dataset.section === sectionToShow ? button.classList.add("active") : button.classList.remove("active"))

}

const sectionButtons = document.querySelectorAll(".nav-button")
sectionButtons.forEach(button => button.addEventListener("click", showPage))

