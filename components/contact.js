class Form {
  constructor(element) {
    this.element = element;
    this.name = this.element.querySelector("#form-name");
    this.email = this.element.querySelector("#form-email");
    this.message = this.element.querySelector("#form-message");
    this.button = this.element.querySelector("button");
    this.error = document.querySelector(".error");

    this.button.addEventListener("click", this.validate.bind(this));
    this.name.addEventListener("change", this.clearError.bind(this));
    this.email.addEventListener("change", this.clearError.bind(this));
    this.message.addEventListener("change", this.clearError.bind(this));
    this.sendMessage.bind(this);
  }

  validate(e) {
    e.preventDefault();

    this.error.classList.remove("valid-message");

    const alphaOnly = /^[a-zA-Z\s]*$/,
      emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (this.name.value === "" || !alphaOnly.test(this.name.value)) {
      this.error.textContent = "Please enter a valid name.";
      this.error.style.opacity = 1;
    } else if (this.email.value === "" || !emailTest.test(this.email.value)) {
      this.error.textContent = "Please enter a valid email.";
      this.error.style.opacity = 1;
    } else if (this.message.value === "") {
      this.error.textContent = "Please enter your message.";
      this.error.style.opacity = 1;
    } else {
      this.clearError();
      this.sendMessage();
    }
  }

  clearError() {
    this.error.style.opacity = 0;
  }

  sendMessage() {
    setTimeout(() => {
      this.name.value = this.email.value = this.message.value = "";
      this.error.classList.add("valid-message");
      this.error.textContent = "Message sent!";
      this.error.style.opacity = 1;
    }, 800);
  }
}

const form = new Form(document.querySelector("#contact-form"));
