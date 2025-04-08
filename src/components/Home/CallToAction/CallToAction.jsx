import React from 'react';
import styles from './styles/CallToAction.module.css';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.contact}>
                    <span className={styles.label}>CONTACT US</span>
                    <h2 className={styles.title}>Let's talk business!</h2>
                    <Link to={"/contact"} className={styles.button}>
                        Let's start
                        <svg className={styles.arrowIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                </div>

                <Link to={"/services"} className={styles.servicesWrapper}>
                    <div className={styles.services}>
                        <span className={styles.label}>SERVICES</span>
                        <h2 className={styles.servicesTitle}>Explore Our Services</h2>
                        <div className={styles.servicesLink}>
                            <svg className={styles.arrowIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default CallToAction;