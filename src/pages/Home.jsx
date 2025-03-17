import React from 'react'
import HeroSection from '../components/Home/HeroSection/HeroSection'
import ServicesSection from '../components/Home/ServicesSection/ServicesSection'
import OurWorksSection from '../components/Home/OurWorksSection/OurWorksSection'
import Templates from '../components/Home/Templates/Templates'
import WhyChooseUs from '../components/Home/WhyChooseUs/WhyChooseUs'
import Testimonials from '../components/Home/Testimonials/Testimonials'
import ImageCarousel from '../components/Home/ImageCarousel/ImageCarousel'
import FaqSection from '../components/Home/FaqSection/FaqSection'
import CallToAction from '../components/Home/CallToAction/CallToAction'

export default function Home() {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <OurWorksSection />
            <Templates />
            <WhyChooseUs />
            <Testimonials />
            <ImageCarousel />
            <FaqSection />
            <CallToAction />
        </>
    )
}
