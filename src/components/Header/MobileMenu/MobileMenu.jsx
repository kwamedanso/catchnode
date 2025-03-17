import React, { useState } from 'react';
import './styles/MobileMenu.css';
// import Icon from '../Icon/Icon';
import { IoIosArrowDown } from "react-icons/io";


const MobileMenu = ({ isOpen, navItems }) => {
    const [expandedItems, setExpandedItems] = useState({});

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
                                <a
                                    href={item.path}
                                    className="mobile-menu-link"
                                    onClick={(e) => {
                                        if (item.hasChildren) {
                                            e.preventDefault();
                                            toggleSubmenu(index);
                                        }
                                    }}
                                >
                                    {item.title}
                                </a>
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
                                        <span className="mobile-submenu-title">{item.title.toUpperCase()} &rarr;</span>
                                    </div>
                                    <ul className="mobile-submenu-list">
                                        {item.children.map((child, childIndex) => (
                                            <li key={childIndex} className="mobile-submenu-item">
                                                <a href={child.path} className="mobile-submenu-link">
                                                    <div className="mobile-submenu-icon">
                                                        <child.icon />
                                                    </div>
                                                    <div className="mobile-submenu-content">
                                                        <h3 className="mobile-submenu-item-title">{child.title}</h3>
                                                        <p className="mobile-submenu-item-description">{child.description}</p>
                                                    </div>
                                                </a>
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
                                                        <a href={industry.path} className="mobile-submenu-section-link">
                                                            <industry.icon />
                                                            <span>{industry.title}</span>
                                                        </a>
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
                                                        <a href={tech.path} className="mobile-submenu-section-link">
                                                            <tech.icon />
                                                            <span>{tech.title}</span>
                                                        </a>
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

                {/* <div className="mobile-menu-footer">
                    <a href="/contact" className="btn btn-primary mobile-contact-btn">
                        Contact us
                    </a>
                </div> */}
            </div>
        </div>
    );
};

export default MobileMenu;