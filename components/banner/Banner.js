import React from 'react';
import styles from './banner.module.css';

export default function Banner({ onBannerBtnClick }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span> <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.paragraph}>Discover your local coffe shops</p>
      <button onClick={onBannerBtnClick} className={styles.button}>
        View Stores nerby
      </button>
    </div>
  );
}
