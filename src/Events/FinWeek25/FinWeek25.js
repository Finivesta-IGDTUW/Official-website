import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FinWeek25.css"; 

const FinWeek25 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="finweek25">
      <div className="banner">
        <div class="arrow-buttons">
          <div className="arrows-pulse">
              <i className="fa fa-angle-down fa-2x animated"></i>
            </div>
            <div className="arrows-pulse delay-1">
              <i className="fa fa-angle-down fa-2x animated"></i>
            </div>
            <div href="" className="arrows-pulse delay-2">
              <i className="fa fa-angle-down fa-2x animated"></i>
            </div>
        </div>
      </div>
      <h2 className="timeline-title">Events This Week</h2>
      <div className="timeline-landmark">
        <div className="ludo-piece">
          <div className="oval-base"></div>
          <div className="frustum"></div>
          <div className="dot"></div>
        </div>
        <div className="timeline-line"></div>
      </div>
      <div className="timeline">
      <div className="timeline-line-full"></div>
        {[
          { date: "Feb 10th, 2025", day: "Monday", name: "Speaker Session 1", venue: "Seminar Hall", participation: "Only IGDTUW", form: "#", link: "#" },
          { date: "Feb 11th, 2025", day: "Tuesday", name: "Finopoly", venue: "Seminar Hall", participation: "Open For All", form: "#", link: "#" },
          { date: "Feb 12th, 2025", day: "Wednesday", name: "Game Night", venue: "Online", participation: "Open For All", form: "#", link: "#" },
          { date: "Feb 13th, 2025", day: "Thursday", name: "Speaker Session 2", venue: "Online", participation: "Open For All", form: "#", link: "#" },
          { date: "Feb 14th, 2025", day: "Friday", name: "B-Plan", venue: "IIIT-D", participation: "Open For All", form: "#", link: "#" },
        ].map((event, index) => (
          <div
            key={index}
            className={`timeline-box ${index % 2 === 0 ? "left" : "right"}`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >  
              <p className="event-date">{event.date}</p>
              <p className="event-day">{event.day}</p>
              <h3 className="event-name">{event.name}</h3>
              <p className="event-venue">Venue: {event.venue}</p>
              <p className="event-participation">Participation: {event.participation}</p>
              <a href={event.form} className="event-form">Registration Form</a>
              <a href={event.link} className="event-link">Know More</a>
            </div>
        ))}
        <div className="timeline-line"></div>
        <div className="golf-hole"></div>
      </div>
    </div>
  );
};

export default FinWeek25;