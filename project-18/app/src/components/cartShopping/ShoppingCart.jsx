/* eslint-disable react/prop-types */
import { useState } from 'react';
// component imports
import CartArticle from '../cartArticle/CartArticle';
import Buttons from '../Buttons/Buttons';

// svg imports
import cartLogo from '/icons/icon-cart.svg';

import styles from './shoppingCart.module.css';

export default function ShoppingCart({
  valueSelection,
  productPrice,
  emptyCartFunction,
}) {
  const [openCart, setOpenCart] = useState(false);

  const handleOpen = () => {
    setOpenCart(!openCart);
  };

  return (
    <div className={styles['cart']}>
      <button
        onClick={handleOpen}
        type="button"
        className={styles['cart__button']}
      >
        <img src={cartLogo} alt="" />
      </button>
      {openCart && (
        <div className={styles['cart__container']}>
          <h3 className={styles['cart__h2']}>cart</h3>
          <div className={styles['cart__nest']}>
            {valueSelection < 1 ? (
              <p className={styles['cart__p']}>Your cart is empty</p>
            ) : (
              <>
                <CartArticle
                  valueSelection={valueSelection}
                  productPrice={productPrice}
                  emptyCartFunction={emptyCartFunction}
                />
                <Buttons name="checkout" link="/" colorFilled="orange" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
