import React from "react";
import "./Resources.css";

import BlogsImage from './Images/blogs_img2.png';
import BooksImage from './Images/book_reviews_img.png';
import YoutubeImage from './Images/yt_img2.png';
import ShareMarketImage from './Images/sharemarket_img2.png';

const Resources = () => {
    return (
        <div>
            <div class="header">
                <h1>Resources</h1>
                <p>Access the wealth of knowledge and tools in our <br/>resource library.</p>

            </div>
        
        
            <div class="box">
            
                <div class="box1">
                    
                    <div class="img">
                        <img src={BlogsImage} alt="Blogs"/>
                    </div>
                    <div class="text">
                        <h2>Blogs</h2>
                        <p> Blogs offer a mix of academic insights and relatable student experiences, including stories<br/> on budgeting and financial decisions.</p>
                    </div>
                </div>
            
                <div class="box2">
                    
                    <div class="img">
                        <img src={BooksImage} alt="Blogs"/>
                    </div>
                    <div class="text">
                        <h2>Book Reviews</h2>
                        <p> Book reviews on Finance and Entrepreneurship delve into the latest literary treasures unlocking<br/>the secrets to wealth creation and business success.</p>
                    </div>
                </div>
            </div>
            
            <div class="container">
                
                <div class="box3">
                <div class="img">
                    <img src={YoutubeImage} alt="Blogs"/>
                </div>
                <div class="text">
                    <h2>Youtube Channels</h2>
                    <p>Top youtube channels on finance, Bringing you expert insights, Investment strategies, Personal finance advice all in one convienient platform.</p>
                </div>
            
                </div>
            
                <div class="box4">
                <div class="img">
                    <img src={ShareMarketImage} alt="Blogs"/>
                </div>
                <div class="text">
                    <h2>Stock Market & Trading</h2>
                    <p>Diverse collection of trading resources, Encompassing day trading, forex, cryptocurrency, to equip you with tools for succeeding in trading.</p>
                </div>
            
                </div>
            </div>
        </div>
        
    );
};

export default Resources;