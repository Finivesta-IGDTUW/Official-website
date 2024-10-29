import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Navbar.css";
import FiniLogo from "../Images/FiniLogo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const excludeBackArrowPaths = ["/", "/events", "/sponsors", "/resources", "/team", "/contact"];

  const showBackArrow = !excludeBackArrowPaths.includes(location.pathname);

  return (
    <header className="navbar">
      <nav>
      <div className="logoheader">
          {showBackArrow && (
            <button className="back-arrow" onClick={() => navigate(-1)}>
              ←
            </button>
          )}
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