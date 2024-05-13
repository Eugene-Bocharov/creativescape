import React, { useState, useEffect } from 'react';

import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { AboutWeb } from '../../components/Organisms/AboutWeb/AboutWeb';
import { TitleDesc } from '../../components/Organisms/TitleDesc/TitleDesc';
import { Footer } from '../../components/Organisms/Footer/Footer';

export function WebPage() {
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
      {/* <AboutWeb /> */}
      <TitleDesc />
      <Footer />
    </>
  );
}
