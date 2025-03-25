import React, { useEffect, useRef } from 'react';
import styles from './styles/TemplateCard.module.css';

const TemplateCard = ({ template }) => {
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
            { threshold: 0.2 }
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
        <div className={styles.template_card} ref={cardRef} style={{ backgroundColor: template.bgColor }}>
            <div className={styles.template_preview}>
                <img src={template.imageSrc} alt={template.title} />
            </div>
            <div className={styles.template_info}>
                <div className={styles.template_icon}><template.icon style={{ color: template.iconColor }} /></div>
                <div className={styles.template_title}>{template.title}</div>
            </div>
        </div>
    );
};

export default TemplateCard;