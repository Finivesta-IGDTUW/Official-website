import React from "react";
import "../Resources.css";

import Session1 from "../Images/moneymasterclass/Session1.png";
import Session2 from "../Images/moneymasterclass/Session2.jpg";
import Session3 from "../Images/moneymasterclass/Session3.png"
import Session4 from "../Images/moneymasterclass/Session4.png"
const MoneyMasterclass = () => {
  return (
    <div className="MoneyMasterclass">
      
      <div class="header moneymc">
        <h1>Money Masterclass</h1>
        <p>Unlocking essential financial knowledge and skills, one session at a time <br/>– an initiative by Finivesta</p>
      </div>

      <div className="resourcesbox">
        <div className="boxsmall">
          <a href="https://www.canva.com/design/DAGbu4uhDfU/AVRFjLBax5A2e-bE1gvttw/view?utm_content=DAGbu4uhDfU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb1e6d44f9b" target="_blank" rel="noreferrer">
            <div className="landscape">
              <img src={Session4} alt="Cover" />
            </div>
            <div className="text">
              <h2>Session 4</h2>
              <p>IPO Decode</p>
            </div>
          </a>
        </div>

        <div className="boxsmall">
          <a href="https://www.canva.com/design/DAGWeo9-4g0/uSv8Z_0SZZgEtRdJR7dczQ/view?utm_content=DAGWeo9-4g0&utm_campaign=designshare&utm_medium=link&utm_source=editor"  target="_blank" rel="noreferrer">
            <div className="landscape">
              <img src={Session3} alt="Cover" />
            </div>
            <div className="text">
              <h2>Session 3</h2>
              <p>Investment Knowledge for Beginners</p>
            </div>
          </a>
        </div>

        <div className="boxsmall">
          <a href="https://www.canva.com/design/DAGVk62xHNY/pu_yEeEqy-v_tTf3KWssDw/view?utm_content=DAGVk62xHNY&utm_campaign=designshare&utm_medium=link&utm_source=editor"  target="_blank" rel="noreferrer">
            <div className="landscape">
              <img src={Session2} alt="Cover" />
            </div>
            <div className="text">
              <h2>Session 2</h2>
              <p>The Economic Impact of Trump's Return</p>
            </div>
          </a>
        </div>

        <div className="boxsmall">
          <a href="https://www.canva.com/design/DAGUqH5oZgY/0zHssdS1PHB0uE9wd8IgoA/view?utm_content=DAGUqH5oZgY&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noreferrer">
            <div className="landscape">
              <img src={Session1} alt="Cover" />
            </div>
            <div className="text">
              <h2>Session 1</h2>
              <p>Payroll System</p>
            </div>
          </a>
        </div>
        

      </div>

    </div>
  );
};

export default MoneyMasterclass;
