import React from "react";
import "./Navbar.css";
import FiniLogo from "../Images/FiniLogo.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <div className="logoheader">
          <img src={FiniLogo} alt="Finivesta Logo"></img>
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu"> 
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/sponsors">Sponsors</a>
          </li>
          <li>
            <a href="/resources">Resources</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;