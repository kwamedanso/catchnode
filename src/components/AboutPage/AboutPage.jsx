import React, { useEffect } from 'react';
import styles from './styles/AboutPage.module.css'; // Import CSS Module
import CtaSection from './CtaSection';
import TestimonialSlider from './TestimonialSlider';

// Placeholder images (replace with your actual image paths or URLs)
const heroImage = '../../assets/hero-image.jpg';
const storyImage = 'https://via.placeholder.com/500x350/cccccc/888888?text=Team+Working';
const targetImage = 'https://via.placeholder.com/500x350/cccccc/888888?text=Target+Audience';
const expert1 = 'https://via.placeholder.com/300x300/cccccc/888888?text=Michael+Carver';
const expert2 = 'https://via.placeholder.com/300x300/cccccc/888888?text=Ryan+Davis';
const expert3 = 'https://via.placeholder.com/300x300/cccccc/888888?text=Jessica+Weber';
const testimonialAuthor = 'https://via.placeholder.com/150x150/cccccc/888888?text=Michael+Foster';

// Example data for experts and testimonials (ideally fetched from an API)
const experts = [
    { name: 'Michael Carver', title: 'CEO & Founder', img: expert1 },
    { name: 'Ryan Davis', title: 'Marketing Lead', img: expert2 },
    { name: 'Jessica Weber', title: 'Sales Director', img: expert3 },
];

const testimonials = [
    {
        quote: "The success of any organization depends on its ability to adapt and innovate. Closcity provided us with a robust strategy that significantly improved our outreach and engagement. Highly recommend!",
        author: 'Michael Foster',
        title: 'CEO, Example Corp',
        img: testimonialAuthor,
    },
    // Add more testimonials if needed
];

const AboutPage = () => {
    // Basic Intersection Observer setup for animations (optional but nice)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                        observer.unobserve(entry.target); // Optional: stop observing once visible
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        const elementsToAnimate = document.querySelectorAll(`.${styles.section}, .${styles.statItem}, .${styles.expertCard}, .${styles.testimonialCard}`);
        elementsToAnimate.forEach((el) => observer.observe(el));

        // Cleanup observer on component unmount
        return () => {
            elementsToAnimate.forEach((el) => observer.unobserve(el));
        };
    }, []);


    return (
        <div className={styles.pageContainer}>
            {/* --- Hero Section --- */}
            <section className={`${styles.section} ${styles.heroSection}`}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>About Closcity</h1>
                    <p className={styles.heroSubtitle}>
                        Driving growth and innovation through strategic solutions. Learn more about our journey and mission.
                    </p>
                </div>
                <img src={heroImage} alt="Team collaboration" className={styles.heroImage} />
            </section>

            {/* --- Reach Out Section --- */}
            <section className={`${styles.section} ${styles.reachOutSection}`}>
                <h2 className={styles.sectionTitle}>Reach out to us today</h2>
                <div className={styles.contactIcons}>
                    {/* Replace # with actual links: mailto:, tel:, etc. */}
                    <a href="#" className={styles.contactIconItem}>
                        {/* Use actual icons here (e.g., from react-icons) */}
                        <span className={styles.iconPlaceholder}>📧</span> Email
                    </a>
                    <a href="#" className={styles.contactIconItem}>
                        <span className={styles.iconPlaceholder}>📞</span> Phone
                    </a>
                    <a href="#" className={styles.contactIconItem}>
                        <span className={styles.iconPlaceholder}>📍</span> Address
                    </a>
                </div>
            </section>

            {/* --- Our Story Section --- */}
            <section className={`${styles.section} ${styles.storySection}`}>
                <div className={styles.textBlock}>
                    <h2 className={styles.sectionTitle}>Our Story</h2>
                    <p>Founded with a passion for helping businesses thrive, Closcity started as a small team with a big vision. We believe in the power of collaboration, data-driven strategies, and unwavering commitment to client success. Over the years, we've grown, adapted, and celebrated numerous milestones alongside our partners.</p>
                </div>
                <div className={styles.imageBlock}>
                    <img src={storyImage} alt="Our team working" className={styles.contentImage} />
                </div>
            </section>

            {/* --- Our Target Section --- */}
            <section className={`${styles.section} ${styles.targetSection}`}>
                <div className={styles.imageBlock}>
                    <img src={targetImage} alt="Target audience analysis" className={styles.contentImage} />
                </div>
                <div className={styles.textBlock}>
                    <h2 className={styles.sectionTitle}>Our Target</h2>
                    <p>We partner with forward-thinking businesses of all sizes, from startups seeking foundational growth to established enterprises aiming for market leadership. Our expertise spans various industries, providing tailored solutions that address unique challenges and unlock potential.</p>
                </div>
            </section>

            {/* --- Success Stats Section --- */}
            <section className={`${styles.section} ${styles.statsSection}`}>
                <h2 className={styles.sectionTitle}>Our Proven Success</h2>
                <div className={styles.statsGrid}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>60K+</span>
                        <span className={styles.statLabel}>Leads Generated</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>98MA</span>
                        <span className={styles.statLabel}>Something Measured (MA)</span> {/* Adjust label */}
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>88%</span>
                        <span className={styles.statLabel}>Client Retention</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>15+</span>
                        <span className={styles.statLabel}>Years Experience</span>
                    </div>
                </div>
            </section>

            {/* --- Meet Our Experts Section --- */}
            <section className={`${styles.section} ${styles.expertsSection}`}>
                <h2 className={styles.sectionTitle}>Meet our experts</h2>
                <div className={styles.expertsGrid}>
                    {experts.map((expert, index) => (
                        <div key={index} className={styles.expertCard}>
                            <img src={expert.img} alt={expert.name} className={styles.expertImage} />
                            <h3 className={styles.expertName}>{expert.name}</h3>
                            <p className={styles.expertTitle}>{expert.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Testimonials Section --- */}
            <section className={`${styles.section} ${styles.testimonialsSection}`}>
                <h2 className={styles.sectionTitle}>What our customers are saying</h2>
                <div className={styles.testimonialsSlider}>
                    {/* Basic static display - for a slider, you'd use a library or more complex state */}
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={styles.testimonialCard}>
                            {/* Optional: Add quotation mark icon */}
                            <blockquote className={styles.testimonialQuote}>
                                "{testimonial.quote}"
                            </blockquote>
                            <div className={styles.testimonialAuthorInfo}>
                                <img src={testimonial.img} alt={testimonial.author} className={styles.testimonialAuthorImage} />
                                <div>
                                    <p className={styles.testimonialAuthorName}>{testimonial.author}</p>
                                    <p className={styles.testimonialAuthorTitle}>{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Add navigation arrows here if implementing a slider */}
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className={`${styles.section} ${styles.ctaSection}`}>
                <h2 className={styles.ctaTitle}>Get more clicks. Grow your business</h2>
                {/* You can add a button here */}
                <a href="#" className={styles.ctaButton}>Learn More</a>
            </section>

            <TestimonialSlider />
            <CtaSection />

            {/* --- Footer --- */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.socialIcons}>
                        {/* Replace with actual icons and links */}
                        <a href="#" aria-label="Facebook">Fb</a>
                        <a href="#" aria-label="Twitter">Tw</a>
                        <a href="#" aria-label="LinkedIn">In</a>
                        <a href="#" aria-label="Instagram">Ig</a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Closcity. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default AboutPage;