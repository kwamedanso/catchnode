import React from 'react';
import './styles/ServiceSelection.css';

const ServiceSelection = ({ services, handleServiceChange }) => {
    return (
        <div className="service-selection">
            <label className="service-label">Services</label>
            <div className="service-options">
                <div className="service-column">
                    <div className="service-option">
                        <input
                            type="checkbox"
                            id="websiteDesign"
                            name="websiteDesign"
                            checked={services.websiteDesign}
                            onChange={handleServiceChange}
                        />
                        <label htmlFor="websiteDesign">Website design</label>
                    </div>

                    <div className="service-option">
                        <input
                            type="checkbox"
                            id="uxDesign"
                            name="uxDesign"
                            checked={services.uxDesign}
                            onChange={handleServiceChange}
                        />
                        <label htmlFor="uxDesign">UX design</label>
                    </div>

                    <div className="service-option">
                        <input
                            type="checkbox"
                            id="userResearch"
                            name="userResearch"
                            checked={services.userResearch}
                            onChange={handleServiceChange}
                        />
                        <label htmlFor="userResearch">User research</label>
                    </div>
                </div>

                <div className="service-column">
                    <div className="service-option">
                        <input
                            type="checkbox"
                            id="contentCreation"
                            name="contentCreation"
                            checked={services.contentCreation}
                            onChange={handleServiceChange}
                        />
                        <label htmlFor="contentCreation">Content creation</label>
                    </div>

                    <div className="service-option">
                        <input
                            type="checkbox"
                            id="strategy"
                            name="strategy"
                            checked={services.strategy}
                            onChange={handleServiceChange}
                        />
                        <label htmlFor="strategy">Strategy & consulting</label>
                    </div>

                    <div className="service-option">
                        <input
                            type="checkbox"
                            id="other"
                            name="other"
                            checked={services.other}
                            onChange={handleServiceChange}
                        />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSelection;