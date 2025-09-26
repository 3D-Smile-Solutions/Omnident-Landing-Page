// Testimonial.js
import React from 'react';
import { FiStar, FiCheckCircle } from 'react-icons/fi';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="section-title">
          Elite Practices Are Already Winning with OmniDent
        </h2>
        <p className="section-subtitle">
          Join 300+ forward-thinking teams transforming how they engage patients.
        </p>
        
        <div className="quote-container">
          <div className="quote-mark-left">"</div>
          <div className="quote-content">
            <div className="stars-container">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="star-icon" />
              ))}
            </div>
            <p className="quote-text">
              "In just 3 months, our bookings grew 60%. Patients get answers instantly, and my staff finally has breathing room instead of being stuck on the phone."
            </p>
            <div className="quote-author">
              <div className="author-name">Dr. Sarah Martinez</div>
              <div className="author-title">Martinez Family Dentistry</div>
            </div>
          </div>
          <div className="quote-mark-right">"</div>
        </div>
        
        <div className="integrations-container">
          <h3 className="integrations-title">Seamless Integration with Your Existing PMS</h3>
          <p className="integrations-subtitle">Connect with 50+ practice management systems in under 15 minutes. No technical expertise required.</p>
          
          <div className="integrations-logos">
            <div className="integration-logo">curve</div>
            <div className="integration-logo">eaglesoft</div>
            <div className="integration-logo">opendental</div>
            <div className="integration-logo">FUSE</div>
            <div className="integration-logo">DENTRIX</div>
            <div className="integration-logo">denticon</div>
          </div>
        </div>

        <div className="testimonial-cta-box">
          <h3 className="cta-box-title">Ready to transform your patient journey?</h3>
          <p className="cta-box-subtitle">
            See how OmniDent AI can automate your practice operations and boost patient satisfaction.
          </p>
          <div className="cta-box-buttons">
            <button className="cta-primary-btn">Get A Demo</button>
            <button className="cta-secondary-btn">View Testimonials</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;