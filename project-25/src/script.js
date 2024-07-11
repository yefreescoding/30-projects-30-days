const form = document.getElementById("form");
const article = document.querySelector(".article");

const contentBody = document.getElementById("card-content");

const formHeight = form.offsetHeight;
const articleHeight = article.offsetHeight;

contentBody.style.setProperty("--_height", `${formHeight + 48}px`);

console.log(formHeight);
console.log("article height: " + articleHeight);

// Set the content height when load

// console.log(articleHeight);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  form.setAttribute("aria-hidden", "true");
  article.setAttribute("aria-hidden", "false");

  contentBody.style.setProperty("--_height", `${articleHeight + 48}px`);
});
