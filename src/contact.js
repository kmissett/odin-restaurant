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

export default renderContact