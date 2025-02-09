import React from "react";
import "../Resources.css";

import ZerodhaLogo from './Logos/Zerodha.jpeg';
import IIFLLogo from './Logos/IIFL.jpg';
import AngelOneLogo from './Logos/AngelOne.jpeg';
import DhanLogo from './Logos/Dhan.png';
import GrowwLogo from './Logos/Groww.png';
import FivePaisaLogo from './Logos/5paisa.png';
import Investopedia from './Logos/Investopedia.jpg';
import Stockedge from './Logos/Stockedge.png';
import TradingView from './Logos/TradingView.png';
import FrontPage from './Logos/FrontPage.jpg';
import Nse from './Logos/nseindia.jpg';
import Bse from './Logos/bseindia.jpg';
import TradingQA from './Logos/tradingqanda.png';
import MoneyControl from './Logos/moneycontrol.jpg';
import TradeBrains from './Logos/TradeBrains.png';
import Finology from './Logos/Finology.jpg';


const TradingApps = () => {
    return ( 
        <div className="blogpage">
            <div className="header tap">
                <h1>Trading Applications and Websites</h1>
                <p>Discover top-rated trading apps and websites that are <br /> user-friendly and feature-rich</p>
            </div>

            <div className="box-main">
                    <br></br> 
                    <h1>Apps</h1> 
                </div>
            
            <div className="resourcesbox">
                <div className="boxsmall tradingapps" >
                    <div className="img">
                        <img src={FrontPage} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>Front Page</h2>
                        <p className="blog-byline-card">
                            The Front Page Of India's Stock Market
                        <br/><br/>
                        <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=in.crowdware.one&hl=en-US">
                            <i class="fab fa-google-play"/>
                        </a>
                        &emsp;
                        <a target="_blank" rel="noreferrer" href="https://apps.apple.com/in/app/frontpage/id1401247335">
                            <i class="fab fa-apple"/>
                        </a>
                        </p>
                    </div>
                </div>

                <div className="boxsmall tradingapps" >
                    <div className="img">
                        <img src={TradingView} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>Trading View</h2>
                        <p className="blog-byline-card">
                            Where The World Does Markets
                        <br/><br/>
                        <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.tradingview.tradingviewapp&hl=en-US">
                            <i class="fab fa-google-play"/>
                        </a>
                        &emsp;
                        <a target="_blank" rel="noreferrer" href="https://apps.apple.com/in/app/tradingview-track-all-markets/id1205990992">
                            <i class="fab fa-apple"/>
                        </a>
                        </p>
                    </div>
                </div>

                <div className="boxsmall tradingapps" >
                    <div className="img">
                        <img src={Stockedge} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>Stockedge</h2>
                        <p className="blog-byline-card">
                            Your Edge Just Got Sharper
                        <br/><br/>
                        <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=in.stockedge.app&hl=en-US">
                            <i class="fab fa-google-play"/>
                        </a>
                        &emsp;
                        <a target="_blank" rel="noreferrer" href="https://apps.apple.com/in/app/stockedge-stock-market-india/id1066284206">
                            <i class="fab fa-apple"/>
                        </a>
                        </p>
                    </div>
                </div>

                <div className="boxsmall tradingapps" >
                    <div className="img">

                        <img src={ZerodhaLogo} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>Zerodha</h2>
                        <p className="blog-byline-card">
                            Empowering Investments with Zero Hassles
                            <br/><br/>
                            <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.zerodha.kite3">
                                <i class="fab fa-google-play"/>
                            </a>
                            &emsp;
                            <a target="_blank" rel="noreferrer" href="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802">
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
                            <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.indiainfoline">
                                <i class="fab fa-google-play"/>
                            </a>
                            &emsp;
                            <a target="_blank" rel="noreferrer" href="https://apps.apple.com/in/app/iifl-stocks-demat-ipos/id955115541">
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
                            <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.msf.angelmobile">
                                <i class="fab fa-google-play"/>
                            </a>
                            &emsp;
                            <a target="_blank" rel="noreferrer" href="https://apps.apple.com/in/app/angel-one-stocks-mutual-fund/id1060530981">
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
                            <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.dhan.live">
                                <i class="fab fa-google-play"/>
                            </a>
                            &emsp;
                            <a target="_blank" rel="noreferrer" href="https://apps.apple.com/in/app/dhan-stock-market-trading-app/id1575318726">
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
                            <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.nextbillion.groww">
                                <i class="fab fa-google-play"/>
                            </a>
                            &emsp;
                            <a target="_blank" rel="noreferrer" href="https://apps.apple.com/in/app/groww-stocks-mutual-fund-ipo/id1404871703">
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
                            <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.fivepaisa.trade">
                                <i class="fab fa-google-play"/>
                            </a>
                            &emsp;
                            <a target="_blank" rel="noreferrer" href="https://apps.apple.com/in/app/5paisa-share-market-mf-ipo/id1156366609">
                                <i class="fab fa-apple"/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="box-main">
                    <br></br> 
                    <h1>Websites</h1> 
                </div>
            
            <div className="resourcesbox">
                <div className="boxsmall tradingapps" >
                    <div className="img">
                        <img src={Nse} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>NSE India</h2>
                        <p className="blog-byline-card">
                            Find everything about the leading Stock Exchange of India
                        <br/><br/>
                        <a target="_blank" rel="noreferrer" href="https://www.nseindia.com/">
                            <i class="fas fa-globe"/>
                        </a>
                        
                        </p>
                    </div>
                </div>

                <div className="boxsmall tradingapps" >
                    <div className="img">
                        <img src={Bse} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>BSE India</h2>
                        <p className="blog-byline-card">
                            Emerge as the premier Indian stock exchange with best-in-class global practice in technology, products innovation and customer service
                        <br/><br/>
                        <a target="_blank" rel="noreferrer" href="https://www.bseindia.com/">
                            <i class="fas fa-globe"/>
                        </a>
                    
                        </p>
                    </div>
                </div>

                <div className="boxsmall tradingapps" >
                    <div className="img">
                        <img src={TradingQA} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>TradingQ&A (by Zerodha)</h2>
                        <p className="blog-byline-card">
                             Question and Answer site for all things related to trading and stock markets
                        <br/><br/>
                        <a target="_blank" rel="noreferrer" href="https://tradingqna.com/">
                            <i class="fas fa-globe"/>
                        </a>
                        
                        </p>
                    </div>
                </div>

                <div className="boxsmall tradingapps" >
                    <div className="img">
                        <img src={MoneyControl} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>Moneycontrol</h2>
                        <p className="blog-byline-card">
                            India's No 1 Financial and Business portal
                            <br/><br/>
                            <a target="_blank" rel="noreferrer" href="https://www.moneycontrol.com/">
                                <i class="fas fa-globe"/>
                            </a>
                           
                          
                        </p>
                    </div>
                </div>

                <div className="boxsmall tradingapps" >
                    <div className="img">
                        <img src={TradeBrains} alt="Cover"/>
                    </div>
                    <div className="text">
                       <h2>Trade Brains</h2>   
                       <p className="blog-byline-card">
                            Trade brains aims to make DIY investing mainstream in India
                            <br/><br/>
                            <a target="_blank" rel="noreferrer" href="https://tradebrains.in/">
                                <i class="fas fa-globe"/>
                            </a>
                           
                        </p>       
                    </div>
                </div>

                
                <div className="boxsmall tradingapps" >
                    <div className="img">
                        <img src={Investopedia} alt="Cover"/>
                    </div>
                    <div className="text">
                       <h2>Investopedia</h2>   
                       <p className="blog-byline-card">
                            Website Focused On Finance And Investing
                            <br/><br/>
                            <a target="_blank" rel="noreferrer" href="https://www.investopedia.com/">
                                <i class="fas fa-globe"/>
                            </a>
                           
                        </p>       
                    </div>
                </div>

                <div className="boxsmall tradingapps">
                    <div className="img">
                        <img src={Finology} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>Finology</h2>
                        <p className="blog-byline-card">
                            To learn, research and create wealth
                            <br/><br/>
                            <a target="_blank" rel="noreferrer" href="https://www.finology.in/">
                                <i class="fas fa-globe"/>
                            </a>
                            
                        </p>
                    </div>
                </div>
            
                
            </div>
        </div> 
        
    );
  };

export default TradingApps;
