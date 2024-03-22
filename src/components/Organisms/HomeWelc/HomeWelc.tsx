import React from 'react';
import { useState } from 'react'; // Import useState separately
import styles from './HomeWelc.module.scss';
import { TypeAnimation } from 'react-type-animation';

export const HomeWelc = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.midContainer}>
          <div className={styles.divider}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Lets be Creative',
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Lets be Innocative',
                    2000,
                    'Lets be Amazing',
                    2000,
                    'Lets be Relentless',
                    2000,
                  ]}
                  wrapper="span"
                  speed={25}
                  style={{ fontSize: '2em', display: 'inline-block' }}
                  repeat={Infinity}
                />
              </h1>
              <h3 className={styles.subTitle}>
                CreativeScape – Where Ideas Take Flight
              </h3>
              <a href="#" className={styles.link}>
                Explore
              </a>
            </div>
          </div>
          <div className={styles.imgBox}></div>
        </div>
      </div>
    </>
  );
};
