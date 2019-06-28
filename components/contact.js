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
    $.ajax({
      type: "POST",
      url: `https://api.elasticemail.com/v2/email/send?apikey=c5f9615b-1bf2-4037-ba36-d034eb2f1978&subject=New Droom Site Message&from=${
        this.email.value
      }&fromName=${this.name.value}&bodyText=${
        this.message.value
      }\n\n&to=${mailto}`
    }).done(function(response) {
      if (response.success === true) {
        document.querySelector(".error").classList.add("valid-message");
        document.querySelector(".error").textContent =
          "Thank you for your message! We'll be in touch shortly.";
        document.querySelector(".error").style.opacity = 1;
      }
    });
  }
}

const form = new Form(document.querySelector("#contact-form")),
  mailto = "aaron.johnson1031@gmail.com";
