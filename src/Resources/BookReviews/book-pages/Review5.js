import React from "react";
import './book-page.css';
import RichestManInBabylon from '../../Images/books/RichestManInBabylon.jpg';



const  Review5 = () => {
  return (
        <div>
            <div className="book-page-box">
                <div class="book-header ">
                   <div className="book-img">
                   <img src={RichestManInBabylon} alt="RichestManInBabylon"/>
                   </div>
                   
                   <div class="book-title">
                 <h1>The Richest Man in Babylon </h1> 
       <p class="author"> by George C. Clason </p>
         
       <p>  Book review by <i>Sanskriti</i></p>
           
                </div>
                </div>
               

            <div className="book-para">
                <p>
                The Richest Man In Babylon is based on the wisdom embodied by Arkad, the richest man in all of Babylon, to the citizens of Babylon. Babylon 
                wasone of the wealthiest and most prosperous nations of the earlier times whose riches were all humanmade, thus making it an outstanding 
                example of a human's ability to achieve great objectives, using whatever means available at their disposal.
                </p>
                <p>
                This book was a reliable read for me. The language of the book was based on old English, constituted of a simple narrative and gave 
                a basic, minimalistic, to the point and easily understandable concept of how to attain finances and maintain financial stability.
                </p>
                <br /><br />
                <p>
                <h2>KEY TAKEAWAYS FROM THE BOOK</h2>
                    <br/>
                    <ul>
                        <li>Save at least 10% off everything earned and invest the savings into well sought out investment opportunities.</li>
                        <li>Do not infuse necessities with desires until economically capable of acting on these temptations.</li>
                        <li>Work hard to improve skills to obtain and sustain a steady and reliable income.</li>
                        <li>Take pieces of advice from professionals and research well before taking a huge financial step.</li>
                        <li> Avoid procrastination</li>
                    </ul>
                    <br/>
                    </p>
                    <p>
                   The book elaborated on these concepts repeatedly to emphasise of their importance through the use of different scenarios and examples which seemed a little unnecessary but got the point across nevertheless.<br/>

                    In conclusion, The Richest Man In Babylon was a good book but it probably not the best idea for someone who has the basic knowledge of how to
                    manage finances.
                </p>
                        </div>


                         </div>
                         </div>
                       
  );
};

export default Review5;
