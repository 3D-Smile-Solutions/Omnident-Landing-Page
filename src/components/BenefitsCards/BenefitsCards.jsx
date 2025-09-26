// BenefitsCards.js
import React, { useState, useEffect, useRef } from 'react';
import './BenefitsCards.css';

const BenefitsCards = () => {
  const cardsRef = useRef(null);
  const [cardTranslates, setCardTranslates] = useState([0, 0, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (cardsRef.current) {
        const rect = cardsRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.5)));
        
        setCardTranslates([
          scrollProgress * -100,
          scrollProgress * -200,
          scrollProgress * -300
        ]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="benefits-cards-section" ref={cardsRef}>
      <div className="section-container">
        <h2 className="section-title center-text">
          Smarter Workflows. Happier Patients. Less Stress.
        </h2>
        
        <div className="cards-stack-container">
          <div 
            className="stacked-card card-1"
            style={{ 
              transform: `translateX(-50%) translateY(${cardTranslates[0]}px)`,
              opacity: cardTranslates[0] < -50 ? 0 : 1
            }}
          >
            <div className="benefit-card gradient-cyan">
              <div className="benefit-number">60%</div>
              <h3 className="benefit-title">Revenue Increase</h3>
              <p className="benefit-description">
                Practices see significant revenue improvements within 90 days of implementation.
              </p>
            </div>
          </div>

          <div 
            className="stacked-card card-2"
            style={{ 
              transform: `translateX(-50%) translateY(${cardTranslates[1]}px)`,
              opacity: cardTranslates[1] < -100 ? 0 : 1
            }}
          >
            <div className="benefit-card gradient-teal">
              <div className="benefit-number">100%</div>
              <h3 className="benefit-title">Happier Patients</h3>
              <p className="benefit-description">
                Instant communication, clear instructions, no waiting on hold.
              </p>
            </div>
          </div>

          <div 
            className="stacked-card card-3"
            style={{ 
              transform: `translateX(-50%) translateY(${cardTranslates[2]}px)`,
              opacity: cardTranslates[2] < -150 ? 0 : 1
            }}
          >
            <div className="benefit-card gradient-indigo">
              <div className="benefit-number">15+</div>
              <h3 className="benefit-title">Hours Saved</h3>
              <p className="benefit-description">
                Time Saver — Eliminate back-and-forth calls and free up your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsCards;