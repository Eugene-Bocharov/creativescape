import React, { useState, useEffect } from 'react';

import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { HomeWelc } from '../../components/Organisms/HomeWelc/HomeWelc';
import { AboutUs } from '../../components/Organisms/AboutUs/AboutUs';
import { FullPhoto } from '../../components/Organisms/FullPhoto/FullPhoto';
import { OurClients } from '../../components/Organisms/OurClients/OurClients';
import { OurServ } from '../../components/Organisms/OurServ/OurServ';
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
      <AboutUs />
      <FullPhoto />
      <OurServ />
      {/* <OurClients /> */}
      <Footer />
    </>
  );
}
