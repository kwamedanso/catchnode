import React, { useState, useEffect } from 'react';
import styles from './styles/TestimonialSlider.module.css';
import image1 from "../../assets/team-member-1.jpg"
import image2 from "../../assets/team-member-2.jpg"
import image3 from "../../assets/team-member-3.jpg"

// --- Sample Data ---
// Replace with your actual testimonials and image paths/URLs
const testimonialsData = [
    {
        id: 1,
        quote: "This CRM has transformed the way we handle customer interactions. The automation features saved us hours of manual work every week, and the analytics have given us insights we never had before.",
        name: "Michael Carter",
        title: "Customer Success Manager",
        image: image1 // Placeholder
    },
    {
        id: 2,
        quote: "Working with this team was a game-changer. Their strategic approach doubled our lead generation in just one quarter. Highly recommended!",
        name: "Sarah Chen",
        title: "Marketing Director",
        image: image2 // Placeholder
    },
    {
        id: 3,
        quote: "The platform is incredibly intuitive and user-friendly. Our sales team adopted it quickly, improving efficiency and collaboration across the board.",
        name: "David Rodriguez",
        title: "Sales Lead",
        image: image3 // Placeholder
    },
    {
        id: 4,
        quote: "Exceptional support and guidance throughout the implementation process. They truly understand our business needs.",
        name: "Jessica Weber", // Matches image from about page
        title: "Operations Head",
        image: image1 // Placeholder
    },
    // Add more testimonials as needed
];

// --- Component ---
const TestimonialSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false); // State to manage animation timing

    const totalTestimonials = testimonialsData.length;

    // Function to handle changing testimonials with animation
    const changeTestimonial = (newIndex) => {
        if (isAnimating) return; // Prevent changing during animation

        setIsAnimating(true); // Start animation flag

        // Normalize index (wrap around)
        const normalizedIndex = (newIndex + totalTestimonials) % totalTestimonials;

        // Set the new index after a short delay to allow fade-out
        setTimeout(() => {
            setActiveIndex(normalizedIndex);
            // Reset animation flag after fade-in duration
            setTimeout(() => {
                setIsAnimating(false);
            }, 300); // Match this duration with CSS animation fade-in time
        }, 300); // Match this duration with CSS animation fade-out time

    };


    const goToPrev = () => {
        changeTestimonial(activeIndex - 1);
    };

    const goToNext = () => {
        changeTestimonial(activeIndex + 1);
    };

    const handleAvatarClick = (index) => {
        if (index !== activeIndex) {
            changeTestimonial(index);
        }
    };

    // Currently active testimonial data
    const activeTestimonial = testimonialsData[activeIndex];

    return (
        <section className={styles.testimonialSection}>
            <h2 className={styles.title}>What our customers are saying</h2>

            {/* Customer Avatars */}
            <div className={styles.avatarContainer}>
                {testimonialsData.map((testimonial, index) => (
                    <img
                        key={testimonial.id}
                        src={testimonial.image}
                        alt={testimonial.name}
                        className={`${styles.avatar} ${index === activeIndex ? styles.activeAvatar : ''}`}
                        onClick={() => handleAvatarClick(index)}
                        aria-label={`View testimonial from ${testimonial.name}`}
                        role="button"
                        tabIndex={0} // Make it focusable
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleAvatarClick(index); }} // Keyboard accessibility
                    />
                ))}
            </div>

            {/* Testimonial Content Area */}
            <div className={styles.testimonialContentWrapper}>
                <button
                    className={`${styles.navButton} ${styles.prevButton}`}
                    onClick={goToPrev}
                    aria-label="Previous testimonial"
                    disabled={isAnimating} // Disable during animation
                >
                    &lt; {/* Left arrow */}
                </button>

                {/* Add key to force re-render and trigger animation */}
                <div
                    key={activeTestimonial.id}
                    className={`${styles.testimonialContent} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}
                >
                    <blockquote className={styles.quote}>
                        "{activeTestimonial.quote}"
                    </blockquote>
                    <p className={styles.name}>{activeTestimonial.name}</p>
                    <p className={styles.customerTitle}>{activeTestimonial.title}</p>
                </div>

                <button
                    className={`${styles.navButton} ${styles.nextButton}`}
                    onClick={goToNext}
                    aria-label="Next testimonial"
                    disabled={isAnimating} // Disable during animation
                >
                    &gt; {/* Right arrow */}
                </button>
            </div>
        </section>
    );
};

export default TestimonialSlider;