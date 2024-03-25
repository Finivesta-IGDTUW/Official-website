// App.js
import React from 'react';
import './styles.css'; // Import your CSS file

function App() {
  return (
    <div>
      <div className="header">
        <h1>Blogs</h1>
        <p>Access the wealth of knowledge and tools in our <br />resource library.</p>
      </div>

      <div className="box">
        <Box1 />
        <Box2 />
        <Box3 />
      </div>

      <div className="container">
        <Box4 />
        <Box5 />
        <Box6 />
      </div>
    </div>
  );
}

function Box1() {
  return (
    <div className="box1">
      <div className="img">
        <img src="blogs_img2.png" alt="AI in Finance" />
      </div>
      <div className="text">
        <h2>AI in Finance</h2>
        <a href="https://docs.google.com/document/d/1JPCbYWxeHt82bj_XBnxiC_ILS0an8TfEgUt6rhlG-hk/edit?usp=sharing">The financial industry and AI</a>
      </div>
    </div>
  );
}

function Box2() {
  return (
    <div className="box2">
      <div className="img">
        <img src="blogs_img2.png" alt="Finance and Technology" />
      </div>
      <div className="text">
        <h2>Finance and Technology</h2>
        <a href="https://docs.google.com/document/d/14UnacR779oQ6MPQMj1Lw1OAdCSSSHjzmtb8LXzM5b1A/edit?usp=sharing">All about fintech</a>
      </div>
    </div>
  );
}

function Box3() {
  return (
    <div className="box3">
      <div className="img">
        <img src="blogs_img2.png" alt="Power of Compounding" />
      </div>
      <div className="text">
        <h2>Power of Compounding</h2>
      </div>
    </div>
  );
}

function Box4() {
  return (
    <div className="box4">
      <div className="img">
        <img src="blogs_img2.png" alt="Liquidation" />
      </div>
      <div className="text">
        <h2>Liquidation</h2>
      </div>
    </div>
  );
}

function Box5() {
  return (
    <div className="box5">
      <div className="img">
        <img src="blogs_img2.png" alt="Financial Literacy" />
      </div>
      <div className="text">
        <h2>Financial Literacy</h2>
        <a href="https://docs.google.com/document/d/1YZBWhPdx8-3grhuQFB4O48oBolRoDktjeqqlCJTduVI/edit?usp=drivesdk">Importance of learning finance</a>
      </div>
    </div>
  );
}

function Box6() {
  return (
    <div className="box6">
      <div className="img">
        <img src="blogs_img2.png" alt="Bidding" />
      </div>
      <div className="text">
        <h2>Bidding</h2>
      </div>
    </div>
  );
}

export default App;
