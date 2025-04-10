import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
        </div>
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingScreen;