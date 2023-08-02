// Calculator basic functionality

const screenNumbers = document.getElementById('result');

function appendToScreen(value) {
  if (value === 'delete') {
    screenNumbers.value = screenNumbers.value.slice(0, -1);
  } else {
    screenNumbers.value += value;
  }
}

function clearScreen() {
  screenNumbers.value = '';
}

function calculate() {
  const result = eval(screenNumbers.value);
  screenNumbers.value = result.toLocaleString();
}

// Set Theme

const themeToggle = document.querySelectorAll('.theme_toggle');

themeToggle.forEach((toggle) => {
  toggle.addEventListener('click', (e) => {
    const root = document.documentElement;
    const theme = e.target.getAttribute('data-theme');
    root.className = theme;
    localStorage.setItem('theme', theme);
  });
});

window.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('theme');
  const root = document.documentElement;
  if (savedTheme) {
    root.className = savedTheme; // Apply the saved theme to the root element
  }
});

document.querySelector('.theme-toggle').addEventListener('click', setTheme);
