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
            <iframe 
              class="cal-embed" 
              name="cal-embed=omnident-discovery" 
              title="Book a call" 
              data-cal-link="omnident.ai/omnident-discovery" 
              allow="payment" 
              src="https://app.cal.com/omnident.ai/omnident-discovery/embed?embed=omnident-discovery&layout=month_view&theme=dark&embedType=inline&overlayCalendar=true" 
              style={{
                height: '555px',
                width: '100%',
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;