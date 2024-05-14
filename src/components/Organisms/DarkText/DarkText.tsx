import React from 'react';
import { useState } from 'react'; // Import useState separately
import styles from './DarkText.module.scss';
import { DTListItem } from '../../Molecules/DTListItem/DTListItem';

export const DarkText = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <p className={styles.title}>Our Web Development Services</p>
          <div className={styles.listBox}>
            <DTListItem
              link="#"
              title="Landing Page Website"
              desc="At Brand Vision, we stay ahead of the curve by closely following the latest design trends. At Brand Vision, we stay ahead of the curve by closely following the latest design trends. At Brand Vision, we stay ahead of the curve by closely following the latest design trends."
            />
            <div className={styles.divider}></div>
            <DTListItem
              link="#"
              title="Multiple Page Website"
              desc="At Brand Vision, we stay ahead of the curve by closely following the latest design trends. At Brand Vision, we stay ahead of the curve by closely following the latest design trends. At Brand Vision, we stay ahead of the curve by closely following the latest design trends."
            />
            <div className={styles.divider}></div>
            <DTListItem
              link="#"
              title="Portfolio Website"
              desc="At Brand Vision, we stay ahead of the curve by closely following the latest design trends. At Brand Vision, we stay ahead of the curve by closely following the latest design trends. At Brand Vision, we stay ahead of the curve by closely following the latest design trends."
            />
            <div className={styles.divider}></div>
            <DTListItem
              link="#"
              title="listBox"
              desc="At Brand Vision, we stay ahead of the curve by closely following the latest design trends. At Brand Vision, we stay ahead of the curve by closely following the latest design trends. At Brand Vision, we stay ahead of the curve by closely following the latest design trends."
            />
          </div>
        </div>
      </div>
    </>
  );
};
