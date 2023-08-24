/* eslint-disable react/prop-types */
import { useState } from 'react';
// component imports
import CartArticle from '../cartArticle/CartArticle';
import Buttons from '../Buttons/Buttons';

// svg imports
import cartLogo from '/icons/icon-cart.svg';

export default function ShoppingCart({ valueSelection, productPrice }) {
  const [openCart, setOpenCart] = useState(false);

  const handleOpen = () => {
    setOpenCart(!openCart);
  };

  return (
    <div className="cart">
      <button onClick={handleOpen} type="button" className="cart__button">
        <img src={cartLogo} alt="" />
      </button>
      {openCart && (
        <div className="cart__container">
          <h3 className="cart__h2">cart</h3>
          <div className="cart__nest">
            {valueSelection < 1 ? (
              <p className="cart__p">Your cart is empty</p>
            ) : (
              <div className="cart__fill">
                <CartArticle
                  valueSelection={valueSelection}
                  productPrice={productPrice}
                />
                <Buttons name="checkout" link="/" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
