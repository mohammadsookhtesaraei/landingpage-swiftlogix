import type { ReactElement } from 'react';

import styles from '@/components/header/Header.module.css';

export default function Header(): ReactElement {
  return (
    <heade className={styles.header}>
      <div className="logo">
        <img src="/assets/logos/logo.png" alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Track Shipment</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>
      <div className="actions">
        <button>Log In</button>
        <button>Sing Up</button>
      </div>
    </heade>
  );
}
