// Import necessary modules
import React, { useState } from 'react';
import {
  Slide,
  useScrollTrigger,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import styles from './Header.module.scss';

import { HeaderLink } from '../../Molecules/HeaderLink/HeaderLink';

// Define HeaderProps interface
interface HeaderProps {
  children: React.ReactElement;
}

// Define HideOnScroll component
const HideOnScroll: React.FC<HeaderProps> = ({ children }) => {
  const trigger = useScrollTrigger();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setPrevScrollPos(currentScrollPos);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {React.cloneElement(children, { elevation: prevScrollPos > 0 ? 4 : 0 })}
    </Slide>
  );
};

// Define Header component
export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <HideOnScroll>
        <AppBar position="fixed" className={styles.appBar}>
          <Toolbar className={styles.toolbar}>
            <div className={styles.incontainer}>
              <div className={styles.divider}>
                <div className={styles.divcontainerl}>
                  <Typography className={styles.title} variant="h6">
                    Creativescape
                  </Typography>
                  <div>
                    <HeaderLink text="Home" href="/" />
                    <HeaderLink text="About" href="/about" />
                  </div>
                </div>
                <div className={styles.divcontainerr}>
                  <HeaderLink text="About" href="/about" />
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};
