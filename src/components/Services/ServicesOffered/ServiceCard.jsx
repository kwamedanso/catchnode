import React, { useEffect, useRef } from 'react';
import './styles/ServiceCard.css';

const ServiceCard = ({ service }) => {
    const cardRef = useRef(null);

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

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div className="service-card" ref={cardRef}>
            <div className="service-icon">
                <service.icon />
            </div>
            <h3 className="service-name">{service.title}</h3>
            <p className="service-description">{service.description}</p>
        </div>
    );
};

export default ServiceCard;