import React from 'react'
import FaqSection from '../components/Home/FaqSection/FaqSection'
import WhyChooseUs from '../components/Home/WhyChooseUs/WhyChooseUs'
import HeroSection from '../components/Services/HeroSection/HeroSection'
import ExpertiseSection from '../components/Services/ExpertiseSection/ExpertiseSection'
import ServicesOffered from '../components/Services/ServicesOffered/ServicesOffered'


export default function Services() {
    return (
        <div>
            <HeroSection />
            <ExpertiseSection />
            <ServicesOffered />
            <WhyChooseUs />
            <FaqSection />
        </div>
    )
}
