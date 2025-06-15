import React from "react";
import "../Resources.css";

import I1 from "../Images/Stock/Stock1.jpeg";
import I2 from "../Images/Stock/Stock2.jpeg";
import I3 from "../Images/Stock/Stock3.jpeg";
import I4 from "../Images/Stock/Stock4.jpg";
import I5 from "../Images/Stock/Stock5.jpeg";
import I6 from "../Images/Stock/Stock6.jpg";

const stockResources = [
  {
    id: 6,
    title: "How to start investing?",
    image: I1,
    link: "https://fortune.com/recommends/investing/how-to-start-investing/",
  },
  {
    id: 5,
    title: "Investing for someone who is at level zero",
    image: I2,
    link: "https://www.reddit.com/r/IndiaInvestments/comments/9ltgni/for_someone_who_is_absolutely_at_level_zero_in/",
  },
  {
    id: 4,
    title: "Types Of Stocks",
    image: I3,
    link: "https://www.fool.com/investing/stock-market/types-of-stocks/",
  },
  {
    id: 3,
    title: "What are stocks?",
    image: I4,
    link: "https://www.forbes.com/advisor/investing/what-are-stocks/",
  },
  {
    id: 2,
    title: "Beginners guide to investing",
    image: I5,
    link: "https://www.reddit.com/r/IndiaInvestments/comments/k7v0dg/a_beginners_guide_to_investing_in_the_stock/",
  },
  {
    id: 1,
    title: "Stocks VS Bonds",
    image: I6,
    link: "https://www.investopedia.com/terms/s/stock.asp",
  },
];

const Stocks = () => {
  return (
    <div className="Stockspage">
      <div className="header sm">
        <h1>Stock Market and Trading</h1>
        <p>Your Gateway to Smart Trading and Market Insights!</p>
      </div>

      <div className="resourcesbox">
        {stockResources.map((stock) => (
          <div key={stock.id} className="boxsmall stock">
            <a target="_blank" rel="noreferrer" href={stock.link}>
              <div className="img">
                <img src={stock.image} alt={stock.title} loading="lazy"/>
              </div>
              <div className="text">
                <h2>{stock.title}</h2>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stocks;