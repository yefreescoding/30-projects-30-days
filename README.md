# 30 Days, 30 Challenges

This repository is where I will track my new challenge. Practice, dedication, and consistency lead to improvement, not just in programming but also in all aspects of life.

## Why Did I Decide to Embark on This Journey?

- Short answer:
  To land a job.

- Long answer:
  To enhance my programming skills and acquire one of the most important soft skills any developer should have: consistency!

## Which Technologies Will I Use?

Most of these challenges will focus on front-end development. As a result, the most common languages and frameworks you'll find in this repository are HTML, CSS, and JavaScript. However, this may change in the future, with the addition of the React JS library and the static site framework Astro.

## Author

- Portfolio - [Yefree Web Dev Portfolio](https://yefreevaldezdev.vercel.app)
- Frontend Mentor - [@yefreescoding](https://www.frontendmentor.io/profile/yefreescoding)
- Twitter o X - [@YefreeCodes](https://twitter.com/YefreeCodes)
- LinkedIn - [Yefree De Los Santos](www.linkedin.com/in/yefree-de-los-santos-aa13571b8)

## Project 1:

- [GitHub repo](https://github.com/yefreescoding/30-projects-30-days/tree/main/project-1)
- [Live Site](https://www.netlify.com/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### There's two problems I've got to resolve.

- 1. Cover image width:

The first one being the image that is in the cover. Can't not make it take the full space available without cousin overflow.

```html
<picture class="main__imagess grid">
  <div class="main__imgs_container">
    <img class="azul" src="Assets/Blue Shape.svg" alt="" />
    <img class="rojo" src="Assets/Pink Shape.svg" alt="" />
    <img class="morado" src="Assets/Purple Shape.svg" alt="" />
    <img
      class="girl-1"
      src="Assets/Hero Image (Model).png"
      alt="Hero image model."
    />
  </div>
</picture>
```

```css
.main__imagess {
  flex-basis: var(--col-size);
  flex-grow: 1;
  place-items: center;
}

.main__imgs_container {
  position: relative;
  width: fit-content;
}

.main__imgs_container img {
  width: 100%;
  max-width: 100%;
  inset: 0;
}
```

- 2. Mobile navbar toggle:

Gotta write a script to make the nav bar appear on user command in mobile, and tablet devices.
