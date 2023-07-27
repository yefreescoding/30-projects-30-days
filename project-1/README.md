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

- 1 Cover image width:

How I did the overlay effect images:

```html
iv class="main__imagess">
<img
  class="main__img main__img-color azul"
  src="Assets/Blue Shape.svg"
  alt=""
/>
<img
  class="main__img main__img-color rojo"
  src="Assets/Pink Shape.svg"
  alt=""
/>
<img
  class="main__img main__img-color morado"
  src="Assets/Purple Shape.svg"
  alt=""
/>
<img
  class="main__img girl-1"
  src="Assets/Hero Image (Model).png"
  alt="Hero image model."
  style="position: relative"
/>
</div>
```

```css
.main__imagess {
  --rotate-val: -0.038turn;
  position: relative;
  flex-basis: var(--col-size);
  flex-grow: 1;
  display: flex;
  justify-content: end;
}

.main__img {
  width: 30em;
}

@media (width < 40em) {
  .main__imagess {
    justify-content: center;
  }
  .main__img {
    width: 20em;
  }
}

.main__img-color {
  position: absolute;
  z-index: -1;
}

.azul {
  transform: rotate(calc(2 * var(--rotate-val)));
}

.rojo {
  transform: rotate(calc(1.5 * var(--rotate-val)));
}

.morado {
  transform: rotate(var(--rotate-val));
}
```

- 2 Mobile navbar toggle:

```js
console.log('working on it...');
```

Gotta write a script to make the nav bar appear on user command in mobile, and tablet devices.
