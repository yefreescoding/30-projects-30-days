// react imports
import { useState } from 'react';

// styles imports
import styles from './productDisplay.module.css';

const productImages = [
  {
    id: 1,
    data: 'product-1',
    src: '/images/image-product-1.jpg',
  },
  {
    id: 2,
    data: 'product-2',
    src: '/images/image-product-2.jpg',
  },
  {
    id: 3,
    data: 'product-3',
    src: '/images/image-product-3.jpg',
  },
  {
    id: 4,
    data: 'product-4',
    src: '/images/image-product-4.jpg',
  },
];

export default function ProductDisplay() {
  const [coverImage, setCoverImage] = useState('/images/image-product-1.jpg');

  const handleClick = (e) => {
    setCoverImage(e.target.src);
  };
  return (
    <section className={styles['product_images']}>
      <div className={styles['product_images__cover']}>
        <img src={coverImage} alt="" />
      </div>
      <div className={styles['product_images__select']}>
        {productImages.map((image) => (
          <button key={image.id} type="button">
            <img
              src={image.src}
              alt={image.data}
              onClick={handleClick}
              data-image={image.data}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
