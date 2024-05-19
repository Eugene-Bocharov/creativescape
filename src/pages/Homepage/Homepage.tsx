import React, { useState, useEffect } from 'react';

import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { HomeWelc } from '../../components/Organisms/HomeWelc/HomeWelc';
import { TitleDesc } from '../../components/Organisms/TitleDesc/TitleDesc';
import { InfoCard } from '../../components/Organisms/InfoCard/InfoCard';
import { Title } from '../../components/Molecules/Title/Title';
import { Slider } from '../../components/Organisms/Slider/Slider';
import { DarkText } from '../../components/Organisms/DarkText/DarkText';
import { DarkTitleDesk } from '../../components/Organisms/DarkTitleDesc/DarkTitleDesc';
import { ServiceDesc } from '../../components/Organisms/ServiceDesc/ServiceDesc';
import { Footer } from '../../components/Organisms/Footer/Footer';

export function Homepage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {windowWidth <= 1100 ? <HeaderMob /> : <Header />}
      <HomeWelc />
      <TitleDesc
        title="We create beautiful websites that drive business growth."
        description="We are Brand Vision, an award-winning web design agency focused on transparency and creativity. Our mission is to tailor innovative web design solutions that align with your vision. Understanding the importance of your brand, we specialize in custom website design and development, ensuring each project is uniquely crafted to meet your specific needs."
      />
      <DarkTitleDesk
        title="We create beautiful websites that drive business growth."
        description="We are Brand Vision, an award-winning web design agency focused on transparency and creativity. Our mission is to tailor innovative web design solutions that align with your vision. Understanding the importance of your brand, we specialize in custom website design and development, ensuring each project is uniquely crafted to meet your specific needs."
        link="#"
      />
      <InfoCard
        color="blue"
        title="Custom websites made just for you"
        description="A strong online presence is essential to ensure the success of any business as it impacts how your audience perceives your brand. In order to maximize growth, a business needs to clearly differentiate itself from the vast sea of competition. At Brand Vision, we specialize in designing websites that are not only visually stunning but also user-friendly, ensuring your brand makes an unforgettable impression."
      />
      <Title title="We are looking forward to working with you!" />
      <ServiceDesc
        tabTitles={['Landing', 'Multipage', 'Portfolio']}
        tabDescriptions={[
          'Description for Landing Webpage...',
          'Description for Multiple Page Website...',
          'Description for Portfolio Website...',
        ]}
      />
      <DarkText
        services={[
          {
            title: 'Landing Webpage',
            desc: 'We ensure that every project is overseen by senior professionals from start to finish. Brand Visions team consists of award-winning experts in branding, web design, and user experience who bring a wealth of knowledge and creativity to each project. This level of expertise guarantees superior quality and innovative solutions that are designed not just to meet but exceed client expectations',
            link: '#',
            isButton: false,
          },
          {
            title: 'Multiple Page Website',
            desc: 'We ensure that every project is overseen by senior professionals from start to finish. Brand Visions team consists of award-winning experts in branding, web design, and user experience who bring a wealth of knowledge and creativity to each project. This level of expertise guarantees superior quality and innovative solutions that are designed not just to meet but exceed client expectations',
            link: '#',
            isButton: false,
          },
          {
            title: 'Portfolio Website',
            desc: 'We ensure that every project is overseen by senior professionals from start to finish. Brand Visions team consists of award-winning experts in branding, web design, and user experience who bring a wealth of knowledge and creativity to each project. This level of expertise guarantees superior quality and innovative solutions that are designed not just to meet but exceed client expectations',
            link: '#',
            isButton: false,
          },
          {
            title: 'Service Title 4',
            desc: 'We ensure that every project is overseen by senior professionals from start to finish. Brand Visions team consists of award-winning experts in branding, web design, and user experience who bring a wealth of knowledge and creativity to each project. This level of expertise guarantees superior quality and innovative solutions that are designed not just to meet but exceed client expectations',
            link: '#',
            isButton: false,
          },
        ]}
      />
      <InfoCard
        color="red"
        title="Custom websites made just for you"
        description="A strong online presence is essential to ensure the success of any business as it impacts how your audience perceives your brand. In order to maximize growth, a business needs to clearly differentiate itself from the vast sea of competition. At Brand Vision, we specialize in designing websites that are not only visually stunning but also user-friendly, ensuring your brand makes an unforgettable impression."
      />
      <TitleDesc
        title="We create beautiful websites that drive business growth."
        description="We are Brand Vision, an award-winning web design agency focused on transparency and creativity. Our mission is to tailor innovative web design solutions that align with your vision. Understanding the importance of your brand, we specialize in custom website design and development, ensuring each project is uniquely crafted to meet your specific needs."
      />
      <Slider />
      <Footer />
    </>
  );
}
