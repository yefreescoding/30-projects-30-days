/* eslint-disable react/prop-types */
import ProductDisplay from '../productDisplay/ProductDisplay';
import Buttons from '../Buttons/Buttons';

function ProductShowcase({
  valueSelection,
  addValueFunction,
  subtractValue,
  productPrice,
  discount,
  salePrice,
}) {
  return (
    <main className="main">
      <ProductDisplay />
      <section className="product_showcase">
        <p>SNEAKERS COMPANY</p>
        <h1 className="product_showcase__h2">Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <p className="product_showcase__price">
          <strong className="product_showcase__sale">${salePrice}</strong>
          <span className="product_showcase__discount"> {discount}%</span>
        </p>
        <span className="product_showcase__">{productPrice}</span>
        <div>
          <div>
            <Buttons
              linkOrButton={false}
              name="-"
              onClickFunction={subtractValue}
            />
            <span>Pairs: {valueSelection}</span>
            <Buttons
              linkOrButton={false}
              name="+"
              onClickFunction={addValueFunction}
            />
          </div>
          <Buttons linkOrButton={false} name="Check out" />
        </div>
      </section>
    </main>
  );
}

export default ProductShowcase;
