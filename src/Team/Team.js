import React from "react";
import "./Team.css";
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
                    <h1>Team</h1> 
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

        </div> 
        
    );
};

export default Team;