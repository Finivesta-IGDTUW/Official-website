import React from "react";
import "./Sponsor.css";

import Finlatics from './SponsorImages/image16.png';
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
import Lwt from './SponsorImages/image.png'


const Sponsor = () => {
    return (
        <div className="sponspage">
            <div className="sponsors-header">
            <h1>Our Sponsors</h1>
            <p>Empowering innovation and growth, thanks to the support of our valued sponsors.</p>
            </div>

            <div class="sponsors_container">
                {/* Added blank links to link logo to the page of the sponsors */}
                <div class="logos" id="a1">
                    <a href="https://www.linkedin.com/company/fincrux-enabling-insights/" target="_blank" rel="noreferrer"> 
                        <img src={Finlatics} alt=""/>
                        <div class="shade">Finlatics</div>
                    </a>
                </div> 
                <div class="logos" id="a2">
                    <a href="https://www.linkedin.com/company/stoxhero/" target="_blank" rel="noreferrer">
                        <img src={StoxHero} alt=""/>
                        <div class="shade">StoxHero</div>
                    </a>
                </div>
                <div class="logos" id="a3">
                    {/* <a href="" target="_blank" rel="noreferrer"> */}
                        <img src={Onepercclub} alt=""/>
                        <div class="shade">One Percent Club</div>
                    {/* </a> */}
                </div>
                <div class="logos" id="a4">
                    <a href="https://www.linkedin.com/school/codingninjas/" target="_blank" rel="noreferrer">
                        <img src={CodingNinjas} alt=""/>
                        <div class="shade">Coding Ninjas</div>
                    </a>
                </div>
                <div class="logos" id="a5">
                    <a href="https://www.linkedin.com/company/stockpe/" target="_blank" rel="noreferrer">
                        <img src={Stockpe} alt=""/>
                        <div class="shade">Stock Pe</div>
                    </a>
                </div>
                <div class="logos" id="a6">
                    <a href="https://www.linkedin.com/company/learningwhiletravelling/" target="_blank" rel="noreferrer">
                        <img src={Lwt} alt=""/>
                        <div class="shade">Learning While Travelling</div>
                    </a>
                </div>
            </div>
            
            <div className="sponsi-vertical-line"></div>

            <h1 class="our_partners">Our Partners</h1>

            <div class="partners_container">
                <div class="logos" id="b1">
                    <a href="https://www.linkedin.com/company/stockgro/" target="_blank" rel="noreferrer">
                        <img src={Stockgro} alt=""/>
                        <div class="shade">StockGro</div>
                    </a>
                </div> 
                <div class="logos" id="b2">
                    <a href="https://www.linkedin.com/showcase/finshots/" target="_blank" rel="noreferrer">
                        <img src={Finshots} alt=""/>
                        <div class="shade">FinShots</div>
                    </a>
                </div>
                <div class="logos" id="b3">
                    <a href="https://www.linkedin.com/in/adira-csd-280a71226/" target="_blank" rel="noreferrer">
                        <img src={Adira} alt=""/>
                        <div class="shade">Adira CSD</div>
                    </a>
                </div>
                <div class="logos" id="b4">
                    <a href="https://www.linkedin.com/company/assets-dtu/" target="_blank" rel="noreferrer">
                        <img src={AssetsDtu} alt=""/>
                        <div class="shade">Assets DTU</div>
                    </a>
                </div> 
                <div class="logos" id="b5">
                    <a href="https://www.linkedin.com/company/centre-for-sustainable-development-igdtuw/posts/?feedView=all" target="_blank" rel="noreferrer">
                        <img src={Csd} alt=""/>
                        <div class="shade">CSD - IGDTUW</div>
                    </a>
                </div>
                <div class="logos" id="b6">
                    <a href="https://www.linkedin.com/company/b-h-a-v-behold-an-architect-s-view/" target="_blank" rel="noreferrer">
                        <img src={Bhav} alt=""/>
                        <div class="shade">B. H. A. V.</div>
                    </a>
                </div>
                <div class="logos" id="b7">
                    <a href="https://www.linkedin.com/company/technoliterati-igdtuw/posts/?feedView=all" target="_blank" rel="noreferrer">
                        <img src={TechnoLit} alt=""/>
                        <div class="shade">TechnoLiterati</div>
                    </a>
                </div> 
                <div class="logos" id="b8">
                    <a href="https://www.linkedin.com/company/markblend-social-media-agency/" target="_blank" rel="noreferrer">
                        <img src={Markblend} alt=""/>
                        <div class="shade">MarkBlend</div>
                    </a>
                </div>
                <div class="logos" id="b9">
                    <a href="https://www.linkedin.com/company/beat-the-markets/" target="_blank" rel="noreferrer">
                        <img src={Finwizz} alt=""/>
                        <div class="shade">FinWizz</div>
                    </a>
                </div>
            </div>
        </div>
        
    );
};

export default Sponsor;