import React from 'react';
import FinanceCover from '../../Images/podcasts/SchoolOfFinance.png';
import '../../BookReviews/bookpages/book-page.css';

const FinanceReview = () => {
  
  return (
    <div className="book-page-box">
      <div className="book-header">
      <a href="https://open.spotify.com/show/7yznWrbzGF6x5amXXTWRNC" target="_blank" rel="noopener noreferrer">
        <img 
          src={FinanceCover} 
          alt="School of Finance Podcast Cover" 
          style={{
            
            margin: '10px', 
            border: '3px solid black' // Example color
          }}
        />
      </a>

        
        <div className="book-title">
          <h1>School of Finance by Karishma Shah</h1>
          <p className="author">Rating: ★★★★☆ (4.5/5)</p>
          <p>Podcast review by <i>Anandi Sharma</i></p>
        </div>
      </div>
      
      <div className="book-para">
        <p>
          Hosted and created by Karishma Shah in 2021,
          “School of Finance” is your go-to podcast for understanding investment opportunities that aren't usually talked about, 
          especially for individuals looking to explore new ways to grow their wealth beyond the usual stocks and mutual funds.
          <br/><br/>
          The podcast <strong>School of Finance</strong> starts by defining some key financial terms like equity, debt, and budgeting. 
          From there, it dives deep into various types of investments and whether those are suitable for you. Covering everything from 
          real estate investments to NFTs and even investing in startups, it breaks down the advantages and shortcomings of each. 
          It also touches on important topics like cybersecurity in investments and ethical investing.
          <br/><br/>
          A significant portion of the podcast is dedicated to understanding the stock market, explaining concepts like bull vs. bear 
          markets, IPO analysis, and the differences between blue-chip and penny stocks. Additionally, it covers other economy-related 
          topics such as the impact of US elections on investments and what Budget 2024 means for startup investors. The podcast also 
          incorporates startup-oriented concepts like the idea maze, go-to-market strategies, and business planning, making it 
          particularly helpful for beginners entering the world of investments or startups.
          <br/><br/>
          What sets this podcast apart is its beginner-friendly approach. Karishma Shah uses plenty of real-world examples to explain 
          concepts, making the podcast easy to understand. For instance, she uses Spotify to explain the idea maze, illustrating how to 
          implement it and its importance for startups. Another unique aspect is how the podcast connects economics to real-world 
          events, discussing the influence of factors like US elections and budgets on finance and startups. The short episodes, each no 
          longer than 10 minutes, keep it engaging and help maintain listener concentration.
          <br/><br/>
          However, one drawback is the lack of a structured teaching method. Similar topics like cybersecurity, ethical investing, and 
          strategies for battling cybersecurity threats are scattered across episodes, making it challenging to connect the dots at 
          times.
          <br/><br/>
          In my opinion, this podcast is an excellent choice for anyone looking to learn about finance, investments, or startups. The 
          use of relatable real-world examples makes complex financial topics easy to grasp. It also encourages listeners to think 
          critically about how global events affect economics and whether those impacts are positive, negative, or neutral. If you're a 
          beginner eager to explore these areas, <strong>School of Finance</strong> comes highly recommended.
        </p>
      </div>
      
    </div>
  );
};

export default FinanceReview;
