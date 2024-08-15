import React from "react";
import "../Resources.css";

import Doglapan from '../Images/books/Doglapan.jpg';
import IntellInvestor from '../Images/books/IntellInvestor.jpg';
import MillNextDoor from '../Images/books/MillNextDoor.jpg';
import PsychOfMoney from '../Images/books/PsychOfMoney.jpg';
import RichDadPoorDad from '../Images/books/RichDadPoorDad.jpg';
import RichestManInBabylon from '../Images/books/RichestManInBabylon.jpg';
import MoneyOrLife from '../Images/books/MoneyOrLife.jpg';

const BookReview = () => {
  return (
        <div className="bookreview">
            <div class="header">
              <h1>Book Reviews</h1>
              <p>Access the wealth of knowledge and tools in our <br/>resource library.</p> 
            </div>

            <div class="resourcesbox">

              <div class="boxsmall">
           
              <a href="/resources/bookreviews/book-pages/doglapan">
                  <div class="img review">
            
            
                    <img src={Doglapan} alt="Doglapan Book Cover" />
                  </div>
                  <div class="text">
                    <h2>Doglapan</h2>
                  </div>
                  </a>
              </div>

            <div class="boxsmall">
            <a href="/resources/bookreviews/book-pages/intelligentinvestor">
                <div class="img review">
                  <img src={IntellInvestor} alt="Intelligent Investor Book Cover"/>
                </div>
                <div class="text">
                  <h2>Intelligent Investor</h2>
              </div>
              </a>
            </div>

            <div class="boxsmall">
            <a href="/resources/bookreviews/book-pages/richdadpoordad">
                <div class="img review">
                  <img src={RichDadPoorDad} alt="Rich dad Poor Dad Book Cover"/>
                </div>
                <div class="text">
                  <h2> Rich Dad Poor Dad</h2>
                </div>
                </a>
              </div>
              
              <div class="boxsmall">
              <a href="/resources/bookreviews/book-pages/psychologyofmoney">
                <div class="img review">
                  <img src={PsychOfMoney} alt="Psychology Of Money Book Cover"/>
                </div>
                <div class="text">
                  <h2>The Psychology Of Money</h2>
                </div>
                </a>
              </div>

              <div class="boxsmall">
                <div class="img review">
                  <img src={MillNextDoor} alt="Millionaire Next Door Book Cover"/>
                </div>
                <div class="text">
                  <h2>The Millionaire Next Door</h2>
                </div>
              </div>

            <div class="boxsmall">
                <div class="img review">
                  <img src={RichestManInBabylon} alt="Richest Man In Babylon Book Cover"/>
                </div>
                <div class="text">
                  <h2>The Richest Man In Babylon</h2>
                </div>
            </div>

            <div class="boxsmall">
                <div class="img review">
                  <img src={MoneyOrLife} alt="Money Or Life Book Cover"/>
                </div>
                <div class="text">
                  <h2>Your Money Or Your Life </h2>
                </div>
            </div>



            </div>

        </div>
        
  );
};

export default BookReview;