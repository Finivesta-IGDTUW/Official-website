import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
        <footer className="footer">
            <div className="footer-content">
                <a className="fbut" href="/">Home</a>
                <a className="fbut" href="/events">Events</a>
                <a className="fbut" href="/sponsors">Sponsors</a>
                <a className="fbut" href="/resources">Resources</a>
                <a className="fbut" href="/team">Team</a>
                <a className="fbut" href="/contact">Contact Us</a>
            </div>
            <p className="text-footer"> 
                Copyright &copy; 2023 Finivesta IGDTUW - All Rights Reserved.
            </p> 
        </footer> 
        
  );
};

export default Footer;