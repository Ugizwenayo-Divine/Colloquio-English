const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const company = document.querySelector("#company");
const message = document.querySelector("#message");
const fields = document.querySelectorAll(".field");

const clearFieldError = (element) => {
  element.classList.remove("input-error");
  if (
    element.nextElementSibling &&
    element.nextElementSibling.classList.contains("error")
  ) {
    element.nextElementSibling.style.display = "none";
  }
};

const validateEmail = (element) => {
  if (
    element.value.length > 0 &&
    !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(element.value)
  ) {
    element.classList.add("input-error");
    element.nextElementSibling.style.display = "block";
  }
};

const onChange = ({ target: element }) => {
  if (element.value.length >= 8 && element.value.length <= 10) {
    clearFieldError(element);
  } else {
    element.classList.add("input-error");
    element.nextElementSibling.style.display = "block";
  }
};

const isNumber = (event) => {
  const charCode = event.which ? event.which : event.keyCode;
  if (
    (charCode > 31 && (charCode < 48 || charCode > 57)) ||
    event.target.value.length > 9
  ) {
    event.preventDefault();
  }
};

const validateInput = (element, placeholder) => {
  if (element.value === null || element.value.trim() === "") {
    element.classList.add("input-error");
    element.placeholder = placeholder;
  }
};

const submit = () => {
  validateInput(nameInput, "Write your name and surname");
  validateInput(company, "Write your company name");
  validateInput(email, "Write an email (example@example.com)");
  validateInput(phone, "Write your phone number");
  validateInput(message, "Write your message");

  if (email.value.length > 0) {
    validateEmail(email);
  }
};

const reset = () => {
  fields.forEach((el) => {
    clearFieldError(el);
    el.value = "";
  });
  nameInput.placeholder = "Name";
  email.placeholder = "Email";
  phone.placeholder = "Phone";
  company.placeholder = "Company";
  message.placeholder = "Your message";
};

const initialEvents = () => {
  fields.forEach((el) => {
    if (el.name !== "phone") {
      el.addEventListener("keyup", clearFieldError);
    } else {
      el.addEventListener("keyup", onChange);
      el.addEventListener("keypress", isNumber);
    }
  });
  document.querySelector("#send-btn").addEventListener("click", submit);
  document.querySelector("#reset-btn").addEventListener("click", reset);
};

initialEvents();
