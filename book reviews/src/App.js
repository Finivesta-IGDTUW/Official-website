// App.js

import React from 'react';
import './styles.css'; // Import your CSS file

function App() {
  return (
    <div>
      <div className="header">
        <h1>Book Reviews</h1>
        <p>Access the wealth of knowledge and tools in our <br />resource library.</p>
      </div>

      <div className="box">
        <div className="box1">
          <div className="img">
            <img src="blogs_img2.png" alt="Review 1" />
          </div>
          <div className="text">
            <h2>Review 1</h2>
          </div>
        </div>

        <div className="box2">
          <div className="img">
            <img src="blogs_img2.png" alt="Review 2" />
          </div>
          <div className="text">
            <h2>Review 2</h2>
          </div>
        </div>

        <div className="box3">
          <div className="img">
            <img src="blogs_img2.png" alt="Review 3" />
          </div>
          <div className="text">
            <h2>Review 3</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box4">
          <div className="img">
            <img src="blogs_img2.png" alt="Review 4" />
          </div>
          <div className="text">
            <h2>Review 4</h2>
          </div>
        </div>

        <div className="box5">
          <div className="img">
            <img src="blogs_img2.png" alt="Review 5" />
          </div>
          <div className="text">
            <h2>Review 5</h2>
          </div>
        </div>

        <div className="box6">
          <div className="img">
            <img src="blogs_img2.png" alt="Review 6" />
          </div>
          <div className="text">
            <h2>Review 6</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
