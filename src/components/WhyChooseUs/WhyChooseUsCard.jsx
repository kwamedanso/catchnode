import React, { useEffect, useRef } from 'react';
import './styles/WhyChooseUsCard.css';

const WhyChooseUsCard = ({ card }) => {
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
        <div className="why-choose-us-card" ref={cardRef}>
            <div className="card-icon" style={{ backgroundColor: card.bgColor }}>
                <card.icon style={{ color: card.iconColor }} />
            </div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
        </div>
    );
};

export default WhyChooseUsCard;