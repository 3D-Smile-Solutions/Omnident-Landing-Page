// Pricing.js
import React, { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import './Pricing.css';
import CountUp from '../SlideUp/CountUp';


const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleScrollToFinalCTA = () => {
    const finalCTASection = document.getElementById('final-cta-section');
    if (finalCTASection) {
      finalCTASection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Calculate prices based on toggle
  const monthlyPrice = 1194;
  const yearlyMonthlyPrice = 995; // Monthly price when paid yearly (about 17% discount)
  const displayPrice = isYearly ? yearlyMonthlyPrice : monthlyPrice;
  const yearlyTotal = yearlyMonthlyPrice * 12;
  const savings = (monthlyPrice * 12) - yearlyTotal;

  return (
    <section className="pricing-section">
      <div className="section-container">
        <div className="pricing-header">
          <span className="pricing-badge">
            🔥 Founding Member Pricing • LIMITED: 47 SPOTS
          </span>
        </div>
        
        <h2 className="section-title center-text">
          Investment That Transforms Everything
        </h2>
        <p className="section-subtitle center-text">
          Join an exclusive cohort of forward-thinking practices. This isn't just software—it's your competitive edge.
        </p>

        <div className="pricing-grid">
          {/* Featured Main Card */}
          <div className="pricing-card featured">
            {/* Pricing Toggle */}
            <div className="pricing-toggle">
              <button 
                className={`toggle-btn ${!isYearly ? 'active' : ''}`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              <button 
                className={`toggle-btn ${isYearly ? 'active' : ''}`}
                onClick={() => setIsYearly(true)}
              >
                Yearly
                {isYearly && <span className="savings-badge">Save ${savings}</span>}
              </button>
            </div>

            <div className="pricing-card-content">
              <div className="left-content">
                <div className="price-amount">
                  ${displayPrice}
                  <span className="price-period">
                    {isYearly ? '/per Month (billed annually)' : '/per Month'}
                  </span>
                </div>
                <div className="price-details">
                  Implementation Investment: <span className="price-highlight">$5,000</span>
                  <span className="price-note">One-time setup and training fee to get you operational within 72 hours</span>
                  {isYearly && (
                    <span className="price-note" style={{color: '#34d399', marginTop: '1rem', display: 'block'}}>
                      ✨ Annual billing: Save ${savings}/year (${Math.round(savings/12)}/month)
                    </span>
                  )}
                </div>
                
                <div className="countdown-warning">
                  <p>⚠️ COUNTDOWN: Limited spots available. Price increases to $1,800/month after founding cohort fills.</p>
                </div>
                
                <div className="guarantee-text">
                  30-Day Performance Guarantee: If we don't deliver measurable improvements in 30 days, we'll refund your entire first month plus implementation costs.
                </div>
                
                <button 
                  className="pricing-cta-btn"
                  onClick={handleScrollToFinalCTA}
                >
                  BEGIN TRANSFORMATION
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Cards Container */}
          <div className="secondary-cards-container">
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
              <button 
                className="pricing-cta-btn"
                onClick={() => handleExternalLink('https://calendly.com/concepcion-work/strategy')}
              >
                Book a Strategy Call →
              </button>
            </div>

            <div className="pricing-card secondary">
              <span className="tag purple">Core Platform</span>
              <h3 className="pricing-card-title">
                Automated intake, two-way messaging, scheduling, and live practice analytics.
              </h3>
              <div className="price-amount secondary">
                              $<CountUp
                                from={0}
                                to={995}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                              />/mo
                <div className="price-note">+$5,000 implementation</div>
                {isYearly && (
                  <div className="price-note" style={{color: '#34d399'}}>
                    Save ${(995-829)*12}/year with annual billing
                  </div>
                )}
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
              <button 
                className="pricing-cta-btn"
                onClick={handleScrollToFinalCTA}
              >
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
              <button 
                className="pricing-cta-btn"
                onClick={() => handleExternalLink('https://itfactorgroup.com/')}
              >
                Grow Social Media →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;