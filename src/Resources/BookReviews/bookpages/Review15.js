import React from "react";
import './book-page.css';
import TheLeanStartup from '../../Images/books/lean_startup.jpeg';

const Review15 = () => {
  return (
    <div>
      <div className="book-page-box">
        <div className="book-header">
          <div className="book-img">
            <img src={TheLeanStartup} alt="The Lean Startup Cover" />
          </div>
          
          <div className="book-title">
            <h1>The Lean Startup</h1>
            <p className="author">by <i>Eric Ries</i></p>
            <p>Book review by <i>Nandinee</i></p>
          </div>
        </div>
        
        <div className="book-para">
        <h2>Overview:</h2><br/>
          <p>
            Eric Ries’ <i>The Lean Startup</i> is a guide for anyone dreaming of building a business. Instead of
            overwhelming with theory, it focuses on practical strategies to navigate the unpredictable
            and long journey of entrepreneurship. Ries shares a simple but powerful approach: start
            small, test your ideas quickly, and adapt based on real customer feedback.
          </p><br/>
          
          <p>
            The central idea of the book revolves around creating a "Minimum Viable Product" (MVP) – 
            a simple version of your product that focuses on its core features rather than trying to make 
            it ‘perfect’. By launching an MVP, startups can gather real customer feedback early in the 
            process, saving time and resources. This isn’t just about building products; it’s about creating 
            a system where learning and experimentation drive growth.
          </p><br/>
          
          <p>
            Ries also emphasizes the importance of tracking meaningful metrics. It’s easy to get lost in 
            numbers like social media followers or app downloads, but these "vanity metrics" don’t 
            always translate to success. Instead, entrepreneurs should focus on validated 
            learning—gaining insights from real-world results to guide decisions.
          </p><br/>
        
          <p>
            The book is packed with relatable examples, like how Dropbox used its MVP to test customer 
            interest before even building the full product. These stories make the concepts easy to 
            understand and apply, no matter the industry or scale of your idea.
          </p><br/>
          
          <p>
            The Lean Startup is a practical guide to navigating the uncertainties of business. It teaches 
            you to work smarter, embrace failure as part of the process, and focus on what truly matters: 
            creating value for your customers.
          </p>
          <br /><br />
          <h2>5 Key Lessons from The Lean Startup:</h2><br/>
          <ol>
            <li>
              <p>
                Start Small with an MVP: Launch a basic version of your product to test your core 
                idea and gather feedback.
              </p>
            </li>
            <br />
            <li>
              <p>
                Learn from Customers: Real insights come from observing and listening to how 
                customers use your product.
              </p>
            </li>
            <br />
            <li>
              <p>
                Build-Measure-Learn Cycle: Keep experimenting. Build a prototype, measure its 
                impact, and learn from the results to improve.
              </p>
            </li>
            <br />
            <li>
              <p>
                Pivot or Persevere: Use data to decide whether to refine your idea or change 
                direction entirely.
              </p>
            </li>
            <br />
            <li>
              <p>
                Focus on What Matters: Avoid vanity metrics. Track meaningful progress that 
                drives growth and learning.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Review15;
