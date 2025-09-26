// PatientJourney.js
import React from 'react';
import './PatientJourney.css';

const PatientJourney = () => {
  return (
    <section className="patient-journey-section">
      <div className="section-container">
        <h2 className="section-title">
          The Patient Journey, Simplified with OmniDent.ai
        </h2>
        <p className="section-subtitle">
          OmniDent AI turns first inquiries into lasting relationships boosting bookings,<br />
          reducing no shows, and building lifetime loyalty.
        </p>
        
        <div className="animation-placeholder">
          <div className="animation-placeholder-content">
            <span className="placeholder-text">ANIMATION HERE</span>
          </div>
        </div>
        
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">60%</div>
            <div className="stat-label">more bookings</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">40%</div>
            <div className="stat-label">fewer no-shows</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">hours saved per week</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientJourney;