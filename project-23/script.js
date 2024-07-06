console.log("test");

const moreTextToggle = document.querySelector("#read-more-toggle");
const moreText = document.querySelector(".more_text");

moreTextToggle.addEventListener("click", () => {
  const ariaTextHidden = moreText.getAttribute("aria-hidden");

  if (ariaTextHidden === "true") {
    moreText.setAttribute("aria-hidden", "false");
    moreTextToggle.innerText = "Read Less";
  } else {
    moreText.setAttribute("aria-hidden", "true");
    moreTextToggle.innerText = "Read More...";
  }
});

const articles = document.querySelectorAll(".article__content");

const entry = (video) => {
  return () => {
    video.currentTime = 0;
    video.play().catch((error) => {
      console.error("Error playing the video: ", error);
    });
  };
};

const exit = (video) => {
  return () => {
    video.pause();
  };
};

articles.forEach((article) => {
  const video = article.querySelector("video");

  console.log(article);
  console.log(video);

  video.addEventListener("loadeddata", () => {
    article.dataset.loaded = "true";
  });

  article.addEventListener("pointerenter", entry(video));
  article.addEventListener("pointerleave", exit(video));
});
