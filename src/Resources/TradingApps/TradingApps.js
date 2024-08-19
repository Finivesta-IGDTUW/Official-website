import React from "react";
import "../Resources.css";

import ZerodhaLogo from './Logos/Zerodha.jpeg';
import IIFLLogo from './Logos/IIFL.jpg';
import AngelOneLogo from './Logos/AngelOne.jpeg';
import DhanLogo from './Logos/Dhan.png';
import GrowwLogo from './Logos/Groww.png';
import FivePaisaLogo from './Logos/5paisa.png';

const TradingApps = () => {
    return ( 
        <div className="blogpage">
            <div className="header">
                <h1>Trading Apps</h1>
                <p>Discover top-rated trading apps that are <br /> user-friendly and feature-rich</p>
            </div>
            
            <div className="resourcesbox">
                <div className="boxsmall tradingapps" >
                    <div className="img">
                        <img src={ZerodhaLogo} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>Zerodha</h2>
                        <p className="blog-byline-card">
                            Empowering Investments with Zero Hassles
                            <br/><br/>
                            <a href="https://play.google.com/store/apps/details?id=com.zerodha.kite3">
                                <i class="fab fa-google-play"/>
                            </a>
                            &emsp;
                            <a href="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802">
                                <i class="fab fa-apple"/>
                            </a>
                        </p>
                    </div>
                </div>

                <div className="boxsmall tradingapps" >
                    <div className="img">
                        <img src={IIFLLogo} alt="Cover"/>
                    </div>
                    <div className="text">
                       <h2>IIFL</h2>   
                       <p className="blog-byline-card">
                            Your Trusted Partner in Financial Growth
                            <br/><br/>
                            <a href="https://play.google.com/store/apps/details?id=com.indiainfoline">
                                <i class="fab fa-google-play"/>
                            </a>
                            &emsp;
                            <a href="https://apps.apple.com/in/app/iifl-stocks-demat-ipos/id955115541">
                                <i class="fab fa-apple"/>
                            </a>
                        </p>       
                    </div>
                </div>

                <div className="boxsmall tradingapps">
                    <div className="img">
                        <img src={AngelOneLogo} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>Angel One</h2>
                        <p className="blog-byline-card">
                            Next-Gen Trading for the Smart Investor
                            <br/><br/>
                            <a href="https://play.google.com/store/apps/details?id=com.msf.angelmobile">
                                <i class="fab fa-google-play"/>
                            </a>
                            &emsp;
                            <a href="https://apps.apple.com/in/app/angel-one-stocks-mutual-fund/id1060530981">
                                <i class="fab fa-apple"/>
                            </a>
                        </p>
                    </div>
                </div>
            
                <div className="boxsmall tradingapps">
                    <div className="img">
                        <img src={DhanLogo} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>Dhan</h2>
                        <p className="blog-byline-card">
                            Simplifying Wealth Creation for Everyone
                            <br/><br/>
                            <a href="https://play.google.com/store/apps/details?id=com.dhan.live">
                                <i class="fab fa-google-play"/>
                            </a>
                            &emsp;
                            <a href="https://apps.apple.com/in/app/dhan-stock-market-trading-app/id1575318726">
                                <i class="fab fa-apple"/>
                            </a>
                        </p>
                    </div>
                </div>

                <div className="boxsmall tradingapps">
                    <div className="img">
                    <img src={GrowwLogo} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>Groww</h2>
                        <p className="blog-byline-card">
                            Investing Made Easy and Accessible
                            <br/><br/>
                            <a href="https://play.google.com/store/apps/details?id=com.nextbillion.groww">
                                <i class="fab fa-google-play"/>
                            </a>
                            &emsp;
                            <a href="https://apps.apple.com/in/app/groww-stocks-mutual-fund-ipo/id1404871703">
                                <i class="fab fa-apple"/>
                            </a>
                        </p>
                    </div>
                </div>
            
                <div className="boxsmall tradingapps">
                    <div className="img">
                        <img src={FivePaisaLogo} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>5paisa.com</h2>
                        <p className="blog-byline-card">
                            Your Gateway to Affordable Trading
                            <br/><br/>
                            <a href="https://play.google.com/store/apps/details?id=com.fivepaisa.trade">
                                <i class="fab fa-google-play"/>
                            </a>
                            &emsp;
                            <a href="https://apps.apple.com/in/app/5paisa-share-market-mf-ipo/id1156366609">
                                <i class="fab fa-apple"/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>         
    );
  };

export default TradingApps;
