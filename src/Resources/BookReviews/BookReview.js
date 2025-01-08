import React from "react";
import "../Resources.css";

import Doglapan from '../Images/books/Doglapan.jpg';
import IntellInvestor from '../Images/books/IntellInvestor.jpg';
import MillNextDoor from '../Images/books/MillNextDoor.jpg';
import PsychOfMoney from '../Images/books/PsychOfMoney.jpg';
import RichDadPoorDad from '../Images/books/RichDadPoorDad.jpg';
import RichestManInBabylon from '../Images/books/RichestManInBabylon.jpg';
import MoneyOrLife from '../Images/books/MoneyOrLife.jpg';
import ZeroToOne from '../Images/books/ZeroToOne.jpg';
import TheBigShort from '../Images/books/TheBigShort.jpg';


const BookReview = () => {
  return (
        <div className="bookreview">
            <div class="header brs">
              <h1>Book Reviews</h1>
              <p>Dive into in-depth book reviews and financial insights.</p> 
            </div>

            <div class="resourcesbox">

              <div class="boxsmall">
           
              <a href="/resources/bookreviews/bookpages/doglapan">
                  <div class="img review">
            
            
                    <img src={Doglapan} alt="Doglapan Book Cover" />
                  </div>
                  <div class="text">
                    <h2>Doglapan</h2>
                  </div>
                  </a>
              </div>

            <div class="boxsmall">
            <a href="/resources/bookreviews/bookpages/intelligentinvestor">
                <div class="img review">
                  <img src={IntellInvestor} alt="Intelligent Investor Book Cover"/>
                </div>
                <div class="text">
                  <h2>Intelligent Investor</h2>
              </div>
              </a>
            </div>

            <div class="boxsmall">
            <a href="/resources/bookreviews/bookpages/richdadpoordad">
                <div class="img review">
                  <img src={RichDadPoorDad} alt="Rich dad Poor Dad Book Cover"/>
                </div>
                <div class="text">
                  <h2> Rich Dad Poor Dad</h2>
                </div>
                </a>
              </div>
              
              <div class="boxsmall">
              <a href="/resources/bookreviews/bookpages/psychologyofmoney">
                <div class="img review">
                  <img src={PsychOfMoney} alt="Psychology Of Money Book Cover"/>
                </div>
                <div class="text">
                  <h2>The Psychology Of Money</h2>
                </div>
                </a>
              </div>

              <div class="boxsmall">
            <a href="/resources/bookreviews/bookpages/MillNextDoor">
                <div class="img review">
                  <img src={MillNextDoor} alt="Millionaire Next Door Book Cover"/>
                </div>
                <div class="text">
                  <h2>The Millionaire Next Door</h2>
                </div>
                </a>
              </div>

            <div class="boxsmall">
            {/* <Route path="/resources/bookreviews/bookpages/RichestManInBabylon" element={<Review5/>}/> */}
            <a href="/resources/bookreviews/bookpages/RichestManInBabylon">
                <div class="img review">
                  <img src={RichestManInBabylon} alt="Richest Man In Babylon Book Cover"/>
                </div>
                <div class="text">
                  <h2>The Richest Man In Babylon</h2>
                </div>
                </a>
            </div>

            <div class="boxsmall">
            <a href="/resources/bookreviews/bookpages/MoneyorLife">
                <div class="img review">
                  <img src={MoneyOrLife} alt="Money Or Life Book Cover"/>
                </div>
                <div class="text">
                  <h2>Your Money Or Your Life </h2>
                </div>
                </a>
            </div>

            <div class="boxsmall">
            <a href="/resources/bookreviews/bookpages/ZeroToOne">
                <div class="img review">
                  <img src={ZeroToOne} alt="Zero To One Book Cover"/>
                </div>
                <div class="text">
                  <h2>Zero To One </h2>
                </div>
                </a>
            </div>

            <div class="boxsmall">
            <a href="/resources/bookreviews/bookpages/TheBigShort">
                <div class="img review">
                  <img src={TheBigShort} alt="The Big Short Book Cover"/>
                </div>
                <div class="text">
                  <h2>The Big Short </h2>
                </div>
                </a>
            </div>




            </div>

        </div>
        
  );
};

export default BookReview;
