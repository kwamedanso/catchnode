import React from 'react';
import './styles/CaseStudyCard.css';

const CaseStudyCard = ({
    label = "CASE STUDY",
    title = "Mobile Application For Mobile Home Owners",
    description = "The client wanted to digitize its business as motorhomes contain many different electronic devices such as fridges, TVs, etc. The project's goal...",
    imageUrl,
    link = "#"
}) => {
    return (
        <div className="case-study-card">
            <div className="case-study-content">
                <div className="case-study-label">{label}</div>
                <h2 className="case-study-title">{title}</h2>
                <p className="case-study-description">{description}</p>
                <a href={link} className="case-study-link">
                    Read full case study
                    <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
            <div className="case-study-image">
                <img src={imageUrl} alt={title} />
            </div>
        </div>
    );
};

export default CaseStudyCard;