import React, { useState, useEffect } from 'react';
import styles from './HomeWelc.module.scss';
import { TypeAnimation } from 'react-type-animation';

export const HomeWelc = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 500) {
        setShowScrollBtn(false);
      } else {
        setShowScrollBtn(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.midContainer}>
          <div className={styles.divider}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>
                <TypeAnimation
                  sequence={[
                    'Lets be Creative',
                    2000,
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
        {showScrollBtn && <a className={styles.scrollBtn} href="#"></a>}
      </div>
    </>
  );
};
