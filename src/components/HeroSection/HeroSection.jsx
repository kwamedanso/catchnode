import React, { useEffect, useState } from 'react';
import './styles/HeroSection.css'
import dashboardImage from '../../assets/hero-image.jpg'; // Add your dashboard image

export default function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger animations after component mounts
        setIsLoaded(true);
    }, []);

    return (
        <section className="freelance-hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className={`hero-title ${isLoaded ? 'animated' : ''}`}>
                        Here to build
                    </h1>

                    <p className={`hero-description ${isLoaded ? 'animated' : ''}`}>
                        Whether you are an agency, freelancer, or client, free up ~6 hours per week
                        to manage the hourly and fixed-term payments on your projects.
                    </p>

                    <div className={`hero-button-container ${isLoaded ? 'animated' : ''}`}>
                        <button className="hero-button">Get Started – it's free</button>
                    </div>
                </div>

                <div className={`hero-image-container ${isLoaded ? 'animated' : ''}`}>
                    <img
                        src={dashboardImage}
                        alt="Freelance payments dashboard"
                        className="dashboard-image"
                    />
                </div>
            </div>
        </section>
    );
};
