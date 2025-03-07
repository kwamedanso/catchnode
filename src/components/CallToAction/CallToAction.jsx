import React from 'react';
import './styles/CallToAction.css';

const CallToAction = () => {
    return (
        <section className="cta-section">
            <div className="cta-container">
                <div className="cta-contact">
                    <span className="cta-label">CONTACT US</span>
                    <h2 className="cta-title">Let's talk business!</h2>
                    <a href="/contact" className="cta-button">
                        Let's start
                        <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>

                <a href="/services" className="cta-services-wrapper">
                    <div className="cta-services">
                        <span className="cta-label">SERVICES</span>
                        <h2 className="cta-services-title">Explore Our Services</h2>
                        <div className="cta-services-link">
                            <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default CallToAction;