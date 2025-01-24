import React from "react";
import "./Events.css";
import events from "./EventsList"; // Import the event data

const Events = () => {

  const renderEventsByYear = (year) => {
    return events
      .filter(event => event.year === year)
      .map((event, index) => (
        <div key={index} className="event-flex1">
          
          <div className="event-element">
            <div
              className="event-background-box"
              style={{ backgroundColor: event.backgroundColor }}
            ></div>
            <div className={`event-image-box event-element${index % 5 + 1}`}>
              <a divef={event.link} target="_blank" rel="noreferrer">
                <img src={event.photo} alt={event.name} />
              </a>
            </div>
          </div>
          <h2 className="event-title">{event.name}</h2>
        </div>
      ));
  };

  return (
    <div className="event-Events">
      <div className="event-events-header">
        <h1>Our Events</h1>
        <p>
          Discover the latest happenings and <br />
          exciting upcoming events here
        </p>
      </div>
      <h1 className="event-Year">2025</h1>
      <div className="event-divs">{renderEventsByYear(2025)}</div>
      <div className="event-green-line" />
      <h1 className="event-Year">2024</h1>
      <div className="event-divs">{renderEventsByYear(2024)}</div>
      <div className="event-green-line" />
      <h1 className="event-Year">2023</h1>
      <div className="event-divs">{renderEventsByYear(2023)}</div>
    </div>
  );
};

export default Events;