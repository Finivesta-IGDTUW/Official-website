import React from "react";
import "../Resources.css";

import I1 from '../Images/blogs/1.jpg';
import I2 from '../Images/blogs/2.webp';
import I3 from '../Images/blogs/3.jpg';
import I4 from '../Images/blogs/4.jpg';
import I5 from '../Images/blogs/5.jpg';
import I6 from '../Images/blogs/6.jpg';
import I7 from '../Images/blogs/gold.jpeg';
const Blog = () => {
    return ( 
        <div className="blogpage">
            <div className="header blogs">
                <h1>Blogs</h1>
                <p>Explore insightful finance related articles and stories.</p>
            </div>
            
            <div className="resourcesbox">

            <div className="boxsmall blog" >
                    <a href="/resources/blogs/digitalgold">
                    <div className="img">
                         <img src={I7} alt="Cover"/>
                    </div>
                    <div className="text">
                       <h2>Digital Gold</h2>   
                       <p className="blog-byline-card">Explore how digital gold works </p>       
                    </div>
                    </a>
                </div>
                <div className="boxsmall blog" >


                    <a href="/resources/blogs/AI-in-finance">
                    <div className="img">
                        <img src={I1} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>AI in Finance</h2>
                        <p className="blog-byline-card"> World of artificial intelligence overlaps with that of finance</p>
                    </div>
                    </a>
                </div>

                <div className="boxsmall blog" >
                    <a href="/resources/blogs/finance-and-technology">
                    <div className="img">
                         <img src={I2} alt="Cover"/>
                    </div>
                    <div className="text">
                       <h2>Finance and Technology</h2>   
                       <p className="blog-byline-card">Bridging Finance and Innovation</p>       
                    </div>
                    </a>
                </div>

                <div className="boxsmall blog">
                    <a href="/resources/blogs/power-of-compounding">
                    <div className="img">
                      <img src={I3} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>Power of Compounding</h2>
                        <p className="blog-byline-card" >Wealth unlocks through Compounding Magic </p>
                    </div>
                    </a>
                </div>
            
                <div className="boxsmall blog">
                    <a href="/resources/blogs/liquidation">
                    <div className="img">
                        <img src={I4} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>Liquidation</h2>
                        <p className="blog-byline-card">Turning assets into Financial Opportunities </p>
                    </div>
                    </a>
                </div>

                <div className="boxsmall blog"> 
                    <a href="/resources/blogs/financial-literacy">
                    <div className="img">
                        <img src={I5} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>Financial Literacy</h2>
                        <p className="blog-byline-card"> Empowering Education and Mastering Finance </p>
                    </div>
                    </a>
                </div>

                <div className="boxsmall blog">
                    <a href="/resources/blogs/bidding">
                    <div className="img">
                        <img src={I6} alt="Cover"/>
                    </div>
                    <div className="text">
                        <h2>Bidding</h2>
                        <p className="blog-byline-card">Strategic Bidding: Key to Success </p>
                    </div>
                    </a>
                </div>
            </div>
        </div>         
    );
  };

export default Blog;
