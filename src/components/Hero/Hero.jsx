// Hero.js
import React from 'react';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import heroVideo from '../../assets/HeroBgAnimation.mp4';
import './Hero.css';

const Hero = () => {
  const handleScrollToFinalCTA = () => {
    const finalCTASection = document.getElementById('final-cta-section');
    if (finalCTASection) {
      finalCTASection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero-section">
      {/* Full screen background video */}
      <div className="hero-video-bg">
        <div className="video-overlay"></div>
        <video 
          className="hero-video"
          autoPlay 
          muted 
          loop 
          playsInline
          poster="/path-to-poster-image.jpg"
        >
          <source src={heroVideo} type="video/mp4" />
          {/* Fallback image */}
          <img src="/path-to-fallback-image.jpg" alt="OmniDent AI Dashboard" />
        </video>
      </div>
      
      {/* Content on top of video */}
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Pioneer The Future<br />
            Of Patient<br />
            Engagement
          </h1>
          <p className="hero-subtitle">
            OmniDent AI turns your traffic into new patient appointments, 
            without lifting your finger.
          </p>
          <div className="hero-cta-container">
            <button 
              className="hero-cta-btn"
              onClick={handleScrollToFinalCTA}
            >
              <span>Book Your Demo → See ROI Potential</span>
            </button>
          </div>
          <div className="hero-badges">
            <span className="badge-item">
              <FiCheckCircle className="badge-icon" />
              <span>HIPAA Compliant</span>
            </span>
            <span className="badge-item">
              <FiCheckCircle className="badge-icon" />
              <span>OmniChannel</span>
            </span>
            <span className="badge-item">
              <FiCheckCircle className="badge-icon" />
              <span>30-day money back guarantee</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;