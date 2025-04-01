import { useEffect, useState } from "react";
import gsap from "gsap";
// import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiLitecoin, SiCardano, SiRipple } from "react-icons/si";
import { TextPlugin } from "gsap/TextPlugin";
import "./Hackathon.css";
import { FaUsers, FaLightbulb, FaTrophy, FaBookOpen } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaRobot, FaGlobe, FaUserGraduate } from "react-icons/fa";
import {   FaHome, FaInfoCircle, FaListAlt, FaQuestionCircle, FaRocket, FaStar } from "react-icons/fa";
// Data for Timeline, Tracks, FAQs
gsap.registerPlugin(ScrollTrigger, TextPlugin);


const timelineEvents = [
  { date: "March 25", title: "Registrations Open", desc: "Start forming your team and register for the event." },
  { date: "April 5", title: "Workshops & Mentorship", desc: "Learn from experts and get guidance for your project." },
  { date: "April 15", title: "Project Submission", desc: "Submit your final project before the deadline." },
  { date: "April 20", title: "Judging & Results", desc: "Top teams will be selected and winners announced!" },
];

// const tracks = [
//   { id: "ai_ml", title: "AI & ML", desc: "Innovate with Artificial Intelligence & Machine Learning." },
//   { id: "blockchain", title: "Blockchain", desc: "Build secure decentralized applications using blockchain." },
//   { id: "fintech", title: "FinTech", desc: "Revolutionize the finance industry with tech." },
//   { id: "sustainability", title: "Sustainability", desc: "Create solutions for a greener future." },
// ];

const faqs = [
  { question: "Who can participate?", answer: "Anyone from any background with a passion for tech and innovation!" },
  { question: "Is there a registration fee?", answer: "No, the hackathon is completely free to join!" },
  { question: "Do I need a team?", answer: "You can join as an individual or form a team during the event." },
  { question: "What are the prizes?", answer: "Exciting cash prizes, goodies, and networking opportunities!" },
];




const problemStatements = [
  { title: "AI Chatbot for Mental Health", desc: "Develop a chatbot that provides mental health support using AI." },
  { title: "Decentralized Voting System", desc: "Implement a voting system that ensures transparency using blockchain." },
  { title: "Stock Price Prediction", desc: "Develop an ML model that predicts real-time stock prices." },
  { title: "Smart Energy Tracker", desc: "Build an app that helps monitor and reduce energy consumption." },
];
const words = [ "FinTech ", "AI Revolution ","Innovation", "Blockchain "];


const Hackathon = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    // Crypto Icons Animation
    
      gsap.registerPlugin(ScrollTrigger);
    
      
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
        tl.to(".hackathonhero-title span", { // Targeting only the span inside the h1
          duration: 3,
          text: word, // Only changes the word inside
          ease: "power2.out",
        })
        .to(".hackathonhero-title span", { opacity: 0, duration: 1.5, delay: 1 }) // Smooth fade out
        .to(".hackathonhero-title span", { opacity: 1, duration: 1 }); // Fade in with the new word
      });
    
    }, []);
    
    
  

    const [currentIndex, setCurrentIndex]=useState(0);

    useEffect(()=>{
      const interval=setInterval(()=>{
        nextProblem();
      },5000); // auto-scroll every 5 seconds

      return()=> clearInterval(interval);
    }, [currentIndex]);

    const prevProblem=()=>{
      setCurrentIndex((prevIndex)=>
        prevIndex===0 ? problemStatements.length-1:prevIndex-1
      );
    };

    const nextProblem=()=> {
      setCurrentIndex((prevIndex)=>
      prevIndex===problemStatements.length-1?0:prevIndex+1
    );
  };
  

    // Generate stars for all sections
  



  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  //   const distance = Math.sqrt(
  //     Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2)
  //   );

  //   // Only create a trail if the cursor has moved a significant distance
  //   if (distance > 5) {
  //     lastX = e.clientX;
  //     lastY = e.clientY;
  //     createTrail(e);
  //   }
  // };

  // window.addEventListener("mousemove", handleMouseMove);

  // Cleanup event listener on component unmount
//   return () => {
//     window.removeEventListener("mousemove", handleMouseMove);
//   };
// }, []);
//   // Cleanup event listener on component unmount
//   return () => {
//     window.removeEventListener("mousemove", handleMouseMove);
//   };
// }, []);

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
        <h1 className="hackathonhero-title">The Future of  <span>Innovation</span>🚀</h1>
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
      {/* Tracks Section */}
{/* Tracks Section */}
<section  id="tracks" className="features">
  <div className="star-container"></div>
  <h2 className="features-title">Tracks</h2>
  <div className="features-grid">
    {[
      { text: "AI & ML", icon: <FaRobot className="feature-icon" /> },
      { text: "Blockchain", icon: <FaGlobe className="feature-icon" /> },
      { text: "Beginner", icon: <FaUserGraduate className="feature-icon" /> },
      { text: "Open Innovation", icon: <FaLightbulb className="feature-icon" /> },
    ].map((feature, index) => (
      <div className="feature-card" key={index}>
        {feature.icon} {/* Renders the respective icon */}
        <h3 className="feature-text">{feature.text}</h3>
      </div>
    ))}
  </div>
</section>

{/* Themes Section (Appears on Track Click) */}
{/* {selectedTrack && (
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
)} */}




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
