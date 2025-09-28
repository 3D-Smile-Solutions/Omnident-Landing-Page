import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import PatientJourney from './components/PatientJourney/PatientJourney';
import Testimonial from './components/Testimonial/Testimonial';
import BenefitsCards from './components/BenefitsCards/BenefitsCards';
import Channels from './components/Channels/Channels';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';
import LightRays from './components/SlideUp/LightRays';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="omnident-container">
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Hero />
        <div id="patient-journey-section">
          <PatientJourney />
        </div>
        <div id="testimonial-section">
          <Testimonial />
        </div>
        <div id="channels-section">
          <Channels />
        </div>
        <div id="features-section">
          <Features />
        </div>
        <div id="pricing-section">
          <Pricing />
        </div>
        <div id="final-cta-section">
          <FinalCTA />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;