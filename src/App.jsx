// App.js
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
      {/* Main App Content */}
      <div className="omnident-container">
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Hero />
        <PatientJourney />
        <Testimonial />
        <BenefitsCards />
        <Channels />
        <Features />
        <Pricing />
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
};

export default App;