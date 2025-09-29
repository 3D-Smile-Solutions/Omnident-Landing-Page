import React, { useState, useEffect } from 'react';
import PillNav from './PillNav';
import logo from '../../assets/Logo.png';
import './Navigation.css';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  // Add state for theme
  const [theme, setTheme] = useState(() => {
    // Check localStorage for saved theme preference
    return localStorage.getItem('theme') || 'dark';
  });

  // Apply theme to document root on mount and when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

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
          { 
            label: theme === 'dark' ? 'Light Mode' : 'Dark Mode', 
            onClick: toggleTheme 
          },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor={theme === 'dark' ? '#000000ff' : '#ffffff'}
        pillColor={theme === 'dark' ? '#2c3c53ff' : '#f0f0f0'}
        hoveredPillTextColor={theme === 'dark' ? '#ffffff' : '#000000'}
        pillTextColor={theme === 'dark' ? '#ccccccff' : '#333333'}
      />
    </div>
  );
};

export default Navigation;