import React, { useState, useEffect } from 'react';
import styles from './TitleDesc.module.scss';

export function TitleDesc() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          We create beautiful websites that drive business growth.
        </h1>
        <h3 className={styles.description}>
          We are Brand Vision, an award-winning web design agency focused on
          transparency and creativity. Our mission is to tailor innovative web
          design solutions that align with your vision. Understanding the
          importance of your brand, we specialize in custom website design and
          development, ensuring each project is uniquely crafted to meet your
          specific needs.
        </h3>
        <div className={styles.divider}></div>
      </div>
    </>
  );
}
