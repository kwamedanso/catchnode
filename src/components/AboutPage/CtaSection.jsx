import React from 'react';
import styles from './styles/CtaSection.module.css'; // Import CSS Module

const CtaSection = () => {
    return (
        <section className={styles.ctaContainer}>
            <h2 className={styles.heading}>Get more clicks, grow your business</h2>
            <p className={styles.subheading}>
                Simple tools and smart insights to help you engage your audience.
            </p>
            {/* Use an anchor tag <a> if it links somewhere, or <button> for an action */}
            <a href="#get-started" className={styles.ctaButton}>
                Get Started
            </a>
        </section>
    );
};

export default CtaSection;