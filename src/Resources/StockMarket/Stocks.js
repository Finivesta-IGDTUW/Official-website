import React from "react";
import "../Resources.css";


import I1 from '../Images/Stock/Stock1.jpeg';
import I2 from '../Images/Stock/Stock2.jpeg';
import I3 from '../Images/Stock/Stock3.jpeg';
import I4 from '../Images/Stock/Stock4.jpg';
import I5 from '../Images/Stock/Stock5.jpeg';
import I6 from '../Images/Stock/Stock6.jpg';



const Stocks = () => {
  return (
    <div className="Stockspage">
          <div className="header sm">
              <h1>Stock Market</h1>
              <p>All you need to know about stock market!</p>
          </div>

          <div className="resourcesbox">
              
              <div className="boxsmall stock">
                  <a target="_blank" rel="noreferrer" href="https://fortune.com/recommends/investing/how-to-start-investing/">
                  <div className="img">
                      <img src={I1} alt="Cover"/>
                  </div>
                  <div className="text">
                      <h2>How to start investing?</h2>
                  </div>
                  </a>
              </div>
        
              <div className="boxsmall stock">
                  <a target="_blank" rel="noreferrer" href="https://www.reddit.com/r/IndiaInvestments/comments/9ltgni/for_someone_who_is_absolutely_at_level_zero_in/">
                  <div className="img">
                      <img src={I2} alt="Cover"/>
                  </div>
                  <div className="text">
                      <h2>Investing for someone who is at level zero</h2>
                  </div>
                  </a>
              </div>
        
              <div className="boxsmall stock">
                  <a target="_blank" rel="noreferrer" href="https://www.fool.com/investing/stock-market/types-of-stocks/">
                  <div className="img">
                      <img src={I3} alt="Cover"/>
                  </div>
                  <div className="text">
                      <h2>Types Of Stocks</h2>
                  </div>
                  </a>
              </div>

              <div className="boxsmall stock">
                  <a target="_blank" rel="noreferrer" href="https://www.forbes.com/advisor/investing/what-are-stocks/"> 
                  <div className="img">
                      <img src={I4} alt="Cover"/>
                  </div>
                  <div className="text">
                      <h2>What are stocks?</h2>
                  </div>
                  </a>
              </div>
        
              <div className="boxsmall stock">
                  <a target="_blank" rel="noreferrer" href="https://www.reddit.com/r/IndiaInvestments/comments/k7v0dg/a_beginners_guide_to_investing_in_the_stock/">
                  <div className="img">
                      <img src={I5} alt="Cover"/>
                  </div>
                  <div className="text">
                      <h2>Beginners guide to investing</h2>
                  </div>
                  </a>
              </div>
        
              <div className="boxsmall stock">
                  <a target="_blank" rel="noreferrer" href="https://www.investopedia.com/terms/s/stock.asp">
                  <div className="img">
                      <img src={I6} alt="Cover"/>
                  </div>
                  <div className="text">
                      <h2>Stocks VS Bonds</h2>
                  </div>
                  </a>
              </div>
        
          </div>
    </div>
    
  );
};

export default Stocks;
