// styles imports
import styles from './productDisplay.module.css';

export default function ProductDisplay() {
  return (
    <section className={styles['product_images']}>
      <div className={styles['product_images__cover']}>
        <img src="/images/image-product-1.jpg" alt="" />
      </div>
      <div className={styles['product_images__select']}>
        <img src="/images/image-product-1.jpg" alt="" />
        <img src="/images/image-product-2.jpg" alt="" />
        <img src="/images/image-product-3.jpg" alt="" />
        <img src="/images/image-product-4.jpg" alt="" />
      </div>
    </section>
  );
}
