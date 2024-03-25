import React from 'react';
import './styles.css'; 

function ResourcesPage() {
  return (
    <div>
      <div className="header">
        <h1>Resources</h1>
        <p>Access the wealth of knowledge and tools in our resource library.</p>
      </div>

      <div className="box">
        <div className="box1">
          <div className="img">
            <img src="blogs_img2.png" alt="Blogs" />
          </div>
          <div className="text">
            <h2>Blogs</h2>
            <p>Blogs offer a mix of academic insights and relatable student experiences, including stories on budgeting and financial decisions.</p>
          </div>
        </div>

        <div className="box2">
          <div className="img">
            <img src="book_reviews_img.png" alt="Book Reviews" />
          </div>
          <div className="text">
            <h2>Book Reviews</h2>
            <p>Book reviews on Finance and Entrepreneurship delve into the latest literary treasures unlocking the secrets to wealth creation and business success.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box3">
          <div className="img">
            <img src="yt_img2.png" alt="Youtube Channels" />
          </div>
          <div className="text">
            <h2>Youtube Channels</h2>
            <p>Top youtube channels on finance, Bringing you expert insights, Investment strategies, Personal finance advice all in one convenient platform.</p>
          </div>
        </div>

        <div className="box4">
          <div className="img">
            <img src="sharemarket_img2.png" alt="Stock Market & Trading" />
          </div>
          <div className="text">
            <h2>Stock Market & Trading</h2>
            <p>Diverse collection of trading resources, Encompassing day trading, forex, cryptocurrency, to equip you with tools for succeeding in trading.</p>
          </div>
        </div>
      </div>

    
    </div>
  );
}

export default ResourcesPage;
