import React from 'react';
import moneyExplained from '../../Images/podcasts/moneyExplained.png';
import '../../BookReviews/bookpages/book-page.css';

const MoneyExplained = () => {
  return (
    <div className="book-page-box">
      <div className="book-header">
        <a href="https://www.netflix.com/in/title/81345769" target="_blank" rel="noopener noreferrer">
          <img 
            src={moneyExplained} 
            alt="Money, Explained - A Netflix Documentary Series" 
          />
        </a>
        
        <div className="book-title">
          <h1>Money, Explained - A Netflix Documentary Series</h1>
          <p>"We spend it, borrow it, and save it. Now let's talk about money and its many
          minefields, from credit cards to casinos, scammers to student loans.”</p>
          <p className="author">Rating: ★★★★☆ (4.5/5)</p>
          <p>Podcast review by <i>Jasleen Kaur</i></p>
        </div>
      </div>
      
      <div className="book-para">
        <p>
        Produced by Vox Media, this five-episode series dives into the history and
behind-the-scenes knowledge of get-rich-quick scams, credit cards, student loans,
gambling, and retirement. The mini series excels in breaking down complex financial
concepts into digestible and relatable segments. With a blend of sharp humor, colorful
animations, and real-world anecdotes, Money, Explained keeps viewers hooked while
shedding light on the systems that govern our financial lives.
        <br/><br/>
        One of the standout aspects of the docuseries is how it seamlessly combines history
with modern-day examples. For instance, in Episode 1- ‘Get Rich Quick Schemes’, the
series explores the history of Poyais, one of the first recorded scams, showing how
deception has always been part of the financial world. It also delves into notorious
cases like Bernie Madoff’s Ponzi scheme and Ruja Ignatova’s OneCoin cryptocurrency
scam, bridging the gap between past and present fraud tactics.
        <br/><br/>
        A particularly memorable quote from the series is by Ricky Jay: "I wouldn't want to live
in a world where we couldn't be conned, because that's a world where we don't believe
in anyone or anything". This line resonates deeply because it reminds us that trust, even
when risky, is a fundamental part of how we operate in society.
        <br/><br/>
        The series uses historical facts, real-world cases, thoughtful moments, and engaging
animations to make financial fundamentals easy for novices to grasp. However, some
financial experts have noted that the series lacks depth. It is believed by these viewers
that the series offers only an overview of financial operations and often scares
beginners without providing guidance on how to navigate this financial world. On the
other hand, many viewers argue that this method is optimal, as it imparts crucial
foundational knowledge while encouraging individuals to independently explore and
develop their own financial management techniques.
        <br/><br/>
        In my humble opinion, by making finance approachable, Money, explained invites
viewers to think critically about their money habits and financial systems. The use of
appealing visuals and top-tier narrators elevates the series, turning finance from a dry
subject into an immersive learning experience. Perfect for those new to personal
finance or curious about societal money issues, the series is a quick and impactful
watch.
        </p>
        
      </div>
    </div>
  );
};

export default MoneyExplained;
