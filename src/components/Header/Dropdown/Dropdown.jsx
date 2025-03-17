import React from 'react';
import './styles/Dropdown.css';
import { FiArrowRight } from "react-icons/fi";
import { RiShareBoxFill } from "react-icons/ri";
import { Link } from 'react-router-dom';



const Dropdown = ({ items, industriesSection, technologiesSection, setIsDropdownOpen }) => {

    function closeDropDown() {
        setIsDropdownOpen(false)
    }
    return (
        <div className="dropdown">
            <div className="dropdown-content">
                <div className="dropdown-main-section">
                    <div className="dropdown-header">
                        <Link to="/services" className='dropdown-title' onClick={closeDropDown}>
                            SERVICES
                        </Link>
                        <FiArrowRight />
                    </div>
                    <div className="dropdown-items">
                        {items.map((item, index) => (
                            <a
                                key={index}
                                href={item.path}
                                className="dropdown-item"
                                target={item.isExternal ? "_blank" : "_self"}
                                rel={item.isExternal ? "noopener noreferrer" : ""}
                            >
                                <div className="dropdown-item-icon">
                                    <item.icon />
                                </div>
                                <div className="dropdown-item-content">
                                    <h3 className="dropdown-item-title">{item.title}</h3>
                                    <p className="dropdown-item-description">{item.description}</p>
                                </div>
                                {item.isExternal && <RiShareBoxFill />}
                            </a>
                        ))}
                    </div>
                </div>

                <div className='dropdown-secondary'>
                    {industriesSection && (
                        <div className="dropdown-additional-section">
                            <div className="dropdown-header">
                                <span className="dropdown-title">{industriesSection.title}</span>
                            </div>
                            <div className="dropdown-additional-items">
                                {industriesSection.items.map((item, index) => (
                                    <a key={index} href={item.path} className="dropdown-additional-item">
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {technologiesSection && (
                        <div className="dropdown-additional-section">
                            <div className="dropdown-header">
                                <span className="dropdown-title">{technologiesSection.title}</span>
                            </div>
                            <div className="dropdown-additional-items">
                                {technologiesSection.items.map((item, index) => (
                                    <a key={index} href={item.path} className="dropdown-additional-item">
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Dropdown;