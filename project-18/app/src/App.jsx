// React import
import { useState } from 'react';

// styles import
import './styles/app.css';

// Component imports
import Header from './components/header/header';
import ShoppingCart from './components/cartShopping/ShoppingCart';
import ProductShowcase from './components/showcase/ProductShowcase';

// global variables
const TOTAL_PRICE = 250;
const DISCOUNT = 50;

// calculate sale price
const SALE_PRICE = TOTAL_PRICE - (TOTAL_PRICE * DISCOUNT) / 100;

export default function App() {
  const [totalSelection, setTotalSelection] = useState(0);

  const addValue = () => {
    setTotalSelection((prevCount) => prevCount + 1);
    if (totalSelection >= 10) {
      setTotalSelection(10);
    }
  };

  const subtractValue = () => {
    setTotalSelection((prevCount) => prevCount - 1);
    if (totalSelection <= 0) {
      setTotalSelection(0);
    }
  };

  return (
    <div className="wrapper">
      <Header>
        <ShoppingCart
          valueSelection={totalSelection}
          productPrice={SALE_PRICE}
        />
      </Header>
      <main className="main">
        <ProductShowcase
          valueSelection={totalSelection}
          addValueFunction={addValue}
          subtractValue={subtractValue}
          productPrice={TOTAL_PRICE}
          salePrice={SALE_PRICE}
          discount={DISCOUNT}
        />
      </main>
    </div>
  );
}
