import React from "react";
import "../Resources.css";

import I1 from '../Images/blogs/1.jpg';
import I2 from '../Images/blogs/2.webp';
import I3 from '../Images/blogs/3.jpg';
import I4 from '../Images/blogs/4.jpg';
import I5 from '../Images/blogs/5.jpg';
import I6 from '../Images/blogs/6.jpg';
import I7 from '../Images/blogs/gold.jpeg';
import I8 from '../Images/blogs/CarthageCoins.jpg';
import I9 from '../Images/blogs/9.jpg';
import I10 from '../Images/blogs/dhanteras.webp';
import I11 from '../Images/blogs/11.png';
import I12 from '../Images/blogs/investment.png';
const Blog = () => {
  return (
    <div className="blogpage">
      <div className="header blogs">
        <h1>Blogs</h1>
        <p>Explore insightful finance related articles and stories.</p>
      </div>

      <div className="resourcesbox">
      <div className="boxsmall blog">
          <a href="/resources/blogs/12-investing-and-annual-returns">
            <div className="img">
              <img src={I12} alt="Cover" />
            </div>
            <div className="text">
              <h2>Introduction to Investing and Annual Returns</h2>
              <p className="blog-byline-card">
                A comprehensive guide to investment options and their potential returns{" "}
              </p>
            </div>
          </a>
        </div>
        <div className="boxsmall blog" >
            <a href="/resources/blogs/11-US-election-2024">
            <div className="img">
                  <img src={I11} alt="Cover"/>
            </div>
            <div className="text">
                <h2>The 2024 U.S. Election</h2>   
                <p className="blog-byline-card">What a Trump Return V/S Harris Victory Means for the Global Economy</p>
            </div>
            </a>
        </div>

        <div className="boxsmall blog">
          <a href="/resources/blogs/10-gold-on-dhanteras">
            <div className="img">
              <img src={I10} alt="Cover" />
            </div>
            <div className="text">
              <h2>Auspiciousness of Buying gold on Dhanteras</h2>
              <p className="blog-byline-card">
                Unvieling the story behind the festival
              </p>
            </div>
          </a>
        </div>

        <div className="boxsmall blog">
          <a href="/resources/blogs/09-dhanteras-dynamics">
            <div className="img">
              <img src={I9} alt="Cover" />
            </div>
            <div className="text">
              <h2>Dhanteras Dynamics</h2>
              <p className="blog-byline-card">
                Gold prices and Market Sentiments amidst Global Uncertainty
              </p>
            </div>
          </a>
        </div>

        <div className="boxsmall blog">
          <a href="/resources/blogs/08-gold-history">
            <div className="img">
              <img src={I8} alt="Cover" />
            </div>
            <div className="text">
              <h2> Gold Through the Ages</h2>
              <p className="blog-byline-card">
                Is It Still the Ultimate Asset in Today's World?
              </p>
            </div>
          </a>
        </div>

        <div className="boxsmall blog">
          <a href="/resources/blogs/07-digital-gold">
            <div className="img">
              <img src={I7} alt="Cover" />
            </div>
            <div className="text">
              <h2>Digital Gold</h2>
              <p className="blog-byline-card">
                Explore how digital gold works{" "}
              </p>
            </div>
          </a>
        </div>

        <div className="boxsmall blog">
          <a href="/resources/blogs/01-AI-in-finance">
            <div className="img">
              <img src={I1} alt="Cover" />
            </div>
            <div className="text">
              <h2>AI in Finance</h2>
              <p className="blog-byline-card">
                {" "}
                World of artificial intelligence overlaps with that of finance{" "}
              </p>
            </div>
          </a>
        </div>

        <div className="boxsmall blog">
          <a href="/resources/blogs/02-finance-and-technology">
            <div className="img">
              <img src={I2} alt="Cover" />
            </div>
            <div className="text">
              <h2>Finance and Technology</h2>
              <p className="blog-byline-card">
                Bridging Finance and Innovation{" "}
              </p>
            </div>
          </a>
        </div>

        <div className="boxsmall blog">
          <a href="/resources/blogs/03-power-of-compounding">
            <div className="img">
              <img src={I3} alt="Cover" />
            </div>
            <div className="text">
              <h2>Power of Compounding</h2>
              <p className="blog-byline-card">
                Wealth unlocks through Compounding Magic{" "}
              </p>
            </div>
          </a>
        </div>

        <div className="boxsmall blog">
          <a href="/resources/blogs/04-liquidation">
            <div className="img">
              <img src={I4} alt="Cover" />
            </div>
            <div className="text">
              <h2>Liquidation</h2>
              <p className="blog-byline-card">
                Turning assets into Financial Opportunities{" "}
              </p>
            </div>
          </a>
        </div>

        <div className="boxsmall blog">
          <a href="/resources/blogs/05-financial-literacy">
            <div className="img">
              <img src={I5} alt="Cover" />
            </div>
            <div className="text">
              <h2>Financial Literacy</h2>
              <p className="blog-byline-card">
                {" "}
                Empowering Education and Mastering Finance{" "}
              </p>
            </div>
          </a>
        </div>

        <div className="boxsmall blog">
          <a href="/resources/blogs/06-bidding">
            <div className="img">
              <img src={I6} alt="Cover" />
            </div>
            <div className="text">
              <h2>Bidding</h2>
              <p className="blog-byline-card">
                Strategic Bidding: Key to Success{" "}
              </p>
            </div>
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Blog;
