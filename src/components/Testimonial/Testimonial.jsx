// Testimonial.js
import React from 'react';
import './Testimonial.css';
import Carousel from '../SlideUp/Carousel';
import CurveDental from '../../assets/ScrollLogos/Curve Dental.svg';
import Denticon from '../../assets/ScrollLogos/Denticon Logo.svg';
import Eaglesoft from '../../assets/ScrollLogos/Eaglesoft Logo.png';
import Dentrix from '../../assets/ScrollLogos/Dentrix Logo.svg';
import Fuse from '../../assets/ScrollLogos/Fuse Dental.svg';
import OpenDental from '../../assets/ScrollLogos/Open Dental Logo.png';


const imageLogos = [
  { src: CurveDental, alt: "Curve Dental"},
  { src: Denticon, alt: "Curve Dental"},
  { src: Eaglesoft, alt: "Curve Dental"},
  { src: Dentrix, alt: "Curve Dental"},
  { src: Fuse, alt: "Curve Dental"},
  { src: OpenDental, alt: "Curve Dental"},
];

const useResponsiveCarousel = () => {
  const [dimensions, setDimensions] = React.useState({
    width: 600,
    height: 400
  });

  React.useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      
      if (windowWidth < 420){
        // Smallest screens
        setDimensions({
          width: 300,
          height: 400
        });
      } else if (windowWidth < 520) {
        // Smallest screens
        setDimensions({
          width: 400,
          height: 400
        });
      } else if (windowWidth < 640) {
        // Medium small screens
        setDimensions({
          width: 500,
          height: 400
        });
      } else {
        // Larger screens
        setDimensions({
          width: 600,
          height: 400
        });
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
};

const Testimonial = () => {

  const { width, height } = useResponsiveCarousel();

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="section-title PJTitle">
          Elite Practices Are Already Winning with OmniDent
        </h2>
        <p className="section-subtitle PJSubtitle">
          Join 300+ forward-thinking teams transforming how they engage patients.
        </p>
        
        <div className="quote-container">
          <div className="quote-content">
            <div style={{ height: '400px', position: 'relative' }}>
              <Carousel
                baseWidth={width}
                baseHeight={height}
                autoplay={true}
                autoplayDelay={2000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </div>
        </div>
        
        <div className="integrations-container">
          <h3 className="integrations-title">Seamless Integration with Your Existing PMS</h3>
          <p className="integrations-subtitle">Connect with 50+ practice management systems in under 15 minutes. No technical expertise required.</p>
          
          <div className="integrations-logos">
          </div>
        </div>

        <div className="testimonial-cta-box">
          <h3 className="cta-box-title">Ready to transform your patient journey?</h3>
          <p className="cta-box-subtitle">
            See how OmniDent AI can automate your practice operations and boost patient satisfaction.
          </p>
          <div className="cta-box-buttons">
            <button className="cta-primary-btn">Get A Demo</button>
            <button className="cta-secondary-btn">View Testimonials</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;