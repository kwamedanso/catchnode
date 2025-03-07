import React from 'react';
import './styles/ServiceItem.css';

const ServiceItem = ({ title, features, link }) => {
    return (
        <a href={link} className="service-item">
            <h3 className="service-title">{title}</h3>

            <div className="service-features">
                {features.map((feature, index) => (
                    <React.Fragment key={index}>
                        <span className="feature-item">{feature}</span>
                        {index < features.length - 1 && <span className="feature-separator">/</span>}
                    </React.Fragment>
                ))}
            </div>
            <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
        </a>
    );
};

export default ServiceItem;