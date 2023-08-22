const css = document.createElement('style');
css.type = 'text/css';
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

export default css;
