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
                    <a>
                    <div className="img">
                        <img src={ZerodhaLogo} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>Zerodha</h2>
                        <p className="blog-byline-card">
                            Empowering Investments with Zero Hassles
                            <br/><br/>
                            <i class="fab fa-google-play"/>
                            &emsp;
                            <i class="fab fa-apple"/>
                        </p>
                    </div>
                    </a>
                </div>

                <div className="boxsmall tradingapps" >
                    <a>
                    <div className="img">
                        <img src={IIFLLogo} alt="Cover"/>
                    </div>
                    <div className="text">
                       <h2>IIFL</h2>   
                       <p className="blog-byline-card">
                            Your Trusted Partner in Financial Growth
                            <br/><br/>
                            <i class="fab fa-google-play"/>
                            &emsp;
                            <i class="fab fa-apple"/>
                        </p>       
                    </div>
                    </a>
                </div>

                <div className="boxsmall tradingapps">
                    <a>
                    <div className="img">
                        <img src={AngelOneLogo} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>Angel One</h2>
                        <p className="blog-byline-card">
                            Next-Gen Trading for the Smart Investor
                            <br/><br/>
                            <i class="fab fa-google-play"/>
                            &emsp;
                            <i class="fab fa-apple"/>
                        </p>
                    </div>
                    </a>
                </div>
            
                <div className="boxsmall tradingapps">
                    <a>
                    <div className="img">
                        <img src={DhanLogo} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>Dhan</h2>
                        <p className="blog-byline-card">
                            Simplifying Wealth Creation for Everyone
                            <br/><br/>
                            <i class="fab fa-google-play"/>
                            &emsp;
                            <i class="fab fa-apple"/>
                        </p>
                    </div>
                    </a>
                </div>

                <div className="boxsmall tradingapps">
                    <a>
                    <div className="img">
                    <img src={GrowwLogo} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>Groww</h2>
                        <p className="blog-byline-card">
                            Investing Made Easy and Accessible
                            <br/><br/>
                            <i class="fab fa-google-play"/>
                            &emsp;
                            <i class="fab fa-apple"/>
                        </p>
                    </div>
                    </a>
                </div>
            
                <div className="boxsmall tradingapps">
                    <a>
                    <div className="img">
                        <img src={FivePaisaLogo} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>5paisa.com</h2>
                        <p className="blog-byline-card">
                            Your Gateway to Affordable Trading
                            <br/><br/>
                            <i class="fab fa-google-play"/>
                            &emsp;
                            <i class="fab fa-apple"/>
                        </p>
                    </div>
                    </a>
                </div>
            </div>
        </div>         
    );
  };

export default TradingApps;
