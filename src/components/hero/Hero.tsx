import Button from '../button/Button';

import styles from '@/components/hero/Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles['background-img']}>
        <img src="/assets/images/hero.png" alt="hero" />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.writings}>
        <h1>Effortless Logistics, Every Step of the Way.</h1>
        <p>
          Manage your shipments, track in real-time, and get the best rates—all
          from one platform.
        </p>
        <div className={styles.actions}>
          <Button title="Get a Free Quote" variant="solid" />
          <Button title="Learn More" variant="outline" />
        </div>
      </div>
    </div>
  );
}
