import React, { useEffect, useRef } from 'react';
import styles from './styles/ServiceCard.module.css';

const ServiceCard = ({ service }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div className={styles.card} ref={cardRef}>
            <div className={styles.icon}>
                <service.icon />
            </div>
            <h3 className={styles.name}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
        </div>
    );
};

export default ServiceCard;