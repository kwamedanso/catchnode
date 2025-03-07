import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import "./styles/CaseStudySection.css"

const CaseStudySection = () => {
    return (
        <section className='case-study-section'>
            <CaseStudyCard
                imageUrl="/path/to/motorhome-image.jpg"
                link="/case-studies/mobile-home-app"
            />
        </section>
    );
};

export default CaseStudySection;