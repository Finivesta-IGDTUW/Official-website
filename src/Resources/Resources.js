import React from "react";
import { Link } from "react-router-dom";
import "./Resources.css";

import BlogsImage from "./Images/blogs_img2.png";
import BooksImage from "./Images/book_reviews_img.png";
import PodcastImages from "./Images/podcasts.jpg";
import VideosImage from "./Images/Videos.jpg";
import ShareMarketImage from "./Images/sharemarket_img2.png";
import TradingAppImage from "./Images/tradingapps.png";
import MoneyMasterclassImage from "./Images/moneymasterclass/MoneyMasterclass.png";

const Resources = () => {
  return (
    <div className="resources">
      <div className="header">
        <h1>Resources</h1>
        <p>Access the wealth of knowledge and tools in our resource library.</p>
      </div>

      <div className="resourcesbox">
        <Link to="/resources/moneymasterclass/" className="boxsmall">
          <div className="img">
            <img src={MoneyMasterclassImage} alt="Money Masterclass" />
          </div>
          <div className="text">
            <h2>Money Masterclass</h2>
            <p>
              Unlocking essential financial knowledge and skills, one session at
              a time, to help you master personal finance – an initiative by
              Finivesta
            </p>
          </div>
        </Link>

        <Link to="/resources/blogs" className="boxsmall">
          <div className="img">
            <img src={BlogsImage} alt="Blogs" />
          </div>
          <div className="text">
            <h2>Blogs</h2>
            <p>
              Blogs offer a mix of academic insights and relatable student
              experiences, including stories on budgeting and financial
              decisions.
            </p>
          </div>
        </Link>

        <Link to="/resources/bookreviews" className="boxsmall">
          <div className="img">
            <img src={BooksImage} alt="Book Reviews" />
          </div>
          <div className="text">
            <h2>Book Reviews</h2>
            <p>
              Book reviews on Finance and Entrepreneurship delve into the latest
              literary treasures unlocking the secrets to wealth creation and
              business success.
            </p>
          </div>
        </Link>

        <Link to="/resources/videos" className="boxsmall">
          <div className="img">
            <img src={VideosImage} alt="Online Videos" />
          </div>
          <div className="text">
            <h2>Online Videos</h2>
            <p>
              Top videos and channels on finance, bringing you expert insights,
              investment strategies, personal finance advice all in one
              convenient platform.
            </p>
          </div>
        </Link>

        <Link to="/resources/podcasts" className="boxsmall">
          <div className="img">
            <img src={PodcastImages} alt="Podcasts" />
          </div>
          <div className="text">
            <h2>Podcasts</h2>
            <p>
              Top podcast episodes and playlists on finance, bringing you expert
              insights, investment strategies, personal finance advice all in
              one convenient platform.
            </p>
          </div>
        </Link>

        <Link to="/resources/stocks" className="boxsmall">
          <div className="img">
            <img src={ShareMarketImage} alt="Stock Market & Trading" />
          </div>
          <div className="text">
            <h2>Stock Market & Trading</h2>
            <p>
              Diverse collection of trading resources, encompassing day trading,
              forex, cryptocurrency, to equip you with tools for succeeding in
              trading.
            </p>
          </div>
        </Link>

        <Link to="/resources/trading" className="boxsmall">
          <div className="img">
            <img src={TradingAppImage} alt="Trading Applications" />
          </div>
          <div className="text">
            <h2>Trading Applications and Websites</h2>
            <p>
              Explore cutting-edge tools and platforms designed to enhance your
              trading experience, from real-time market data to advanced
              charting features and automated trading systems.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Resources;
