import React, { useState } from 'react';
import './styles/MobileMenu.css';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';


const MobileMenu = ({ isOpen, navItems, setIsMobileMenuOpen }) => {
    const [expandedItems, setExpandedItems] = useState({});

    function closeMobileMenu(paams) {
        setIsMobileMenuOpen(false)
    }
    const toggleSubmenu = (index) => {
        setExpandedItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="mobile-menu">
            <div className="mobile-menu-content">
                <ul className="mobile-menu-list">
                    {navItems.map((item, index) => (
                        <li key={index} className="mobile-menu-item">
                            <div className="mobile-menu-item-header">
                                <Link
                                    to={item.path}
                                    className="mobile-menu-link"
                                    onClick={(e) => {
                                        if (item.hasChildren) {
                                            e.preventDefault();
                                            toggleSubmenu(index);
                                        }
                                    }}
                                >
                                    {item.title}
                                </Link>
                                {item.hasChildren && (
                                    <button
                                        className={`mobile-submenu-toggle ${expandedItems[index] ? 'active' : ''}`}
                                        onClick={() => toggleSubmenu(index)}
                                        aria-label={expandedItems[index] ? "Collapse submenu" : "Expand submenu"}
                                    >
                                        <IoIosArrowDown />
                                    </button>
                                )}
                            </div>

                            {item.hasChildren && expandedItems[index] && (
                                <div className="mobile-submenu">
                                    <div className="mobile-submenu-header">
                                        <span className="mobile-submenu-title"><Link to='/services' onClick={closeMobileMenu}>{item.title.toUpperCase()} &rarr;</Link></span>
                                    </div>
                                    <ul className="mobile-submenu-list">
                                        {item.children.map((child, childIndex) => (
                                            <li key={childIndex} className="mobile-submenu-item">
                                                <Link to={child.path} className="mobile-submenu-link" onClick={closeMobileMenu}>
                                                    <div className="mobile-submenu-icon">
                                                        <child.icon />
                                                    </div>
                                                    <div className="mobile-submenu-content">
                                                        <h3 className="mobile-submenu-item-title">{child.title}</h3>
                                                        <p className="mobile-submenu-item-description">{child.description}</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>

                                    {item.industriesSection && (
                                        <>
                                            <div className="mobile-submenu-section-title">
                                                {item.industriesSection.title}
                                            </div>
                                            <ul className="mobile-submenu-section-list">
                                                {item.industriesSection.items.map((industry, industryIndex) => (
                                                    <li key={industryIndex} className="mobile-submenu-section-item">
                                                        <Link to={industry.path} className="mobile-submenu-section-link" onClick={closeMobileMenu}>
                                                            <industry.icon />
                                                            <span>{industry.title}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}

                                    {item.technologiesSection && (
                                        <>
                                            <div className="mobile-submenu-section-title">
                                                {item.technologiesSection.title}
                                            </div>
                                            <ul className="mobile-submenu-section-list">
                                                {item.technologiesSection.items.map((tech, techIndex) => (
                                                    <li key={techIndex} className="mobile-submenu-section-item">
                                                        <Link to={tech.path} className="mobile-submenu-section-link" onClick={closeMobileMenu}>
                                                            <tech.icon />
                                                            <span>{tech.title}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="mobile-menu-footer">
                    <Link to="/contact" className="btn btn-primary mobile-contact-btn" onClick={closeMobileMenu}>
                        Contact us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;