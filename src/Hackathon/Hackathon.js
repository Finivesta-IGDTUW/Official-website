import { useEffect, useState } from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBitcoin, FaChartLine, FaCreditCard, FaEthereum, FaGamepad } from "react-icons/fa";
import { SiLitecoin, SiCardano, SiRipple } from "react-icons/si";
import { TextPlugin } from "gsap/TextPlugin";
import "./Hackathon.css";
import './Tracks.css';
import { FaUsers, FaLightbulb, FaTrophy, FaBookOpen, FaChevronLeft, FaChevronRight, FaRobot, FaGlobe, FaUserGraduate, FaHome, FaInfoCircle, FaListAlt, FaQuestionCircle, FaRocket, FaStar } from "react-icons/fa";
// import devfolioBtn from "./apply-with-devfolio.png";
//sponsors logos
import interviewbuddylogo from './SponsorImages/interviewbuddy.png';
import yrilogo from './SponsorImages/yri.png';

const prizes = [
  { title: "1st Prize", short: "₹10,000 + Swags", detail: "Gold Medalist gets top prizes & exclusive merch!", medal: "🥇" },
  { title: "2nd Prize", short: "₹5,000 + Goodies", detail: "Silver Medal winner gets amazing goodies & swags!", medal: "🥈" },
  { title: "3rd Prize", short: "₹2,500 + Gifts", detail: "Bronze Medal winner receives exciting gifts!", medal: "🥉" }
];

const timelineEvents = [
  { date: "5th January, 2026", title: "Registrations Open", desc: "Start forming your team and work on your project." },
  { date: "5th - 26th January, 2026", title: "Submission Window", desc: "Submit the prototype of your project." },
  { date: "28th January, 2026", title: "Result Announcement", desc: "Announcement of shortlisted teams for the final pitch round." },
  { date: "30th January, 2026 (Tentative)", title: "Final Pitch and Judgement", desc: "D-Day: Selected top 8 teams per problem statement pitch their projects to judges, demonstrating the functionality and potential impact of their solution." },
];

const faqs = [
  { question: "Who can participate?", answer: "The hackathon is open to students across colleges, branches, and academic years. Whether you're from a different institution, a different engineering stream, or a different batch, you are welcome to participate and collaborate." },
  { question: "Is there a participation fee?", answer: "No, the hackathon is completely free to join!" },
  { question: "Will the hackathon be held online or offline?", answer: "Two rounds will be held throughout the hackathon. 1st round will be an online round where Teams will submit their innovative fintech ideas, focusing on feasibility, impact, and originality. Round 2 will be an offline round where Shortlisted teams develop a prototype along with project documentation, including a PPT and project links and after that they pitch their projects to judges, demonstrating the functionality and potential impact of their solution." },
  { question: "What is the judging criteria?", answer: (<>The solution given by participants will judged on the following basis:<ol>Usability of sponsor tools</ol><ol>Innovation and new technologies</ol><ol>Business model</ol><ol>Scalability</ol><ol>USP</ol><ol>Presentation</ol></>) },
];

