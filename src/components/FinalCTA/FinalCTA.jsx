// FinalCTA.js
import React, { useEffect } from 'react';
import { FiClock, FiPhone, FiCalendar, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import './FinalCTA.css';
import CountUp  from '../SlideUp/CountUp';


const FinalCTA = () => {
  useEffect(() => {
    // Load and initialize Cal.com embed
    (function (C, A, L) { 
      let p = function (a, ar) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.com/embed/embed.js", "init");
    
    // Initialize Cal.com
    window.Cal("init", "omnident-discovery", {origin:"https://app.cal.com"});

    // Configure inline embed
    window.Cal.ns["omnident-discovery"]("inline", {
      elementOrSelector:"#my-cal-inline-omnident-discovery",
      config: {"layout":"month_view","theme":"dark"},
      calLink: "omnident.ai/omnident-discovery",
    });

    // Configure UI settings
    window.Cal.ns["omnident-discovery"]("ui", {
      "theme":"dark",
      "hideEventTypeDetails":false,
      "layout":"month_view"
    });

    // Cleanup function
    return () => {
      const calElement = document.getElementById('my-cal-inline-omnident-discovery');
      if (calElement) {
        calElement.innerHTML = '';
      }
    };
  }, []);

  return (
    <section className="final-cta-section">
      <div className="final-cta-container">
        <div className="cta-header">
          <span className="cta-badge">
            🚀 Limited Time Offer • Book Now
          </span>
        </div>

        <h2 className="section-title center-text">
          Your Competitors Are
          <span className="gradient-text"> Already Using AI</span>
        </h2>
        <p className="section-subtitle center-text">
          Every day without OmniDent.ai means lost patients and revenue.
          <br />Transform your practice today.
        </p>
        
        <button className="primary-cta-btn hero-btn">
          BOOK DISCOVERY CALL
          <FiArrowRight className="btn-icon" />
        </button>

        <div className="scheduling-container">
          <h3 className="scheduling-title">
            Ready to Transform Your Practice?
            <br />Book Your Discovery Call
          </h3>
          <p className="scheduling-subtitle">
            See OmniDent.ai in action. Get a personalized demo and learn
            <br />how we can revolutionize your patient experience.
          </p>
          
          <div className="calendar-widget">
            <div className="calendar-header">
              <FiCalendar className="calendar-icon" />
              <span>Select Your Preferred Time</span>
            </div>
            <div 
              style={{ 
                width: '100%', 
                height: '555px', 
                overflow: 'auto',
                borderRadius: '12px',
                background: 'rgba(10, 15, 28, 0.5)'
              }} 
              id="my-cal-inline-omnident-discovery"
            />
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="trust-indicators">
          <div className="trust-item">
            <div className="trust-number">
                            <CountUp
                              from={0}
                              to={500}
                              separator=","
                              direction="up"
                              duration={1}
                              className="count-up-text"
                            />+
            </div>
            <div className="trust-label">Practices Transformed</div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <div className="trust-number">
                            <CountUp
                              from={0}
                              to={60}
                              separator=","
                              direction="up"
                              duration={1}
                              className="count-up-text"
                            />%
            </div>
            <div className="trust-label">Revenue Increase</div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <div className="trust-number">
                            <CountUp
                              from={0}
                              to={24}
                              separator=","
                              direction="up"
                              duration={1}
                              className="count-up-text"
                            />/
                                          <CountUp
                                            from={0}
                                            to={7}
                                            separator=","
                                            direction="up"
                                            duration={1}
                                            className="count-up-text"
                                          /></div>
            <div className="trust-label">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;