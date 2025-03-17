import React, { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import './ContactModal.css';

const ContactModal = ({ onClose }) => {
    const modalRef = useRef(null);
    const modalContentRef = useRef(null);

    useEffect(() => {
        // Focus handling for accessibility
        const focusableElements = modalContentRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }

        // Add animation class after component mounts
        setTimeout(() => {
            if (modalContentRef.current) {
                modalContentRef.current.classList.add('show');
            }
        }, 10);

        // Event listener for escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    const handleBackdropClick = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        alert("Form submitted! (This is a placeholder - actual submission would be implemented in a real application)");
        onClose();
    };

    return (
        <div className="modal-backdrop" ref={modalRef} onClick={handleBackdropClick}>
            <div className="modal-content" ref={modalContentRef}>
                <div className="modal-header">
                    <h2>Contact us</h2>
                    <button className="close-button" onClick={onClose} aria-label="Close modal">
                        <FaTimes />
                    </button>
                </div>

                <div className="modal-body">
                    <p className="modal-description">
                        Leave us your inquiry, and our specialists will get in touch within 1 business day!
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Name<span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email<span className="required">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="company">Company</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="business-needs">Describe your business needs and ideas to develop.</label>
                            <textarea
                                id="business-needs"
                                name="business-needs"
                                rows="5"
                            ></textarea>
                        </div>

                        <div className="form-group checkbox-group">
                            <label className="checkbox-container">
                                <input type="checkbox" name="privacy-policy" required />
                                <span className="checkmark"></span>
                                <span className="checkbox-text">
                                    By checking this box, you acknowledge, that you have read and understood Akveo's
                                    <a href="/privacy-policy" className="policy-link">Privacy Policy</a>, and agree that we may use your personal information in accordance with the policy terms.
                                </span>
                            </label>
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="submit-button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;