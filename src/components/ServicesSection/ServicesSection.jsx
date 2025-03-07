import React from 'react';
import ServiceItem from './ServiceItem';
import './styles/ServicesSection.css';

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            title: "Web Development",
            features: ["White-label Apps", "Enterprise Apps", "Quick Start"],
            link: "/services/web-development"
        },
        {
            id: 2,
            title: "Mobile Development",
            features: ["Cross-platform Apps", "Backend Dev", "App Upgrade"],
            link: "/services/mobile-development"
        },
        {
            id: 3,
            title: "Low-Code Development",
            features: ["Rapid Time-to-Market", "Efficiency", "Cost Savings"],
            link: "/services/low-code-development"
        },
        {
            id: 4,
            title: "MVP Development",
            features: ["Low-code Tools", "App Testing", "MVP Design"],
            link: "/services/mvp-development"
        },
        {
            id: 5,
            title: "Digital Transformation",
            features: ["Big Data", "Scalability", "Data Protection"],
            link: "/services/digital-transformation"
        }
    ];

    return (
        <section className="services-section">
            <div className="services-container">
                <div className="services-header">
                    <span className="section-label">SERVICES</span>
                    <h2 className="services-title">Optimize & accelerate</h2>
                    <p className="services-description">
                        Since 2015, we have been working with businesses looking to
                        turn their ideas into next-gen digital products. As custom
                        software advocates, we deliver intuitive, scalable, and cost-
                        effective solutions to startups and big companies alike.
                    </p>
                </div>

                <div className="services-list">
                    {services.map(service => (
                        <ServiceItem
                            key={service.id}
                            title={service.title}
                            features={service.features}
                            link={service.link}
                        />
                    ))}
                </div>

                <div className="services-footer">
                    <a href="/services" className="view-all-link">
                        View all services
                        <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;