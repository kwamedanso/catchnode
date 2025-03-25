import React, { useEffect, useState } from 'react';
import styles from './styles/HeroSection.module.css';
import dashboardImage from '../../../assets/hero-image.jpg';

export default function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger animations after component mounts
        setIsLoaded(true);
    }, []);

    return (
        <section className={styles.freelance_hero}>
            <div className={styles.hero_container}>
                <div className={styles.hero_content}>
                    <h1 className={`${styles.hero_title} ${isLoaded ? styles.animated : ''}`}>
                        Here to build
                    </h1>

                    <p className={`${styles.hero_description} ${isLoaded ? styles.animated : ''}`}>
                        Whether you are an agency, freelancer, or client, free up ~6 hours per week
                        to manage the hourly and fixed-term payments on your projects.
                    </p>

                    <div className={`${styles.hero_button_container} ${isLoaded ? styles.animated : ''}`}>
                        <button className={styles.hero_button}>Get Started – it's free</button>
                    </div>
                </div>

                <div className={`${styles.hero_image_container} ${isLoaded ? styles.animated : ''}`}>
                    <img
                        src={dashboardImage}
                        alt="Freelance payments dashboard"
                        className={styles.dashboard_image}
                    />
                </div>
            </div>
        </section>
    );
};