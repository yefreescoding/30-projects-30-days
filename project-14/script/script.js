console.log('test');

const $inputCardNumber = document.getElementById('card-number-input');
const $cardNumberDisplay = document.getElementById('card-number');

const $inputCardName = document.getElementById('card-name-input');
const $cardNameDisplay = document.getElementById('card-name');

const $inputCardMonth = document.getElementById('card-month-input');
const $cardMonthDisplay = document.getElementById('card-month');

const $inputCardYear = document.getElementById('card-year-input');
const $cardYearDisplay = document.getElementById('card-year');

const $inputCardCvc = document.getElementById('card-cvc-input');
const $cardCvcDisplay = document.getElementById('card-cvc');

function formatCardNumber(input) {
  const inputValue = input.value.replace(/\D/g, '');
  const formattedValue = inputValue.replace(/(\d{4})(?=\d)/g, '$1 ');
  input.value = formattedValue;
  return formattedValue;
}

function showError(errorElementData) {
  for (let errorMessage of errorMessages) {
    if (errorMessage.getAttribute('data-error') === errorElementData) {
      errorMessage.setAttribute('aria-invalid', 'true');
      console.log(errorMessage);
    }
  }
}
function clearError() {
  for (let errorMessage of errorMessages) {
    errorMessage.setAttribute('aria-invalid', 'false');
  }
}

$inputCardNumber.oninput = () => {
  formatCardNumber($inputCardNumber);
  $cardNumberDisplay.innerText = $inputCardNumber.value;
};
$inputCardName.oninput = () => {
  $cardNameDisplay.innerText = $inputCardName.value;
};
$inputCardMonth.oninput = () => {
  $cardMonthDisplay.innerText = $inputCardMonth.value;
};
$inputCardYear.oninput = () => {
  $cardYearDisplay.innerText = $inputCardYear.value;
};
$inputCardCvc.oninput = () => {
  $cardCvcDisplay.innerText = $inputCardCvc.value;
};

const errorMessages = document.querySelectorAll('.error');

const form = document.getElementById('card-form');
const inputs = document.querySelectorAll("input[type='text']");

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {};

  inputs.forEach((input) => {
    const inputId = input.id;
    const inputValue = input.value.trim();
    formData[inputId] = inputValue;
  });

  console.log(formData);

  if (formData['card-name-input'] === '') {
    showError('card-name');
    return false;
  } else {
    clearError();
  }

  if (
    formData['card-number-input'] === '' ||
    formData['card-number-input'].length < 19
  ) {
    showError('card-number');
    return false;
  } else {
    clearError();
  }

  if (
    formData['card-month-input'] === '' ||
    formData['card-year-input'] === '' ||
    formData['card-cvc-input'] === ''
  ) {
    showError('date-cvc');
    return false;
  } else {
    clearError();
  }
  if (
    /[^0-9]/.test(formData['card-month-input']) ||
    /[^0-9]/.test(formData['card-year-input']) ||
    /[^0-9]/.test(formData['card-cvc-input'])
  ) {
    showError('date-cvc-numbers-only');
    return false;
  } else {
    clearError();
  }

  form.classList.add('submitted');

  document
    .querySelector('.main__completed')
    .setAttribute('data-visible', 'true');
});
