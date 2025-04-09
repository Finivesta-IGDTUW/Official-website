import React from 'react';
import panchratnaimg from '../../Images/podcasts/panchratna.png';
import '../../BookReviews/bookpages/book-page.css';

const Panchratna = () => {
  return (
    <div className="book-page-box">
      <div className="book-header">
        <a href="https://open.spotify.com/show/5TegBItXiqv7Zte5GjfeXC" target="_blank" rel="noopener noreferrer">
          <img 
            src={panchratnaimg} 
            alt="Panchratna of Indian Stock Market" 
          />
        </a>
        
        <div className="book-title">
          <h1>Panchratna Of Indian Stock Market</h1>
          <p>-by CapitalVia</p>
          <p className="author">Rating: ★★★★☆ (4.5/5)</p>
          <p>Podcast review by <i>Nishtha</i></p>
        </div>
      </div>
      
      <div className="book-para">
        <p>
          This podcast tells the success stories of some of the most prominent and successful investors in the Indian stock market. 
          It covers their character, challenges, methods, and lifestyle changes, as well as their mindsets, confidence, methods, 
          motivations, patience, research, risk-taking skills, and many other topics to inspire new listeners to make intelligent 
          and prudent investments in Hindi.
        <br/><br/>
          Similar to how the term "Panchratna" is highly valued in Hindu puja, prominent investors Rakesh Jhunjhunwala, 
          Radhakishan Damani, Raamdeo Agrawal, Porinju Veliyath, Dolly Khanna, and others are regarded as Panchratnas 
          in the Indian stock market.
        <br/><br/>
          The narrator in the first episode refers to Rakesh Jhunjhunwala, also known as the "Big Bull," as the Ratna Raj, 
          which translates to "King of Ratna's." The success story of Rakesh Jhunjhunwala's life, passion, and his questions 
          that become stock market curiosities were discussed in this episode. It helped us understand the attitude we should 
          have when making decisions, no matter how big or small.
        <br/><br/>
          It is explained how technologies can have an impact on the financial side of the planet as well. 
          The podcast discusses strategies used by winners and what they do differently to win.
        <br/><br/>
          "Mr. White" or Radhakishan Damani's success story is covered in the second episode. 
          The narrator talks about R.K. Damani's unconventional methods for success, such as taking chances and experimenting. 
          This episode emphasizes having confidence in our goals and being proud of them without being overly boastful.
        <br/><br/>
          The Ratnaraga made reference to Raamdeo Agrawal in the third episode. Raamdeo Agrawal is well-known in the 
          financial market, and Ratnaraga is the stone that helps people conquer their fear. For novices in the stock market, 
          his success story offers hope. He is a strong believer in making very smart stock market decisions and making 
          shrewd investments, attempting to avoid making rash choices out of fear.
        </p>
      </div>
    </div>
  );
};

export default Panchratna;
