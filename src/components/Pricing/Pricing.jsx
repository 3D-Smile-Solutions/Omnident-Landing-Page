// Pricing.js
import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="section-container">
        <div className="pricing-header">
          <span className="pricing-badge">
            Founding Member Pricing LIMITED: 47 SPOTS
          </span>
        </div>
        
        <h2 className="section-title center-text">
          Investment That Transforms Everything
        </h2>
        <p className="section-subtitle center-text">
          Join an exclusive cohort of forward-thinking practices. This isn't just software—it's your competitive edge.
        </p>

        <div className="pricing-grid">
          <div className="pricing-card featured">
            <div className="pricing-tags">
              <span className="tag purple">Monthly</span>
              <span className="tag yellow">Yearly</span>
            </div>
            <div className="pricing-card-content">
              <div className="price-amount">
                $1,194
                <span className="price-period">/per Month</span>
              </div>
              <div className="price-details">
                Implementation Investment: <span className="price-highlight">$5,000</span><br />
                <span className="price-note">One-time setup and training fee to get you operational within 72 hours</span>
              </div>
              
              <div className="countdown-warning">
                <p>⚠️ COUNTDOWN: Limited spots available. Price increases to $1,800/month after founding cohort fills.</p>
              </div>
              
              <div className="guarantee-text">
                ✓ 30-Day Performance Guarantee: If we don't deliver measurable improvements in 30 days, we'll refund your entire first month plus implementation costs.
              </div>
              
              <button className="pricing-cta-btn">
                BEGIN TRANSFORMATION
              </button>
            </div>
          </div>

          <div className="pricing-card secondary">
            <span className="tag yellow">Built In</span>
            <h3 className="pricing-card-title">
              Marketing partner inside OmniDent.ai. Uses platform metrics to optimize spend.
            </h3>
            <ul className="pricing-features">
              <li>
                <FiCheckCircle className="check-icon" />
                <span>$1,000 activation credit included</span>
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                <span>SEO, landing pages, and paid campaign builds</span>
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                <span>Continuous tuning from OmniDent.ai analytics</span>
              </li>
            </ul>
            <button className="pricing-secondary-btn">
              Book a Strategy Call →
            </button>
          </div>

          <div className="pricing-card secondary">
            <span className="tag purple">Core Platform</span>
            <h3 className="pricing-card-title">
              Automated intake, two-way messaging, scheduling, and live practice analytics.
            </h3>
            <div className="price-amount secondary">
              $995/mo
              <div className="price-note">+$5,000 implementation</div>
            </div>
            <ul className="pricing-features">
              <li>
                <FiCheckCircle className="check-icon" />
                <span>Patient engagement and booking automation</span>
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                <span>Analytics dashboard, CFL, CPA, show rates, ROI</span>
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                <span>HIPAA-ready architecture and integrations</span>
              </li>
            </ul>
            <button className="pricing-primary-btn">
              BOOK A DEMO →
            </button>
          </div>

          <div className="pricing-card secondary">
            <span className="tag orange">Optional</span>
            <h3 className="pricing-card-title">
              Social media partner for practices that want growth in reach and content.
            </h3>
            <ul className="pricing-features">
              <li>
                <FiCheckCircle className="check-icon" />
                <span>Content planning and production</span>
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                <span>Platform growth and engagement tactics</span>
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                <span>Aligns with campaigns from ConceptServices</span>
              </li>
            </ul>
            <button className="pricing-secondary-btn">
              Grow Social Media →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;