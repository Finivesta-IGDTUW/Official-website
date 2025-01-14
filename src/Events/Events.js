import React from "react";
import "./Events.css";
import Unveiling_IPO from "./Images/Unveiling_IPO.jpg";
import MoneyMasterclass from "./Images/MoneyMasterclasscopy.png";
import BiddingBlitz from "./Images/BiddingBlitz.png";
import CollegeTrading from "./Images/CollegeTrading.png";
import Finlatics from "./Images/Finlatics.png";
import KharchePeCharche from "./Images/KharchePeCharche.png";
import Melange from "./Images/Melange.png";
import Orientation from "./Images/Orientation.png";
import Speaker from "./Images/Speaker.png";

const Events = () => {
  return (
    <div className="Events">
      <div className="events-header">
        <h1>Our Events</h1>
        <p>
          Discover the latest happenings and <br />
          exciting upcoming events here
        </p>
      </div>
      <h1 className="Year">2025</h1>

      <div className="Images">
        <div className="flex1">
          <div className="element">
            <div className="element3">
              {/* Unveiling IPOs */}
              <a
                href="https://www.canva.com/design/DAGbu4uhDfU/AVRFjLBax5A2e-bE1gvttw/view?utm_content=DAGbu4uhDfU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb1e6d44f9b"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Unveiling_IPO} alt="speaker" />
              </a>
            </div>
            <h2 className="title">Unveiling IPOs</h2>
          </div>
        </div>
      </div>
      <hr className="green-line" />
      <div>
        <h1 className="Year">2024</h1>

        <div className="Images">
          <div className="flex1">
            <div className="element">
              <div className="element5">
                {/* Money Masterclass: Payroll System */}
                <a //sample link
                  href="/resources/moneymasterclass" 
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={MoneyMasterclass} alt="speaker" />
                </a>
              </div>

              <h2 className="title">Money Masterclass</h2>
            </div>

            <div className="element">
              <div className="element3">
                {/*  Finlatics*/}
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7160561756463853568/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Finlatics} alt="Finlatics" />
                </a>
              </div>

              <h2 className="title">Finlatics</h2>
            </div>
          </div>

          <div className="flex1">
            <div className="element">
              <div className="element2">
                {/* Money Melange */}
                <a
                  href="https://www.instagram.com/p/C2CkzBTStUb/?igsh=MW5lNmZ6NmRxZTdqMA=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Melange} alt="Money Melange" />
                </a>
              </div>

              <h2 className="title">Money Melange</h2>
            </div>

            <div className="element">
              <div className="element1">
                {/* Kharche pe Charcha */}
                <a
                  href="https://www.instagram.com/p/C2AVhH4SE0P/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={KharchePeCharche} alt="kharche pr charcha" />
                </a>
              </div>

              <h2 className="title">Kharche Pe Charcha</h2>
            </div>
          </div>
        </div>
        <hr className="green-line" />
      </div>

      <div>
        <h1 className="Year">2023</h1>

        <div className="Images">
          <div className="flex1">
            <div className="element">
              <div className="element1">
                {/* bidding bitz */}
                <a
                  href="https://www.instagram.com/p/CzqYKwRLp24/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={BiddingBlitz} alt="speaker" />
                </a>
              </div>

              <h2 className="title">Bidding Blitz</h2>
            </div>

            <div className="element">
              <div className="element2">
                {/* speaker */}
                <a
                  href="https://www.instagram.com/p/CzbC7cLPrex/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Speaker} alt="speaker" />
                </a>
              </div>

              <h2 className="title">Guide To Stock Market</h2>
            </div>
          </div>

          <div className="flex1">
            <div className="element">
              <div className="element3">
                {/*  college trader showdown*/}
                <a
                  href="https://www.instagram.com/p/CxXRs1Pywdn/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={CollegeTrading} alt="speaker" />
                </a>
              </div>

              <h2 className="title">College Trader Showdown</h2>
            </div>

            <div className="element">
              <div className="element4">
                {/*  orientation*/}
                <a
                  href="https://www.instagram.com/p/CxAA9weLEea/?img_index=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Orientation} alt="speaker" />
                </a>
              </div>

              <h2 className="title">Orientation</h2>
            </div>
          </div>
        </div>
        {/* < hr className='green-line' /> */}
      </div>
    </div>
  );
};

export default Events;
