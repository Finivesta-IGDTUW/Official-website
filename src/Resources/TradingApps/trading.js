import React from "react";
import "../Resources.css";

const TradingApps = () => {
    return ( 
        <div className="blogpage">
            <div className="header">
                <h1>Trading Apps</h1>
                <p>Access the wealth of knowledge and tools in our <br/>library.</p>
            </div>
            
            <div className="resourcesbox">
                <div className="boxsmall blog" >
                    <a href="/resources/blogs/AI-in-finance">
                    <div className="img">
                    </div>
                    <div className="text">
                        <h2>AI in Finance</h2>
                        <p className="blog-byline-card"> World of artificial intelligence overlaps with that of finance</p>
                    </div>
                    </a>
                </div>

                <div className="boxsmall blog" >
                    <a href="/resources/blogs/finance-and-technology">
                    <div className="img">
                         {/* <img src={I2} alt="Cover"/> */}
                    </div>
                    <div className="text">
                       <h2>Finance and Technology</h2>   
                       <p className="blog-byline-card">Bridging Finance and Innovation</p>       
                    </div>
                    </a>
                </div>

                <div className="boxsmall blog">
                    <a href="/resources/blogs/power-of-compounding">
                    <div className="img">
                      {/* <img src={I3} alt="Cover"/> */}
                    </div>
                    <div className="text">
                        <h2>Power of Compounding</h2>
                        <p className="blog-byline-card" >Wealth unlocks through Compounding Magic </p>
                    </div>
                    </a>
                </div>
            
                <div className="boxsmall blog">
                    <a href="/resources/blogs/liquidation">
                    <div className="img">
                        {/* <img src={I4} alt="Cover"/> */}
                    </div>
                    <div className="text">
                        <h2>Liquidation</h2>
                        <p className="blog-byline-card">Turning assets into Financial Opportunities </p>
                    </div>
                    </a>
                </div>
            </div>
        </div>         
    );
  };

export default TradingApps;
