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
import RatRace from '../Images/books/from_the_ratrace.jpg';
import EpicMoney from '../Images/books/makeepic.jpg';
import IWillTeachYoutobeRich from '../Images/books/IWillTeachYouToBeRich.png';
import TheBarefootInvestor from '../Images/books/TheBarefootInvestor.png';


const BookReview = () => {
  return (
        <div className="bookreview">
            <div class="header brs">
              <h1>Book Reviews</h1>
              <p>Dive into in-depth book reviews and financial insights.</p> 
            </div>

            <div class="resourcesbox">

              <div class="boxsmall">
              <a href="/resources/bookreviews/zerotoone">
                  <div class="img review">
                    <img src={ZeroToOne} alt="Zero To One Book Cover"/>
                  </div>
                  <div class="text">
                    <h2>Zero To One </h2>
                  </div>
                  </a>
              </div>

              <div class="boxsmall">
              <a href="/resources/bookreviews/thebigshort">
                  <div class="img review">
                    <img src={TheBigShort} alt="The Big Short Book Cover"/>
                  </div>
                  <div class="text">
                    <h2>The Big Short </h2>
                  </div>
                  </a>
              </div>

              <div class="boxsmall">
              <a href="/resources/bookreviews/fromtheratrace">
                <div class="img review">
                  <img src={RatRace} alt="From the Rat Race to Financial Freedom Book Cover"/>
                </div>
                <div class="text">
                  <h2>From the Rat Race to Financial Freedom </h2>
                </div>
                </a>
              </div>

              <div class="boxsmall">
              <a href="/resources/bookreviews/epicmoney">
                <div class="img review">
                  <img src={EpicMoney} alt="Make Epic Money Book Cover"/>
                </div>
                <div class="text">
                  <h2>Make Epic Money</h2>
                </div>
                </a>
              </div>
    
              <div class="boxsmall">
              <a href="/resources/bookreviews/TheBarefootInvestor">
                  <div class="img review">
                    <img src={TheBarefootInvestor} alt="The Barefoot Investor"/>
                  </div>
                  <div class="text">
                    <h2>The Barefoot Investor </h2>
                  </div>
                  </a>
              </div>

              <div class="boxsmall">           
              <a href="/resources/bookreviews/doglapan">
                  <div class="img review">
                    <img src={Doglapan} alt="Doglapan Book Cover" />
                  </div>
                  <div class="text">
                    <h2>Doglapan</h2>
                  </div>
                  </a>
              </div>

            <div class="boxsmall">
            <a href="/resources/bookreviews/intelligentinvestor">
                <div class="img review">
                  <img src={IntellInvestor} alt="Intelligent Investor Book Cover"/>
                </div>
                <div class="text">
                  <h2>Intelligent Investor</h2>
              </div>
              </a>
            </div>

            <div class="boxsmall">
            <a href="/resources/bookreviews/richdadpoordad">
                <div class="img review">
                  <img src={RichDadPoorDad} alt="Rich dad Poor Dad Book Cover"/>
                </div>
                <div class="text">
                  <h2> Rich Dad Poor Dad</h2>
                </div>
                </a>
              </div>
              
              <div class="boxsmall">
              <a href="/resources/bookreviews/psychologyofmoney">
                <div class="img review">
                  <img src={PsychOfMoney} alt="Psychology Of Money Book Cover"/>
                </div>
                <div class="text">
                  <h2>The Psychology Of Money</h2>
                </div>
                </a>
              </div>

              <div class="boxsmall">
            <a href="/resources/bookreviews/millnextdoor">
                <div class="img review">
                  <img src={MillNextDoor} alt="Millionaire Next Door Book Cover"/>
                </div>
                <div class="text">
                  <h2>The Millionaire Next Door</h2>
                </div>
                </a>
              </div>

            <div class="boxsmall">
            <a href="/resources/bookreviews/richestmaninbabylon">
                <div class="img review">
                  <img src={RichestManInBabylon} alt="Richest Man In Babylon Book Cover"/>
                </div>
                <div class="text">
                  <h2>The Richest Man In Babylon</h2>
                </div>
                </a>
            </div>

            <div class="boxsmall">
            <a href="/resources/bookreviews/moneyorlife">
                <div class="img review">
                  <img src={MoneyOrLife} alt="Money Or Life Book Cover"/>
                </div>
                <div class="text">
                  <h2>Your Money Or Your Life </h2>
                </div>
                </a>
            </div>
    <div class="boxsmall">
              <a href="/resources/bookreviews/iwillteachyoutoberich">
                <div class="img review">
                  <img src={IWillTeachYoutobeRich} alt="I Will Teach You to be Rich"/>
                </div>
                <div class="text">
                  <h2>I Will Teach You to be Rich</h2>
                </div>
                </a>
              </div>

            </div>

        </div>
        
  );
};

export default BookReview;
