import React, { useState } from 'react';
import ContactOptions from './ContactOptions';
import ServiceSelection from './ServiceSelection';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        services: {
            websiteDesign: false,
            uxDesign: false,
            userResearch: false,
            contentCreation: false,
            strategy: false,
            other: false
        }
    });

    const [country, setCountry] = useState('US');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleServiceChange = (e) => {
        const { name, checked } = e.target;
        setFormData({
            ...formData,
            services: {
                ...formData.services,
                [name]: checked
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Talk to our friendly sales team</h1>
                <p>We'll help you find the perfect plan, no matter your business size.</p>
            </div>

            <div className="contact-content">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">First name *</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="First name"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last name *</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last name"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@company.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group phone-group">
                        <label htmlFor="phone">Phone number</label>
                        <div className="phone-input">
                            <select
                                className="country-select"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            >
                                <option value="US">US</option>
                                <option value="UK">UK</option>
                                <option value="CA">CA</option>
                                <option value="AU">AU</option>
                            </select>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+1 (555) 000-0000"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Leave us a message..."
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>

                    <ServiceSelection
                        services={formData.services}
                        handleServiceChange={handleServiceChange}
                    />

                    <button type="submit" className="submit-button">
                        Send message
                    </button>
                </form>

                <ContactOptions />
            </div>
        </div>
    );
};

export default ContactForm;