import React, { useState, useRef, useEffect } from 'react';
import styles from './styles/Testimonials.module.css';
import testimonies from './testimonies'


const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('');

    // Animation on scroll states
    const [isVisible, setIsVisible] = useState({
        header: false,
        card: false
    });

    // References for observer
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardRef = useRef(null);

    // Set up intersection observer for animation on scroll
    useEffect(() => {
        const observerOptions = {
            threshold: 0.2 // Trigger when 20% of the element is visible
        };

        const headerObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(prev => ({ ...prev, header: true }));
                headerObserver.unobserve(entries[0].target);
            }
        }, observerOptions);

        const cardObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(prev => ({ ...prev, card: true }));
                cardObserver.unobserve(entries[0].target);
            }
        }, observerOptions);

        if (headerRef.current) headerObserver.observe(headerRef.current);
        if (cardRef.current) cardObserver.observe(cardRef.current);

        return () => {
            if (headerRef.current) headerObserver.unobserve(headerRef.current);
            if (cardRef.current) cardObserver.unobserve(cardRef.current);
        };
    }, []);

    const handlePrev = () => {
        setSlideDirection(styles.slide_right);
        setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonies.length - 1 : prevIndex - 1));
            setSlideDirection('');
        }, 300);
    };

    const handleNext = () => {
        setSlideDirection(styles.slide_left);
        setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex === testimonies.length - 1 ? 0 : prevIndex + 1));
            setSlideDirection('');
        }, 300);
    };

    const activeTestimonial = testimonies[activeIndex];

    return (
        <section className={styles.testimonials_section} ref={sectionRef}>
            <div className={styles.testimonials_container}>
                <div
                    className={`${styles.testimonials_header} ${isVisible.header ? styles.animate_in : ''}`}
                    ref={headerRef}
                >
                    <span className={styles.section_label}>TESTIMONIALS</span>
                    <h2 className={styles.testimonials_title}>Hear from<br />our clients</h2>
                    <div className={styles.testimonials_nav}>
                        <button className={styles.nav_button} onClick={handlePrev} aria-label="Previous testimonial">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <button className={styles.nav_button} onClick={handleNext} aria-label="Next testimonial">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    className={`${styles.testimonial_card_container} ${isVisible.card ? styles.animate_in : ''}`}
                    ref={cardRef}
                >
                    <div className={`${styles.testimonial_card} ${slideDirection}`}>
                        <div className={styles.testimonial_quote}>
                            <svg className={styles.quote_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="#0052FF">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <h3 className={styles.testimonial_heading}>{activeTestimonial.quote}</h3>
                        </div>
                        <p className={styles.testimonial_text}>{activeTestimonial.text}</p>
                        <div className={styles.testimonial_author}>
                            <img
                                src={activeTestimonial.avatar}
                                alt={activeTestimonial.author}
                                className={styles.author_image}
                            />
                            <div className={styles.author_info}>
                                <h4 className={styles.author_name}>{activeTestimonial.author}</h4>
                                <p className={styles.author_position}>{activeTestimonial.position}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;