import React from "react";
import "../Resources.css";

// Import video thumbnails
import StockMarketBasics from "../Images/youtubes/stockmarketbasics.jpg";
import StockMarketWorks from "../Images/youtubes/stockmarket.jpg";
import CryptoCurrency from "../Images/youtubes/cryptocurrency.jpg";
import KhanAcademy from "../Images/youtubes/khanacademy.jpg";
import ZerodhaVarsity from "../Images/youtubes/ZerodhaVarsity.png";
import Learn2Trade from "../Images/youtubes/Learn2Trade.jpg";
import RachnaRanade from "../Images/youtubes/RachnaRanade.jpg";

// Video data array
const videos = [
  {
    id: 7,
    title: "Basics of Stock Market by Rachana Ranade",
    image: RachnaRanade,
    link: "https://youtube.com/playlist?list=PL8uhW8cclMiNv8UT1NUawB-XpXVeJ8mN8&feature=shared",
  },
  {
    id: 6,
    title: "Learn To Trade by Vivek Bajaj",
    image: Learn2Trade,
    link: "https://youtube.com/playlist?list=PLbLq81ZyYiocOcUD4XQ5FS7JOcfAL5MxF&feature=shared",
  },
  {
    id: 5,
    title: "Stock Market And Financial Education",
    image: ZerodhaVarsity,
    link: "https://zerodha.com/varsity/",
  },
  {
    id: 4,
    title: "Investing",
    image: KhanAcademy,
    link: "https://www.khanacademy.org/economics-finance-domain/core-finance/investment-vehicles-tutorial",
  },
  {
    id: 3,
    title: "Basics Of Stock Market",
    image: StockMarketBasics,
    link: "https://youtube.com/playlist?list=PL8uhW8cclMiNv8UT1NUawB-XpXVeJ8mN8&si=Ciaw9fblNEHPSF7b",
  },
  {
    id: 2,
    title: "Stock Market Works",
    image: StockMarketWorks,
    link: "https://youtu.be/p7HKvqRI_Bo?si=5mUfxdUkvOX995-c",
  },
  {
    id: 1,
    title: "Cryptocurrency",
    image: CryptoCurrency,
    link: "https://youtu.be/JZk6T1TmIrs?si=rTXUZBOx48Fd3bUC",
  },
];

const Youtube = () => {
  return (
    <div className="Youtube">
      <div className="header yt">
        <h1>Related Videos</h1>
        <p>Dive into the Best Collection of Videos and Tutorials - Learn, Explore and Level Up!</p>
      </div>

      <div className="resourcesbox">
        {videos.map((video) => (
          <div key={video.id} className="boxsmall">
            <a target="_blank" rel="noreferrer" href={video.link}>
              <div className="landscape">
                <img src={video.image} alt={video.title} loading="lazy"/>
              </div>
              <div className="text">
                <h2>{video.title}</h2>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Youtube;