const css = document.createElement("style");
css.type = "text/css";
css.appendChild(
  document.createTextNode(
    `
    * {
      -webkit-transition: none !important;
       -moz-transition: none !important;
       -o-transition: none !important;
       -ms-transition: none !important;
       transition: none !important;
    }
    `
  )
);

export const handleDarkMode = () => {
  document.head.appendChild(css);
  document.documentElement.classList.toggle("dark");
  const _ = window.getComputedStyle(css).opacity;
  document.head.removeChild(css);
  _;
};

export default css;
