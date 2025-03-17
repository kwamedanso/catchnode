import React, { useState, useRef, useEffect } from 'react';
import './styles/NavItem.css';
import Dropdown from '../Dropdown/Dropdown';

const NavItem = ({ item }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navItemRef = useRef(null);

    const handleMouseEnter = () => {
        if (item.hasChildren) {
            setIsDropdownOpen(true);
        }
    };

    const handleMouseLeave = () => {
        if (item.hasChildren) {
            setIsDropdownOpen(false);
        }
    };

    const handleClick = (e) => {
        if (item.hasChildren) {
            e.preventDefault();
        }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navItemRef.current && !navItemRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <li
            className="nav-item"
            ref={navItemRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a
                href={item.path}
                className={`nav-link ${isDropdownOpen ? 'active' : ''}`}
                onClick={handleClick}
            >
                {item.title}
            </a>

            {item.hasChildren && isDropdownOpen && (
                <Dropdown
                    items={item.children}
                    industriesSection={item.industriesSection}
                    technologiesSection={item.technologiesSection}
                    setIsDropdownOpen={setIsDropdownOpen}
                />
            )}
        </li>
    );
};

export default NavItem;