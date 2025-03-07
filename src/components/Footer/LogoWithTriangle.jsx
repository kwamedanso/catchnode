import React from 'react';
import './styles/LogoWithTriangle.css';

const LogoWithTriangle = () => {
    return (
        <a href="/" className="logo-link">
            <div className="logo-with-triangle">
                <span className="logo-text">TechPlanet</span>
                <span className="logo-triangle"></span>
            </div>
        </a>
    );
};

export default LogoWithTriangle;