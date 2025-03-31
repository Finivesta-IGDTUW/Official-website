import { useEffect, useState } from "react";
import gsap from "gsap";
// import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiLitecoin, SiCardano, SiRipple } from "react-icons/si";
import "./Hackathon.css";
import { FaUsers, FaLightbulb, FaTrophy, FaBookOpen, FaHome, FaInfoCircle, FaListAlt, FaQuestionCircle, FaRocket, FaStar } from "react-icons/fa";

// Data for Timeline, Tracks, FAQs
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const timelineEvents = [
  { date: "March 25", title: "Registrations Open", desc: "Start forming your team and register for the event." },
  { date: "April 5", title: "Workshops & Mentorship", desc: "Learn from experts and get guidance for your project." },
  { date: "April 15", title: "Project Submission", desc: "Submit your final project before the deadline." },
  { date: "April 20", title: "Judging & Results", desc: "Top teams will be selected and winners announced!" },
];

const tracks = [
  { id: "ai_ml", title: "AI & ML", desc: "Innovate with Artificial Intelligence & Machine Learning." },
  { id: "blockchain", title: "Blockchain", desc: "Build secure decentralized applications using blockchain." },
  { id: "fintech", title: "FinTech", desc: "Revolutionize the finance industry with tech." },
  { id: "sustainability", title: "Sustainability", desc: "Create solutions for a greener future." },
];

const faqs = [
  { question: "Who can participate?", answer: "Anyone from any background with a passion for tech and innovation!" },
  { question: "Is there a registration fee?", answer: "No, the hackathon is completely free to join!" },
  { question: "Do I need a team?", answer: "You can join as an individual or form a team during the event." },
  { question: "What are the prizes?", answer: "Exciting cash prizes, goodies, and networking opportunities!" },
];

const problemStatements = {
  ai_ml: [
    { title: "AI Chatbot for Mental Health", desc: "Develop a chatbot that provides mental health support using AI." },
    { title: "Fraud Detection Model", desc: "Create an ML model that detects fraudulent transactions." },
    { title: "AI Resume Screening Tool", desc: "Build an AI-powered tool that screens job applications efficiently." },
  ],
  blockchain: [
    { title: "Decentralized Voting System", desc: "Implement a voting system that ensures transparency using blockchain." },
    { title: "Land Record Management", desc: "Create a blockchain-based system for secure land record management." },
    { title: "Digital Identity Verification", desc: "Develop a secure identity verification system using blockchain." },
  ],
  fintech: [
    { title: "AI Finance Assistant", desc: "Design a personal finance assistant powered by AI." },
    { title: "Stock Price Prediction", desc: "Develop an ML model that predicts real-time stock prices." },
    { title: "Crypto Payment Gateway", desc: "Create a secure crypto payment gateway for small businesses." },
  ],
  sustainability: [
    { title: "Smart Energy Tracker", desc: "Build an app that helps monitor and reduce energy consumption." },
    { title: "Water Waste Monitor", desc: "Develop an application to track and minimize household water wastage." },
    { title: "Carbon Footprint Reducer", desc: "Create a platform to encourage users to reduce their carbon footprint." },
  ],
};
const words = ["You", "Innovation ", "FinTech ", "AI Revolution ", "Blockchain "];


