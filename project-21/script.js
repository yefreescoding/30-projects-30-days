const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);

      scrollInner.appendChild(duplicatedItem);
    });
  });
}

// Barra de navegación
const buttonQr = document.querySelector("#btn-qr");
const progressBar = document.querySelector("#progress-bar");
const codeMessage = document.querySelector("#code-message");

const animationTime = 4000;

buttonQr.addEventListener("click", () => {
  progressBar.style.setProperty("--duration", animationTime + "ms");
  const animationState = progressBar.getAttribute("data-animation");

  if (animationState === "false") {
    progressBar.setAttribute("data-animation", "true");
    codeMessage.setAttribute("aria-hidden", "false");
  }
  // else {
  //   progressBar.setAttribute("data-animation", "true");
  //   codeMessage.setAttribute("aria-hidden", "false");
  // }

  setTimeout(() => {
    codeMessage.setAttribute("aria-hidden", "true");
    buttonQr.innerText = "Code ready";
  }, animationTime);

  console.log(animationState);
});
