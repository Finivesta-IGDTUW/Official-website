import React from "react";
import "./Home.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Unveiling_IPOs from "../Events/Images/Unveiling_IPO.jpg";
import MoneyMasterclass from "../Events/Images/MoneyMasterclasscopy.png";
import BiddingBlitz from "../Events/Images/BiddingBlitz.png";
import CollegeTrading from "../Events/Images/CollegeTrading.png";
import Finlatics from "../Events/Images/Finlatics.png";
import KharchePeCharche from "../Events/Images/KharchePeCharche.png";
import Melange from "../Events/Images/Melange.png";
import Orientation from "../Events/Images/Orientation.png";
import Speaker from "../Events/Images/Speaker.png";
import F1 from "./Images/F1.jpg";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="Home">
      {/* Akhriti's code */}
      <section className="hero">
        <div className="content">
          <h1>
            <span>FINANCE</span> AND <span>ECONOMICS</span> SOCIETY
          </h1>
          <p>
            Creating a vibrant women community of finance and economics
            enthusiasts
          </p>
          <div className="button-container">
            <button
              className="button1"
              data-inline="true"
              onClick={() =>
                (window.location.href = "https://www.igdtuw.ac.in/")
              }
            >
              IGDTUW
            </button>
            <button
              className="button2"
              data-inline="true"
              onClick={() =>
                (window.location.href =
                  "https://www.instagram.com/finivesta_igdtuw/")
              }
            >
              View More
            </button>
          </div>
        </div>
      </section>

      {/* Jhalak's code */}
      <section className="course">
        <h2 className="subtitle">About Us</h2>
        <div className="rows">
          <div className="col-2">
            <p className="abc">
              Finivesta, the Finance and Economics society of IGDTUW, is a
              women-led organization that provides students with various
              opportunities that helps them to enhance their financial
              knowledge, gain practical insights through workshops, seminars,
              events and competitions with the aim of encapsulating financial
              principles, patience, risk management in bright young minds.We
              strive for excellence in every financial domain and connect
              students to various shareholders of the same and nurture young
              minds with the values of passion and self investment.
            </p>
          </div>
          <div className="col-1">
            <img src={F1} alt="F1" />
          </div>
        </div>
        <div className="list">
          <div className="mvo-box">
            <h1>MISSION</h1>
            <p>
              Our Mission is to cultivate a dynamic and inclusive community of
              women passionate about finance. Our aim is to help the women
              understand the world of finance and thereby demonstrate superior
              knowledge and to spread awareness towards the area of finance.
              Through educational events, networking opportunities, and
              community outreach, we aim to foster financial literacy and
              empower our members to be leaders in the ever-changing world of
              finance.
            </p>
          </div>
          <div className="mvo-box">
            <h1>VISION</h1>
            <p>
              If you do not manage your money, your money will manage you. Our
              vision is to be a premier student-run organization that empowers
              women to become financially literate and make informed financial
              decisions. This vision is based on the belief that financial
              literacy is essential for women to achieve their full potential.
              Finivesta aims to achieve its vision by providing a platform for
              women to learn about economics through workshops, seminars, and
              other events.
            </p>
          </div>
          <div className="mvo-box">
            <h1>OBJECTIVE</h1>
            <p>
              Our main objective is to develop an understanding of financial
              concepts among young girls. We intent to effectively communicate
              financial information and increase awareness of ethics and social
              responsibility in the context to finance. We solely want to make
              woman more comfortable with topics such as stock market, bonds and
              debentures so that this increases their confidence and helps them
              to extract their true potential.
            </p>
          </div>
        </div>
      </section>

      {/* Disha's Code */}

      <div className="Carousel">
        {" "}
        <section className="section-carousel">
          <div className="carousel">
            <h2 className="subtitle">Recent Events</h2>

            <Slider {...settings}>
            <div className="box">
                <a
                  href="https://www.canva.com/design/DAGbu4uhDfU/AVRFjLBax5A2e-bE1gvttw/view?utm_content=DAGbu4uhDfU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb1e6d44f9b"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img src={Unveiling_IPOs} alt="Unveiling IPOs" />
                </a>
              </div>
              <div className="box">
                <a
                  href="/resources/moneymasterclass"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img src={MoneyMasterclass} alt="Money Masterclass" />
                </a>
              </div>

              <div className="box">
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7160561756463853568/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Finlatics} alt="Finlatics" />
                </a>
              </div>

              <div className="box">
                <a
                  href="https://www.instagram.com/p/C2CkzBTStUb/?igsh=MW5lNmZ6NmRxZTdqMA=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Melange} alt="Money Melange" />
                </a>
              </div>

              <div className="box">
                <a
                  href="https://www.instagram.com/p/C2AVhH4SE0P/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={KharchePeCharche} alt="kharche pr charcha" />
                </a>
              </div>

              <div className="box">
                <a
                  href="https://www.instagram.com/p/CzqYKwRLp24/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={BiddingBlitz} alt="speaker" />
                </a>
              </div>

              <div className="box">
                <a
                  href="https://www.instagram.com/p/CzbC7cLPrex/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Speaker} alt="speaker" />
                </a>
              </div>

              <div className="box">
                <a
                  href="https://www.instagram.com/p/CxXRs1Pywdn/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={CollegeTrading} alt="speaker" />
                </a>
              </div>

              <div className="box">
                <a
                  href="https://www.instagram.com/p/CxAA9weLEea/?img_index=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Orientation} alt="speaker" />
                </a>
              </div>
            </Slider>
          </div>
        </section>{" "}
      </div>
    </div>
  );
};

export default Home;
