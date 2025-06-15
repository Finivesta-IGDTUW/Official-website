import React from "react";
import "../Resources.css";

// Import app and website logos
import ZerodhaLogo from "./Logos/Zerodha.jpeg";
import IIFLLogo from "./Logos/IIFL.jpg";
import AngelOneLogo from "./Logos/AngelOne.jpeg";
import DhanLogo from "./Logos/Dhan.png";
import GrowwLogo from "./Logos/Groww.png";
import FivePaisaLogo from "./Logos/5paisa.png";
import Stockedge from "./Logos/Stockedge.png";
import TradingView from "./Logos/TradingView.png";
import FrontPage from "./Logos/FrontPage.jpg";

import Nse from "./Logos/nseindia.jpg";
import Bse from "./Logos/bseindia.jpg";
import TradingQA from "./Logos/tradingqanda.png";
import MoneyControl from "./Logos/moneycontrol.jpg";
import TradeBrains from "./Logos/TradeBrains.png";
import Finology from "./Logos/Finology.jpg";
import Investopedia from "./Logos/Investopedia.jpg";

// Data for apps
const tradingApps = [
  {
    id: 1,
    title: "Front Page",
    description: "The Front Page Of India's Stock Market",
    image: FrontPage,
    googlePlay: "https://play.google.com/store/apps/details?id=in.crowdware.one&hl=en-US",
    appStore: "https://apps.apple.com/in/app/frontpage/id1401247335",
  },
  {
    id: 2,
    title: "Trading View",
    description: "Where The World Does Markets",
    image: TradingView,
    googlePlay: "https://play.google.com/store/apps/details?id=com.tradingview.tradingviewapp&hl=en-US",
    appStore: "https://apps.apple.com/in/app/tradingview-track-all-markets/id1205990992",
  },
  {
    id: 3,
    title: "Stockedge",
    description: "Your Edge Just Got Sharper",
    image: Stockedge,
    googlePlay: "https://play.google.com/store/apps/details?id=in.stockedge.app&hl=en-US",
    appStore: "https://apps.apple.com/in/app/stockedge-stock-market-india/id1066284206",
  },
  {
    id: 4,
    title: "Zerodha",
    description: "Empowering Investments with Zero Hassles",
    image: ZerodhaLogo,
    googlePlay: "https://play.google.com/store/apps/details?id=com.zerodha.kite3",
    appStore: "https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802",
  },
  {
    id: 5,
    title: "IIFL",
    description: "Your Trusted Partner in Financial Growth",
    image: IIFLLogo,
    googlePlay: "https://play.google.com/store/apps/details?id=com.indiainfoline",
    appStore: "https://apps.apple.com/in/app/iifl-stocks-demat-ipos/id955115541",
  },
  {
    id: 6,
    title: "Angel One",
    description: "Next-Gen Trading for the Smart Investor",
    image: AngelOneLogo,
    googlePlay: "https://play.google.com/store/apps/details?id=com.msf.angelmobile",
    appStore: "https://apps.apple.com/in/app/angel-one-stocks-mutual-fund/id1060530981",
  },
  {
    id: 7,
    title: "Dhan",
    description: "Simplifying Wealth Creation for Everyone",
    image: DhanLogo,
    googlePlay: "https://play.google.com/store/apps/details?id=com.dhan.live",
    appStore: "https://apps.apple.com/in/app/dhan-stock-market-trading-app/id1575318726",
  },
  {
    id: 8,
    title: "Groww",
    description: "Investing Made Easy and Accessible",
    image: GrowwLogo,
    googlePlay: "https://play.google.com/store/apps/details?id=com.nextbillion.groww",
    appStore: "https://apps.apple.com/in/app/groww-stocks-mutual-fund-ipo/id1404871703",
  },
  {
    id: 9,
    title: "5paisa.com",
    description: "Your Gateway to Affordable Trading",
    image: FivePaisaLogo,
    googlePlay: "https://play.google.com/store/apps/details?id=com.fivepaisa.trade",
    appStore: "https://apps.apple.com/in/app/5paisa-share-market-mf-ipo/id1156366609",
  },
];

// Data for websites
const tradingWebsites = [
  {
    id: 1,
    title: "NSE India",
    description: "Find everything about the leading Stock Exchange of India",
    image: Nse,
    link: "https://www.nseindia.com/",
  },
  {
    id: 2,
    title: "BSE India",
    description:
      "Emerge as the premier Indian stock exchange with best-in-class global practice in technology, products innovation and customer service",
    image: Bse,
    link: "https://www.bseindia.com/",
  },
  {
    id: 3,
    title: "TradingQ&A (by Zerodha)",
    description: "Question and Answer site for all things related to trading and stock markets",
    image: TradingQA,
    link: "https://tradingqna.com/",
  },
  {
    id: 4,
    title: "Moneycontrol",
    description: "India's No 1 Financial and Business portal",
    image: MoneyControl,
    link: "https://www.moneycontrol.com/",
  },
  {
    id: 5,
    title: "Trade Brains",
    description: "Trade brains aims to make DIY investing mainstream in India",
    image: TradeBrains,
    link: "https://tradebrains.in/",
  },
  {
    id: 6,
    title: "Investopedia",
    description: "Website Focused On Finance And Investing",
    image: Investopedia,
    link: "https://www.investopedia.com/",
  },
  {
    id: 7,
    title: "Finology",
    description: "To learn, research and create wealth",
    image: Finology,
    link: "https://www.finology.in/",
  },
];

const TradingApps = () => {
  return (
    <div className="blogpage">
      <div className="header tap">
        <h1>Trading Applications and Websites</h1>
        <p>
          Discover top-rated trading apps and websites that are <br /> user-friendly and feature-rich
        </p>
      </div>

      {/* Apps Section */}
      <div className="box-main">
        <h1>Apps</h1>
      </div>
      <div className="resourcesbox">
        {tradingApps.map((app) => (
          <div key={app.id} className="boxsmall tradingapps">
            <div className="img">
              <img src={app.image} alt={app.title} loading="lazy"/>
            </div>
            <div className="text">
              <h2>{app.title}</h2>
              <p className="blog-byline-card">
                {app.description}
                <br />
                <br />
                <a target="_blank" rel="noreferrer" href={app.googlePlay}>
                  <i className="fab fa-google-play" />
                </a>
                &emsp;
                <a target="_blank" rel="noreferrer" href={app.appStore}>
                  <i className="fab fa-apple" />
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Websites Section */}
      <div className="box-main">
        <h1>Websites</h1>
      </div>
      <div className="resourcesbox">
        {tradingWebsites.map((website) => (
          <div key={website.id} className="boxsmall tradingapps">
            <div className="img">
              <img src={website.image} alt={website.title} loading="lazy"/>
            </div>
            <div className="text">
              <h2>{website.title}</h2>
              <p className="blog-byline-card">
                {website.description}
                <br />
                <br />
                <a target="_blank" rel="noreferrer" href={website.link}>
                  <i className="fas fa-globe" />
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingApps;