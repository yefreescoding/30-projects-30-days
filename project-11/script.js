const form = document.getElementById('form_age');

const yearResult = document.getElementById('years_result');
const dayResult = document.getElementById('days_result');
const monthResult = document.getElementById('months_result');

const errorMessageDay = document.querySelector('.error_message_day');
const errorMessageMonth = document.querySelector('.error_message_month');
const errorMessageYear = document.querySelector('.error_message_year');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let year = document.getElementById('year');
  let day = document.getElementById('day');
  let month = document.getElementById('month');

  const regExp = /[a-zA-Z]/g;

  if (
    regExp.test(day.value) ||
    regExp.test(month.value) ||
    regExp.test(year.value)
  ) {
    document
      .querySelector('.error_message')
      .setAttribute('aria-invalid', 'true');
    return;
  }

  const enteredYear = parseInt(year.value);
  const enteredMonth = parseInt(month.value);
  const enteredDay = parseInt(day.value);

  if (enteredMonth < 1 || enteredMonth > 12) {
    document.querySelectorAll('.main__form label').forEach((label) => {
      label.setAttribute('aria-invalid', 'true');
    });
    errorMessageMonth.setAttribute('aria-invalid', 'true');
    return;
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  if (enteredYear > currentYear) {
    document.querySelectorAll('.main__form label').forEach((label) => {
      label.setAttribute('aria-invalid', 'true');
    });
    errorMessageYear.setAttribute('aria-invalid', 'true');
    return;
  }

  const lastDayOfMonth = new Date(enteredYear, enteredMonth, 0).getDate();

  if (enteredDay < 1 || enteredDay > lastDayOfMonth) {
    document.querySelectorAll('.main__form label').forEach((label) => {
      label.setAttribute('aria-invalid', 'true');
    });
    errorMessageDay.setAttribute('aria-invalid', 'true');
    return;
  }

  const errorMessages = document.querySelectorAll('.error_message');

  errorMessages.forEach((errorMessage) => {
    errorMessage.setAttribute('aria-invalid', 'false');
  });

  document.querySelectorAll('.main__form label').forEach((label) => {
    label.setAttribute('aria-invalid', 'false');
  });

  const startDate = new Date(`${year.value}-${month.value}-${day.value}`);
  const diff = getDateDiffInYMD(startDate, currentDate);

  yearResult.innerText = diff.years;
  monthResult.innerText = diff.months;
  dayResult.innerText = diff.days;

  console.log(diff);
});

function getDateDiffInYMD(startDate, endDate) {
  const oneDayMs = 1000 * 60 * 60 * 24;
  const diffMs = endDate.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffMs / oneDayMs);
  const years = Math.floor(diffDays / 365);
  const months = Math.floor(diffDays / 30.44) % 12;
  const days = diffDays - years * 365 - Math.floor(months * 30.44);
  return { years, months, days };
}
