import React from 'react';
import './Loader.css';
import Logo from './Logo.png';

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={Logo} alt="Logo" className="logo" />
    </div>
  );
};

export default Loader;