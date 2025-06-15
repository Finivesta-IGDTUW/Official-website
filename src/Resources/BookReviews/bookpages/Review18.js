import React from "react";
import { Link } from "react-router-dom";
import "./book-page.css";
import IntellInvestor from "../../Images/books/IntellInvestor.jpg";

const Review18 = () => {
  return (
    <div className="Reviews">
      <div className="book-page-box">
        <div className="book-header">
          <div className="book-img">
            <img src={IntellInvestor} alt="Intelligent Investor" />
          </div>

          <div className="book-title">
            <h1>Intelligent Investor</h1>
            <p className="author">
              by <i>Benjamin Graham</i>
            </p>
            <div className="review-switch">
              <Link
                  to="/resources/bookreviews/intelligentinvestor"
                  className="review-switch-btn"
                  style={{ textDecoration: "none" }}
              >
                  Book Review by <i>Simer Khurmi</i>
              </Link>
              <button className="review-switch-btn active" disabled>
                  Book Review by <i>Aashi</i>
              </button>
            </div>
          </div>
        </div>

        <div className="book-para">
          <p>
            The Intelligent Investor is a classic investment guide to the value investing principles.
          </p>
          <br />
          <ul>
            <li>
              <strong>Understanding Intrinsic Value:</strong> The importance of understanding the difference between the price of a stock and its intrinsic value. The price is what you pay, while the value is what you get. Investors should buy stocks whose intrinsic value is low compared to the price.
            </li>
            <li>
              <strong>Mr. Market:</strong> Graham personifies the stock market as "Mr. Market," who offers to buy or sell stocks to investors every day. He can be irrational, but investors can take advantage of his mood swings by buying when he's pessimistic and selling when he's optimistic.
            </li>
            <li>
              <strong>Safe Side Investing:</strong> The book guides investors to buy stocks with low value risk.
            </li>
            <li>
              <strong>Defensive vs. Enterprising Investing:</strong> There are two approaches to investing: defensive and enterprising. Defensive investors focus on long-term stability and income, while enterprising investors are more active and capitalize on market inefficiencies.
            </li>
            <li>
              <strong>Long-Term Perspective:</strong> The author emphasizes taking a long-term view when investing. Short-term market fluctuations should be ignored in favor of focusing on the underlying value of investments.
            </li>
            <li>
              <strong>Analyzing Financial Statements:</strong> Guidance is provided on how to analyze a company's financial statements to determine its intrinsic value.
            </li>
            <li>
              <strong>Evaluating Investment Quality:</strong> Emphasis is placed on assessing the quality of investments and determining their intrinsic value.
            </li>
            <li>
              <strong>Dividends in Investment Decisions:</strong> The role of dividends is discussed as a factor in investment decision-making.
            </li>
            <li>
              <strong>Risk Management:</strong> Graham provides strategies for managing investment risk.
            </li>
            <li>
              <strong>Timeless Framework:</strong> The book offers a timeless framework for making sound investment decisions based on fundamental principles.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Review18;
