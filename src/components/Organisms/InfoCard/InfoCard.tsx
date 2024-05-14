import React from 'react';
import { useState } from 'react'; // Import useState separately
import styles from './InfoCard.module.scss';

export const InfoCard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.buttonBox}>
          <h2 className={styles.title}>Custom websites made just for you</h2>
          <div className={styles.boxDivider}>
            <a href="" className={styles.seeButton}>
              See more
            </a>
            <a href="" className={styles.contactButton}>
              Contact Us
            </a>
          </div>
        </div>
        <h3 className={styles.description}>
          A strong online presence is essential to ensure the success of any
          business as it impacts how your audience perceives your brand. In
          order to maximize growth, a business needs to clearly differentiate
          itself from the vast sea of competition. At Brand Vision, we
          specialize in designing websites that are not only visually stunning
          but also user-friendly, ensuring your brand makes an unforgettable
          impression.
        </h3>
      </div>
    </>
  );
};
