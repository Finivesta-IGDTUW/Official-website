import React from "react";
import "../Resources.css";

import SpotifyLogo from '../Images/podcasts/Spotifylogo.jpg';

const Podcast = () => {
  return (
    <div className="Youtube">

        <div class="header">
          <h1>Podcast Episodes</h1>
          <p>Tune in to engaging podcasts to explore the world of finance</p>
        </div>

        <div class="resourcesbox">

          <div class="boxsmall">
            <a href="https://open.spotify.com/episode/7vHHGxrlU890tlJXUasi9X?si=b5ebd680d07b46d7">
            <div class="img podcast">
              <img src={SpotifyLogo} alt="Cover"/>
            </div>
            <div class="text">
              <h2>Why Budgets Aren't Boring</h2>
            </div>
            </a>
          </div>

          <div class="boxsmall">
            <a href="https://open.spotify.com/show/1ZpUmASkxeRmJsukPXWQT2?si=U8ebq-obRaCNzxnMTI3_zg">
              <div class="img podcast">
                <img src={SpotifyLogo} alt="Cover"/>
              </div>
              <div class="text">
                <h2>Intelligent Investor</h2>
            </div>
            </a>
          </div>

        </div>

    </div>
        
  );
};

export default Podcast;