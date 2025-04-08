import React from 'react';
import './styles/ContactOptions.css';
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { RiTwitterXFill, RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineCall } from "react-icons/md";



const ContactOptions = () => {
    return (
        <div className="contact-options">
            <div className="option-section">
                <h3>Chat with us</h3>
                <p>Speak to our friendly team via live chat.</p>

                <div className="option-buttons">
                    <a href="#live-chat" className="option-button">
                        <IoChatboxEllipsesOutline />
                        Start a live chat
                    </a>

                    <a href="mailto:sales@untitled.com" className="option-button">
                        <CiMail />
                        Shoot us an email
                    </a>

                    <a href="#x-message" className="option-button">
                        <RiTwitterXFill />
                        Message us on X
                    </a>
                </div>
            </div>

            <div className="option-section">
                <h3>Call us</h3>
                <p>Call our team Mon-Fri from 8am to 5pm.</p>

                <div className="phone-numbers">
                    <a href="tel:+1-136-366" className="phone-link">
                        <RiCustomerService2Fill />
                        +136 366 5957
                    </a>

                    <a href="tel:+45424-007-007" className="phone-link">
                        <MdOutlineCall />
                        +45424 007 007
                    </a>
                </div>
            </div>

            <div className="option-section">
                <h3>Trusted by 10,000+ companies</h3>
                <p>Chat to us in person at our Melbourne HQ.</p>

                {/* <ImageSlider images={images} /> */}
                {/* <div className="company-logos">
                    <img src="/api/placeholder/40/20" alt="Intercom" className="logo" />
                    <img src="/api/placeholder/40/20" alt="Loom" className="logo" />
                    <img src="/api/placeholder/80/20" alt="Databricks" className="logo" />
                    <img src="/api/placeholder/60/20" alt="Send Grid" className="logo" />
                    <div className="logo-row">
                        <img src="/api/placeholder/60/20" alt="Clickup" className="logo" />
                        <img src="/api/placeholder/48/20" alt="Ghost" className="logo" />
                        <img src="/api/placeholder/48/20" alt="Uber" className="logo" />
                        <img src="/api/placeholder/48/20" alt="Twitch" className="logo" />
                        <img src="/api/placeholder/80/20" alt="Uptodown" className="logo" />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ContactOptions;