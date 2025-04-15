import React from 'react';
import styles from './styles/AboutPage.module.css';
import image1 from "../../assets/team-member-1.jpg"
import image2 from "../../assets/team-member-2.jpg"
import image3 from "../../assets/team-member-3.jpg"
import aboutImage from "../../assets/aboutpage.jpg"

const AboutPage = () => {
    const teamMembers = [
        {
            name: 'David Chen',
            position: 'CEO',
            image: image1
        },
        {
            name: 'Sarah Johnson',
            position: 'CTO',
            image: image2
        },
        {
            name: 'Michael Smith',
            position: 'Creative Director',
            image: image3
        },
        {
            name: 'Emily Brown',
            position: 'Tech Lead',
            image: image1
        }
    ];

    const testimonials = [
        {
            text: 'TechForge transformed our digital presence with their innovative solutions.',
            author: 'John Smith',
            company: 'ABC Industries'
        },
        {
            text: 'Exceptional service and technical expertise. Highly recommended!',
            author: 'Lisa Chen',
            company: 'Digital Ventures'
        },
        {
            text: 'Professional team that delivers results beyond expectations.',
            author: 'Mark Johnson',
            company: 'Innovate Labs'
        }
    ];

    return (
        <div className={styles.aboutContainer}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <h1 className={styles.heroTitle}>About Us</h1>
                <p className={styles.heroSubtitle}>Crafting Digital Excellence Through Innovation</p>
            </section>

            {/* Our Story Section */}
            <section className={styles.storySection}>
                <div className={styles.storyContent}>
                    <div className={styles.storyImage}>
                        <img src={aboutImage} alt="Team meeting" />
                    </div>
                    <div className={styles.storyText}>
                        <h2 className={styles.sectionTitle}>Our Story</h2>
                        <p>
                            Founded in 2015, TechForge has been in the forefront of digital
                            transformation, helping businesses navigate the ever-evolving
                            technological landscape. Our commitment to excellence and
                            innovation drives our passion to create digital solutions that
                            empower our clients' success.
                        </p>

                        <div className={styles.statsContainer}>
                            <div className={styles.statBox}>
                                <h3>500+</h3>
                                <p>Projects Completed</p>
                            </div>
                            <div className={styles.statBox}>
                                <h3>50+</h3>
                                <p>Team Members</p>
                            </div>
                            <div className={styles.statBox}>
                                <h3>98%</h3>
                                <p>Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className={styles.chooseSection}>
                <h2 className={styles.sectionTitle}>Why Choose Us</h2>
                <div className={styles.benefitsContainer}>
                    <div className={styles.benefitCard}>
                        <div className={styles.benefitIcon}>
                            <span className={styles.codeIcon}>&lt;/&gt;</span>
                        </div>
                        <h3>Technical Excellence</h3>
                        <p>Cutting-edge solutions with solid craftsmanship</p>
                    </div>
                    <div className={styles.benefitCard}>
                        <div className={styles.benefitIcon}>
                            <span className={styles.lightbulbIcon}>💡</span>
                        </div>
                        <h3>Innovation First</h3>
                        <p>Creative approaches to every project</p>
                    </div>
                    <div className={styles.benefitCard}>
                        <div className={styles.benefitIcon}>
                            <span className={styles.usersIcon}>👥</span>
                        </div>
                        <h3>Client-Centric</h3>
                        <p>We listen closely to all clients</p>
                    </div>
                    <div className={styles.benefitCard}>
                        <div className={styles.benefitIcon}>
                            <span className={styles.rocketIcon}>🚀</span>
                        </div>
                        <h3>Fast Delivery</h3>
                        <p>On-time solutions, every time</p>
                    </div>
                </div>
            </section>

            {/* Journey Section */}
            <section className={styles.journeySection}>
                <h2 className={styles.sectionTitle}>Our Journey</h2>
                <div className={styles.timelineContainer}>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineYear}>2015</div>
                        <h3>Founded</h3>
                        <p>Started with dream of 5 friends</p>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineYear}>2017</div>
                        <h3>Expansion</h3>
                        <p>Opened international office</p>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineYear}>2020</div>
                        <h3>Innovation</h3>
                        <p>Launched AI Division</p>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineYear}>2023</div>
                        <h3>Growth</h3>
                        <p>50+ team members</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className={styles.teamSection}>
                <h2 className={styles.sectionTitle}>Our Team</h2>
                <div className={styles.teamGrid}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className={styles.teamMember}>
                            <div className={styles.memberImage}>
                                <img src={member.image} alt={member.name} />
                            </div>
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className={styles.testimonialsSection}>
                <h2 className={styles.sectionTitle}>Client Testimonials</h2>
                <div className={styles.testimonialsGrid}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={styles.testimonialCard}>
                            <div className={styles.testimonialIcon}>⭐</div>
                            <p className={styles.testimonialText}>{testimonial.text}</p>
                            <div className={styles.testimonialAuthor}>
                                <h4>{testimonial.author}</h4>
                                <p>{testimonial.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <h2>Ready to Transform Your Digital Presence?</h2>
                <p>Let's create something amazing together</p>
                <button className={styles.ctaButton}>Let's Work Together</button>
            </section>
        </div>
    );
};

export default AboutPage;