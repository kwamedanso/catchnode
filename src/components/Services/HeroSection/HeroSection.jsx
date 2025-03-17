import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ContactModal from './ContactModal';
import './HeroSection.css';

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const heroRef = useRef(null);

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

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    return (
        <section className="hero-section" ref={heroRef}>
            <div className="hero-content">
                <h1 className="hero-title">
                    Akveo Software
                    <br />
                    Development Services
                </h1>
                <p className="hero-description">
                    Are you looking for a reliable team of software development
                    professionals? In case you do, we're ready to share our
                    expertise and help you meet your business objectives.
                </p>
                <button className="cta-button" onClick={openModal}>
                    Let's start <FaArrowRight className="arrow-icon" />
                </button>
            </div>

            {isModalOpen && <ContactModal onClose={closeModal} />}
        </section>
    );
};

export default HeroSection;