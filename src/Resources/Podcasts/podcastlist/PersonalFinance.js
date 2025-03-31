import React from 'react';
import personalfinanceimg from '../../Images/podcasts/personalfinanceimg.png';
import '../../BookReviews/bookpages/book-page.css';

const PersonalFinance = () => {
  return (
    <div className="book-page-box">
      <div className="book-header">
        <a href="https://open.spotify.com/show/1zVBTDKimC3UoOQy59KDrR" target="_blank" rel="noopener noreferrer">
          <img 
            src={personalfinanceimg} 
            alt="The personal finance" 
          />
        </a>
        
        <div className="book-title">
          <h1>The Personal Finance</h1>
          <p>-by Andrew Giancola</p>
          <p className="author">Rating: ★★★★☆ (4.5/5)</p>
          <p>Podcast review by <i>Srishti</i></p>
        </div>
      </div>
      
      <div className="book-para">
        <p>
        Andrew Giancola's personal finance podcast is all about helping you manage your money
        better. He shares practical tips, interviews experts, and covers a wide range of topics like
        budgeting, investing, and more. His engaging style and real-life examples make complex
        financial concepts easy to understand.
        <br/><br/>
        Andrew emphasizes the importance of tracking your income and expenses to gain a clear
understanding of where your money is going. He also suggests having an emergency fund that
covers at least three to six months' worth of living expenses. This safety net is crucial for
handling unexpected events.
        <br/><br/>
        Investing early is another key point Andrew makes, highlighting the benefits of compound
interest. The sooner you start investing, the more time your money has to grow. In addition to
practical advice, Andrew encourages listeners to educate themselves about personal finance.
He recommends exploring books, podcasts, and other resources to enhance your financial
literacy.
        <br/><br/>
        His show is filled with actionable tips that you can apply to your finances immediately. Andrew
often features guest interviews with finance experts, providing valuable insights and diverse
perspectives on various topics.
        <br/><br/>
        His engaging style makes complex financial subjects easy to understand and relatable. With a
wide range of topics covered, from budgeting to investing, there's something for everyone.
Andrew uses real-life examples to illustrate his points, making the content more relatable and
applicable to everyday life.
        <br/><br/>
        One really cool tip he shared is "paying yourself first." It just means that when you get your
paycheck, you should save some money right away before spending on anything else. Think of it
like a must-do expense. This way, you can grow your savings without even having to think
about it.
        <br/><br/>
        In conclusion, Andrew's approach to personal finance combines practical advice, expert insights
        and relatable examples, making it easier for anyone to take control of their financial future.
        </p>
      </div>
    </div>
  );
};

export default PersonalFinance;
