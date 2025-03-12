import React, { useEffect, useRef } from 'react';
import WhyChooseUsCard from './WhyChooseUsCard';
import './styles/WhyChooseUs.css';
import {
    FaTools,
    FaChartLine,
    FaChartBar,
    FaThumbsUp,
    FaUsers,
    FaRocket
} from 'react-icons/fa';

const WhyChooseUs = () => {
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
            { threshold: 0.1 }
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

    const cardData = [
        {
            id: 1,
            icon: FaTools,
            title: 'Customize Solutions',
            description: 'Say "goodbye" to generic solutions and get customized solutions that are proven to support your business goals.',
            bgColor: '#e1e7fe',
            iconColor: "#525dff"
        },
        {
            id: 2,
            icon: FaChartLine,
            title: 'Maximize Resources',
            description: `Stop wasting thousands of dollars on technology each year without knowing how it's improving your business.`,
            bgColor: '#fbefee',
            iconColor: "#ff6267"
        },
        {
            id: 3,
            icon: FaChartBar,
            title: 'Track Progress',
            description: 'Get the customized metrics and key data points you need to ensure results at every level.',
            bgColor: '#dcf8f1',
            iconColor: "#13bf87"
        },
        {
            id: 4,
            icon: FaThumbsUp,
            title: 'Guarantee Results',
            description: `Get the IT solutions that will give you and your team the results you've been looking for.`,
            bgColor: '#fff7dd',
            iconColor: "#fdc604"
        },
        {
            id: 5,
            icon: FaUsers,
            title: 'Protect Budget',
            description: `Create a technology strategy that makes the most sense for your company's budget, no matter what size it is.`,
            bgColor: '#e8f7ff',
            iconColor: "#0099fb"
        },
        {
            id: 6,
            icon: FaRocket,
            title: 'Improve Performance',
            description: 'Get rid of inefficiencies and streamline your technology so that you can outperform your competition.',
            bgColor: '#ffeee8',
            iconColor: "#f7842f"
        }
    ];

    return (
        <section className="why-choose-us-section" ref={sectionRef}>
            <div className="why-choose-us-container">
                <div className="why-choose-us-header">
                    <h2>
                        Why Choose Us
                    </h2>
                    <p>
                        No more wasted resources. No more runaway budgets. No more excuses.
                        Take back your control with IT solutions tailored to help you win.
                    </p>
                </div>

                <div className="why-choose-us-grid">
                    {cardData.map((card, index) => (
                        <div
                            className="card-wrapper"
                            key={card.id}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <WhyChooseUsCard card={card} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;