import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import './App.css';
import ServicesSection from './components/ServicesSection/ServicesSection';
import CaseStudySection from './components/CaseStudySection/CaseStudySection';
import Testimonials from './components/Testimonials/Testimonials';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import CallToAction from './components/CallToAction/CallToAction'
import Footer from './components/Footer/Footer';
import FaqSection from './components/FaqSection/FaqSection';

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <ServicesSection />
      <CaseStudySection />
      <Testimonials />
      <ImageCarousel />
      <FaqSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;