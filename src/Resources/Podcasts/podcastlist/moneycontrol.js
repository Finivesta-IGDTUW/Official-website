import React from 'react';
import MoneyControlImage from '../../Images/podcasts/moneycontrol.jpeg';
import '../../BookReviews/bookpages/book-page.css';

const MoneyControl = () => {
  return (
    <div className="book-page-box">
      <div className="book-header">
        <a href="https://open.spotify.com/show/6mcVOxYVPF4BXPRKGz0Cna" target="_blank" rel="noopener noreferrer">
          <img 
            src={MoneyControlImage} 
            alt="Money Control" 
          />
        </a>
        
        <div className="book-title">
          <h1>Money Control</h1>
          <p>Podcast review by <i>Anushka Khanduri</i></p>
        </div>
      </div>
      
      <div className="book-para">
        <p>
            <i>Moneycontrol</i> is India's No. 1 Financial and Business portal. With in-depth market coverage, analysis, expert opinions, and a gamut of financial tools, Moneycontrol has been the premier destination for consumers and market watchers. A part of Network18, Moneycontrol is the most influential destination for stock market news and advice, business news, and news about the Indian and global economy.<br /><br />
            I watched the video titled “The Secret to Buy Small Caps Thinking Probabilistically and Much More / The Wealth Formula”.<br />
            <b>Some things I learned from this video:</b><br /><br />
            <ol>
                <li><b>The Wealth Formula:</b> In the podcast, we are informed that to build wealth, it's important to understand the basic formula: earn, save, and invest wisely. The key is to focus on making your money grow over time through smart investments.</li><br />
                <li><b>Good Businesses:</b> In the podcast, we are informed that it is important to invest in businesses with strong fundamentals. These companies should have a good track record, a solid business model, and the potential for growth.</li><br />
                <li><b>The Art of Investing:</b> In the podcast, we are informed that investing is not just about numbers; it’s also about understanding the market, your goals, and making decisions with both logic and intuition.</li><br />
                <li><b>Going Easy on Valuation:</b> In the podcast, we are informed that we shouldn’t always focus too heavily on how much a company is worth today. Sometimes, focusing too much on valuation can cause you to miss out on long-term opportunities.</li><br />
                <li><b>Conviction:</b> In the podcast, we are informed that once you’ve done your research, trust your judgment and stick to your investment decisions. Confidence in your choices can help you stay on track even when the market fluctuates.</li><br />
                <li><b>Probabilistic Approach:</b> In the podcast, we are informed that investing is about probabilities, not certainties. Always think in terms of chances and risks, and make decisions based on what is likely to happen, not what is guaranteed.</li><br />
                <li><b>The Basic Rule of Investing:</b> In the podcast, we are informed that the most important rule is to protect your capital. It’s better to take fewer risks that could result in losses than to aim for high rewards without proper analysis.</li><br />
            </ol>
            In my opinion, this podcast is an excellent choice for anyone looking to learn about finance and small caps. The use of relatable real-world examples makes complex financial topics easy to grasp. Overall, this podcast was really informative and I would like to thank the team for assigning this task to us.
        </p>

      </div>
    </div>
  );
};

export default MoneyControl;
