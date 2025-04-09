import React from 'react';
import FinshotsCover from '../../Images/podcasts/finshotsdaily3.jpeg';
import '../../BookReviews/bookpages/book-page.css';

const FinshotsReview = () => {
  

  return (
    <div className="book-page-box">
      <div className="book-header">
        <a href="https://open.spotify.com/show/12jUp5Aa63c5BYx3wVZeMA" target="_blank" rel="noopener noreferrer">
          <img 
            src={FinshotsCover} 
            alt="Finshots Daily Podcast Cover" 
          />
        </a>
        
        <div className="book-title">
          <h1>Finshots by FinDaily</h1>
          <p className="author">Rating: ★★★★☆ (4.5/5)</p>
          <p>Podcast review by <i>Aadya Jha</i></p>
        </div>
      </div>
      
      <div className="book-para">
        <p>
          Finshots is a financial newsletter and app aimed at making financial news and concepts accessible to everyone. 
          It simplifies complex financial jargon into engaging, bite-sized content, making it a go-to platform for students, 
          professionals, and casual readers interested in finance.
          <br/><br/>
          <h2>FEATURES</h2>
          <br/>
          <strong>1. Daily Newsletter</strong><br/>
          Finshots provides a free daily newsletter delivered to subscribers' inboxes. The newsletter summarizes one significant 
          financial event or concept in under three minutes. Topics include:
          <br/>
          ● Business trends<br/>
          ● Policy changes<br/>
          ● Stock market movements<br/>
          ● Personal finance tips<br/>
          ● Global economic developments
          <br/><br/>
          <strong>2. Mobile App</strong><br/>
          Platforms: Available on iOS and Android.<br/>
          Interface: Clean and minimalistic design with features such as customizable notifications, dark and light modes, 
          an ad-free experience, in-app search, and save/share options.
          <br/><br/>
          <strong>3. Finshots Markets</strong><br/>
          A separate section dedicated to stock market updates, providing simplified explanations of market movements, 
          company performances, and IPO news.
          <br/><br/>
          <strong>4. Finshots Policy</strong><br/>
          Explains government policies, economic reforms, and their real-world implications, bridging the gap between policy 
          announcements and public understanding.
          <br/><br/>
          <strong>5. Personal Finance</strong><br/>
          Offers actionable advice on savings, investments, and budgeting, tailored for beginners and young professionals.
          <br/><br/>
          <h2>CONTENT QUALITY</h2>
          <br/>
          <strong>Simplicity:</strong> The content is written in plain English, avoiding technical jargon.<br/>
          <strong>Engagement:</strong> Articles are presented in a storytelling format, making financial news enjoyable.<br/>
          <strong>Accuracy:</strong> Backed by thorough research, ensuring credibility.<br/>
          <strong>Relevance:</strong> Focuses on trending and impactful topics, ensuring readers stay informed about key developments.
          <br/><br/>
          <h2>USER EXPERIENCE</h2>
          <br/>
          <strong>Positives:</strong>
          <ul>
            <li>Accessibility: Designed for readers with little to no financial background.</li>
            <li>Time-Efficient: Articles take only 2-3 minutes to complete.</li>
            <li>Consistency: Delivers content regularly without delays.</li>
          </ul>
          <br/>
          <strong>Negatives:</strong>
          <ul>
            <li>Limited Depth: While great for quick insights, some users find the content lacks depth for advanced readers.</li>
          </ul>
          <br/>
          <h2>USER REVIEWS</h2>
          <br/>
          <strong>Positive Feedback:</strong><br/>
          “The best way to stay updated with financial news in under 3 minutes.”<br/>
          “The app has changed the way I look at finance. It’s not boring anymore!”<br/>
          “Their explanation of policies and market movements is top-notch.”<br/><br/>
          <strong>Critical Feedback:</strong><br/>
          “The app could improve its interface; it feels a bit clunky at times.”<br/>
          “Dark mode doesn’t work properly on my Android device.”<br/>
          “I wish they included more detailed analyses for advanced readers.”<br/><br/>
          <h2>WHO SHOULD USE FINSHOTS?</h2>
          <br/>
          <ul>
            <li><strong>Students:</strong> Ideal for those starting their financial literacy journey.</li>
            <li><strong>Professionals:</strong> Great for staying updated on financial news during busy schedules.</li>
            <li><strong>Investors:</strong> Helpful for understanding stock market trends and policies.</li>
            <li><strong>General Readers:</strong> Perfect for anyone curious about finance and economics.</li>
          </ul>
          <br/>
          <h2>CONCLUSION</h2>
          <br/>
          Finshots is an excellent platform for anyone looking to simplify financial concepts and stay updated with the latest news. 
          Its concise and engaging format makes it stand out in the crowded financial content space. While it has minor flaws, such as 
          app interface issues, its overall value far outweighs these shortcomings.
        </p>
      </div>
      
    </div>
  );
};

export default FinshotsReview;
