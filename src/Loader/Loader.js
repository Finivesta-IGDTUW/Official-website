import React, { useState, useEffect } from 'react';
import './Loader.css';
import Logo from './Logo.png';

const Loader = () => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const spinnerTimer = setTimeout(() => setShowSpinner(true), 4000); // Show spinner after logo is fully visible for 4 seconds
    return () => clearTimeout(spinnerTimer);
  }, []);

  return (
    <div className="loader-container" style={{ backgroundColor: '#222222' }}>
      <img src={Logo} alt="Logo" className="logo " />
    </div>
  );
};

export default Loader;
