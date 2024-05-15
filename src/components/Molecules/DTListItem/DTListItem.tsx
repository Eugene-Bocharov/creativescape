import React from 'react';
import styles from './DTListItem.module.scss';

interface DTListItemProps {
  title: string;
  desc: string;
  link: string;
  isButton?: boolean; // Add isButton prop
}

export const DTListItem = ({
  title,
  desc,
  link,
  isButton = true,
}: DTListItemProps) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.dividerBox}>
          <p className={styles.title}>{title}</p>
          {isButton && ( // Conditionally render the button
            <a href={link} className={styles.seeButton}>
              See More
            </a>
          )}
        </div>
        <p className={styles.description}>{desc}</p>
      </div>
    </>
  );
};
