import React from 'react';
import styles from './styles/CtaSection.module.css'; // Import CSS Module
import { Link } from 'react-router-dom';

const CtaSection = () => {
    return (
        <section className={styles.ctaSection}>
            <h2>Ready to Transform Your Digital Presence?</h2>
            <p>Let's create something amazing together</p>
            <Link to={"/contact"} className={styles.ctaButton}>Let's Work Together</Link>
        </section>
    );
};

export default CtaSection;