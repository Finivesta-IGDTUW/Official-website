import React from "react";
import "./Team.css";

import Team23 from './Media/Tenure23';
import Team24 from './Media/Tenure24';

import '@fortawesome/fontawesome-free/css/all.min.css';

const Team = () => {

    return (
      
        <div className="Team"> 

            <section className="main"> 
                <div className="box-main"> 
                    <h1>Team</h1> 
                    <p>Get to know the brilliant minds shaping our journey, <br/>each member of our team contributing their passion and expertise.</p>  
                </div> 
            </section> 


            <section className="cores">
                
                <h1>Year 2024 - 2025</h1>
                <Team24/>
                
                <div className="after-core-line"></div>

                <h1>Year 2023 - 2024</h1>
                <Team23/>
            </section>

        </div> 
        
    );
};

export default Team;