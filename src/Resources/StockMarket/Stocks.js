import React from "react";
import "../Resources.css";

import I1 from '../Images/bg1.jpg';
import I2 from '../Images/bg1.jpg';
import I3 from '../Images/bg1.jpg';
import I4 from '../Images/bg1.jpg';
import I5 from '../Images/bg1.jpg';
import I6 from '../Images/bg1.jpg';
import I7 from '../Images/bg1.jpg';


const Stocks = () => {
  return (
    <div className="header">
        <h1>Stock Market</h1>
        <p>Access the wealth of knowledge and tools in our <br />resource library.</p>
    </div>

    <div className="box">
        <a href="https://fortune.com/recommends/investing/how-to-start-investing/" class="box-link">
            <div className="box1">
            
                <div className="img">
                    <img src={I1} alt="Cover"/>
                </div>
                <div className="text">
                    <h2>How to start investing?</h2>
                
                </div>
            </div>

        </a>
        
        
        <a href="https://www.reddit.com/r/IndiaInvestments/comments/9ltgni/for_someone_who_is_absolutely_at_level_zero_in/" class="box-link">
            <div className="box1">
                <div className="img">
                  <img src={I1} alt="Cover"/>
                </div>
                <div className="text">
                  <h2>Investing for someone who is at level zero</h2>
                  
                </div>
            </div>

        </a>

        <a href="https://www.fool.com/investing/stock-market/types-of-stocks/" class="box-link">
            <div className="box1">
                <div className="img">
                  <img src={I1} alt="Cover"/>
                </div>
                <div className="text">
                  <h2>Types of Stocks</h2>
                  
                </div>
            </div>

        </a>
        

        
    </div>

    <div className="box">
        <a href="https://www.forbes.com/advisor/investing/what-are-stocks/" class="box-link">
            <div className="box1">
                <div className="img">
                  <img src={I1} alt="Cover"/>
                </div>
                <div className="text">
                  <h2>What are stocks?</h2>
                  
                </div>
            </div>

        </a>
        
        <a href="https://www.reddit.com/r/IndiaInvestments/comments/k7v0dg/a_beginners_guide_to_investing_in_the_stock/" class="box-link">
            <div className="box1">
                <div className="img">
                  <img src={I1} alt="Cover"/>
                </div>
                <div className="text">
                  <h2>Beginners guide to investing</h2>
                </div>
            </div>

        </a>
        
        <a href="https://www.investopedia.com/terms/s/stock.asp" class="box-link">
            <div className="box1">
                <div className="img">
                  <img src={I1} alt="Cover"/>
                </div>
                <div className="text">
                  <h2>Stocks VS Bonds</h2>
                </div>
            </div>

        </a>
        
    </div>
    

        
  );
};

export default Stocks;
