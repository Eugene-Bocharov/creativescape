import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import './i18n'; // Import the i18n configuration
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Homepage } from './pages/Homepage/Homepage';
import { DesignPage } from './pages/DesignPage/DesignPage';
import { WebPage } from './pages/WebPage/WebPage';
function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/webdev" element={<WebPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
