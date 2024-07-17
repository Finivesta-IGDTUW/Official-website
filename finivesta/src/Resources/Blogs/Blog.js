import React from "react";
import "../Resources.css";

import BlogsImage from '../Images/blogs_img2.png';

const Blog = () => {
  return (
        <div>

            <div class="resources">
            <h1>Blogs</h1>
            <p>Access the wealth of knowledge and tools in our <br/>resource library.</p>
            </div>


            <div class="resourcesbox">

            <div class="boxsmall">
            
                <div class="img">
                <img src={BlogsImage} />
                </div>
                <div class="text">
                <h2>AI in Finance</h2>
                <a href="https://docs.google.com/document/d/1JPCbYWxeHt82bj_XBnxiC_ILS0an8TfEgUt6rhlG-hk/edit?usp=sharing">The financial industry and AI</a>
                
                </div>
            </div>

            <div class="boxsmall">
            
                <div class="img">
                <img src={BlogsImage}/>
                </div>
                <div class="text">
                <h2>Finance and Technology</h2>
                <a href="https://docs.google.com/document/d/14UnacR779oQ6MPQMj1Lw1OAdCSSSHjzmtb8LXzM5b1A/edit?usp=sharing">All about fintech</a>
                
            </div>
            </div>
            <div class="boxsmall">
            
                <div class="img">
                <img src={BlogsImage}/>
                </div>
                <div class="text">
                <h2>Power of Compounding</h2>
                
                </div>
            </div>
            
            <div class="boxsmall">
                <div class="img">
                <img src={BlogsImage}/>
                </div>
                <div class="text">
                <h2>Liquidation</h2>
                
            </div>

            </div>

            <div class="boxsmall">
                <div class="img">
                <img src={BlogsImage}/>
                </div>
                <div class="text">
                <h2>Financial Literacy</h2>
                <a href="https://docs.google.com/document/d/1YZBWhPdx8-3grhuQFB4O48oBolRoDktjeqqlCJTduVI/edit?usp=drivesdk">Importance of learning finance</a>
                
            </div>

            </div>

            <div class="boxsmall">
                <div class="img">
                <img src={BlogsImage}/>
                </div>
                <div class="text">
                <h2>Bidding</h2>
                
            </div>

            </div>
            </div>

        </div>
        
  );
};

export default Blog;