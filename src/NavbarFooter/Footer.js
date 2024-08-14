import React from "react";
import "./Footer.css";

import X from './Media/X.png';
import Insta from './Media/Insta.png';
import LinkedIn from './Media/LinkedIn.png';

const Footer = () => {
  return (
        <footer className="footer">

            <div className="socialdiv">
                <div className="vertical-line"></div>
                <p>Socials</p>
                <div className="social-icon">
                    <a href="https://www.instagram.com/finivesta_igdtuw/">
                    <img src={Insta} alt="Insta" height="23"/>
                    </a>
                    <a href="https://x.com/finivesta">
                    <img src={X} alt="X" height="29"/>
                    </a>
                    <a href="https://www.linkedin.com/company/finivesta-igdtuw/">
                    <img src={LinkedIn} alt="LinkedIn" height="23"/>
                    </a>
                </div>
            </div>

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