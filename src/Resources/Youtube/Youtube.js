import React from "react";
import "../Resources.css";

import StockMarketBasics from '../Images/youtubes/stockmarketbasics.jpg';
import StockMarketWorks from '../Images/youtubes/stockmarket.jpg';
import CryptoCurrency from '../Images/youtubes/cryptocurrency.jpg';
import KhanAcademy from '../Images/youtubes/khanacademy.jpg';


const Youtube = () => {
  return (
    <div className="Youtube">

        <div className="header yt">
          <h1>Online Videos</h1>
          <p>Find latest and most informative collection of videos and tutorials here</p>
        </div>

        <div className="resourcesbox">

          <div className="boxsmall">
          <a target="_blank" rel="noreferrer" href="https://www.khanacademy.org/economics-finance-domain/core-finance/investment-vehicles-tutorial">
              <div className="landscape">
                <img src={KhanAcademy} alt="Cover"/>
              </div>
              <div className="text">
                <h2>Investing</h2>
            </div>
          </a>
          </div>

          <div className="boxsmall">
            <a target="_blank" rel="noreferrer" href="https://youtube.com/playlist?list=PL8uhW8cclMiNv8UT1NUawB-XpXVeJ8mN8&si=Ciaw9fblNEHPSF7b">
            <div className="landscape">
              <img src={StockMarketBasics} alt="Cover"/>
            </div>
            <div className="text">
              <h2>Basics Of Stock Market</h2>
            </div>
            </a>
          </div>

          <div className="boxsmall">
            <a target="_blank" rel="noreferrer" href="https://youtu.be/p7HKvqRI_Bo?si=5mUfxdUkvOX995-c">
            <div className="landscape">
              <img src={StockMarketWorks} alt="Cover"/>
            </div>
            <div className="text">
              <h2>Stock Market Works</h2>
            </div>
            </a>
          </div>
          
          <div className="boxsmall">
            <a target="_blank" rel="noreferrer" href="https://youtu.be/JZk6T1TmIrs?si=rTXUZBOx48Fd3bUC">
            <div className="landscape">
              <img src={CryptoCurrency} alt="Cover"/>
            </div>
            <div className="text">
              <h2>Cryptocurrency</h2>
            </div>
            </a>
          </div>

        </div>
    </div>
        
  );
};

export default Youtube;
