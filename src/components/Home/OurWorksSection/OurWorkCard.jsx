import React, { useState, useEffect, useRef } from 'react';
import styles from './styles/OurWorkCard.module.css';

const OurWorkCard = ({ title, description, tags, images, portfolioLink }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const cardRef = useRef(null);

    const hasMultipleImages = images.length > 1;

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

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
        <div ref={cardRef} className={styles.our_work_card}>
            <div className={styles.card_content}>
                <div className={styles.card_text}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className={styles.tags}>
                        {tags.map((tag, index) => (
                            <span key={index} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                    <a href={portfolioLink} className={styles.view_portfolio_link}>
                        View Portfolio <span className={styles.arrow}>→</span>
                    </a>
                </div>

                <div className={styles.card_image_container}>
                    <div
                        className={styles.card_image_wrapper}
                        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className={styles.card_image}>
                                <img src={image} alt={`${title} screenshot ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    {hasMultipleImages && (
                        <div className={styles.image_controls}>
                            <button className={`${styles.control_button} ${styles.prev}`} onClick={prevImage} aria-label="Previous image">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button className={`${styles.control_button} ${styles.next}`} onClick={nextImage} aria-label="Next image">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OurWorkCard;