// toggle user actions
const actionBtns = document.getElementById("action-btns");

document.getElementById("user-action-toggle").addEventListener("click", () => {
  console.log("click");

  const visibility = actionBtns.getAttribute("aria-hidden");
  const setVisible = visibility === "true" ? "false" : "true";

  actionBtns.setAttribute("aria-hidden", setVisible);
});

const articleContainer = document.getElementById("article-container");

const articleComponent = (arr, period) => {
  return `
        <article class="article" style="--_bgk-clr: ${arr.color}">
          <header class="article__header">
            <img src="images/${arr.icon}" alt="icon suitcase" />
          </header>
          <div class="article__body">
            <div>
              <h2>${arr.title}</h2>
              <img src="images/icon-ellipsis.svg" alt="icon dots" />
            </div>
            <p class="article__time">
              <span class="numbers">${arr.timeframes[period].current}</span>hrs
            </p>
            <p>Last week - ${arr.timeframes[period].previous}hrs</p>
          </div>
        </article>
  `;
};

const visualizeData = (arr, period) => {
  let visualize = arr.map((item) => {
    return articleComponent(item, period);
  });

  visualize = visualize.join("");

  articleContainer.innerHTML = visualize;
};

// fetch data
const API = "./data.json";
let fetchedData = [];

fetch(API)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    fetchedData = data;
    visualizeData(data, "monthly");
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

const handlePeriodChange = (period) => {
  visualizeData(fetchedData, period);
};

const actionButtons = document.getElementById("action-btns");

const buttons = actionBtns.querySelectorAll("button");

buttons.forEach((item) => {
  item.setAttribute("data-selected", "false");

  item.addEventListener("click", () => {
    const period = item.getAttribute("data-period");
    console.log(period);

    handlePeriodChange(period);
    // setTimeout(() => {
    // }, "1000");
  });
});
