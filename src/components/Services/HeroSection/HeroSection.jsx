import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ContactModal from '../ContactModal/ContactModal';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const heroRef = useRef(null);

    useEffect(() => {
        // Trigger animations after component mounts
        setIsLoaded(true);
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
        <section className={styles.section} ref={heroRef}>
            <div className={styles.content}>
                <h1 className={`${styles.title} ${isLoaded ? styles.animated : ''}`}>
                    Elevate Your Business with Our Web,
                    <br />
                    Cloud & IT Services
                </h1>
                <p className={`${styles.description} ${isLoaded ? styles.animated : ''}`}>
                    Are you looking for a reliable team of software development
                    professionals? In case you do, we're ready to share our
                    expertise and help you meet your business objectives.
                </p>
                <button className={`${styles.ctaButton} ${isLoaded ? styles.animated : ''}`} onClick={openModal}>
                    Let's start <FaArrowRight className={styles.arrowIcon} />
                </button>
            </div>

            {isModalOpen && <ContactModal onClose={closeModal} />}
        </section>
    );
};

export default HeroSection;