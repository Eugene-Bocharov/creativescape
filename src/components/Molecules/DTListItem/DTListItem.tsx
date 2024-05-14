import React from 'react';
import { useState } from 'react'; // Import useState separately
import styles from './DTListItem.module.scss';

interface DTListItemProps {
  title: string;
  desc: string;
  link: string;
}

export const DTListItem = ({ title, desc, link }: DTListItemProps) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.dividerBox}>
          <p className={styles.title}>{title}</p>
          <a href={link} className={styles.seeButton}>
            See More
          </a>
        </div>
        <p className={styles.description}>{desc}</p>
      </div>
    </>
  );
};
