import React from 'react';
import './styles.css'; // Make sure to import your CSS file

function YoutubeChannels() {
  return (
    <div>
      <div className="header">
        <h1>Youtube Channels</h1>
        <p>Access the wealth of knowledge and tools in our <br />resource library.</p>
      </div>

      <div className="box">
        <div className="box1">
          <div className="img">
            <img src="blogs_img2.png" alt="Budgeting" />
          </div>
          <div className="text">
            <h2>Budgeting</h2>
            <a href="https://open.spotify.com/episode/7vHHGxrlU890tlJXUasi9X?si=b5ebd680d07b46d7">Importance of Budgeting and its role</a>
          </div>
        </div>

        <div className="box2">
          <div className="img">
            <img src="blogs_img2.png" alt="Investing" />
          </div>
          <div className="text">
            <h2>Investing</h2>
            <a href="https://open.spotify.com/show/1ZpUmASkxeRmJsukPXWQT2?si=U8ebq-obRaCNzxnMTI3_zg">Podcast</a>
            <a href="https://www.khanacademy.org/economics-finance-domain/core-finance/investment-vehicles-tutorial">Investment Tutorial</a>
          </div>
        </div>

        <div className="box3">
          <div className="img">
            <img src="blogs_img2.png" alt="Stock/Share Market" />
          </div>
          <div className="text">
            <h2>Stock/Share Market</h2>
            <a href="https://youtube.com/playlist?list=PL8uhW8cclMiNv8UT1NUawB-XpXVeJ8mN8&si=Ciaw9fblNEHPSF7b">Basics of Stock Market</a>
            <a href="https://youtu.be/p7HKvqRI_Bo?si=5mUfxdUkvOX995-c">How it works?</a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box4">
          <div className="img">
            <img src="blogs_img2.png" alt="Crypto" />
          </div>
          <div className="text">
            <h2>Crypto</h2>
            <a href="Crypto Ki Duniya: Hindi Crypto Podcast - TopPodcast.com">Crypto ki duniya</a>
            <a href="https://www.bing.com/videos/riverview/relatedvideo?&q=cryptocurrency+&&mid=E623835531D567A22B3AE623835531D567A22B3A&&FORM=VRDGAR">Youtube tutorials</a>
          </div>
        </div>

        <div className="box5">
          <div className="img">
            <img src="blogs_img2.png" alt="Financial Literacy" />
          </div>
          <div className="text">
            <h2>Financial Literacy</h2>
          </div>
        </div>

        <div className="box6">
          <div className="img">
            <img src="blogs_img2.png" alt="Bidding" />
          </div>
          <div className="text">
            <h2>Bidding</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoutubeChannels;
