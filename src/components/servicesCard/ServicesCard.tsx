import type { ReactElement, SVGProps } from 'react';

import styles from '@/components/servicesCard/ServicesCard.module.css';

interface ServicesCardProps {
  id: number;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  title: string;
  description: string;
}
const ServicesCard = ({ title, Icon, description }: ServicesCardProps) => {
  return (
    <div className={styles['services-card']}>
      <div className={styles.icon}>
        <Icon color="hsla(199, 96%, 28%, 1.00)" />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default ServicesCard;
