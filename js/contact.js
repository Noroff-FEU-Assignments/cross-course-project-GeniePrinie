const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const textMessage = document.querySelector("#textMessage");
const textMessageError = document.querySelector("#textMessageError");
const message = document.querySelector(".message");

form.addEventListener("submit", validateTheForm);

function validateTheForm(event) {
  event.preventDefault();
  message.innerHTML = "";

  if (formValid(fullName, email, textMessage)) {
    form.reset();
    message.innerHTML = `<p id="message">Your form has been submitted</p>`;
  }
}

function formValid(name, email, textMessage) {
  let isValid = true;

  if (checkLength(name.value, 1)) {
    nameError.innerHTML = `<p></p>`;
  } else {
    nameError.innerHTML = `<p>Please enter your name</p>`;
    isValid = false;
  }

  if (checkEmail(email.value)) {
    emailError.innerHTML = `<p></p>`;
  } else {
    emailError.innerHTML = `<p>Please enter a valid email address</p>`;
    isValid = false;
  }
  if (checkLength(textMessage.value, 1)) {
    textMessageError.innerHTML = `<p></p>`;
  } else {
    textMessageError.innerHTML = `<p>Message is required</p>`;
    isValid = false;
  }

  return isValid;
}

function checkLength(value, len) {
  if (value !== undefined && value.trim().length >= len) {
    return true;
  }
  return false;
}

function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const matchPattern = regEx.test(email);
  return matchPattern;
}
