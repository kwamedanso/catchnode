import React from 'react';
import ServiceItem from './ServiceItem';
import services from './services';
import styles from './styles/ServicesSection.module.css';

const ServicesSection = () => {
    return (
        <section className={styles.services_section}>
            <div className={styles.services_container}>
                <div className={styles.services_header}>
                    <span className={styles.section_label}>SERVICES</span>
                    <h2 className={styles.services_title}>Optimize & accelerate</h2>
                    <p className={styles.services_description}>
                        Since 2015, we have been working with businesses looking to
                        turn their ideas into next-gen digital products. As custom
                        software advocates, we deliver intuitive, scalable, and cost-
                        effective solutions to startups and big companies alike.
                    </p>
                </div>

                <div className={styles.services_list}>
                    {services.map(service => (
                        <ServiceItem
                            key={service.id}
                            title={service.title}
                            features={service.features}
                            link={service.link}
                        />
                    ))}
                </div>

                <div className={styles.services_footer}>
                    <a href="/services" className={styles.view_all_link}>
                        View all services
                        <svg className={styles.arrow_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;