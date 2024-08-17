import React from "react";
import "./Sponsor.css";

import Finlatics from './SponsorImages/image8.png';
import Csd from './SponsorImages/image1.png';
import CodingNinjas from './SponsorImages/image2.png';
import Adira from './SponsorImages/image4.png';
import StoxHero from './SponsorImages/image5.png';
import Onepercclub from './SponsorImages/image6.png';
import TechnoLit from './SponsorImages/image7.png';
import Bhav from './SponsorImages/image9.png';
import Finshots from './SponsorImages/image10.png';
import AssetsDtu from './SponsorImages/assets_dtu_logo.jpeg';
import Markblend from './SponsorImages/image12.png';
import Finwizz from './SponsorImages/image13.png';
import Stockpe from './SponsorImages/image14.png';
import Stockgro from './SponsorImages/image15.png';


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
                    <a href="https://www.linkedin.com/company/fincrux-enabling-insights/" target="_blank" rel="noreferrer"> 
                        <img src={Finlatics} alt=""/>
                    </a>
                </div> 
                <div class="logos" id="a2">
                    <a href="https://www.linkedin.com/company/stoxhero/" target="_blank" rel="noreferrer">
                        <img src={StoxHero} alt=""/>
                    </a>
                </div>
                <div class="logos" id="a3">
                    <a href="#" target="_blank" rel="noreferrer">
                        <img src={Onepercclub} alt=""/>
                    </a>
                </div>
                <div class="logos" id="a4">
                    <a href="https://www.linkedin.com/school/codingninjas/" target="_blank" rel="noreferrer">
                        <img src={CodingNinjas} alt=""/>
                    </a>
                </div>
                <div class="logos" id="a5">
                    <a href="https://www.linkedin.com/company/stockpe/" target="_blank" rel="noreferrer">
                        <img src={Stockpe} alt=""/>
                    </a>
                </div>
                {/* <div class="logos" id="a6">
                    <a href="#" target="_blank" rel="noreferrer">
                        <img src={Image} alt=""/>
                    </a>
                </div> */}
            </div>

            <h1 class="our_partners">Our Partners</h1>

            <div class="partners_container">
                <div class="logos" id="b1">
                    <a href="https://www.linkedin.com/company/fincrux-enabling-insights/" target="_blank" rel="noreferrer">
                        <img src={Stockgro} alt=""/>
                        {/*<div class="shade">
                            <div className="sponsi-name">
                                <p>Stock Grow</p>
                            </div>
                            <div className="sponsi-link">
                                link    
                            </div>
                        </div>*/}
                    </a>
                </div> 
                <div class="logos" id="b2">
                    <a href="https://www.linkedin.com/showcase/finshots/" target="_blank" rel="noreferrer">
                        <img src={Finshots} alt=""/>
                    </a>
                </div>
                <div class="logos" id="b3">
                    <a href="https://www.linkedin.com/in/adira-csd-280a71226/" target="_blank" rel="noreferrer">
                        <img src={Adira} alt=""/>
                    </a>
                </div>
                <div class="logos" id="b4">
                    <a href="https://www.linkedin.com/company/assets-dtu/" target="_blank" rel="noreferrer">
                        <img src={AssetsDtu} alt=""/>
                    </a>
                </div> 
                <div class="logos" id="b5">
                    <a href="https://www.linkedin.com/company/centre-for-sustainable-development-igdtuw/posts/?feedView=all" target="_blank" rel="noreferrer">
                        <img src={Csd} alt=""/>
                    </a>
                </div>
                <div class="logos" id="b6">
                    <a href="https://www.linkedin.com/company/b-h-a-v-behold-an-architect-s-view/" target="_blank" rel="noreferrer">
                        <img src={Bhav} alt=""/>
                    </a>
                </div>
                <div class="logos" id="b7">
                    <a href="https://www.linkedin.com/company/technoliterati-igdtuw/posts/?feedView=all" target="_blank" rel="noreferrer">
                        <img src={TechnoLit} alt=""/>
                    </a>
                </div> 
                <div class="logos" id="b8">
                    <a href="https://www.linkedin.com/company/markblend-social-media-agency/" target="_blank" rel="noreferrer">
                        <img src={Markblend} alt=""/>
                    </a>
                </div>
                <div class="logos" id="b9">
                    <a href="https://www.linkedin.com/company/beat-the-markets/" target="_blank" rel="noreferrer">
                        <img src={Finwizz} alt=""/>
                    </a>
                </div>
            </div>
        </>
        
    );
};

export default Sponsor;