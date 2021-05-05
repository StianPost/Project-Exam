const nameError = document.querySelector('.nameError');
const subjectError = document.querySelector('.subjectError');
const emailError = document.querySelector('.emailError');
const addressError = document.querySelector('.addressError');
const verification = document.querySelector('.verifyer');

const submit = document.querySelector('#submitBtn');

submit.onclick = function (event) {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const subject = document.querySelector('#subject').value.trim();
  const email = document.querySelector('#email').value.trim();
  const address = document.querySelector('#address').value.trim();
  let nameValidation = false;
  let subjectValidation = false;
  let emailValidation = false;
  let addressValidation = false;

  if (testLength(name, 1)) {
    nameError.classList.add('hide');
    nameValidation = true;
  } else {
    nameError.classList.remove('hide');
  }
  if (testLength(subject, 10)) {
    subjectError.classList.add('hide');
    subjectValidation = true;
  } else {
    subjectError.classList.remove('hide');
  }
  if (validateEmail(email)) {
    emailError.classList.add('hide');
    emailValidation = true;
  } else {
    emailError.classList.remove('hide');
  }
  if (testLength(address, 25)) {
    addressError.classList.add('hide');
    addressValidation = true;
  } else {
    addressError.classList.remove('hide');
  }

  if (
    nameValidation &&
    subjectValidation &&
    emailValidation &&
    addressValidation
  ) {
    verification.classList.remove('hide');
  } else {
    verification.classList.add('hide');
  }

  setTimeout(function () {
    verification.classList.add('hide');
  }, 3000);
};

function validateEmail(emailAddress) {
  const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.(?:\.[a-zA-Z0-9-]+)*$/;
  const isEmailValid = emailExpression.test(emailAddress);
  return isEmailValid;
}

function testLength(elm, len) {
  if (elm.length >= len) {
    return true;
  } else {
    return false;
  }
}
