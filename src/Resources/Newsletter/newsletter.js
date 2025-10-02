import React from "react";
import "../Resources.css";

import new0 from '../Images/Newsletter/new0.png';
import new1 from '../Images/Newsletter/new1.png';
import new2 from '../Images/Newsletter/new2.png';
const sessions = [
  
  {
    id: 3,
    title: "September Edition",
    image: new1,
    link: '/Newsletter1.pdf',
  },
  {
    id: 2,
    title: "August Edition",
    image: new2,
    link: '/Newsletter2.pdf',
  },
  {
    id: 1,
    title: "24-25 Recap",
    image: new0,
    link: '/Newsletter0.pdf',
  },
];

const Newsletter = () => {
  return (
    <div className="MoneyMasterclass">
      <div className="header newslettermc">
        <h1>Newsletter</h1>
        <p>
          A monthly dose of finance news and insights, delivered straight to you. <br />– an initiative by Finivesta
        </p>
      </div>

      <div className="resourcesbox">
        {sessions.map((session) => (
          <div key={session.id} className="boxsmall">
            <a href={session.link} target="_blank" rel="noreferrer">
              <div className="img review">
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

export default Newsletter;