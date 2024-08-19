import React from "react";
import './book-page.css';
import PsychOfMoney from '../../Images/books/PsychOfMoney.jpg';



const  Review4 = () => {
  return (
        <div>
            <div className="book-page-box">
                <div class="book-header ">
                   <div className="book-img">
                   <img src={PsychOfMoney} alt="PsychOfMoney"/>                                  
                   </div>
                   
                   <div class="book-title">
                      <h1>The Psychology of Money</h1> 
                      <p class="author">by <i>Morgan Housel</i></p>
                      <p>Book review by <i>Saloni</i> and <i>Sakshi Singh</i></p>
                   </div>
                </div>
               


            <div className="book-para">
              <p>
                The Psychology of Money is one of the best books that
                teach important lessons in financial management. Housel
                explains how finance is taught in terms of basic
                formulas. Based on this, we take decisions and actions
                to manage your finances. "Money's greatest intrinsic
                value, not to be overemphasized, is its ability to
                control time." But in real life, people make financial
                decisions based on their emotions and intuition. People
                don't make decisions on spreadsheets. People make
                decisions sitting at the dining table over dinner in a
                conference room where egos, pride, and ideas about the
                world all mix.
                <br/><br/>
                The book offers a better perspective on how to really
                perceive money and its value. The book begins with a
                simple anecdote. Making money and managing money are
                two different premises. You can become an expert in your
                field and earn a large and decent salary, but that
                doesn't necessarily mean that you have to be good at
                staying wealthy in the long run. You need to manage
                your own finances and the expenses that determine your
                net worth. People often use the money to show their
                status and pride in society. However, people can easily
                fall into debt traps and loans, often leaving little
                savings for emergencies and independent living.
                <br/><br/>
                Housel also dives into the consequences of our
                decisions. He looks at how debt, investments, and other
                financial moves can have serious implications in the
                long term, and how our choices often don’t align with
                our long-term goals. He looks at how our financial
                decisions can have wide-reaching consequences, including
                on our relationships, our careers, and even our own
                mental health. The Psychology of Money is an enjoyable
                read that provides a deep understanding of the
                psychology behind money and financial decisions. It’s
                full of interesting anecdotes and data-driven insights
                that help readers better understand the psychology of
                money and their own financial decision-making.
                <br/><br/>
                Housel is an excellent guide, providing a thoughtful
                and informative commentary on the psychology of money
                and how it affects our lives. He provides a compelling
                and thought-provoking look at the subject, and his
                insights are sure to leave readers with plenty to think
                about. The book is a must-read for anyone looking to
                improve their financial decision-making and gain a
                deeper understanding of the psychology of money.

                    </p>
             </div>
           </div>
        </div>      
  );
};

export default Review4;
