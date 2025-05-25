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
import Lwt from './SponsorImages/image.png';
import StockEdge from './SponsorImages/StockEdge.png';
import Unstop from './SponsorImages/Unstop11.png';

const sponsors = [
  {
    id: "a7",
    name: "StockEdge",
    img: StockEdge,
    url: "https://www.linkedin.com/company/stockedge/",
  },
  {
    id: "a8",
    name: "Unstop",
    img: Unstop,
    url: "https://www.linkedin.com/company/unstop/",
  },
  {
    id: "a1",
    name: "Finlatics",
    img: Finlatics,
    url: "https://www.linkedin.com/company/fincrux-enabling-insights/",
  },
  {
    id: "a2",
    name: "StoxHero",
    img: StoxHero,
    url: "https://www.linkedin.com/company/stoxhero/",
  },
  {
    id: "a3",
    name: "One Percent Club",
    img: Onepercclub,
    url: null, // No link provided
  },
  {
    id: "a4",
    name: "Coding Ninjas",
    img: CodingNinjas,
    url: "https://www.linkedin.com/school/codingninjas/",
  },
  {
    id: "a5",
    name: "Stock Pe",
    img: Stockpe,
    url: "https://www.linkedin.com/company/stockpe/",
  },
  {
    id: "a6",
    name: "Learning While Travelling",
    img: Lwt,
    url: "https://www.linkedin.com/company/learningwhiletravelling/",
  },
];

const partners = [
  {
    id: "b1",
    name: "StockGro",
    img: Stockgro,
    url: "https://www.linkedin.com/company/stockgro/",
  },
  {
    id: "b2",
    name: "FinShots",
    img: Finshots,
    url: "https://www.linkedin.com/showcase/finshots/",
  },
  {
    id: "b3",
    name: "Adira CSD",
    img: Adira,
    url: "https://www.linkedin.com/in/adira-csd-280a71226/",
  },
  {
    id: "b4",
    name: "Assets DTU",
    img: AssetsDtu,
    url: "https://www.linkedin.com/company/assets-dtu/",
  },
  {
    id: "b5",
    name: "CSD - IGDTUW",
    img: Csd,
    url: "https://www.linkedin.com/company/centre-for-sustainable-development-igdtuw/posts/?feedView=all",
  },
  {
    id: "b6",
    name: "B. H. A. V.",
    img: Bhav,
    url: "https://www.linkedin.com/company/b-h-a-v-behold-an-architect-s-view/",
  },
  {
    id: "b7",
    name: "TechnoLiterati",
    img: TechnoLit,
    url: "https://www.linkedin.com/company/technoliterati-igdtuw/posts/?feedView=all",
  },
  {
    id: "b8",
    name: "MarkBlend",
    img: Markblend,
    url: "https://www.linkedin.com/company/markblend-social-media-agency/",
  },
  {
    id: "b9",
    name: "FinWizz",
    img: Finwizz,
    url: "https://www.linkedin.com/company/beat-the-markets/",
  },
];

const Sponsor = () => {
  const renderLogo = ({ id, name, img, url }) => (
    <div className="logos" id={id} key={id}>
      {url ? (
        <a href={url} target="_blank" rel="noreferrer">
          <img src={img} alt={name} />
          <div className="shade">{name}</div>
        </a>
      ) : (
        <>
          <img src={img} alt={name} />
          <div className="shade">{name}</div>
        </>
      )}
    </div>
  );

  return (
    <div className="sponspage">
      <div className="sponsors-header">
        <h1>Our Sponsors</h1>
        <p>
          Empowering innovation and growth, thanks to the support of our valued
          sponsors.
        </p>
      </div>

      <div className="sponsors_container">{sponsors.map(renderLogo)}</div>

      <div className="sponsi-vertical-line"></div>

      <h1 className="our_partners">Our Partners</h1>

      <div className="partners_container">{partners.map(renderLogo)}</div>
    </div>
  );
};

export default Sponsor;