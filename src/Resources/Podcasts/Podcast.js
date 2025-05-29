import React from "react";
import { Link } from "react-router-dom";
import "../Resources.css";

import FinshotsCover from "../Images/podcasts/finshotsdaily3.jpeg";
import FinanceCover from "../Images/podcasts/SchoolOfFinance.png";
import BudgetPodcastCover from "../Images/podcasts/personalfinance1.jpeg";
import InvestorPodcastCover from "../Images/podcasts/intellligentinvestor2.jpeg";
import Westudy from "../Images/podcasts/westudy.jpg";
import EconomicsCover from "../Images/podcasts/economicsexplained4.jpeg";
import panchratnaimg from "../Images/podcasts/panchratna.png";
import indicatorimg from "../Images/podcasts/indicatorimg.png";
import personalfinanceimg from "../Images/podcasts/personalfinanceimg.png";
import MoneyExplained from "../Images/podcasts/moneyExplained.png";
import MoneyControlImage from "../Images/podcasts/moneycontrol.jpeg";

const podcasts = [
  {
    id: 11,
    title: "Money Control",
    image: MoneyControlImage,
    link: "/resources/podcasts/moneycontrol",
    externalLink: "https://open.spotify.com/show/6mcVOxYVPF4BXPRKGz0Cna",
    iconClass: "fab fa-spotify",
  },
  {
    id: 10,
    title: "We Study Billionaires",
    image: Westudy,
    link: "/resources/podcasts/we_study_billionaires",
    externalLink: "https://open.spotify.com/show/12jUp5Aa63c5BYx3wVZeMA",
    iconClass: "fab fa-spotify",
  },
  {
    id: 9,
    title: "Panchratna of Indian Stock Market",
    image: panchratnaimg,
    link: "/resources/podcasts/panchratna",
    externalLink: "https://open.spotify.com/show/5TegBItXiqv7Zte5GjfeXC",
    iconClass: "fab fa-spotify",
  },
  {
    id: 8,
    title: "The Indicator from Planet Money",
    image: indicatorimg,
    link: "/resources/podcasts/indicator",
    externalLink: "https://open.spotify.com/show/4X3yDKgVTWRjSd6r0vhgo4#login",
    iconClass: "fab fa-spotify",
  },
  {
    id: 7,
    title: "Money, Explained - A Netflix Documentary Series",
    image: MoneyExplained,
    link: "/resources/podcasts/MoneyExplained",
    externalLink: "https://www.netflix.com/in/title/81345769",
    iconClass: "fab fa-netflix",
  },
  {
    id: 6,
    title: "The Personal Finance",
    image: personalfinanceimg,
    link: "/resources/podcasts/PersonalFinance",
    externalLink: "https://open.spotify.com/show/1zVBTDKimC3UoOQy59KDrR",
    iconClass: "fab fa-spotify",
  },
  {
    id: 5,
    title: "Finshots Daily",
    image: FinshotsCover,
    link: "/resources/podcasts/finshots",
    externalLink: "https://open.spotify.com/show/12jUp5Aa63c5BYx3wVZeMA",
    iconClass: "fab fa-spotify",
  },
  {
    id: 4,
    title: "School Of Finance",
    image: FinanceCover,
    link: "/resources/podcasts/school-of-finance",
    externalLink: "https://open.spotify.com/show/7yznWrbzGF6x5amXXTWRNC",
    iconClass: "fab fa-spotify",
  },
  {
    id: 3,
    title: "Why Budgets Aren't Boring?",
    image: BudgetPodcastCover,
    externalLink: "https://open.spotify.com/episode/7vHHGxrlU890tlJXUasi9X?si=b5ebd680d07b46d7",
    iconClass: "fab fa-spotify",
  },
  {
    id: 2,
    title: "Intelligent Investor",
    image: InvestorPodcastCover,
    externalLink: "https://open.spotify.com/show/1ZpUmASkxeRmJsukPXWQT2?si=U8ebq-obRaCNzxnMTI3_zg",
    iconClass: "fab fa-spotify",
  },
  {
    id: 1,
    title: "Economics Explained",
    image: EconomicsCover,
    externalLink: "https://open.spotify.com/show/5TFVUEJnYLOCmmfaDNHaM2",
    iconClass: "fab fa-spotify",
  },
];

const Podcast = () => {
  return (
    <div className="Youtube">
      <div className="header pc">
        <h1>Podcast Episodes</h1>
        <p>Tune in to engaging podcasts to explore the world of finance</p>
      </div>

      <div className="resourcesbox">
        {podcasts.map((podcast) => (
          <div key={podcast.id} className="boxsmall">
            {podcast.link ? (
              <Link to={podcast.link}>
                <div className="img podcast">
                  <img src={podcast.image} alt={podcast.title} loading="lazy"/>
                </div>
              </Link>
            ) : (
              <a
                href={podcast.externalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="img podcast">
                  <img src={podcast.image} alt={podcast.title} loading="lazy"/>
                </div>
              </a>
            )}
            <div className="podcast-text">
              <h2>{podcast.title}</h2>
              {podcast.externalLink && (
                <a
                  href={podcast.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={podcast.iconClass} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcast;