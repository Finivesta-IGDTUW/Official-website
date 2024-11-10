import React from "react";
import "../Resources.css";

import Session1 from "../Images/moneymasterclass/Session1.png";

const MoneyMasterclass = () => {
  return (
    <div className="MoneyMasterclass">
      {/* <div class="header mm">
        <h1>Money Masterclass-an initiative by Finivesta</h1>
      </div> */}

      <div className="resourcesbox">
        <div className="boxsmall">
          <a href="https://www.canva.com/design/DAGUqH5oZgY/J9aa1487ihiVWgsTU7Gt7Q/edit">
            <div className="img">
              <img src={Session1} alt="Cover" />
            </div>
            <div className="text">
              <h2>Session 1: Payroll System</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoneyMasterclass;
