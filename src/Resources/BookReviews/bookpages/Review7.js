import React from "react";
import './book-page.css';
import MoneyOrLife from '../../Images/books/MoneyOrLife.jpg';



const  Review7 = () => {
  return (
            <div className="book-page-box">
                <div class="book-header ">
                   <div className="book-img">
                   <img src={MoneyOrLife} alt="Your money or Your life "/>
                  
                  
                   </div>
                   
                   <div class="book-title">
                 <h1>Your Money or Your Life</h1> 
       <p class="author">by <i>Vicki Robin </i></p>
         
       <p>  Book review by <i>Arshdeep</i></p>
           
                </div>
                  
                <div className="blog-para">
                </div>
                <div className="blog-para">
                <p>
                    <b>STEP 1 - MAKE PEACE WITH YOUR FINANCES</b>
                    
                    <div className="blog-para">
                    The first step is to make peace with your finances and gain better clarity of your financial situation. Begin by calculating the total amount you’ve
                    accumulated throughout your lifetime. Your net worth is the money left in
                    your life today. Calculate your net worth by creating a personal balance sheet which tracks your assets and liabilities.
                    </div>

      

                    <b>STEP 2 - CALCULATE YOUR REAL HOURLY WAGE</b>
                    <div className="blog-para">
                    When you go to work you’re essentially exchanging your life energy for
                    money, in order to spend your life energy on the things you truly care about you need to calculate your real hourly wage. Start by making three columns. The first would be weekly hours, the second column is your earnings and the last column is dollars earned per hour.
                    </div>

               

                    <b>STEP 3 - CATEGORIZE YOUR MONTHLY SPENDING</b>
                    {/* <br> */}
                    <div className="blog-para">
                    Create categories and subcategories of your monthly spending to identify where you’re spending your money. For eg., if you’re spending 1600 rupees on a subscription you don’t use and your hourly rate is 400 rupees you’re wasting 4 hours of your life energy on a subscription you don’t need or use.
                    {/* <br><br> */}
                    </div>


                    <b>STEP 4 - EVALUATE THE MONEY SPENT IN YOUR SUBCATEGORIES</b>
                <div className="blog-para">
                    {/* <br> */}
                    Using a journal, take a moment to reflect on what you would do if you didn’t have to work. When you were growing up, what did you want to be? If you only had one more year to live, how would you spend your life? In each of the subcategories if the subcategory brings you fulfilment then add a plus sign. If a subcategory brings you little to no fulfilment then add a minus sign for it. If a subcategory feels neutral mark it zero.
                    
                    </div>


                      <b>STEP 5 - MAKE A WALL CHART TO TRACK YOUR PROGRESS</b>
                <div className="blog-para">
                    
                    A major part of your progress is staying on track hence to make sure you
                    stay on track you need to make it a habit rather than a choice. The most
                    important trick for making a habit stick is to track your progress. Make a wall chart: the vertical axis represents money and the horizontal axis represents time measured in months.
                    </div>
                    

                    <b>STEP 6 - CONSCIOUSLY LOWER OR ELIMINATE YOUR EXPENSES</b>
                <div className="blog-para">
                    
                    Now that you have an idea about how much you have and how much you
                    spend, try to consciously lower your expenses, since you're essentially
                    trading your life energy you should try and save your life energy to spend in more meaningful and fulfilling ways.
                    </div>


                    <b>
                        STEP 7 - VALUE YOUR LIFE ENERGY BY INCREASING YOUR INCOME
                    </b>
                <div className="blog-para">
                    
                    The seventh step is recognising whether your current job is providing you with a fair trade in exchange for your life energy. In some cases increasing your income may mean working more hours in the short term.
                    </div>


                    <b>STEP 8 - EARN INCOME FROM YOUR INVESTMENTS</b>
                <div className="blog-para">
                    
                    Your monthly income is the income that you receive from your capital. Before you start investing make sure you have enough money to cover your expenses for six months. Investing is all about consistency. When your savings equal 25 times your annual income you’ve achieved financial independence.
                    {/* <br><br> */}
                    </div>


                      <b>STEP 9 - RESEARCH AND CHOOSE YOUR INVESTMENT OPTIONS</b>
                <div className="blog-para">
                  
                    It’s crucial to know about all the available investment options to choose the best option for you. Since money gives you financial independence, investing your life energy consciously is very important.
                    </div>
                </p>


                        </div>
                        </div>
                        </div>


                         
  );
}

export default Review7;
