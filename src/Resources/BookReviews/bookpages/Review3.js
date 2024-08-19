import React from "react";
import './book-page.css';
import RichDadPoorDad from '../../Images/books/RichDadPoorDad.jpg';



const  Review3 = () => {
  return (
        <div>
            <div className="book-page-box">
                <div class="book-header ">
                   <div className="book-img">
                   <img src={RichDadPoorDad} alt="RichDadPoorDad"/>               
                   </div>
                   
                   <div class="book-title">
                        <h1> Rich Dad Poor Dad</h1> 
                        <p class="author">  by <i>Robert T. Kiyosaki</i></p>
                        <p>  Book review by <i>Shreya Gupta</i></p>
                    </div>
                </div>
               
            <div className="book-para">
                <p>
                    Rich Dad Poor Dad written by  Robert T. Kiyosaki is a New York
                    Times Best Seller first published in 1997. It has been one of
                    the most popular business books since then. The title of the
                    book is luring as it helps the reader to develop an interest in
                    it.
                    <br/><br/>
                    The book is a compilation of the author's childhood stories.
                    Here the author draws a comparison between his two dad's
                    financial advice. One represents his 'rich' father, while the
                    other represents his 'poor' father. His first dad was a learned
                    scholar and worked with an university as a professor, he had
                    fixed pay, job security, and education yet he led all his life
                    as a poor man while his other dad wasn't much educated and
                    didn't have a job but he managed his business well and went to
                    become one of the richest men in Hawaii. His real dad believes
                    in education as it helps in uplifting the roots of life and
                    prioritizes education over money. Poor dad says that money is
                    of no real value. He argues to the point that success doesn't
                    depend on money but depends on knowledge.
                    <br/><br/>
                    Although he respected both men, at the age of nine,
                    he decided to listen to his “rich dad” about how to
                    make money.
                    <br/><br/>
                    The book talks about financial literacy and what are the
                    key points to becoming rich. It smoothly explains assets and
                    liabilities. Whatever the middle-class people treat as assets,
                    actually they are liabilities.
                    <br/><br/>
                    <h2>      KEY TAKEAWAYS FROM THE BOOK</h2>
                    <br/>
                    <ul>
                        <li>One of the most important keys to becoming rich is financial literacy, in other words, learning how to handle money.</li>
                        <li>An important distinction is that rich people buy luxuries last, while poor and middle class tend to buy the luxuries first.”</li>
                        <li>Its often not how much money you make. It's how much money you can keep.</li>
                        <li>The poor and the middle-class work for money. Wealthy people have money that works for them.</li>
                        <li>Find something above and beyond your current reality, your wildest fantasy.</li>
                    </ul>
                    <br/>
                    This book teaches about money, mindset, challenges, tactics,
                    and balancing life. It provides a contrarian view that is
                    different from the common view. But this book does not describe
                    the practical ways of becoming rich as it is mostly for written
                    motivation not by the financial expert. But it's very useful for
                    beginners who want to explore the world of finance as it teaches
                    financial literacy.
                </p>
                        </div>


                         </div>
                         </div>
  );
};

export default Review3;
