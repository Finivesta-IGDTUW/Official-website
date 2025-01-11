import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Navbar.css";
import FiniLogo from "../Images/FiniLogo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const excludeBackArrowPaths = ["/", "/events", "/sponsors", "/resources", "/team", "/contact"];
  const showBackArrow = !excludeBackArrowPaths.includes(location.pathname);

  // Toggle dropdown function
  const toggleDropdown = (event) => {
    event.preventDefault();
    setIsDropdownOpen((prev) => !prev); 
  };

  useEffect(() => {
    // No need for manual DOM manipulation
    return () => {
      // Cleanup if needed (not required in this case)
    };
  }, [isDropdownOpen]);

  return (
    <header className="navbar">
      <nav>
        <div className="logoheader">
          {showBackArrow && (
            <button className="back-arrow" onClick={() => navigate(-1)}>
              ←
            </button>
          )}
          <img src={FiniLogo} alt="Finivesta Logo" />
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu"> 
          <li><a href="/">Home</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/sponsors">Sponsors</a></li>
          <li className="nav-dropdown">
              <a href="/resources">Resources</a>
              <button 
                  className="nav-dropdown-arrow" 
                  onMouseEnter={() => setIsDropdownOpen(true)} // Open dropdown on hover
                  onMouseLeave={() => setIsDropdownOpen(false)} // Close dropdown on mouse leave
              >
                  &#9662;
              </button>
              <ul className={`nav-dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                  <li><a href="/resources/moneymasterclass">Money Masterclass</a></li>
                  <li><a href="/resources/blogs">Blogs</a></li>
                  <li><a href="/resources/bookreviews">Book Reviews</a></li>
                  <li><a href="/resources/videos">Online Videos</a></li>
                  <li><a href="/resources/podcasts">Podcasts</a></li>
                  <li><a href="/resources/stocks">Stock Market and Trading</a></li>
                  <li><a href="/resources/trading">Trading Applications and Websites</a></li>
              </ul>
          </li>
          <li><a href="/team">Team</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;