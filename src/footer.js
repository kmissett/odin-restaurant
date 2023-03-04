const renderFooter = () => {

  const currentYear = new Date().getFullYear()

  const footer = document.createElement("footer")
  footer.classList.add("site-footer")
  footer.innerHTML = `
    <p class="colophon">&copy;${currentYear} Kevin Missett</p>
  `
  document.body.appendChild(footer)
}

export default renderFooter