import React from 'react';
import './styles/Dropdown.css';
import { FiArrowRight } from "react-icons/fi";
import { RiShareBoxFill } from "react-icons/ri";
import { Link } from 'react-router-dom';



const Dropdown = ({ title, path, items, industriesSection, technologiesSection, setIsDropdownOpen }) => {

    function closeDropDown() {
        setIsDropdownOpen(false)
    }
    return (
        <div className="dropdown">
            <div className="dropdown-content">
                <div className="dropdown-main-section">
                    <div className="dropdown-header">
                        <Link to={path} className='dropdown-title' onClick={closeDropDown}>
                            {title}
                        </Link>
                        <FiArrowRight />
                    </div>
                    <div className="dropdown-items">
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className="dropdown-item"
                                target={item.isExternal ? "_blank" : "_self"}
                                rel={item.isExternal ? "noopener noreferrer" : ""}
                                onClick={closeDropDown}
                            >
                                <div className="dropdown-item-icon">
                                    <item.icon />
                                </div>
                                <div className="dropdown-item-content">
                                    <h3 className="dropdown-item-title">{item.title}</h3>
                                    <p className="dropdown-item-description">{item.description}</p>
                                </div>
                                {item.isExternal && <RiShareBoxFill />}
                            </Link>
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
                                    <Link key={index} to={item.path} className="dropdown-additional-item">
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </Link>
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
                                    <Link key={index} to={item.path} className="dropdown-additional-item" onClick={closeDropDown}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </Link>
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