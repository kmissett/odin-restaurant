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

export default renderHeader