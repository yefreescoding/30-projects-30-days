const screenNumbers = document.getElementById('result');

function appendToScreen(value) {
  screenNumbers.value += value;
}

function clearScreen() {
  screenNumbers.value = '';
}

function calculate() {
  const result = eval(screenNumbers.value);
  screenNumbers.value = result;
}
