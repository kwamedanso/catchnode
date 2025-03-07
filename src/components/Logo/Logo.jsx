import React from 'react';
import './styles/Logo.css';

const Logo = () => {
    return (
        <a href="/" className="logo-link">
            <div className="logo">
                <span className="logo-text">TechPlanet</span>
                <span className="logo-triangle"></span>
            </div>
        </a>
    );
};

export default Logo;