const Hackathon = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [openProblem, setOpenProblem] = useState(null);

  useEffect(() => {
    // Crypto Icons Animation
    
      gsap.registerPlugin(ScrollTrigger);
    
      // 🎭 Crypto Icons - Floating + Slight Rotation
      gsap.utils.toArray(".crypto-icon").forEach((icon, index) => {
        gsap.to(icon, {
          y: index % 2 === 0 ? 20 : -20, // Alternate up & down movement
          rotate: index % 2 === 0 ? 5 : -5, // Slight rotation effect
          repeat: -1,
          yoyo: true,
          duration: gsap.utils.random(2, 2.5), // Randomized timing for organic movement
          ease: "power1.inOut",
        });
      });
    
      // 🚀 Hero Section - Staggered Fade-in for Smooth Transition
      gsap.from([".hackathonhero-title", ".hackathonhero-subtitle", ".hackathonhero-button"], {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.3,
        ease: "power2.out",
      });
    
      // 📜 Sections - Fade-in on Scroll with Better Timing
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
    
      // 🔄 Timeline - Left/Right Slide-in Animation
      gsap.utils.toArray(".timeline-event").forEach((event, index) => {
        gsap.from(event, {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100, // Alternates left & right
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: event,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    
      // ✨ Tracks & FAQ Cards - Smooth Pop-in Effect
      gsap.from(".track-card, .faq-card", {
        opacity: 0,
        y: 50,
        scale: 0.9,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tracks-grid, .faqs-container",
          start: "top 85%",
          toggleActions: "play none none reverse",
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
      const starContainers = document.querySelectorAll(".star-container");
      starContainers.forEach((container) => {
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

      let tl = gsap.timeline({ repeat: -1 });
      words.forEach((word, i) => {
        tl.to(".dynamic-word", {
          duration: 1,
          text: word, // Changes text dynamically
          ease: "power2.out",
        }).to(".hackathonhero-title", { opacity: 0, duration: 0.5, delay: 0.5 }) // Fade out
          .to(".hackathonhero-title", { opacity: 1, duration: 0.5 }); // Fade in with new word
      });

      // Cursor trail logic
      let lastX = 0;
      let lastY = 0;
      const createTrail = (e) => {
        const trail = document.createElement("div");
        trail.className = "cursor-trail";
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;
        document.body.appendChild(trail);

        // Animate the trail
        gsap.to(trail, {
          opacity: 0,
          scale: 1.5,
          duration: 1.5,
          onComplete: () => trail.remove(), // Remove the trail element after animation
        });
      };

      const handleMouseMove = (e) => {
        const distance = Math.sqrt(
          Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2)
        );
    
        // Only create a trail if the cursor has moved a significant distance
        if (distance > 5) {
          lastX = e.clientX;
          lastY = e.clientY;
          createTrail(e);
        }
      };

      // Add mousemove event listener
      window.addEventListener("mousemove", handleMouseMove);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
  }, []);

  const handleTrackClick = (trackId) => {
    setSelectedTrack(selectedTrack === trackId ? null : trackId);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  const toggleProblem = (index) => {
    setOpenProblem(openProblem === index ? null : index);
  };

  return (
    <div className="hackathon-container">

      {/* Sidebar */}
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
        <h1 className="hackathonhero-title">The Future of <span className="dynamic-word">You</span> 🚀</h1>
        <p className="hackathonhero-subtitle">
          Build the next-gen Fin-Tech solutions in this thrilling hackathon!
        </p>
        <button className="hackathonhero-button">Get Started</button>
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

      {/* Tracks Section */}
      <section id="tracks" className="tracks">
        <div className="star-container"></div>
        <h2 className="tracks-title">Hackathon Tracks</h2>
        <div className="tracks-grid">
          {tracks.map((track) => (
            <div
              key={track.id}
              className={`track-card ${selectedTrack === track.id ? "active" : ""}`}
              onClick={() => handleTrackClick(track.id)}
            >
              <h3 className="track-title">{track.title}</h3>
              <p className="track-desc">{track.desc}</p>
              <button className="view-details-btn">
                {selectedTrack === track.id ? "Hide Details" : "View Details"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Themes Section (Appears on Track Click) */}
      {selectedTrack && (
        <section className="problems">
          <h2 className="problems-title">
            {tracks.find((t) => t.id === selectedTrack)?.title} - Problem Statements
          </h2>
          <div className="problems-grid">
            {problemStatements[selectedTrack].map((problem, index) => (
              <div
                key={index}
                className={`problem-card ${openProblem === index ? "expanded" : ""}`}
                onClick={() => toggleProblem(index)}
              >
                <h3 className="problem-title">{problem.title}</h3>
                {openProblem === index && <p className="problem-desc">{problem.desc}</p>}
                <button className="view-details-btn">
                  {openProblem === index ? "Hide Details" : "View Details"}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
  
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
              {openFAQ === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hackathon;
