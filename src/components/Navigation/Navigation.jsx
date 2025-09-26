import React from 'react';
import PillNav from './PillNav';
import logo from '../../assets/Logo.png';
import './Navigation.css';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {

  return (
    <div className='Navigation'>
      <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Features', href: '/Features' },
          { label: 'Patient Journey', href: '/Patient Journey' },
          { label: 'Platform', href: '/Platform' },
          { label: 'Results', href: '/Results' },
          { label: 'Pricing', href: '/Pricing' },
          { label: 'SmileNexus', href: '/SmileNexus' },
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