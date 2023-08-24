/* eslint-disable react/prop-types */

import styles from './article.module.css';

export default function CartArticle({
  valueSelection,
  productPrice,
  emptyCartFunction,
}) {
  return (
    <article className={styles['cart_article']}>
      <img
        className={styles['cart_article__img']}
        src="/images/image-product-1-thumbnail.jpg"
        alt="Product image"
      />
      <div className={styles['cart_article__data']}>
        <p className={styles['cart_article__p']}>
          Fall unlimited Edition Sneakers
        </p>
        ${productPrice}.00 x {valueSelection}{' '}
        <strong>${productPrice * valueSelection}.00</strong>
      </div>
      <button onClick={emptyCartFunction} aria-label="Empty cart">
        <img src="/icons/icon-delete.svg" alt="" />
      </button>
    </article>
  );
}
