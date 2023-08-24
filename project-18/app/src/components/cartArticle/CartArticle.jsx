/* eslint-disable react/prop-types */

export default function CartArticle({ valueSelection, productPrice }) {
  return (
    <article>
      ${productPrice}.00 x {valueSelection}{' '}
      <span>${productPrice * valueSelection}.00</span>
    </article>
  );
}
