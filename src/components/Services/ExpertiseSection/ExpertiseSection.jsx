import React, { useEffect, useRef } from 'react';
import ExpertiseCard from './ExpertiseCard';
import './styles/ExpertiseSection.css';
import { IoCodeSlash, IoBusinessOutline } from 'react-icons/io5';

const ExpertiseSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
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

    const expertiseData = [
        {
            id: 1,
            icon: <IoCodeSlash />,
            title: 'Startups and small companies',
            description: 'Whether you\'re looking for seasoned developers to enhance your product or develop a new one from scratch, we\'ll give you a hand.',
        },
        {
            id: 2,
            icon: <IoBusinessOutline />,
            title: 'Mid-sized and large companies',
            description: 'Tell us about your project, and our team will translate your business needs into reliable and powerful software.',
        }
    ];

    return (
        <section className="expertise-section" ref={sectionRef}>
            <div className="expertise-container">
                <div className="expertise-header">
                    <span className="expertise-label">EXPERTISE</span>
                    <h2 className="expertise-title">Software for diverse industries</h2>
                </div>

                <div className="expertise-cards">
                    {expertiseData.map((card, index) => (
                        <div
                            key={card.id}
                            className="expertise-card-wrapper"
                            style={{ animationDelay: `${(index + 1) * 150}ms` }}
                        >
                            <ExpertiseCard card={card} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;