import React from "react";
import "./Team.css";
import '../ContactUs/Contact.css';
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Team23 from './Media/Tenure23';
import Team24 from './Media/Tenure24';

import TeamPic23 from './Media/TeamPic23.jpeg';

import '@fortawesome/fontawesome-free/css/all.min.css';

const Team = () => {

    const [showTeam23, setShowTeam23] = useState(false);

    const toggleTeam23 = () => {
        setShowTeam23(prevShowTeam23 => !prevShowTeam23);
    };

    useEffect(() => {
        Aos.init({
            duration: 1000, 
        });
    }, []);

    return (
      
        <div className="Team"> 

            <section className="main"> 
                <div className="box-main"> 
                    <h1>Our Team</h1> 
                    <p>Get to know the brilliant minds shaping our journey, <br/>each member of our team contributing their passion and expertise.</p>  
                </div> 
            </section> 


            <section className="cores">
                
                <h1>Year '24 - '25</h1>
                <Team24/>
                
                <div className="after-core-line"></div>

                <h1>Year '23 - '24</h1>
                <div className="drop-down-team" onClick={toggleTeam23}>
                    <img src={TeamPic23} alt="Team 23" />
                    <p className="team-drop-down-text">Meet the previous faces of Finivesta</p>
                    <div className={`team-arrow ${showTeam23 ? 'team-arrow-rotate' : ''}`}></div>
                </div>
                {showTeam23 && (
                    <div data-aos="fade-down">
                        <Team23 />
                    </div>
                )}
            </section>

            <div className="after-core-line"></div>

            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We are here to assist you. Reach out to us for any queries or support :)</p>
            </div>

            <div className="wrapper">
                <div className="contactbox">
                    <p>
                        <b>
                            FINIVESTA
                            <br/>
                            The Finance and Economics Society of IGDTUW
                            <br/>
                        </b>
                        <b>Address :</b> <br/>
                            Madrasa Road, Opposite St. James Church, 
                            Kashmere Gate, New Delhi - 110006<br />
                        <b>Phone :</b>
                        <br/>
                        011 2390 0220
                    </p>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7001.611386887791!2d77.22299567770999!3d28.6655361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0683919c3b%3A0xf5fc331b74c2b9e2!2sIndira%20Gandhi%20Delhi%20Technical%20University%20for%20Women!5e0!3m2!1sen!2sin!4v1701533528764!5m2!1sen!2sin"
                        title="IGDTUW Location"
                        width="400"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

        </div> 
        
    );
};

export default Team;