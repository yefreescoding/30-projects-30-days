# Project 1! 👋

### Thursday July 27, 2023.

How to find it:

- [GitHub repo](https://github.com/yefreescoding/30-projects-30-days/tree/main/project-1)
- [Netlify](https://www.netlify.com/)

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
