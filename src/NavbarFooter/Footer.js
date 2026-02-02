import React from "react";
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
        <footer className="footer">

            <div className="socialdiv">
                <div className="vertical-line"></div>
                <p>Socials</p>
                <div className="social-icon">
                    <a href="https://www.instagram.com/finivesta_igdtuw/" target="_blank" rel="noreferrer" className="icon-circle">
                        <i className="fab fa-instagram"/>
                    </a>
                    <a href="https://x.com/finivesta" target="_blank" rel="noreferrer" className="icon-circle">
                        <i className="fab fa-x-twitter"/>
                    </a>
                    <a href="https://www.linkedin.com/company/finivesta-igdtuw/" target="_blank" rel="noreferrer" className="icon-circle">
                        <i className="fab fa-linkedin-in"/>
                    </a>
                    <a href="https://chat.whatsapp.com/Cb2SXkNdH9k19PMRUe2MFd?mode=ems_wa_c" target="_blank" rel="noreferrer" className="icon-circle">
                        <i className="fab fa-whatsapp" />
                    </a>
                </div>
            </div>

            <div className="footer-content">
                <a className="fbut" href="/">Home</a>
                <a className="fbut" href="/events">Events</a>
                <a className="fbut" href="/sponsors">Sponsors</a>
                <a className="fbut" href="/resources">Resources</a>
                <a className="fbut" href="/team">Our Team</a>
                <a className="fbut" href="/games">Games</a>
                {/* <a className="fbut" href="/contact">Contact Us</a> */}
            </div>

            <p className="text-footer"> 
                Copyright &copy; {new Date().getFullYear()} Finivesta IGDTUW - All Rights Reserved.
            </p> 

        </footer> 
        
  );
};

export default Footer;
