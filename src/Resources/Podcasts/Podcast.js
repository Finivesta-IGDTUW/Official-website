import React from "react";
import { Link } from "react-router-dom";
import "../Resources.css";
import FinshotsCover from "../Images/podcasts/finshotsdaily3.jpeg";
import FinanceCover from "../Images/podcasts/SchoolOfFinance.png";
import BudgetPodcastCover from "../Images/podcasts/personalfinance1.jpeg";
import InvestorPodcastCover from "../Images/podcasts/intellligentinvestor2.jpeg";

import EconomicsCover from "../Images/podcasts/economicsexplained4.jpeg";

const Podcast = () => {
  return (
    <div className="Youtube">
      <div className="header pc">
        <h1>Podcast Episodes</h1>
        <p>Tune in to engaging podcasts to explore the world of finance</p>
      </div>

      <div className="resourcesbox">
        <div className="boxsmall">
          <Link to="/resources/podcasts/finshots">
            <div className="img podcast">
              <img src={FinshotsCover} alt="Finshots Cover" />
            </div>
          </Link>
            <div className="podcast-text">
              <h2>Finshots Daily</h2>
              <a 
                href="https://open.spotify.com/show/12jUp5Aa63c5BYx3wVZeMA" 
                target="_blank" 
                rel="noopener noreferrer"
              >
              <i className="fab fa-spotify" />
              </a>
            </div>

        </div>
        <div className="boxsmall">
          <Link to="/resources/podcasts/school-of-finance">
            <div className="img podcast">
              <img 
                src={FinanceCover} 
                alt="Finance Cover" 
                style={{ padding: '10px', margin: '10px' }}
              />
            </div>
          </Link>
          <div className="podcast-text">
            <h2>School Of Finance</h2>
            <a 
              href="https://open.spotify.com/show/7yznWrbzGF6x5amXXTWRNC"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fab fa-spotify"/>
            </a>
          </div>
        </div>

        <div className="boxsmall">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://open.spotify.com/episode/7vHHGxrlU890tlJXUasi9X?si=b5ebd680d07b46d7"
          >
            <div className="img podcast">
              <img src={BudgetPodcastCover} alt="Cover" />
            </div>
            <div className="podcast-text">
              <h2>Why Budgets Aren't Boring?</h2>
              <i className="fab fa-spotify"/>
            </div>
          </a>
        </div>

        <div className="boxsmall">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://open.spotify.com/show/1ZpUmASkxeRmJsukPXWQT2?si=U8ebq-obRaCNzxnMTI3_zg"
          >
            <div className="img podcast">
              <img src={InvestorPodcastCover} alt="Cover" />
            </div>
            <div className="podcast-text">
              <h2>Intelligent Investor</h2>
              <i className="fab fa-spotify"/>
            </div>
          </a>
        </div>

        
        <div className="boxsmall">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://open.spotify.com/show/5TFVUEJnYLOCmmfaDNHaM2"
          >
            <div className="img podcast">
              <img src={EconomicsCover} alt="Cover" />
            </div>
            <div className="podcast-text">
              <h2>Economics Explained</h2>
              <i className="fab fa-spotify"/>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Podcast;