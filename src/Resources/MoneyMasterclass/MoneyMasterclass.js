import React from "react";
import "../Resources.css";

import Session1 from "../Images/moneymasterclass/Session1.png";
import Session2 from "../Images/moneymasterclass/Session2.jpg";
import Session3 from "../Images/moneymasterclass/Session03.jpg";
import Session4 from "../Images/moneymasterclass/Session4.png";
import Session5 from "../Images/moneymasterclass/Session5.jpg";
import Session6 from "../Images/moneymasterclass/Session6.png";
import Session7 from "../Images/moneymasterclass/Session07.jpeg";

const sessions = [
  {
    id: 7,
    title: "Session 7",
    description: "Stocks in a Shaky Economy",
    image: Session7,
    link: "https://www.canva.com/design/DAGjW9NZfUA/bUpx9LtVlBrNf7hERWVjFA/view?utm_content=DAGjW9NZfUA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2b43ec3dab",
  },
  {
    id: 6,
    title: "Session 6",
    description: "Digital Banking and FinTech",
    image: Session6,
    link: "https://www.canva.com/design/DAGiPgD5qmY/LzZPm4HCW2GxAPOV3qLrPA/view?utm_content=DAGiPgD5qmY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd91282f82f",
  },
  {
    id: 5,
    title: "Session 5",
    description: "Understanding the Stock Market",
    image: Session5,
    link: "https://www.canva.com/design/DAGhU35Zb9o/QVLd5Al3aeLWg5QVXJ4qOg/view?utm_content=DAGhU35Zb9o&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4ad7aec673",
  },
  {
    id: 4,
    title: "Session 4",
    description: "IPO Decode",
    image: Session4,
    link: "https://www.canva.com/design/DAGbu4uhDfU/AVRFjLBax5A2e-bE1gvttw/view?utm_content=DAGbu4uhDfU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb1e6d44f9b",
  },
  {
    id: 3,
    title: "Session 3",
    description: "Investment Knowledge for Beginners",
    image: Session3,
    link: "https://www.canva.com/design/DAGWeo9-4g0/uSv8Z_0SZZgEtRdJR7dczQ/view?utm_content=DAGWeo9-4g0&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  },
  {
    id: 2,
    title: "Session 2",
    description: "The Economic Impact of Trump's Return",
    image: Session2,
    link: "https://www.canva.com/design/DAGVk62xHNY/pu_yEeEqy-v_tTf3KWssDw/view?utm_content=DAGVk62xHNY&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  },
  {
    id: 1,
    title: "Session 1",
    description: "Payroll System",
    image: Session1,
    link: "https://www.canva.com/design/DAGUqH5oZgY/0zHssdS1PHB0uE9wd8IgoA/view?utm_content=DAGUqH5oZgY&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  },
];

const MoneyMasterclass = () => {
  return (
    <div className="MoneyMasterclass">
      <div className="header moneymc">
        <h1>Money Masterclass</h1>
        <p>
          Unlocking essential financial knowledge and skills, one session at a
          time <br />– an initiative by Finivesta
        </p>
      </div>

      <div className="resourcesbox">
        {sessions.map((session) => (
          <div key={session.id} className="boxsmall">
            <a href={session.link} target="_blank" rel="noreferrer">
              <div className="landscape">
                <img src={session.image} alt={`${session.title} Cover`} loading="lazy"/>
              </div>
              <div className="text">
                <h2>{session.title}</h2>
                <p>{session.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoneyMasterclass;