import React, { useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard';
import servicesData from './servicesData';
import './styles/ServicesOffered.css';

const ServicesOffered = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);



    return (
        <section className="services-section" ref={sectionRef}>
            <div className="services-container">
                <div className="services-title-container">
                    <h2 className="services-title">Services we offer</h2>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div
                            className="service-card-wrapper"
                            key={service.id}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOffered;