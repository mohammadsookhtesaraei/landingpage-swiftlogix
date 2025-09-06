import ServicesCard from '../servicesCard/ServicesCard';

import styles from '@/components/servicess/Services.module.css';

import { dataCard } from '@/constant/DataCard';

const Services = () => {
  return (
    <div className={styles.services}>
      <h2>
        Three main <span className={styles.highlight}>services</span>{' '}
      </h2>
      <p>
        Our app gives you unparalleled visibility into your entire logistics
        network. Whether you’re managing a single delivery or overseeing
        thousands, you can track the exact location of every shipment in real
        time.
      </p>
      <div className={styles.card}>
        {dataCard.map((data) => (
          <ServicesCard {...data} />
        ))}
      </div>
    </div>
  );
};

export default Services;
