const nameError = document.querySelector('.commentNameError');
const subjectError = document.querySelector('.subjectError');
const emailError = document.querySelector('.commentEmailError');
const commentError = document.querySelector('.commentTextError');
const verification = document.querySelector('.verifyer');

const submit = document.querySelector('#commentBtn');

submit.onclick = function (event) {
  event.preventDefault();

  const name = document.querySelector('#commentName').value.trim();
  const email = document.querySelector('#commentEmail').value.trim();
  const comment = document.querySelector('#commentField').value.trim();
  let nameValidation = false;
  let emailValidation = false;
  let commentValidation = false;

  if (testLength(name, 5)) {
    nameError.classList.add('hide');
    nameValidation = true;
  } else {
    nameError.classList.remove('hide');
  }
  if (validateEmail(email)) {
    emailError.classList.add('hide');
    emailValidation = true;
  } else {
    emailError.classList.remove('hide');
  }
  if (testLength(comment, 25)) {
    commentError.classList.add('hide');
    commentValidation = true;
  } else {
    commentError.classList.remove('hide');
  }

  //   if (
  //     nameValidation &&
  //     subjectValidation &&
  //     emailValidation &&
  //     commentValidation
  //   ) {
  //     verification.classList.remove('hide');
  //   } else {
  //     verification.classList.add('hide');
  //   }

  //   setTimeout(function () {
  //     verification.classList.add('hide');
  //   }, 3000);
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
