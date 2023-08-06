// Display all the ratings
const ratings = [
  {
    image: './images/icon-star.svg',
    text: 'Rated 5 Stars in Reviews',
  },
  {
    image: './images/icon-star.svg',
    text: 'Rated 5 Stars in Report Guru',
  },
  {
    image: './images/icon-star.svg',
    text: 'Rated 5 Stars in BestTech',
  },
];

window.addEventListener('load', () => {
  let stars = [];
  for (let x = 0; x < 5; x++) {
    stars.push('<img src="./images/icon-star.svg" alt="fice stars icons" />');
  }

  stars = stars.join('');
  let displayRatings = ratings.map((rating) => {
    return `<article class="main__article "> 
              <div class="main__stars">
                ${stars}
              </div>
                <h3 class="main__h3">${rating.text}</h3>
            </article>`;
  });
  // <img src=${rating.image} alt="fice stars icons" />
  displayRatings = displayRatings.join('');
  document.getElementById('ratings-cont').innerHTML = displayRatings;
});

// Display all the testimonials
const testimonials = [
  {
    id: 1,
    img: './images/image-colton.jpg',
    h2: 'Colton Smith',
    position: 'Verified Buyer',
    text: `"We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent!"`,
  },
  {
    id: 2,
    img: './images/image-irene.jpg',
    h2: 'Irene Roberts',
    position: 'Verified Buyer',
    text: `"Customer service is always excellent and very
    quick turn around. Completely delighted with the simplicity of the purchase
    and the speed of delivery."`,
  },
  {
    id: 3,
    img: './images/image-anne.jpg',
    h2: 'Anne Wallace',
    position: 'Verified Buyer',
    text: `"Put an order with
    this company and can only praise them for the very high standard. Will
    definitely use them again and recommend them to everyone!"`,
  },
];

window.addEventListener('load', () => {
  let displayTestimonials = testimonials.map((testimonial) => {
    return `<article class="testimonial__article">
            <div class="testimonial__div">
              <img src=${testimonial.img} alt="avatar photo of Colton Smith" />
              <h3 class="testimonial__h3">
                <span>${testimonial.h2}</span>
                <span class="testimonial__sub_h3"> ${testimonial.position}</span>
              </h3>
            </div>
            <p class="testimonial__p">${testimonial.text}</p>
          </article>`;
  });
  displayTestimonials = displayTestimonials.join('');
  document.getElementById('testimonials-cont').innerHTML = displayTestimonials;
});
