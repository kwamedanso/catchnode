import React, { useEffect, useRef } from 'react';
import './styles/TemplateCard.css';

const TemplateCard = ({ template }) => {
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
            { threshold: 0.2 }
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
        <div className="template-card" ref={cardRef} style={{ backgroundColor: template.bgColor }}>
            <div className="template-preview">
                <img src={template.imageSrc} alt={template.title} />
            </div>
            <div className="template-info">
                <div className="template-icon"><template.icon style={{ color: template.iconColor }} /></div>
                <div className="template-title">{template.title}</div>
            </div>
        </div>
    );
};

export default TemplateCard;