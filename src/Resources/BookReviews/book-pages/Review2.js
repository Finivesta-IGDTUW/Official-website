import React from "react";
import './book-page.css';
import IntellInvestor from '../../Images/books/IntellInvestor.jpg';

const  Review2 = () => {
  return (
        <div>
            <div className="book-page-box">
                <div class="book-header ">
                   <div className="book-img">
                   <img src={IntellInvestor} alt="IntellInvestor"/>                                 
                   </div>
                   
                   <div class="book-title">
                    <h1>Intelligent Investor</h1>
                    <p class="author">by <i>Benjamin Graham</i></p>
                    <p>Book review by <i>Simer Khurmi</i></p>           
                   </div>
                </div>
               

             <div className="book-para">
                <p>
                    While physicist Sir Isaac Newton is widely viewed as the
                    leading authority on gravity and motion, economist Benjamin
                    Graham, best known for his book The Intelligent Investor, is
                    lauded as a top guru of finance and investment. Known as the
                    father of value investing, The Intelligent Investor:
                    The Definitive Book on Value Investing is considered one of the
                    most important books on the topic. By evaluating companies with
                    surgical precision, Graham excelled at making money in the stock
                    market without taking big risks.
                    <br/><br/>
                    One of Graham's key contributions was to point out the
                    irrationality and groupthink that was often rampant in the stock
                    market. Thus, according to Graham, investors should always aim to
                    profit from the whims of the stock market, rather than participate
                    in it. His principles of investing safely and successfully
                    continue to influence investors today.
                    <br/><br/>
                    <h2>KEY TAKEAWAYS FROM THE BOOK</h2>
                    <br/>
                    <ul className="custom-list">
                        <li>
                            Economist Benjamin Graham, best known for his book The
                            Intelligent Investor, is lauded as a top guru of finance and
                            investment.
                        </li>
                        <li>
                            Known as the father of value investing, The Intelligent
                            Investor: The Definitive Book on Value Investing is considered
                            one of the most important books on the topic Graham's method
                            advises investors to concentrate on the real-life performance
                            of their companies and the dividends they receive, rather than
                            paying attention to the changing sentiments of the market.
                        </li>
                        <li>
                            Graham also advocated for an investing approach that provides
                            a margin of safety—or room for human error—for the investor.
                            Most importantly, investors should look for price-value
                            discrepancies—when the market price of a stock is less than
                            its intrinsic value.
                        </li>
                        <li>
                            This article will examine Graham's early career work,
                            some key concepts related to value investing from The
                            Intelligent Investor, and how Graham's ideas helped inform
                            the successful investing principles of later investors,
                            namely Warren Buffett.
                        </li>
                    </ul>   
                </p>                    
       
          </div>
          </div>
          </div>
                       
              
  );
};

export default Review2;
