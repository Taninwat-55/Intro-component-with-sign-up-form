/* Start by targeting or referencing to classes, IDs, etc. and store them in variables */
const form = document.querySelector('.form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

const errorMessages = document.querySelectorAll('.error-message');
const errorMessageDivs = document.querySelectorAll('.errorMessage');

// This is to remove the error message.
errorMessageDivs.forEach((errorMessageDiv) => {
  errorMessageDiv.style.display = 'none';
});

// This is to remove the error message style such as border, error-icon, etc.
errorMessages.forEach((errorMessage) => {
  errorMessage.classList.remove('error-message');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isFormValid = true;

  const inputs = [firstName, lastName, email, password];

  inputs.forEach((input, index) => {
    if (!input.value.trim()) {
      isFormValid = false;

      errorMessageDivs[index].style.display = 'block';

      input.classList.add('error-message');

      input.setAttribute('placeholder', index === 2 ? 'email@email.com' : '');
    } else {
      errorMessageDivs[index].style.display = 'none';
      input.classList.remove('error-message');
    }
  });
});

if (isFormValid) {
  console.log('Form submitted successfully');
}
