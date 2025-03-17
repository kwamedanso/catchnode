import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import "./styles/CaseStudySection.css"
import background from '../../assets/dashboard4.webp'

const CaseStudySection = () => {
    return (
        <section className='case-study-section'>
            <CaseStudyCard
                imageUrl={background}
                link="/case-studies/mobile-home-app"
            />
        </section>
    );
};

export default CaseStudySection;