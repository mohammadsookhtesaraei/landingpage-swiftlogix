import type { ReactElement } from 'react';

import Button from '@/components/button/Button';
import styles from '@/components/header/Header.module.css';

import MingcuteMenuLine from '@/icons/MingcuteMenuLine';

export default function Header(): ReactElement {
  return (
    <header id={styles.header}>
      <div className={styles.logo}>
        <img src="/assets/logos/logo.png" alt="logo" />
      </div>

      <div className={styles.hamburger}>
        <MingcuteMenuLine />
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
      <div className={styles.actions}>
        <Button className={styles.btn_logIN} title="Log In" />
        <Button className={styles.btn_lOgOut} title="Sing Out" />
      </div>
    </header>
  );
}
