import React from "react";
import "../Resources.css";

import I1 from '../Images/blogs/1.jpg';
import I2 from '../Images/blogs/2.webp';
import I3 from '../Images/blogs/3.jpg';
import I4 from '../Images/blogs/4.jpg';
import I5 from '../Images/blogs/5.jpg';
import I6 from '../Images/blogs/6.jpg';
import I7 from '../Images/blogs/7.jpg';

const Blog = () => {

    const redirectToLink = (url) => {
        window.location.href = url;
    };

  return (
        <div>

            <div class="header">
                <h1>Blogs</h1>
                <p>Access the wealth of knowledge and tools in our <br/>resource library.</p>
            </div>


            <div class="resourcesbox">

            <div class="boxsmall blog" >
            {/* onClick={() => redirectToLink("https://docs.google.com/document/d/1JPCbYWxeHt82bj_XBnxiC_ILS0an8TfEgUt6rhlG-hk/edit?usp=sharing")} */}
                <a href="/resources/blogs/AI-in-finance">
                <div class="img">
                    <img src={I1} alt="Cover"/>
                </div>
                <div class="text">
                    <h2>AI in Finance</h2>
                    <a>The financial industry and AI</a>
                </div>
                </a>
            </div>

            <div class="boxsmall blog" >
            {/* onClick={() => redirectToLink("https://docs.google.com/document/d/14UnacR779oQ6MPQMj1Lw1OAdCSSSHjzmtb8LXzM5b1A/edit?usp=sharing")}> */}
                <a href="/resources/blogs/finance-and-technology">
                <div class="img">
                <img src={I2} alt="Cover"/>
                </div>
                <div class="text">
                <h2>Finance and Technology</h2>
                <a>All about fintech</a>          
            </div>
                </a>
            </div>

            <div class="boxsmall blog" onClick={() => redirectToLink("")}>
                <a href="/resources/blogs/power-of-compounding">
                <div class="img">
                <img src={I3} alt="Cover"/>
                </div>
                <div class="text">
                <h2>Power of Compounding</h2>
                </div>
                </a>
            </div>
            
            <div class="boxsmall blog" onClick={() => redirectToLink("")}>
                <a href="/resources/blogs/liquidation">
                <div class="img">
                <img src={I4} alt="Cover"/>
                </div>
                <div class="text">
                <h2>Liquidation</h2>
            </div>
                </a>
            </div>

            <div class="boxsmall blog"> 
                {/* onClick={() => redirectToLink("https://docs.google.com/document/d/1YZBWhPdx8-3grhuQFB4O48oBolRoDktjeqqlCJTduVI/edit?usp=drivesdk")}> */}
                <a href="/resources/blogs/financial-literacy">
                <div class="img">
                <img src={I5} alt="Cover"/>
                </div>
                <div class="text">
                <h2>Financial Literacy</h2>
                <a>Importance of learning finance</a>
            </div>
                </a>
            </div>

            <div class="boxsmall blog" onClick={() => redirectToLink("")}>
                <a href="/resources/blogs/bidding">
                <div class="img">
                    <img src={I6} alt="Cover"/>
                </div>
                <div class="text">
                    <h2>Bidding</h2>
                </div>
                </a>
            </div>

            {/* Repeated <div class="boxsmall blog" onClick={() => redirectToLink("")}>
                <a href="/resources/blogs">
                <div class="img">
                    <img src={I7} alt="Cover"/>
                </div>
                <div class="text">
                    <h2>Liquidation</h2>
                </div>
                </a>
            </div> */}


            </div>

        </div>
        
  );
};

export default Blog;