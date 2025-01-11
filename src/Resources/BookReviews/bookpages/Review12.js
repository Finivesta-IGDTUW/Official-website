import React from "react";
import "./book-page.css";
import IWillTeachYouToBeRich from "src/Resources/Images/books/IWillTeachYouToBeRich.png";

const Review12 = () => {
  return (
    <div className="Reviews">
      <div className="book-page-box">
        <div className="book-header ">
          <div className="book-img">
            <img src={IWillTeachYouToBeRich} alt="I Will Teach You to be Rich" />
          </div>

          <div className="book-title">
            <h1>I WILL TEACH YOU TO BE RICH</h1>
            <p className="author">
              by <i>Ramit Sethi</i>
            </p>
            <p>
              Book review by <i>Pavneet Kaur</i>{" "}
            </p>
          </div>
        </div>

        <div className="book-para">
          Ramit Sethi's I Will Teach You to Be Rich is a no-nonsense, action-oriented guide designed
          to empower readers to take control of their finances. With a unique blend of humor,
          practicality, and psychology, Sethi offers a six-week program that simplifies complex financial
          concepts into actionable steps. The book focuses on optimizing credit cards, managing bank
          accounts, investing wisely, automating finances, and developing a conscious spending plan.
          Sethi aims to make personal finance approachable and relatable, especially for college
          students and young professionals. His intention is to remove the guilt and fear often
          associated with managing money, replacing it with confidence and clarity. He seeks to prove
          that financial independence is attainable for anyone willing to take small but deliberate steps.
          <br />
          <br />
          The key messages of the book are:
          <br />
          1. Action Over Perfection: The author emphasizes that getting started is more important
          than perfecting every detail. His "85% solution" inspires readers to act now and refine
          later. <br />
          2. Automation: The book advocates for setting up automated financial systems to
          eliminate manual effort and ensure consistent saving and investing. <br />
          3. Conscious Spending: Instead of restrictive budgeting, the author teaches readers to
          spend lavishly on what they love and cut back ruthlessly on what they don’t. <br />
          4. Simplified Investing: He debunks myths about needing to be a financial expert to get
          rich, highlighting long-term strategies like index fund investing. <br />
          <br />
          <br />
          This book is an invaluable resource for beginners who feel overwhelmed by financial jargon
          or unsure where to start. By combining practical advice with a clear plan, it equips readers
          with the tools to build a solid financial foundation, grow their wealth, and align their money
          habits with their life goals. Whether you're a college graduate looking to make your first
          investment or a working professional seeking financial clarity, I Will Teach You to Be Rich is
          a transformative guide to achieving financial well-being.
        </div>
      </div>
    </div>
  );
};

export default Review12;
