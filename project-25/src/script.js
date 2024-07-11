const form = document.getElementById("form");
const article = document.querySelector(".article");

const contentBody = document.getElementById("card-content");

const formHeight = form.offsetHeight;
const articleHeight = article.offsetHeight;

contentBody.style.setProperty("--_height", `${formHeight + 48}px`);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const checkedInput = form.querySelector("input[type='radio']:checked");

  document.getElementById("user-selection").innerText = checkedInput.value;
  console.log(checkedInput);

  form.setAttribute("aria-hidden", "true");
  article.setAttribute("aria-hidden", "false");

  contentBody.style.setProperty("--_height", `${articleHeight + 48}px`);
});
