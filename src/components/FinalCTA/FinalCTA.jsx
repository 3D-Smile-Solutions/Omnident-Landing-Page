// FinalCTA.js
import React from 'react';
import { FiClock, FiPhone, FiCalendar } from 'react-icons/fi';
import './FinalCTA.css';

const FinalCTA = () => {
  const calendarDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const timeSlots = ['12:00am', '1:30am', '2:00am', '2:30am', '3:00am'];

  return (
    <section className="final-cta-section">
      <div className="final-cta-container">
        <h2 className="section-title center-text">
          Your Competitors Are<br />Already Using AI
        </h2>
        <p className="section-subtitle center-text">
          Every day without OmniDent.ai means lost patients and revenue.<br />
          Transform your practice today.
        </p>
        
        <button className="final-cta-btn">
          BOOK DISCOVERY CALL
        </button>

        <div className="scheduling-container">
          <h3 className="scheduling-title">
            Ready to Transform Your Practice?<br />
            Book Your Discovery Call
          </h3>
          <p className="scheduling-subtitle">
            See OmniDent.ai in action. Get a personalized demo and learn<br />
            how we can revolutionize your patient experience.
          </p>
          
          <div className="calendar-widget">
            <div className="calendar-content">
              <div className="calendar-info">
                <h4 className="calendar-meeting-title">OmniDent Discovery</h4>
                <p className="calendar-meeting-description">
                  By the end of this call you will know exactly what OmniDent.ai is and how it will transform the way you run your practice forever.
                </p>
                <div className="calendar-details">
                  <div className="calendar-detail">
                    <FiClock className="detail-icon" />
                    <span>30m - 45m</span>
                  </div>
                  <div className="calendar-detail">
                    <FiPhone className="detail-icon" />
                    <span>Google Meet</span>
                  </div>
                  <div className="calendar-detail">
                    <FiCalendar className="detail-icon" />
                    <span>Asia/Karachi</span>
                  </div>
                </div>
              </div>
              <div className="calendar-picker">
                <div className="calendar-header">
                  <div className="calendar-month">September 2025</div>
                  <div className="calendar-days">
                    {calendarDays.map((day) => (
                      <div key={day} className="calendar-day-label">{day}</div>
                    ))}
                    {[...Array(30)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`calendar-day ${i === 16 ? 'selected' : ''}`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="time-slots">
                  <div className="slots-label">Available Times:</div>
                  {timeSlots.map((time) => (
                    <button 
                      key={time}
                      className="time-slot"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;