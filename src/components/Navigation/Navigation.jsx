import React from 'react';
import './Navigation.css';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = ['Features', 'Patient Journey', 'Platform', 'Results', 'Pricing', 'SmileNexus'];

  return (
    <nav className="nav-container">
      <div className="nav-inner">
        <div className="nav-content">
          {/* Logo */}
          <div className="logo-container">
            <div className="logo-shape-1"></div>
            <div className="logo-shape-2"></div>
            <span className="logo-text">
              <span className="logo-text-white">OmniDent</span>
              <span className="logo-text-cyan"> AI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Book Demo Button */}
          <button className="book-demo-btn desktop-only">
            Book Demo
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn"
          >
            <div className="hamburger-container">
              <div className={`hamburger-line ${isMenuOpen ? 'line-1-active' : ''}`}></div>
              <div className={`hamburger-line ${isMenuOpen ? 'line-2-active' : ''}`}></div>
              <div className={`hamburger-line ${isMenuOpen ? 'line-3-active' : ''}`}></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;