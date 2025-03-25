import React, { useEffect, useRef } from 'react';
import styles from './styles/WhyChooseUsCard.module.css';

const WhyChooseUsCard = ({ card }) => {
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
        <div className={styles.why_choose_us_card} ref={cardRef}>
            <div className={styles.card_icon} style={{ backgroundColor: card.bgColor }}>
                <card.icon style={{ color: card.iconColor }} />
            </div>
            <h3 className={styles.card_title}>{card.title}</h3>
            <p className={styles.card_description}>{card.description}</p>
        </div>
    );
};

export default WhyChooseUsCard;