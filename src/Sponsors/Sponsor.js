import React from "react";
import "./Sponsor.css";

import Image from './SponsorImages/image.png';
import Logo from './SponsorImages/logoo.png';

const Sponsor = () => {
    return (
        <>
            <div className="sponsors-header">
            <h1>Our Sponsors</h1>
            <p>Empowering innovation and growth, <br /> thanks to the support of our valued sponsors.</p>
            </div>

            <div class="sponsors_container">
                {/* Added blank links to link logo to the page of the sponsors */}
                <div class="logos" id="a1">
                    <a href="#" target="_blank">
                        <img src={Image} alt=""/>
                    </a>
                </div> 
                <div class="logos" id="a2">
                    <a href="#" target="_blank">
                        <img src={Image} alt=""/>
                    </a>
                </div>
                <div class="logos" id="a3">
                    <a href="#" target="_blank">
                        <img src={Image} alt=""/>
                    </a>
                </div>
                <div class="logos" id="a4">
                    <a href="#" target="_blank">
                        <img src={Image} alt=""/>
                    </a>
                </div>
                <div class="logos" id="a5">
                    <a href="#" target="_blank">
                        <img src={Image} alt=""/>
                    </a>
                </div>
                <div class="logos" id="a6">
                    <a href="#" target="_blank">
                        <img src={Image} alt=""/>
                    </a>
                </div>
            </div>

            <h1 class="our_partners">Our Partners</h1>

            <div class="partners_container">
                <div class="logos" id="b1">
                    <a href="#" target="_blank">
                        <img src={Logo} alt=""/>
                    </a>
                </div> 
                <div class="logos" id="b2">
                    <a href="#" target="_blank">
                        <img src={Logo} alt=""/>
                    </a>
                </div>
                <div class="logos" id="b3">
                    <a href="#" target="_blank">
                        <img src={Logo} alt=""/>
                    </a>
                </div>
            </div>
        </>
        
    );
};

export default Sponsor;