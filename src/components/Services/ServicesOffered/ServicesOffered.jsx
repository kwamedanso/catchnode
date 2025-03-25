import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';
import servicesData from './servicesData';
import styles from './styles/ServicesOffered.module.css';

const ServicesOffered = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className={`${styles.section} ${isVisible ? styles.visible : ''}`} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>Services we offer</h2>
                </div>

                <div className={styles.grid}>
                    {servicesData.map((service, index) => (
                        <div
                            className={styles.cardWrapper}
                            key={service.id}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOffered;