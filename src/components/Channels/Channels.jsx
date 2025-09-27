// Channels.js
import React from 'react';
import { FiMessageSquare, FiMonitor, FiPhone } from 'react-icons/fi';
import SpotlightCard from '../SlideUp/SpotlightCard';
import './Channels.css';

const Channels = () => {
  return (
    <section className="channels-section">
      <div className="section-container">
        <h2 className="section-title center-text">
          One AI, Three Ways to Connect with Patients
        </h2>
        <p className="section-subtitle center-text">
          OmniDent.ai is a unified intelligent system that patients can access through their preferred channel: Text, web chat, or phone call. One powerful AI, delivering instant results, no matter how they choose to connect.
        </p>
        
        <div className="channels-grid">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(238, 255, 0, 0.21)">
              <div className="channel-icon-box cyan">
                <FiMessageSquare className="channel-icon" />
              </div>
              <h3 className="channel-title">TEXT MESSAGE ACCESS</h3>
              <p className="channel-description">
                Patients text your practice number and instantly connect with OmniDent.ai for scheduling, questions, and more.
              </p>
              <ul className="channel-features">
                <li>• Prefer quick text conversations</li>
                <li>• Want to book on-the-go</li>
                <li>• Need appointment reminders</li>
              </ul>
              <button className="channel-btn cyan">
                95% delivery rate • Instant responses
              </button>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="channel-icon-box teal">
                <FiMonitor className="channel-icon" />
              </div>
              <h3 className="channel-title">WEBSITE CHAT WIDGET</h3>
              <p className="channel-description">
                A sleek chat bubble on your website connects visitors directly to OmniDent.ai for instant assistance.
              </p>
              <ul className="channel-features">
                <li>• Are browsing your website</li>
                <li>• Have immediate questions</li>
                <li>• Want to book instantly</li>
              </ul>
              <button className="channel-btn teal">
                24/7 availability • No app needed
              </button>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 145, 0, 0.2)">
              <div className="channel-icon-box indigo">
                <FiPhone className="channel-icon" />
              </div>
              <h3 className="channel-title">PHONE CALL ACCESS</h3>
              <p className="channel-description">
                Patients call your practice number and speak naturally with OmniDent.ai's voice assistant.
              </p>
              <ul className="channel-features">
                <li>• Prefer talking to typing</li>
                <li>• Need complex help</li>
                <li>• Call after hours</li>
              </ul>
              <button className="channel-btn indigo">
                Natural conversation • Never on hold
              </button>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default Channels;