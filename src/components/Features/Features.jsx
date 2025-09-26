// Features.js
import React from 'react';
import { FiCalendar, FiMessageSquare, FiClock, FiCheckCircle, FiStar } from 'react-icons/fi';
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

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-box cyan">
              <FiCalendar className="feature-icon" />
            </div>
            <h3 className="feature-title">AI-Powered Scheduling</h3>
            <p className="feature-description">
              Intelligent appointment booking that understands patient preferences, provider availability, and treatment requirements.
            </p>
            <ul className="feature-list">
              <li>• Reduces scheduling conflicts by 85%</li>
              <li>• Optimizes provider utilization</li>
              <li>• Handles complex multi-appointment procedures</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box teal">
              <FiMessageSquare className="feature-icon" />
            </div>
            <h3 className="feature-title">Treatment Plan Communication</h3>
            <p className="feature-description">
              Clear, personalized explanations of procedures, costs, and timelines that improve treatment acceptance.
            </p>
            <ul className="feature-list">
              <li>• Automated treatment explanations</li>
              <li>• Cost breakdowns & insurance details</li>
              <li>• Increases case acceptance by 35%</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box indigo">
              <FiClock className="feature-icon" />
            </div>
            <h3 className="feature-title">Smart Reminders & Confirmations</h3>
            <p className="feature-description">
              Proactive patient communication that adapts timing and channel based on patient behavior patterns.
            </p>
            <ul className="feature-list">
              <li>• Cuts no-show rates by 60%</li>
              <li>• Automated confirmation workflows</li>
              <li>• Personalized reminder timing</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box yellow">
              <FiCheckCircle className="feature-icon" />
            </div>
            <h3 className="feature-title">Post-Treatment Follow-up</h3>
            <p className="feature-description">
              Automated care coordination including medication reminders, healing progress checks, and satisfaction surveys.
            </p>
            <ul className="feature-list">
              <li>• Automated recovery check-ins</li>
              <li>• Patient satisfaction monitoring</li>
              <li>• Improves patient retention by 45%</li>
            </ul>
          </div>
        </div>

        <div className="central-stats">
          <div className="central-stat">
            <div className="central-stat-number cyan">3X</div>
            <div className="central-stat-label">Faster Response</div>
          </div>
          <div className="central-stat">
            <div className="central-stat-number teal">24/7</div>
            <div className="central-stat-label">Availability</div>
          </div>
          <div className="central-stat">
            <div className="central-stat-number indigo">100%</div>
            <div className="central-stat-label">Automated</div>
          </div>
        </div>

        <div className="features-grid-secondary">
          <div className="feature-card">
            <div className="feature-icon-box purple">
              <FiCheckCircle className="feature-icon" />
            </div>
            <h3 className="feature-title">Insurance Verification</h3>
            <p className="feature-description">
              Automated insurance eligibility checks and pre-authorization handling to eliminate billing surprises.
            </p>
            <ul className="feature-list">
              <li>• Real-time eligibility verification</li>
              <li>• Automated pre-auth requests</li>
              <li>• Reduces claim denials by 40%</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box pink">
              <FiStar className="feature-icon" />
            </div>
            <h3 className="feature-title">Practice Analytics Dashboard</h3>
            <p className="feature-description">
              Real-time insights into patient engagement, conversion rates, staff efficiency, and revenue optimization opportunities.
            </p>
            <ul className="feature-list">
              <li>• Real-time performance metrics</li>
              <li>• ROI tracking & reporting</li>
              <li>• Predictive growth analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;