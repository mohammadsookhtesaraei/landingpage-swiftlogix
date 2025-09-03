import type { ReactElement } from 'react';

import styles from '@/components/Banner/Banner.module.css';

export default function Banner(): ReactElement {
  return (
    <div>
      <div className={styles.container}></div>
    </div>
  );
}
