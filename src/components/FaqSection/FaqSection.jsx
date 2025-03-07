import React, { useState, useEffect, useRef } from 'react';
import FaqItem from './FaqItem';
import './styles/FaqSection.css';

const FaqSection = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState(0); // First FAQ open by default
    const [headerVisible, setHeaderVisible] = useState(false);
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const [buttonsVisible, setButtonsVisible] = useState(false);

    const headerRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Start the animation sequence when section enters viewport
                    setHeaderVisible(true);

                    // Staggered animations for other elements
                    setTimeout(() => setDescriptionVisible(true), 200);
                    setTimeout(() => setButtonsVisible(true), 400);

                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
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

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    // FAQ data
    const faqs = [
        {
            question: "What do we do?",
            answer: "We provide a secure, cloud-based customer management platform with powerful analytics and integrations. Our intuitive interface makes it easy to customize and automate customer workflows and manage customers."
        },
        {
            question: "Getting started with Untitled",
            answer: "Sign up for an account on our website, choose a plan that fits your needs, and follow the onboarding process. Our setup wizard will guide you through configuring your workspace and importing your existing data."
        },
        {
            question: "Installing Untitled",
            answer: "Untitled is a cloud-based solution, so there's no software to install. Simply access the platform through your web browser. We also offer mobile apps for iOS and Android that you can download from the respective app stores."
        },
        {
            question: "The messenger",
            answer: "Our messenger feature allows real-time communication with your customers. It supports text, images, files, and integrates with popular messaging platforms. You can set up automated responses and routing rules to ensure timely replies."
        },
        {
            question: "Our next-gen inbox",
            answer: "The next-gen inbox centralizes all customer communications in one place. It features smart categorization, priority flagging, and collaboration tools that help your team handle customer inquiries efficiently."
        },
        {
            question: "How do tickets work?",
            answer: "Tickets organize customer requests into manageable units of work. Each ticket tracks the complete conversation history, assigned team members, status, priority, and related customer information. You can automate ticket routing and set SLAs."
        },
        {
            question: "How does support work?",
            answer: "Our support system combines tickets, knowledge base, and customer communication tools. It helps you track, prioritize, and solve customer issues efficiently. You can set up workflows, escalation paths, and performance metrics."
        }
    ];

    return (
        <section className="faq-section" ref={sectionRef}>
            <div className="faq-container">
                <h1
                    className={`faq-header ${headerVisible ? 'visible' : ''}`}
                    ref={headerRef}
                >
                    Frequently Asked Questions
                </h1>

                <p className={`faq-description ${descriptionVisible ? 'visible' : ''}`}>
                    Quick answers to questions you may have about Untitled UI and billing. Can't find
                    what you're looking for? Check out our <a href="#documentation">full documentation</a>.
                </p>

                <div className={`faq-buttons ${buttonsVisible ? 'visible' : ''}`}>
                    <a href="#documentation" className="faq-button documentation">
                        Documentation
                    </a>
                    <a href="#contact" className="faq-button contact">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 9C18 13.4183 14.4183 17 10 17C8.46073 17 7.01172 16.5207 5.79857 15.693L2 16.5L2.90716 12.9196C2.33165 11.9157 2 10.7781 2 9C2 4.58172 5.58172 1 10 1C14.4183 1 18 4.58172 18 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Get in touch
                    </a>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openFaqIndex === index}
                            toggleFaq={toggleFaq}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;