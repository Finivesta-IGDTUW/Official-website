import React from "react";
import './book-page.css';
import MillNextDoor from '../../Images/books/MillNextDoor.jpg';



const  Review6 = () => {
  return (
        <div>
            <div className="book-page-box">
                <div class="book-header ">
                   <div className="book-img">
                   <img src={MillNextDoor} alt="MillionaireNextDoor"/>               
                   </div>
                   
                   <div class="book-title">
                 <h1>Millionaire Next Door</h1> 
       <p class="author"> by <i>Thomas J Stanley and William Danko</i> </p>
         
       <p>  Book review by <i>Mansi</i></p>
           
                </div>
                </div>
               
            <div className="book-para">
                <p>
               {/* <h2>REVIEW</h2> */}
           
                    <ul>
                    <p>
                        <li>Written by Thomas J Stanley and William Danko, THE MILLIONAIRE NEXT DOOR is your go-to book for understanding the world of the rich and their psychology.</li>
                        </p>
                        
                        <p>
                        <li>The book sheds light on how wealth accumulation is often a result of hard work, perseverance, budgeting and prioritising needs and ignoring wants. The millionaire status is more symbolic of your saving skills and practical thinking than your inheritance, educational qualifications or intelligence.</li>
                        </p>
                        <p>
                        <li>The book offers a cornucopia of case-specific examples. Thus, one must understand them thoroughly to fully grasp the points the author is trying to put across to the readers.</li>
                        </p>

                        <p>
                        <li>This book was first published in 1996 so the statistics in the book are not up to date. Also, the book refers to the economic situation back then. But it is still relevant in today’s world and economy when the attraction towards materialistic things is inevitable and keeping up with societal standards is a self-loathing habit for the majority of the population.  </li>
                        </p>

                        <p>
                        <li>The book tells us that one of the main reasons millionaires are successful is because they think differently. It encourages one to believe that anyone with the right mindset can become financially stable and successful by avoiding spending money to please society and investing money where there is control and certainty. Thus, becoming the millionaire next door is merely a mind game.</li>
                        </p>

                        <p>
                        <li>The author tries to profile a typical millionaire by finding their common habits, traits and thought processes. It analyses how a millionaire lives, to help people understand the game of money and life and to make reliable and correct financial decisions.</li>
                        </p>

                        <p>
                        <li>Some of the statistics given in the book are so astounding that it makes one question their perception of wealth and luxury. This helps us understand that all the glamour shown on television is not what the majority of the richest people relate to. It helps us look beyond the mirage of luxury and take a more practical approach towards wealth accumulation and savings.</li>
                        </p>
                        </ul>
                        <br /><br />
                    <h2>KEY TAKEAWAYS FROM THE BOOK</h2>
                    <br /><br />
                    <ul>
                        <li>Wealth is not merely defined by the abundance of one’s material possessions. Higher-income does not correlate to more wealth. A person with lower income but frugal habits may be more wealthy than a person with more income but more sports cars and luxury fashion items in possession. To determine whether a person is wealthy or not one must take into account their net worth. Net worth further depends on income and age. The wealth of a person is symbolic of how long the person would be able to survive without being employed or without economic outpatient care.</li>
                        <li>Most people who become millionaires are confident in their abilities. They do not spend time worrying about whether their parents or relatives are wealthy. People of humble backgrounds who believe only the wealthy produce millionaires are predetermined to remain non-affluent. About 3/4th of the millionaires have nothing to do with their family worth or inheritance and are first-generation millionaires. This was true in the 19th and 20th centuries and will remain true in future economies and markets.</li>
                        <li>Finding your niche and being able to identify market opportunities in the current economy is a sure-shot success mantra. Simply being good at what you do leads to a manifold increase in efficiency.</li>
                        <li>To build wealth minimise your taxable income and maximise your unrealised income. A majority of the PAWs (Prodigious accumulators of wealth) have a habit of investing their wealth rather than spending it. Moreover, these people prefer private investments over public ones as they tend to be more reliable.</li>
                        <li>Financially independent people are happier than those in their same income and age cohort who are not financially secure. Generally, people who believe in spending money on instant gratifications, over those who spend that money gaining the counsel of lawyers, CAs, and accounting services tend to remain stressed and unhappy.</li>
                    </ul>
                    
                </p>
    </div>
    </div>
    </div>
  );
};

export default Review6;
