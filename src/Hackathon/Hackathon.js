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
  { date: "31st January, 2026", title: "Final Pitch and Judgement", desc: "D-Day: Selected top 8 teams per problem statement pitch their projects to judges, demonstrating the functionality and potential impact of their solution." },
];

const faqs = [
  { question: "Are cross-college and cross-specialization teams allowed?", answer: "Yes. Teams may include members from different colleges and different academic specializations." },
  { question: "Who can participate?", answer: (<>The hackathon is open to students and early innovators with an interest in finance and technology.<ol>Team Size: 1 to 4 members</ol></>) },
  { question: "Is a working prototype mandatory?", answer: "Yes. Teams must submit at least a basic working prototype or functional demo that clearly demonstrates the idea and core features of the solution." },
  { question: "Is the pitch deck mandatory?", answer:"The pitch deck is strictly mandatory. It must be 5–7 slides only and should clearly explain the problem, solution, technology and impact." },
  { question: "Can we submit projects built before the hackathon?", answer: "No. All submissions must be built during the hackathon period. Any reuse of old projects must be clearly disclosed and should not form the majority of the solution." },
  { question: "Can a team participate in multiple problem statements?", answer: "No. Each team can submit only one project under one problem statement." },
  { question: "How to create a team ?", answer: "Once you apply to Devfolio you can either apply as a solo team or a team of upto 2-4 members. If you apply as a solo team, wait for your application to get accepted. Once your application is accepted you can join or create a team. If you want to apply as a team then select create a team or join a team by entering the referral link. Once all team members join you can submit your application and wait for it to get reviewed. You can only submit your project once your application gets accepted."},
  { question: "Will accommodation be provided ?", answer: "No, accommodation and travelling expenses will not be provided by the organizers." },
];

const problemStatements = [
  { title: "OnChain Rewards - Blockchain (OnChain Rewards)", icon: <FaCreditCard />, desc: (<>Reimagine financial trust using blockchain. Build a secure, on-chain credibility system that verifies multiple user trust metrics and unlocks real-time rewards across e-commerce, travel, fintech, and lifestyle platforms.
</>),},
  { title: "Offroad Semantic Scene Segmentation Challenge", icon: <FaRobot />, desc: (<>Develop a semantic scene segmentation model for off-road environments using synthetic desert imagery generated via Duality AI’s Falcon digital twin platform. The model should accurately classify terrain and object classes and demonstrate strong generalization when evaluated on unseen desert locations.</>),},
  { title: "Hostel Life Utility Manager - UI/UX Beginner Track (Freshers Only)", icon: <FaUserGraduate />, desc: (<>Simplify hostel finances. Design an intuitive budgeting app that helps students track expenses, split bills, manage shared utilities, and avoid end-of-month money stress through clean UI and smart reminders.
</>),},
  { title: "Financial Games & Finopoly - Game Development", icon: <FaGamepad />, desc: (<>Turn finance into fun. Create a finance-inspired game where earning, spending, trading, and risk drive gameplay, helping players learn financial concepts through strategy, storytelling, and interaction.
</>),},
  { title: "Quantifying the Markets - Machine Learning", icon: <FaChartLine />, desc: (<>Decode market data with machine learning. Analyze real-world financial datasets to identify trends, volatility, and short-term forecasts, focusing on strong quantitative reasoning and clear insights.
</>),},
  { title: "Open Innovation", icon: <FaLightbulb />, desc: (<>
No rules, no limits. Bring bold, unconventional ideas that redefine finance - whether through health, accessibility, blockchain, or any unexpected intersection.
</>),},
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
  const [devfolioLoaded, setDevfolioLoaded] = useState(false);

 useEffect(() => {
  const scriptId = "devfolio-sdk";

  if (document.getElementById(scriptId)) {
    if (window.Devfolio) {
      window.Devfolio.initialize();
      setDevfolioLoaded(true);
    }
    return;
  }

  const script = document.createElement("script");
  script.id = scriptId;
  script.src = "https://apply.devfolio.co/v2/sdk.js";
  script.async = true;

  script.onload = () => {
    if (window.Devfolio) {
      window.Devfolio.initialize(); 
      setDevfolioLoaded(true);
    }
  };

  document.body.appendChild(script);
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
    <div className="devfolio-wrapper">
        <div
        className="devfolio-apply-button"
        data-hackathon-slug="pay-load"
        data-button-theme="light"
        alt="DEVFOLIO LOGO"
        ></div>
</div>
        {/* Fallback button if Devfolio doesn't load */}
        {!devfolioLoaded && (
          <a
            href="https://pay-load.devfolio.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="fallback-apply-button"
          >
            Apply with Devfolio
          </a>
        )}

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
                  <h3>Machine Learning</h3>
                  <p>Quantifying the Markets</p>
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
                  <p>Off-Road Semantic Scene Segmentation</p>
                </div>
              </div>
            </div>
            <div className={`tracks-contentBx ${activeContent === "content3" ? "active" : ""}`} id="content3">
              <div className="tracks-card">
                <div className="tracks-imgBx">
                  <FaUserGraduate />
                </div>
                <div className="tracks-textBx">
                  <h3>UI/UX Beginner-Friendly Track</h3>
                  <p>Hostel Life Utility Manager</p>
                </div>
              </div>
            </div>
            <div className={`tracks-contentBx ${activeContent === "content4" ? "active" : ""}`} id="content4">
              <div className="tracks-card">
                <div className="tracks-imgBx">
                  <FaGamepad />
                </div>
                <div className="tracks-textBx">
                  <h3>Game Development</h3>
                  <p>Financial Games & Finopoly</p>
                </div>
              </div>
            </div>
            <div className={`tracks-contentBx ${activeContent === "content5" ? "active" : ""}`} id="content5">
              <div className="tracks-card">
                <div className="tracks-imgBx">
                  <FaChartLine />
                </div>
                <div className="tracks-textBx">
                  <h3>Blockchain</h3>
                  <p>OnChain Rewards(Ethereum Track)</p>
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
                  <p>Your Idea, Your Innovation!</p>
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
      {/* <div className="sponsor-slider-section">
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
      </div> */}

      {/* Prizes Section */}
      {/* <div className="prizes-section">
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
      </div> */}
  
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