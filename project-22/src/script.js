const buttonsContainer = document.getElementById("buttons-container");
const buttonsSocialLinks = document.querySelectorAll(".main__btn");

buttonsSocialLinks.forEach((button) => {
  button.addEventListener("click", () => {
    moveAfterIndicator(button);
    changeTabs(button);
  });
});

// Move ::after indicator hover effect on buttons

function moveAfterIndicator(newTab) {
  const newButtonWidth = newTab.offsetWidth / buttonsContainer.offsetWidth;

  buttonsContainer.style.setProperty("--_left", newTab.offsetLeft + "px");
  buttonsContainer.style.setProperty("--_width", newButtonWidth);
}

function adaptHeight(currentTab) {
  const panelContainer = document.querySelector(".main__panel");

  const height = currentTab.offsetHeight;
  console.log(height);

  panelContainer.style.setProperty("--_height", height + 27 + "px");
}

function changeTabs(currentTab) {
  // When user clicks the tab button obtain the aria-controls
  const ariaControls = currentTab.getAttribute("aria-controls");

  // set every button that is not the selected one hidden.
  buttonsSocialLinks.forEach((button) => {
    button.setAttribute("aria-selected", "false");
  });

  // except the button that's been clicked.
  currentTab.setAttribute("aria-selected", "true");

  // Make sure the button has the `aria-selected` property.
  if (ariaControls === null) return;

  console.log(ariaControls);

  const allTabs = document.querySelectorAll(".main__panels");

  allTabs.forEach((tab) => {
    tab.setAttribute("aria-hidden", "true");
  });
  // Set the current tab aria-hidden="false"
  const currentTabSelected = document.querySelector(
    `.main__panels[data-panel="${ariaControls}"]`
  );

  currentTabSelected.setAttribute("aria-hidden", "false");
  adaptHeight(currentTabSelected);

  console.log(currentTabSelected);
  // .setAttribute("aria-hidden", "true");
}
