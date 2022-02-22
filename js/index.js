function submit() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const company = document.getElementById("company");
  const message = document.getElementById("message");

  if (name.value == null || name.value == "") {
    name.classList.add("red-color");
    name.placeholder = "Write your name and surname";
  }
  if (company.value == null || company.value == "") {
    company.classList.add("red-color");
    company.placeholder = "Write your company name";
  }
  if (email.value == null || email.value == "") {
    email.classList.add("red-color");
    email.placeholder = "Write an email(example@example.com)";
  }
  if (phone.value == null || phone.value == "") {
    phone.classList.add("red-color");
    phone.placeholder = "Write your phone number";
  }
  if (message.value == null || message.value == "") {
    message.classList.add("red-color");
    message.placeholder = "Write your message";
  }
}

function reset() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const company = document.getElementById("company");
  const message = document.getElementById("message");
  const fields = document.getElementsByClassName("field");

  for (let i = 0; i < fields.length; i++) {
    fields[i].classList.remove("red-color");
    fields[i].value = "";
  }
  document.getElementById("phone-error").style.display = "none";
  document.getElementById("email-error").style.display = "none";
  name.placeholder = "Name";
  email.placeholder = "Email";
  phone.placeholder = "Phone";
  company.placeholder = "Company";
  message.placeholder = "Your message";
}

function clearField(element) {
  const fields = document.getElementsByClassName("field");
  const phoneError = document.getElementById("phone-error");
  const emailError = document.getElementById("email-error");
  if (element.name == "phone") {
    phoneError.style.display = "none";
  }
  if (element.name == "email") {
    emailError.style.display = "none";
  }

  for (let i = 0; i < fields.length; i++) {
    if (element.name == fields[i].name) {
      fields[i].classList.remove("red-color");
    }
  }
}
function onChange(element) {
  console.log(element.name);
  const phoneError = document.getElementById("phone-error");
  const emailError = document.getElementById("email-error");
  const email = document.getElementById("email");

  if (
    element.name == "phone" &&
    (element.value.length < 8 ||
      element.value.length > 10 ||
      !/^[\d]+$/.test(element.value))
  ) {
    phone.classList.add("red-color");
    phoneError.style.display = "block";
  }
  if (
    element.name == "email" &&
    element.value.length > 0 &&
    !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(element.value)
  ) {
    email.classList.add("red-color");
    emailError.style.display = "block";
  }
}
