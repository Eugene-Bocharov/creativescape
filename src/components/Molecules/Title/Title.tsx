import React from 'react';
import { useState } from 'react'; // Import useState separately
import styles from './Title.module.scss';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

interface TitleProps {
  text?: string;
}

export const Title: React.FC<TitleProps> = ({
  text = 'We are looking towards to working with you!',
}: TitleProps) => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>{text}</h2>
      </div>
    </>
  );
};
