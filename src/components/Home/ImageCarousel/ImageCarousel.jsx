import React, { useEffect, useRef } from 'react';
import './styles/ImageCarousel.css';



const ImageCarousel = () => {
    // If you don't have the actual logo images, you can use these placeholders
    const logos = [
        { id: 1, name: 'felmo', src: 'https://picsum.photos/120/50', alt: 'Felmo logo' },
        { id: 2, name: 'pwc', src: 'https://picsum.photos/120/51', alt: 'PwC logo' },
        { id: 3, name: 'travo', src: 'https://picsum.photos/121/50', alt: 'Travo logo' },
        { id: 4, name: 'compass', src: 'https://picsum.photos/120/52', alt: 'Compass Point Systems logo' },
        { id: 5, name: 'kompartment', src: 'https://picsum.photos/122/50', alt: 'Kompartment logo' },
    ];

    const carouselRef = useRef(null);
    const duplicatedLogos = [...logos, ...logos, ...logos]; // Duplicate logos for infinite scrolling effect

    // Create animation for infinite scrolling
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        // Calculate the width of a single logo item including margins
        const logoItem = carousel.querySelector('.logo-item');
        if (!logoItem) return;

        const logoWidth = logoItem.offsetWidth;
        const totalOriginalWidth = logoWidth * logos.length;

        // Set animation duration based on logo count and width
        const animationDuration = logos.length * 5; // 5 seconds per logo

        // Apply animation properties
        carousel.style.animationDuration = `${animationDuration}s`;

        // Set up infinite looping by resetting position
        const handleAnimationIteration = () => {
            // Quick reset to beginning without visual jump
            carousel.style.transition = 'none';
            carousel.style.transform = 'translateX(0)';
            setTimeout(() => {
                carousel.style.transition = `transform ${animationDuration}s linear`;
            }, 10);
        };

        carousel.addEventListener('animationiteration', handleAnimationIteration);

        // Clean up
        return () => {
            carousel.removeEventListener('animationiteration', handleAnimationIteration);
        };
    }, [logos.length]);

    return (
        <div className="image-carousel">
            <h4 className='image-carousel-title'>We're proud partners with the industry's leading tech companies.</h4>
            <div className="carousel-track-container">
                <div className="carousel-track" ref={carouselRef}>
                    {duplicatedLogos.map((logo, index) => (
                        <div key={`${logo.id}-${index}`} className="logo-item">
                            <img src={logo.src} alt={logo.alt} className="client-logo" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;