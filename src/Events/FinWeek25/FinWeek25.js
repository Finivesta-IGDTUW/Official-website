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
        <div className="arrow-container">
          <a href="#top" className="arrows-pulse">
            <i className="fa fa-angle-down fa-2x animated"></i>
          </a>
          <a href="#top" className="arrows-pulse delay-1">
            <i className="fa fa-angle-down fa-2x animated"></i>
          </a>
          <a href="#top" className="arrows-pulse delay-2">
            <i className="fa fa-angle-down fa-2x animated"></i>
          </a>
        </div>
      </div>
      <h2 className="timeline-title">Timeline</h2>
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
        
        <div className="timeline-box-container cont-left finweek-first">
          <div className="timeline-box left left-line">
            <div className="timeline-content" data-aos="fade-right">
              <h3 className="event-name">Speaker Session 01</h3>
              <button className="event-button" onClick={() => window.location.href = '#'}>Registrations Open Soon</button>
            </div>
            <div className="circle"></div>
          </div>
          <div className="timeline-box right">
            <div className="timeline-content" data-aos="fade-left">
              <div className="event-date-day">
                <p className="event-date">Feb 10th, 2025</p>
                <p className="event-day">Monday</p>
                <p className="event-venue"><b>Venue: </b> TBA</p>
              <p className="event-participation"><b>Participation: </b> Only IGDTUW</p>
              </div>
              </div>
          </div>
        </div>

        <div className="timeline-box-container cont-right">
          <div className="timeline-box left">
            <div className="timeline-content" data-aos="fade-right">
              <div className="event-date-day">
                <p className="event-date">Feb 11th, 2025</p>
                <p className="event-day">Tuesday</p>
                <p className="event-venue"><b>Venue: </b> Seminar Hall</p>
                <p className="event-participation"><b>Participation: </b> Only IGDTUW</p>
              </div>
            </div>
          </div>
          <div className="timeline-box right right-line">
            <div className="timeline-content" data-aos="fade-left">
            <h3 className="event-name">Finopoly</h3>
            <button className="event-button" onClick={() => window.location.href = 'https://forms.gle/1YarFHmgLMUB1nkc7'}>Register Here</button>
          </div>
          <div className="circle"></div>
          </div>
        </div>

        <div className="timeline-box-container cont-left">
          <div className="timeline-box left left-line">
            <div className="timeline-content" data-aos="fade-right">
            <h3 className="event-name">Game Night</h3>
              <button className="event-button" onClick={() => window.location.href = '#'}>Registrations Open Soon</button>
            </div>
            
          <div className="circle"></div>
          </div>
          <div className="timeline-box right">
            <div className="timeline-content" data-aos="fade-left">
            <div className="event-date-day">
                <p className="event-date">Feb 12th, 2025</p>
                <p className="event-day">Wednesday</p>
                <p className="event-venue"><b>Venue: </b> Online</p>
                <p className="event-participation"><b>Participation: </b> Open For All</p>
              </div>
              
            </div>
          </div>
        </div>

        <div className="timeline-box-container cont-right">
          <div className="timeline-box left">
            <div className="timeline-content" data-aos="fade-right">
            <div className="event-date-day">
                <p className="event-date">Feb 13th, 2025</p>
                <p className="event-day">Thursday</p>
                <p className="event-venue"><b>Venue: </b> Online</p>
                <p className="event-participation"><b>Participation: </b> Open For All</p>
              </div>
            </div>
          </div>
          <div className="timeline-box right right-line">
            <div className="timeline-content" data-aos="fade-left">
            <h3 className="event-name">Speaker Session 02</h3>
              <button className="event-button" onClick={() => window.location.href = '#'}>Registrations Open Soon</button>
            </div>
          <div className="circle"></div>
          </div>
        </div>

        <div className="timeline-box-container cont-left finweek-last">
          <div className="timeline-box left left-line last-box">
            <div className="timeline-content" data-aos="fade-right">
            <h3 className="event-name">Pitch Desk : B Plan</h3>
              <button className="event-button" onClick={() => window.open('https://unstop.com/competitions/pitch-desk-business-plan-competition-finivestas-finance-week-igdtuw-delhi-1377804', '_blank', 'noopener,noreferrer')}>Register Here</button>
            </div>
            
          <div className="circle"></div>
          </div>
          <div className="timeline-box right">
            <div className="timeline-content" data-aos="fade-left">
            <div className="event-date-day">
                <p className="event-date">Feb 14th, 2025</p>
                <p className="event-day">Friday</p>
                <p className="event-venue"><b>Venue: </b> IIIT-D</p>
                
              <p className="event-participation"><b>Participation: </b> Open For All</p>
              </div>
              
            </div>
          </div>
        </div>

        <div className="oval-base"></div>
      </div>
    </div>
  );
};

export default FinWeek25;