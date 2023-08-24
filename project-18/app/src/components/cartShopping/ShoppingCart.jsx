// component imports
import CartArticle from '../cartArticle/CartArticle';
import Buttons from '../Buttons/Buttons';

// svg imports
import cartLogo from '/icons/icon-cart.svg';

export default function ShoppingCart() {
  return (
    <div className="cart">
      <button type="button" className="cart__button">
        <img src={cartLogo} alt="" />
      </button>
      <div className="cart__container">
        <h2 className="cart__h2">cart</h2>
        <div className="cart__nest">
          <p className="cart__p">Your cart is empty</p>
          <div className="cart__fill">
            <CartArticle />
            <Buttons />
          </div>
        </div>
      </div>
    </div>
  );
}
