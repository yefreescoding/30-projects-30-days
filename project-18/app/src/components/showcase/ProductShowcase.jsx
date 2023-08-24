/* eslint-disable react/prop-types */
import ProductDisplay from '../productDisplay/ProductDisplay';
import Buttons from '../Buttons/Buttons';

// styles imports
import styles from './showcase.module.css';

function ProductShowcase({
  valueSelection,
  addValueFunction,
  subtractValue,
  productPrice,
  discount,
  salePrice,
}) {
  return (
    <>
      <ProductDisplay />
      <section className={styles['product_showcase']}>
        <p className={styles['product_showcase__title']}>SNEAKERS COMPANY</p>
        <h1 className="product_showcase__h2">Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <p className={styles['product_showcase__price']}>
          <strong className={styles['product_showcase__sale']}>
            ${salePrice}
          </strong>
          <span className={styles['product_showcase__cross']}>
            {productPrice}
          </span>
          <span className={styles['product_showcase__discount']}>
            {discount}%
          </span>
        </p>
        <div className={styles['product_showcase__action']}>
          <div className={styles['product_showcase__selection']}>
            <Buttons
              linkOrButton={false}
              name="-"
              onClickFunction={subtractValue}
              colorFilled="gray"
            />
            <span>{valueSelection}</span>
            <Buttons
              linkOrButton={false}
              name="+"
              onClickFunction={addValueFunction}
              colorFilled="gray"
            />
          </div>
          <Buttons
            linkOrButton={true}
            name="Check out"
            link="/"
            colorFilled="orange"
          />
        </div>
      </section>
    </>
  );
}

export default ProductShowcase;
