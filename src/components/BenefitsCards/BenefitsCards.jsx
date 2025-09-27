// BenefitsCards.js
import React, { useState, useEffect, useRef } from 'react';
import './BenefitsCards.css';
import ScrollStack, { ScrollStackItem } from '../SlideUp/ScrollStack';

const BenefitsCards = () => {
  const cardsRef = useRef(null);

  return (
    <section className="benefits-cards-section" ref={cardsRef}>
      <div className="section-container">
        <h2 className="section-title center-text">
          Smarter Workflows. Happier Patients. Less Stress.
        </h2>
        
        <div className="cards-stack-container">
          <ScrollStack 
            useWindowScroll={true}
            itemDistance={100}
            itemScale={0.03}
            itemStackDistance={40}
            stackPosition="40%"
            scaleEndPosition="15%"
            baseScale={0.9}
            scaleDuration={0.3}
            rotationAmount={0}
            blurAmount={2}
          >
            <ScrollStackItem>
              <h2>60%</h2>
              <h2>Revenue Increase</h2>
              <p>Practices see significant revenue improvements within 90 days of implementation.</p>
            </ScrollStackItem>
            <ScrollStackItem>
              <h2>100%</h2>
              <h2>Happier Patients</h2>
              <p>Instant communication, clear instructions, no waiting on hold.</p>
            </ScrollStackItem>
            <ScrollStackItem>
              <h2>15+</h2>
              <h2>Hours Saved</h2>
              <p>Time Saver — Eliminate back-and-forth calls and free up your team.</p>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </div>
    </section>
  );
};

export default BenefitsCards;