const problemStatements = [
  { title: "CredChain Rewards - Blockchain", icon: <FaCreditCard />, desc: (<>Reinvent how financial behaviour and trustworthiness are measured and rewarded. Build a
system where multiple user metrics (credit score, transaction history, reputation scores) are
securely logged on-chain, offering transparent, tamper-proof credibility. Integrate
partnerships with e-commerce, travel, fintech, and lifestyle platforms so users can instantly
redeem rewards, discounts, and benefits based on their verified on-chain metrics.</>),},
  { title: "Intelligent Conversational Banking Agent - LLMs , AI", icon: <FaRobot />, desc: (<>Build an LLM-powered financial assistant that integrates with APIs to answer customer
queries, analyze account activity, summarize statements, and provide simple, jargon-free
insights. It should understand policy documents, detect user emotion, support chat + voice,
and handle tasks like KYC, loan eligibility, charges, and limits instantly.</>),},
  { title: "Hostel Life Utility Manager - UI/UX Beginner Track (Freshers Only)", icon: <FaUserGraduate />, desc: (<>Build a student friendly budgeting app/webapp that helps hostelers plan monthly expenses,
track spending across categories, and manage shared utilities with roommates. It should
auto-split bills, assign payers, send polite reminders, and offer clear visual breakdowns to
avoid end-of-month shortages.</>),},
  { title: "Financial Games & Finopoly - Game Development", icon: <FaGamepad />, desc: (<>Turn finance into pure gameplay by creating a fun, interactive game where money, choices,
and strategy shape the world. Build Finopoly, a stock-trading fantasy league, a Shark Tank
pitch battle, or a life simulator where decisions change the player’s journey. Keep it simple:
earning, spending, trading, and risks should trigger engaging outcomes without real-world
complexity. Let players explore, experiment, and compete in a quirky, memorable world
driven by creativity and smart design. Platform(s): Blender, Unity, 3js.</>),},
  { title: "Quantifying the Markets - Machine Learning", icon: <FaChartLine />, desc: (<>Analyze historical price movements, detect market patterns, forecast short-term returns, and
evaluate company performance using real-world stock data. Perform quantitative operations
on Financial Datasets such as S&P 500, Dow Jones, Sensex including daily/weekly returns,
volatility checks, moving averages, rolling statistics, and trend identification.</>),},
  { title: "Open Innovation", icon: <FaLightbulb />, desc: (<>Got a <strong>wild idea that doesn’t fit the mold</strong>? This track is your playground. Whether it’s a unique finance-meets-health concept, an unexpected use of blockchain, or a solution that redefines accessibility in finance, bring your most <strong>out-of-the-box</strong> innovation to life!</>),},
];

const words = ["You", "FinTech ", "AI Revolution ","Innovation", "Blockchain "];

const sponsors = [
  {
    name: "YRI Fellowship",
    image: yrilogo,
    website: 'https://www.yriscience.com/'
  },
  {
    name: "InterviewBuddy",
    image: interviewbuddylogo,
    website: 'https://interviewbuddy.net/'
  },
  {
    name: "xyz",
    image: 'https://blithchron.iitgn.ac.in/_astro/InterviewBuddy.BVkItRdN.webp',
    website: 'https://www.sponsor3.com'
  },
  {
    name: "abcd",
    image: 'https://blithchron.iitgn.ac.in/_astro/InterviewBuddy.BVkItRdN.webp',
    website: 'https://www.sponsor4.com'
  }
];


const Hackathon = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);

  


  useEffect(() => {
    // GSAP Setup & Animations
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
  
    // Floating Crypto Icons
    gsap.utils.toArray(".crypto-icon").forEach((icon, index) => {
      gsap.to(icon, {
        y: index % 2 === 0 ? 20 : -20,
        rotate: index % 2 === 0 ? 5 : -5,
        repeat: -1,
        yoyo: true,
        duration: gsap.utils.random(2, 2.5),
        ease: "power1.inOut",
      });
    });
  
    // Hero Section - Staggered Entrance
    gsap.from([".hackathonhero-title", ".hackathonhero-subtitle", ".hackathonhero-button"], {
      opacity: 0,
      y: 50,
      duration: 1.2,
      stagger: 0.3,
      ease: "power2.out",
    });
  
    // Sections - Fade-in on Scroll
    const sections = [
      ".about-container",
      ".features-title",
      ".features-grid",
      ".timeline-title",
      ".tracks-title",
      ".faqs-title"
    ];
    gsap.utils.toArray(sections).forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  
    // Timeline Events - Slide In
    gsap.utils.toArray(".timeline-event").forEach((event, index) => {
      gsap.from(event, {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: event,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
  
    // Track & FAQ Cards Animation
   gsap.from(".faq-card", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".faqs-container",
    start: "top 85%",
    once: true, // 🔒 never hides again
  },
});

  
    gsap.utils.toArray(".track-card").forEach((track) => {
      gsap.from(track, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: track,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });
  
    // Star Background Effect
    document.querySelectorAll(".star-container").forEach((container) => {
      container.innerHTML = "";
      for (let i = 0; i < 200; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        container.appendChild(star);
      }
    });
  
    // Hero Word Animation
    const tl = gsap.timeline({ repeat: -1 });
    words.forEach((word) => {
      tl.to(".hackathonhero-title span", {
        duration: 3,
        text: word,
        ease: "power2.out",
      })
      .to(".hackathonhero-title span", { opacity: 0, duration: 1.5, delay: 1 })
      .to(".hackathonhero-title span", { opacity: 1, duration: 1 });
    });
  
    ScrollTrigger.refresh();
  }, []);
 
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextProblem();
    }, 5000);
  
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  const prevProblem = () => {
    setCurrentIndex(prev => (prev === 0 ? problemStatements.length - 1 : prev - 1));
  };
  
  const nextProblem = () => {
    setCurrentIndex(prev => (prev === problemStatements.length - 1 ? 0 : prev + 1));
  };
  
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  const handleClick = (website) => {
    window.open(website, "_blank");
  };
  
  const [flipped, setFlipped] = useState([false, false, false]);
  
  const handleFlip = (index) => {
    const updated = [...flipped];
    updated[index] = !updated[index];
    setFlipped(updated);
  };
  
  const [activeContent, setActiveContent] = useState("content1");
  
  const handleMouseOver = (id) => {
    setActiveContent(id);
  };
  
  return (
    <div className="hackathon-container">

      <div className="sidebar">
        <a href="#" className="sidebar-icon" title="Hero Section">   
          <FaHome />
        </a>
        <a href="#about" className="sidebar-icon" title="About Section">
          <FaInfoCircle />
        </a>
        <a href="#features" className="sidebar-icon" title="Features Section">
          <FaStar />
        </a>
        <a href="#timeline" className="sidebar-icon" title="Timeline Section">
          <FaRocket />
        </a>
        <a href="#tracks" className="sidebar-icon" title="Tracks Section">
          <FaListAlt />
        </a>
        <a href="#faqs" className="sidebar-icon" title="FAQs Section">
          <FaQuestionCircle />
        </a>
      </div>

      {/* Hero Section */}
      <section id="" className="hackathonhero">
        <div className="star-container"></div>
        <div className="crypto-icons">
          <div className="crypto-icon bitcoin"><FaBitcoin size={50} /></div>
          {/* <div className="crypto-icon bitcoin"><FaBitcoin size={50} /></div> */}
          <div className="crypto-icon ethereum"><FaEthereum size={45} /></div>
          <div className="crypto-icon litecoin"><SiLitecoin size={40} /></div>
          <div className="crypto-icon cardano"><SiCardano size={42} /></div>
       
          <div className="crypto-icon ripple"><SiRipple size={38} /></div>
        </div>
        <h1 className="hackathonhero-title">The Future of  <span>Innovation</span></h1>
        <p className="hackathonhero-subtitle">
          Build the next-gen Fin-Tech solutions in this thrilling hackathon!
        </p>

        <div
        className="devfolio-apply-button"
        data-hackathon-slug="pay-load"
        data-button-theme="dark"
        style={{ height: "44px", width: "312px" }}
        ></div>

        {/* <a
        href="https://pay-load.devfolio.co/"
        target="_blank"
        rel="noopener noreferrer"
        >
          <img
          src={devfolioBtn}
          alt="Apply with Devfolio"
          className="devfolio-button"
          />
        </a> */}

      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="star-container"></div>
        <div className="about-container">
          <h2 className="about-title">About the Hackathon</h2>
          <p className="about-text">
            This hackathon is designed to push the boundaries of innovation, bringing together the best minds in the industry.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="star-container"></div>
        <h2 className="features-title">Why Join?</h2>
        <div className="features-grid">
          {[
            { text: "Networking", icon: <FaUsers className="feature-icon" /> },
            { text: "Innovation", icon: <FaLightbulb className="feature-icon" /> },
            { text: "Prizes", icon: <FaTrophy className="feature-icon" /> },
            { text: "Learning", icon: <FaBookOpen className="feature-icon" /> },
          ].map((feature, index) => (
            <div className="feature-card" key={index}>
              {feature.icon} {/* Renders the respective icon */}
              <h3 className="feature-text">{feature.text}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="timeline">
        <div className="star-container"></div>
        <h2 className="timeline-title">Hackathon Timeline</h2>
        <div className="timeline-container">
          {timelineEvents.map((event, index) => (
            <div className={`timeline-event ${index % 2 === 0 ? "left" : "right"}`} key={index}>
              <span className="timeline-date">{event.date}</span>
              <h3 className="timeline-event-title">{event.title}</h3>
              <p className="timeline-event-desc">{event.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tracks">
        <h2 className="tracks-title">Tracks</h2>
        <div className="tracks-body">
          <div className="tracks-container">
          <div className="tracks-icon">
            <div
              className={`tracks-imgBx ${activeContent === "content1" ? "active" : ""}`}
              data-id="content1"
              style={{ "--i": 0 }}
              onMouseOver={() => handleMouseOver("content1")}
            >
              <FaCreditCard />
            </div>
            <div
              className={`tracks-imgBx ${activeContent === "content2" ? "active" : ""}`}
              data-id="content2"
              style={{ "--i": 1 }}
              onMouseOver={() => handleMouseOver("content2")}
            >
              <FaRobot />
            </div>
            <div
              className={`tracks-imgBx ${activeContent === "content3" ? "active" : ""}`}
              data-id="content3"
              style={{ "--i": 2 }}
              onMouseOver={() => handleMouseOver("content3")}
            >
              <FaUserGraduate />
            </div>
            <div
              className={`tracks-imgBx ${activeContent === "content4" ? "active" : ""}`}
              data-id="content4"
              style={{ "--i": 3 }}
              onMouseOver={() => handleMouseOver("content4")}
            >
              <FaGamepad />
            </div>
            <div
              className={`tracks-imgBx ${activeContent === "content5" ? "active" : ""}`}
              data-id="content5"
              style={{ "--i": 4 }}
              onMouseOver={() => handleMouseOver("content5")}
            >
              <FaChartLine />
            </div>
            <div
              className={`tracks-imgBx ${activeContent === "content6" ? "active" : ""}`}
              data-id="content6"
              style={{ "--i": 5 }}
              onMouseOver={() => handleMouseOver("content6")}
            >
              <FaLightbulb />
            </div>
          </div>
          <div className="tracks-content">
            <div className={`tracks-contentBx ${activeContent === "content1" ? "active" : ""}`} id="content1">
              <div className="tracks-card">
                <div className="tracks-imgBx">
                  <FaCreditCard />
                </div>
                <div className="tracks-textBx">
                  <h3>Next-Gen Finance</h3>
                  <p>Innovating the future of financial systems</p>
                </div>
              </div>
            </div>
            <div className={`tracks-contentBx ${activeContent === "content2" ? "active" : ""}`} id="content2">
              <div className="tracks-card">
                <div className="tracks-imgBx">
                  <FaRobot />
                </div>
                <div className="tracks-textBx">
                  <h3>AI & Emerging Tech</h3>
                  <p>Harnessing AI to drive innovation</p>
                </div>
              </div>
            </div>
            <div className={`tracks-contentBx ${activeContent === "content3" ? "active" : ""}`} id="content3">
              <div className="tracks-card">
                <div className="tracks-imgBx">
                  <FaUserGraduate />
                </div>
                <div className="tracks-textBx">
                  <h3>Beginner Friendly</h3>
                  <p>Tracks designed for newcomers</p>
                </div>
              </div>
            </div>
            <div className={`tracks-contentBx ${activeContent === "content4" ? "active" : ""}`} id="content4">
              <div className="tracks-card">
                <div className="tracks-imgBx">
                  <FaGamepad />
                </div>
                <div className="tracks-textBx">
                  <h3>Financial Games</h3>
                  <p>Gamifying finance for better learning</p>
                </div>
              </div>
            </div>
            <div className={`tracks-contentBx ${activeContent === "content5" ? "active" : ""}`} id="content5">
              <div className="tracks-card">
                <div className="tracks-imgBx">
                  <FaChartLine />
                </div>
                <div className="tracks-textBx">
                  <h3>Data Analytics & Visualization</h3>
                  <p>Turning data into actionable insights</p>
                </div>
              </div>
            </div>
            <div className={`tracks-contentBx ${activeContent === "content6" ? "active" : ""}`} id="content6">
              <div className="tracks-card">
                <div className="tracks-imgBx">
                  <FaLightbulb />
                </div>
                <div className="tracks-textBx">
                  <h3>Open Innovation</h3>
                  <p>Breaking boundaries with creativity</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>  
      </section>

      {/* Problem-Carousel */}
      <section className="problem-carousel">
        <div className="star-container"></div>
        <h2 className="carousel-title">Problem Statements</h2>
        <div className="carousel-container">
          <button className="carousel-btn left" onClick={prevProblem}>
            <FaChevronLeft size={30} />
          </button>

          {problemStatements.map((problem, index) => {
            let position = "";
            if (index === currentIndex) {
              position = "active";
            } else if (
              index === (currentIndex + 1) % problemStatements.length
            ) {
              position = "right";
            } else if (
              index === (currentIndex - 1 + problemStatements.length) %
              problemStatements.length
            ) {
              position = "left";
            }

            return (
              <div key={index} className={`carousel-box ${position}`}>
                <h3>{problem.title}</h3>
                <p>{problem.desc}</p>
              </div>
            );
          })}

          <button className="carousel-btn right" onClick={nextProblem}>
            <FaChevronRight size={30} />
          </button>
        </div>

        <div className="carousel-dots">
          {problemStatements.map((_, index) => (
            <div
              key={index}
              className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </section>

      {/* Sponsors Slider */}
      <div className="sponsor-slider-section">
        <h2>Our Sponsors</h2>
        <div className="sponsor-slider">
          <div className="slider-track">
            {sponsors.concat(sponsors).concat(sponsors).map((sponsor, index) => (
              <div
                className="hack-slide"
                onClick={() => handleClick(sponsor.website)}
              >
                <div className="sponsor-card">
                  <img src={sponsor.image} alt={sponsor.name} />
                  <span className="sponsor-name">{sponsor.name}</span>
                </div>  
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prizes Section */}
      <div className="prizes-section">
        <div className="star-container">  </div>
        <h2> Prizes</h2>
        <div className="prizes-container">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`prize-card prize-${index} ${flipped[index] ? 'flipped' : ''}`}
              onClick={() => handleFlip(index)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="medal-icon">{prize.medal}</div>
                  <h3>{prize.title}</h3>
                  <p>{prize.short}</p>
                  <button>More</button>
                </div>
                <div className="card-back">
                  <p>{prize.detail}</p>
                  <button>Back</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* FAQs Section */}
      <section id="faqs" className="faqs">
        <div className="star-container"></div>
        <h2 className="faqs-title">Frequently Asked Questions</h2>
        <div className="faqs-container">
          {faqs.map((faq, index) => (
            <div className="faq-card" key={index} onClick={() => toggleFAQ(index)}>
              <h3 className="faq-question">
                {faq.question} {openFAQ === index ? "▼" : "▶"}
              </h3>
              {<p className={`faq-answer ${openFAQ === index ? "open" : ""}`}>
  {faq.answer}
</p>
}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};


export default Hackathon;