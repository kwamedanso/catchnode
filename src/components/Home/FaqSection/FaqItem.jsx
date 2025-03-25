import React, { useState, useRef, useEffect } from 'react';
import styles from './styles/FaqItem.module.css';

const FaqItem = ({ question, answer, isOpen, toggleFaq, index }) => {
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpen]);

    // Handle animation timing for entering view
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add a small delay based on index for staggered animation
                    setTimeout(() => {
                        setIsVisible(true);
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 } // Trigger when 20% of the item is visible
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, [index]);

    return (
        <div
            className={`${styles.item} ${isVisible ? styles.visible : ''}`}
            ref={itemRef}
        >
            <button
                className={`${styles.question} ${isOpen ? styles.open : ''}`}
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                <svg
                    className={styles.chevronIcon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <div
                className={styles.answerContainer}
                style={{ height: `${height}px` }}
            >
                <div
                    className={styles.answer}
                    ref={contentRef}
                >
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default FaqItem;