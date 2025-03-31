import React from 'react';
import Westudy from '../../Images/podcasts/westudy.jpg';
import '../../BookReviews/bookpages/book-page.css';

const WeStudyBillionaires = () => {
  

  return (
    <div className="book-page-box">
      <div className="book-header">
      <a href="https://open.spotify.com/show/28RHOkXkuHuotUrkCdvlOP" target="_blank" rel="noopener noreferrer">
        <img 
          src={Westudy} 
          alt="We Study Billionaires Podcast Cover" 
          style={{
            
            margin: '10px', 
            border: '3px solid black' // Example color
          }}
        />
      </a>

        
        <div className="book-title">
          <h1>We Study Billionaires</h1>
          <p className="author">Rating: ★★★★☆ (4.9/5)</p>
          <p>Podcast review by <i>Unnati gupta</i></p>
        </div>
      </div>
      
      <div className="book-para">
        <p>
        This podcast provides an <b>excellent and thoughtful guide</b> to understanding the world of
        investing. It combines practical lessons with real-world experience, thus making it both
        relatable and actionable, especially for those at the start of their journey in finance.
        Amongst the most important is caution as to who you should hear out. Today, it seems, with
        the myriad opinions available about investing, you're likely to get carried away or even
        influenced by people's strategies. The podcast says one must not be lost but keep one's
        sights on personal goals, getting in tune with others on similar approaches. The caution in
        who to hear from in the process of investment besides building up confidence while deciding
        is helpful.

          <br/><br/>
        <b>Part one on the dangers of using just stock screens is very wise indeed.</b> People often think
        about investing in terms of crunched numbers, but really the danger of using mere stock
        screens blindly leads to less-than-wisely informed decisions. It advises perusing the
        portfolios of knowledgeable and experienced investors and understanding what their
        decision-making processes look like. This way of approach fosters learning from the best
        and ensuring that any investments fit with one's self-awareness and interests.
        The discussion on the circle of competence is another powerful takeaway. It challenges the
        idea that more experience always means more knowledge in every area. Instead, the
        podcast advises recognizing one’s strengths and sticking to industries or businesses that are
        well understood. This not only reduces the risk of mistakes but also helps build confidence
        over time.

          <br/><br/>
        This shift from reading books to studying real businesses is unique and practical. Although
        reading provides a great foundation, the podcast suggests that <b>it is by analyzing real-world
        data like company reports and financial statements that a deeper understanding is provided.</b> Such
        hands-on learning guarantees knowledge applied directly to the market; thus, this is
        quite helpful for students and novice investors. 
          <br/><br/>

        The advice to set guardrails in investing is practical and reassuring advice. By limiting
        impulsive choices—such as capping the size of investments or sticking to funds with
        annualized withdrawal limits—investors can focus on long-term targets without being
        distracted by short-term market changes. This controlled approach reduces stress and
        promotes smarter decision making.
          <br/><br/>

        <b>Another lesson that is valuable is on diversification of portfolios.</b> According to the podcast,
        one should not rely totally on public equities for investments since it can easily get risky
        during economic meltdowns. Diversification across asset classes provides a safeguard and
        more stable returns over the long run.

          <br/><br/>
        The point about monitoring performance sparingly is a refreshing perspective. Constantly
        tracking a portfolio can lead to emotional decisions that harm long-term performance.
        Evaluating investments annually instead of obsessing over daily changes encourages
        patience and a broader view of success.
         <br/><br/>

        Lastly, the reminder to analyze advice within context is crucial. Not all strategies work for
        everyone, and understanding the circumstances behind someone else’s success is
        essential. Tailoring advice to one’s unique financial situation makes for a more personalized
        and effective investment strategy.
        <br/><br/>

        Overall, <b>the podcast does an excellent job of breaking down complex concepts into practical
        lessons.</b> It emphasizes the value of patience, careful decision-making, and continuous
        learning. For anyone looking to develop a long-term, sustainable approach to investing,
        these insights are not just helpful—they are essential.
        </p>
      </div>
      
    </div>
  );
};

export default WeStudyBillionaires;
