console.log("cositas");

const linkList = document.getElementById("links_list");
const card = document.getElementById("card");

const cardInfo = [
  {
    id: "home",
    title: "Home",
    img: "/images/home-img.jpeg",
    desc: "Check out our latest offers and get ready to explore the world.",
    link: "https://www.google.com",
  },
  {
    id: "about",
    title: "About",
    img: "/images/about-img.jpeg",
    desc: "Want to know more about us? Here are some details and links.",
    link: "https://www.google.com",
  },
  {
    id: "contact",
    title: "Contact",
    img: "/images/contact-img.jpeg",
    desc: "Liked what you saw? Contact us and we will get back to you as soon as possible.",
    link: "https://www.google.com",
  },
  {
    id: "waitlist",
    title: "Waitlist",
    img: "/images/waitlist-img.jpeg",
    desc: "New and exciting offers? Check out our waitlist and get notified when we have something new to offer.",
    link: "https://www.google.com",
  },
];

let hideTimeOut;

linkList.addEventListener("mouseover", (event) => {
  const link = event.target.closest("a");
  if (!link) return;

  const linkId = link.dataset.link;
  const cardData = cardInfo.find((card) => card.id === linkId);

  if (cardData) {
    const { id, title, img, desc, link } = cardData;
    card.innerHTML = cardComponent(title, desc, link, img);

    card.setAttribute("aria-hidden", "false");
    card.setAttribute("data-link", id);

    clearTimeout(hideTimeOut);
  }
});

function scheduleHideCard() {
  hideTimeOut = setTimeout(() => {
    card.setAttribute("aria-hidden", "true");
  }, 200);
}

linkList.addEventListener("mouseleave", scheduleHideCard);
card.addEventListener("mouseleave", scheduleHideCard);

linkList.addEventListener("mouseenter", () => clearTimeout(hideTimeOut));
card.addEventListener("mouseenter", () => clearTimeout(hideTimeOut));

const cardComponent = (title, desc, link, img) => {
  return `
    <div class="image">
    <img
      loading="lazy"
      src="${img}"
      alt="${img} landscape of a mountain with a person in the background"
      />
    </div>
    <div class="content">
      <a href="#">
        <span class="title">
          ${title}
        </span>
      </a>
      <p class="desc">
        ${desc}
      </p>
      <a class="action" href=${link}>
        Find out more
        <span aria-hidden="true"> → </span>
      </a>
    </div>`;
};
