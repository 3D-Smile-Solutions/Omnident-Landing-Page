// Hero.js
import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-effect-1"></div>
      <div className="hero-bg-effect-2"></div>
      
      <div className="hero-container-full">
        <div className="hero-content">
          <h1 className="hero-title">
            Pioneer The Future<br />
            Of Patient<br />
            Engagement
          </h1>
          <p className="hero-subtitle">
            OmniDent AI turns your traffic into new patient appointments, without lifting your finger.
          </p>
          <div className="hero-cta-container">
            <button className="hero-cta-btn">
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
        <div className="hero-image-container">
          <div className="hero-image-placeholder">
            <div className="image-placeholder-content">
              <span>Hero Image</span>
            </div>
          </div>
          <div className="hero-image-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;