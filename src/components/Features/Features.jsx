// Features.js
import React from 'react';
import { FiCalendar, FiMessageSquare, FiClock, FiCheckCircle, FiStar } from 'react-icons/fi';
import MagicBento from '../SlideUp/MagicBento';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="section-container">
        <h2 className="section-title center-text">
          Core Features That Drive Results
        </h2>
        <p className="section-subtitle center-text">
          Each feature is purpose-built for dental practices — fully HIPAA compliant, seamlessly integrated, and focused on delivering measurable improvements to your bottom line.
        </p>
        <div className='features-flex'>
          <MagicBento 
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;