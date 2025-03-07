import React, { useState, useEffect, useRef } from 'react';
import { NavData } from './NavData';
import NavItem from '../NavItem/NavItem';
import Logo from '../Logo/Logo';
import MobileMenu from '../MobileMenu/MobileMenu';
import './styles/Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Prevent scrolling when mobile menu is open
        document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
    };

    // Close mobile menu when window is resized to desktop size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
                document.body.style.overflow = 'auto';
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobileMenuOpen]);

    // Change header style on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="header-container">
                <Logo />

                <nav className="desktop-nav">
                    <ul className="nav-list">
                        {NavData.map((item, index) => (
                            <NavItem key={index} item={item} />
                        ))}
                    </ul>
                </nav>
                <a href="/contact" className="btn btn-primary contact-us-link">Contact us</a>

                <button
                    className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </div>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                navItems={NavData}
            />
        </header>
    );
};

export default Header;