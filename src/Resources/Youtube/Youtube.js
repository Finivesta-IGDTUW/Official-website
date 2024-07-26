import React from "react";
import "../Resources.css";

import YoutubeImage from '../Images/yt_img2.png';

const Youtube = () => {
  return (
    <div className="Youtube">

        <div class="header">
          <h1>Youtube Channels</h1>
          <p>Access the wealth of knowledge and tools in our <br/>resource library.</p>
        </div>

        <div class="resourcesbox">

          <div class="boxsmall">
            <div class="img">
              <img src={YoutubeImage} alt="Cover"/>
            </div>
            <div class="text">
              <h2>Budgeting</h2>
              <a className="links" href="https://open.spotify.com/episode/7vHHGxrlU890tlJXUasi9X?si=b5ebd680d07b46d7">Importance of Budgeting and the its role</a>
            </div>
          </div>

          <div class="boxsmall">
              <div class="img">
                <img src={YoutubeImage} alt="Cover"/>
              </div>
              <div class="text">
                <h2>Investing</h2>
                <a className="links" href="https://open.spotify.com/show/1ZpUmASkxeRmJsukPXWQT2?si=U8ebq-obRaCNzxnMTI3_zg">Podcast</a>
                <br />
                <a className="links" href="https://www.khanacademy.org/economics-finance-domain/core-finance/investment-vehicles-tutorial">Investment Tutorial</a>
            </div>
          </div>

          <div class="boxsmall">
            <div class="img">
              <img src={YoutubeImage} alt="Cover"/>
            </div>
            <div class="text">
              <h2>Stock/Share Market</h2>
              <a className="links" href="https://youtube.com/playlist?list=PL8uhW8cclMiNv8UT1NUawB-XpXVeJ8mN8&si=Ciaw9fblNEHPSF7b">Basics of Stock Market</a>
              <br />
              <a className="links" href="https://youtu.be/p7HKvqRI_Bo?si=5mUfxdUkvOX995-c">How it works?</a>
            </div>
          </div>
          
          <div class="boxsmall">
            <div class="img">
              <img src={YoutubeImage} alt="Cover"/>
            </div>
            <div class="text">
              <h2>Crypto</h2>
              <a className="links" href="Crypto Ki Duniya: Hindi Crypto Podcast - TopPodcast.com">Crypto ki duniya</a>
              <br />
              <a className="links" href="https://www.bing.com/videos/riverview/relatedvideo?&q=cryptocurrency+&&mid=E623835531D567A22B3AE623835531D567A22B3A&&FORM=VRDGAR">Youtube tutorials</a>
          </div>
          </div>

          <div class="boxsmall">
            <div class="img">
              <img src={YoutubeImage} alt="Cover"/>
            </div>
            <div class="text">
              <h2>Financial Literacy</h2>
          </div>
          </div>

        <div class="boxsmall">
            <div class="img">
              <img src={YoutubeImage} alt="Cover"/>
            </div>
            <div class="text">
              <h2>Bidding</h2>
          </div>
          </div>
        </div>

    </div>
        
  );
};

export default Youtube;