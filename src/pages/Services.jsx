import React, { useEffect } from 'react'
import FaqSection from '../components/Home/FaqSection/FaqSection'
import WhyChooseUs from '../components/Home/WhyChooseUs/WhyChooseUs'
import HeroSection from '../components/Services/HeroSection/HeroSection'
import ExpertiseSection from '../components/Services/ExpertiseSection/ExpertiseSection'
import ServicesOffered from '../components/Services/ServicesOffered/ServicesOffered'


export default function Services() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
