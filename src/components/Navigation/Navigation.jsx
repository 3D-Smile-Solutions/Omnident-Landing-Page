import React from 'react';
import PillNav from './PillNav';
import logo from '../../assets/Logo.png';
import './Navigation.css';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const handleExternalLink = (e, url) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='Navigation'>
      <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Features', href: '#features', onClick: (e) => handleNavClick(e, 'features-section') },
          { label: 'Patient Journey', href: '#patient-journey', onClick: (e) => handleNavClick(e, 'patient-journey-section') },
          { label: 'Platform', href: '#platform', onClick: (e) => handleNavClick(e, 'channels-section') },
          { label: 'Results', href: '#results', onClick: (e) => handleNavClick(e, 'testimonial-section') },
          { label: 'Pricing', href: '#pricing', onClick: (e) => handleNavClick(e, 'pricing-section') },
          { label: 'SmileNexus', href: 'https://smilenexus.vercel.app/', onClick: (e) => handleExternalLink(e, 'https://smilenexus.vercel.app/') },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000ff"
        pillColor="#2c3c53ff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#ccccccff"
      />
    </div>
  );
};

export default Navigation;