document.querySelector('.card-number-input').oninput = () =>{
  document.querySelector('.card-numbers').innerText = document.querySelector('.card-number-input').value;
}
document.querySelector('.card-holder-name').oninput = () =>{
  document.querySelector('.card-name').innerText = document.querySelector('.card-holder-name').value;
}
document.querySelector('.card-month').oninput = () =>{
  document.querySelector('.month').innerText = document.querySelector('.card-month').value;
}
document.querySelector('.card-year').oninput = () =>{
  document.querySelector('.year').innerText = document.querySelector('.card-year').value;
}
document.querySelector('.cvc').oninput = () =>{
  document.querySelector('.cvc-output').innerText = document.querySelector('.cvc').value;
}

// Display error with JavaScript
function showError(errorElement, errorMessage){
  document.querySelector("." + errorElement).classList.add("display-error");
  document.querySelector("." + errorElement).innerHTML = errorMessage;
}
function clearError(){
  let errors = document.querySelectorAll(".error");

  for (let error of errors) {
    error.classList.remove("display-error");
  }
}

let form = document.forms['card-payment-form'];

form.onsubmit = function(event){
  
  clearError(); 

  if(form.name.value === ""){
    showError("name-error", "You have to enter the name linked to the card.");
    return false;
  }

  if(form.card.value === ""){
    showError("number-error", "This space can't be blank.");
    return false;
  }

  if(form.month.value === ""){
    showError("date-error", "Can't be blank.");
    return false;
  }

  if(form.year.value === ""){
    showError("date-error", "Can't be blank.");
    return false;
  }

  if(form.cvcname.value === ""){
    showError("cvc-error", "Can't be blank.");
    return false;
  }

  document.querySelector('.form-section').classList.add('display-hide');
  document.querySelector('.complete-section').classList.add('display-success');

  event.preventDefault();
}