import ProductDisplay from '../productDisplay/ProductDisplay';
import Buttons from '../Buttons/Buttons';

function ProductShowcase() {
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
          <strong className="product_showcase__sale">$125.00</strong>
          <span className="product_showcase__discount">50%</span>
        </p>
        <span className="product_showcase__">$250.00</span>
        <div>
          <div>
            <Buttons />
            <span>value</span>
            <Buttons />
          </div>
          <Buttons />
        </div>
      </section>
    </main>
  );
}

export default ProductShowcase;
