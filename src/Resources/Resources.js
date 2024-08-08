import React from "react";
import {Link} from "react-router-dom";
import "./Resources.css";

import BlogsImage from './Images/blogs_img2.png';
import BooksImage from './Images/book_reviews_img.png';
import PodcastImages from './Images/podcasts.jpg';
import VideosImage from './Images/Videos.jpg';
import ShareMarketImage from './Images/sharemarket_img2.png';

const Resources = () => {

    return (
        <div className="resources">
            <div className="header">
            <h1>Resources</h1>
            <p>Access the wealth of knowledge and tools in our resource library.<br/>Having trouble here with media queries in boxsmall container on width and margin</p>
            </div>
    
            <div className="resourcesbox">

                <Link to="/resources/blogs" className="boxsmall">
                    <div className="img">
                        <img src={BlogsImage} alt="Blogs" />
                    </div>
                    <div className="text">
                        <h2>Blogs</h2>
                        <p>Blogs offer a mix of academic insights and relatable student experiences, including stories on budgeting and financial decisions.</p>
                    </div>
                </Link>
    
                <Link to="/resources/books" className="boxsmall">
                    <div className="img">
                        <img src={BooksImage} alt="Book Reviews"/>
                    </div>
                    <div className="text">
                        <h2>Book Reviews</h2>
                        <p>Book reviews on Finance and Entrepreneurship delve into the latest literary treasures unlocking the secrets to wealth creation and business success.</p>
                    </div>
                </Link>

                <Link to="/resources/videos" className="boxsmall">
                    <div className="img">
                        <img src={VideosImage} alt="Online Videos" />
                    </div>
                    <div className="text">
                        <h2>Online Videos</h2>
                        <p>Top videos and channels on finance, bringing you expert insights, investment strategies, personal finance advice all in one convenient platform.</p>
                    </div>
                </Link>

                <Link to="/resources/podcasts" className="boxsmall">
                    <div className="img">
                        <img src={PodcastImages} alt="Podcasts" />
                    </div>
                    <div className="text">
                        <h2>Podcasts</h2>
                        <p>Top podcast episodes and playlists on finance, bringing you expert insights, investment strategies, personal finance advice all in one convenient platform.</p>
                    </div>
                </Link>
    
                <Link to="/resources/share-market" className="boxsmall">
                    <div className="img">
                        <img src={ShareMarketImage} alt="Stock Market & Trading" />
                    </div>
                    <div className="text">
                        <h2>Stock Market & Trading</h2>
                        <p>Diverse collection of trading resources, encompassing day trading, forex, cryptocurrency, to equip you with tools for succeeding in trading.</p>
                    </div>
                </Link>

            </div>
        
        </div>

        
    );
};

export default Resources;