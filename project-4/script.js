// nav var styles on scroll

const navBar = document.querySelector('.header');

window.addEventListener('scroll', function () {
  const visible = navBar.getAttribute('data-scroll');
  const scrollPosition = window.pageYOffset;

  if (scrollPosition > 0) {
    navBar.setAttribute('data-scroll', 'true');
  } else {
    navBar.setAttribute('data-scroll', 'false');
  }
});

// Change the heading and paragraph of the main content

const coverInfo = [
  {
    id: 1,
    h1: 'Discover innovative ways to decorate',
    p: `We provide unmatched quality, comfort, and style for property
        owners across the country. Our experts combine form and function
        in bringing your vision to life. Create a room in your own style
        with our collection and make your property a reflection of you and
        what you love.`,
    img: './images/desktop-image-hero-1.jpg',
  },
  {
    id: 2,
    h1: 'We are available all across the globe',
    p: `With stores all over the world, it's easy for you to find furniture for
        your home or place of business. Locally, we’re in most major cities
        throughout the country. Find the branch nearest you using our store
        locator. Any questions? Don't hesitate to contact us today.`,
    img: './images/desktop-image-hero-2.jpg',
  },
  {
    id: 3,
    h1: 'Manufactured with the best materials',
    p: `Our modern furniture store provide a high level of quality. Our company
        has invested in advanced technology to ensure that every product is made
        as perfect and as consistent as possible. With three decades of experience
        in this industry, we understand what customers want for their home and
        office.`,
    img: './images/desktop-image-hero-3.jpg',
  },
];

const img = document.getElementById('product-showcase');
const heading = document.getElementById('heading');
const text = document.getElementById('paragraph');

const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');

let currentProduct = 1;

function showProduct(product) {
  const item = coverInfo[product];
  img.src = item.img;
  heading.textContent = item.h1;
  text.textContent = item.p;
}

window.addEventListener('DOMContentLoaded', () => {
  showProduct(currentProduct);
});

prevBtn.addEventListener('click', () => {
  currentProduct--;
  if (currentProduct < 0) {
    currentProduct = 2;
  }
  console.log(currentProduct);
  showProduct(currentProduct);
});

nextBtn.addEventListener('click', () => {
  currentProduct++;
  if (currentProduct > 2) {
    currentProduct = 0;
  }
  console.log(currentProduct);
  showProduct(currentProduct);
});

// Mobile nav bar:

const mobileMenuToggle = document.querySelector('#toggle-menu');
const mobileNav = document.querySelector('.header__nav');

mobileMenuToggle.addEventListener('click', () => {
  const visibility = mobileNav.getAttribute('aria-expanded');
  if (visibility === 'false') {
    mobileNav.setAttribute('aria-expanded', 'true');
    mobileMenuToggle.setAttribute('data-open', 'true');
  } else {
    mobileNav.setAttribute('aria-expanded', 'false');
    mobileMenuToggle.setAttribute('data-open', 'false');
  }
});
