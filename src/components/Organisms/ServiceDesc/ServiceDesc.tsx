import React from 'react';
import { useState } from 'react'; // Import useState separately
import styles from './ServiceDesc.module.scss';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

export const ServiceDesc = () => {
  return (
    <>
      <div className={styles.container}>
        {/* <div className={styles.titleDivider}>
          <h2 className={styles.title}>Discover More</h2>
          <div className={styles.boxDivider}>
            <a href="" className={styles.seeButton}>
              See more
            </a>
            <a href="" className={styles.contactButton}>
              Contact Us
            </a>
          </div>
        </div> */}

        <TabGroup className={styles.tabSection}>
          <TabList className={styles.tabList}>
            <div className={styles.tabContainer}>
              <Tab className={styles.tab}>Landing</Tab>
              <Tab className={styles.tab}>Multiple Page</Tab>
              <Tab className={styles.tab}>Portfolio</Tab>
            </div>
          </TabList>
          <TabPanels>
            <TabPanel>
              <h2 className={styles.titleTab}>Landing Webpage</h2>
              <h3 className={styles.description}>
                We are Brand Vision, an award-winning web design agency focused
                on transparency and creativity. Our mission is to tailor
                innovative web design solutions that align with your vision.
                Understanding the importance of your brand, we specialize in
                custom website design and development, ensuring each project is
                uniquely crafted to meet your specific needs.
              </h3>

              <a href="" className={styles.contactButtonTab}>
                Contact Us
              </a>
            </TabPanel>
            <TabPanel>
              <h2 className={styles.titleTab}>Multiple Page Website</h2>
              <h3 className={styles.description}>
                We are Brand Vision, an award-winning web design agency focused
                on transparency and creativity. Our mission is to tailor
                innovative web design solutions that align with your vision.
                Understanding the importance of your brand, we specialize in
                custom website design and development, ensuring each project is
                uniquely crafted to meet your specific needs.
              </h3>
              <a href="" className={styles.contactButtonTab}>
                Contact Us
              </a>
            </TabPanel>
            <TabPanel>
              <h2 className={styles.titleTab}>Portfolio Website</h2>
              <h3 className={styles.description}>
                We are Brand Vision, an award-winning web design agency focused
                on transparency and creativity. Our mission is to tailor
                innovative web design solutions that align with your vision.
                Understanding the importance of your brand, we specialize in
                custom website design and development, ensuring each project is
                uniquely crafted to meet your specific needs.
              </h3>
              <a href="" className={styles.contactButtonTab}>
                Contact Us
              </a>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </>
  );
};
