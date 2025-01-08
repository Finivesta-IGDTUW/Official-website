import React from "react";
import "../Resources.css";

import BudgetPodcastCover from "../Images/podcasts/personalfinance1.jpeg";
import InvestorPodcastCover from "../Images/podcasts/intellligentinvestor2.jpeg";
import FinshotsCover from "../Images/podcasts/finshotsdaily3.jpeg";
import EconomicsCover from "../Images/podcasts/economicsexplained4.jpeg";


const Podcast = () => {
  return (
    <div className="Youtube">
      <div class="header pc">
        <h1>Podcast Episodes</h1>
        <p>Tune in to engaging podcasts to explore the world of finance</p>
      </div>

      <div class="resourcesbox">
        <div class="boxsmall">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://open.spotify.com/episode/7vHHGxrlU890tlJXUasi9X?si=b5ebd680d07b46d7"
          >
            <div class="img podcast">
              <img src={BudgetPodcastCover} alt="Cover" />
            </div>
            <div class="podcast-text">
              <h2>Why Budgets Aren't Boring?</h2>
              <i class="fab fa-spotify"/>
            </div>
          </a>
        </div>

        <div class="boxsmall">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://open.spotify.com/show/1ZpUmASkxeRmJsukPXWQT2?si=U8ebq-obRaCNzxnMTI3_zg"
          >
            <div class="img podcast">
              <img src={InvestorPodcastCover} alt="Cover" />
            </div>
            <div class="podcast-text">
              <h2>Intelligent Investor</h2>
              <i class="fab fa-spotify"/>
            </div>
          </a>
        </div>

        <div class="boxsmall">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://open.spotify.com/show/12jUp5Aa63c5BYx3wVZeMA"
          >
            <div class="img podcast">
              <img src={FinshotsCover} alt="Cover" />
            </div>
            <div class="podcast-text">
              <h2>Finshots Daily</h2>
              <i class="fab fa-spotify"/>
            </div>
          </a>
        </div>

        <div class="boxsmall">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://open.spotify.com/show/5TFVUEJnYLOCmmfaDNHaM2"
          >
            <div class="img podcast">
              <img src={EconomicsCover} alt="Cover" />
            </div>
            <div class="podcast-text">
              <h2>Economics Explained</h2>
              <i class="fab fa-spotify"/>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
