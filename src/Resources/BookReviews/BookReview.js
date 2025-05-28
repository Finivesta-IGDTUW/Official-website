import React from "react";
import "../Resources.css";

import Doglapan from "../Images/books/Doglapan.jpg";
import IntellInvestor from "../Images/books/IntellInvestor.jpg";
import MillNextDoor from "../Images/books/MillNextDoor.jpg";
import PsychOfMoney from "../Images/books/PsychOfMoney.jpg";
import RichDadPoorDad from "../Images/books/RichDadPoorDad.jpg";
import RichestManInBabylon from "../Images/books/RichestManInBabylon.jpg";
import MoneyOrLife from "../Images/books/MoneyOrLife.jpg";
import ZeroToOne from "../Images/books/ZeroToOne.jpg";
import TheBigShort from "../Images/books/TheBigShort.jpg";
import RatRace from "../Images/books/from_the_ratrace.jpg";
import EpicMoney from "../Images/books/makeepic.jpg";
import IWillTeachYoutobeRich from "../Images/books/IWillTeachYouToBeRich.png";
import TheBarefootInvestor from "../Images/books/TheBarefootInvestor.png";
import TheSimplestPathToWealth from "../Images/books/thesimplestpathtowealth.jpg";
import TheLeanStartup from "../Images/books/lean_startup.jpeg";
import MoneyWorks from "../Images/books/MoneyWorks.jpg";
import AlchemyofFinance from "../Images/books/AlchemyofFinance.jpg";
import letstalkmoney from "../Images/books/letstalkmoney.jpg";
import thePersonalMBA from "../Images/books/thePersonalMBA.jpg";
import ThinkAndGrowRich from "../Images/books/ThinkAndGrowRich.jpg";

const books = [
  {
    id: 22,
    title: "Think and Grow Rich",
    image: ThinkAndGrowRich,
    link: "/resources/bookreviews/thinkandgrowrich",
  },
  {
    id: 21,
    title: "The Personal MBA",
    image: thePersonalMBA,
    link: "/resources/bookreviews/thePersonalMBA",
  },
  {
    id: 20,
    title: "The Alchemy of Finance",
    image: AlchemyofFinance,
    link: "/resources/bookreviews/alchemyfinance",
  },
  {
    id: 19,
    title: "Let's Talk Money",
    image: letstalkmoney,
    link: "/resources/bookreviews/letstalkmoney",
  },
  {
    id: 18,
    title: "Intelligent Investor",
    image: IntellInvestor,
    link: "/resources/bookreviews/intellinvestor",
  },
  {
    id: 17,
    title: "The Millionaire Next Door",
    image: MillNextDoor,
    link: "/resources/bookreviews/themillnextdoor",
  },
  {
    id: 16,
    title: "Money Works",
    image: MoneyWorks,
    link: "/resources/bookreviews/moneyworks",
  },
  {
    id: 15,
    title: "The Lean Startup",
    image: TheLeanStartup,
    link: "/resources/bookreviews/theleanstartup",
  },
  {
    id: 14,
    title: "The Simplest Path to Wealth",
    image: TheSimplestPathToWealth,
    link: "/resources/bookreviews/thesimplestpathtowealth",
  },
  {
    id: 13,
    title: "Zero To One",
    image: ZeroToOne,
    link: "/resources/bookreviews/zerotoone",
  },
  {
    id: 12,
    title: "The Big Short",
    image: TheBigShort,
    link: "/resources/bookreviews/thebigshort",
  },
  {
    id: 11,
    title: "From the Rat Race to Financial Freedom",
    image: RatRace,
    link: "/resources/bookreviews/fromtheratrace",
  },
  {
    id: 10,
    title: "Make Epic Money",
    image: EpicMoney,
    link: "/resources/bookreviews/epicmoney",
  },
  {
    id: 9,
    title: "The Barefoot Investor",
    image: TheBarefootInvestor,
    link: "/resources/bookreviews/TheBarefootInvestor",
  },
  {
    id: 8,
    title: "Doglapan",
    image: Doglapan,
    link: "/resources/bookreviews/doglapan",
  },
  /*
  {
    id: 7,
    title: "Intelligent Investor",
    image: IntellInvestor,
    link: "/resources/bookreviews/intelligentinvestor",
  },
  */
  {
    id: 6,
    title: "Rich Dad Poor Dad",
    image: RichDadPoorDad,
    link: "/resources/bookreviews/richdadpoordad",
  },
  {
    id: 5,
    title: "The Psychology Of Money",
    image: PsychOfMoney,
    link: "/resources/bookreviews/psychologyofmoney",
  },
  /*
  {
    id: 4,
    title: "The Millionaire Next Door",
    image: MillNextDoor,
    link: "/resources/bookreviews/millnextdoor",
  },
  */
  {
    id: 3,
    title: "The Richest Man In Babylon",
    image: RichestManInBabylon,
    link: "/resources/bookreviews/richestmaninbabylon",
  },
  {
    id: 2,
    title: "Your Money Or Your Life",
    image: MoneyOrLife,
    link: "/resources/bookreviews/moneyorlife",
  },
  {
    id: 1,
    title: "I Will Teach You to be Rich",
    image: IWillTeachYoutobeRich,
    link: "/resources/bookreviews/iwillteachyoutoberich",
  },
];

const BookReview = () => {
  return (
    <div className="bookreview">
      <div className="header brs">
        <h1>Book Reviews</h1>
        <p>Unlock Powerful Financial Insights and Must-Read Book Reviews!</p>
      </div>

      <div className="resourcesbox">
        {books.map((book) => (
          <div key={book.id} className="boxsmall">
            <a href={book.link}>
              <div className="img review">
                <img
                  src={book.image}
                  alt={`${book.title} Book Cover`}
                  loading="lazy"
                />
              </div>
              <div className="text">
                <h2>{book.title}</h2>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookReview;
