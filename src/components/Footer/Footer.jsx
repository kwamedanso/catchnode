import React from 'react';
import './styles/Footer.css';
import LogoWithTriangle from './LogoWithTriangle';
import logo from "../../assets/Catchnode .png"


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-logo">
                        {/* <LogoWithTriangle /> */}
                        <div className="footer-logo-container">
                            <img src={logo} alt="CatchNode logo" className="footer-logo-img" />
                        </div>
                        <p className="footer-contact">info@catchnode.com</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h3 className="footer-column-title">COMPANY</h3>
                            <ul className="footer-menu">
                                <li><a href="/products">Products</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/case-studies">Case Studies</a></li>
                                <li><a href="/about-us">About us</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/write-for-us">Write for us</a></li>
                                <li><a href="/careers">Careers</a></li>
                                <li><a href="/contact-us">Contact us</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3 className="footer-column-title">PRODUCTS</h3>
                            <ul className="footer-menu">
                                <li><a href="/templates">Templates</a></li>
                                <li><a href="/ui-bakery">UI Bakery</a></li>
                                <li><a href="/eva-design-system">Eva Design System</a></li>
                                <li><a href="/nebular">Nebular</a></li>
                                <li><a href="/ui-kitten">UI Kitten</a></li>
                                <li><a href="/ngx-admin">NGX Admin</a></li>
                                <li><a href="/eva-color-generator">Eva Color Generator</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3 className="footer-column-title">SERVICES</h3>
                            <ul className="footer-menu">
                                <li><a href="/services/startup-development">Startup Development Services</a></li>
                                <li><a href="/services/mvp-development">MVP Development Services</a></li>
                                <li><a href="/services/web-development">Web Development</a></li>
                                <li><a href="/services/webflow-development">Webflow Development</a></li>
                                <li><a href="/services/mobile-development">Mobile Development</a></li>
                                <li><a href="/services/qa-services">QA Services</a></li>
                                <li><a href="/services/design-services">Design Services</a></li>
                                <li><a href="/services/big-data-development">Big Data Development</a></li>
                                <li><a href="/services/digital-transformation">Digital Transformation</a></li>
                                <li><a href="/services/reactjs-development">ReactJs Development</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3 className="footer-column-title">MATERIALS</h3>
                            <ul className="footer-menu">
                                <li><a href="/materials/starter-pack">Starter Pack for Startup Founders</a></li>
                            </ul>

                            {/* <h3 className="footer-column-title footer-title-mt">FREE TOOLS</h3>
                            <ul className="footer-menu">
                                <li><a href="/tools/project-estimation-template">Project Estimation Template</a></li>
                                <li><a href="/tools/adapted-scrum-framework">Adapted Scrum Framework</a></li>
                                <li><a href="/tools/project-charter-template">Project Charter Template</a></li>
                                <li><a href="/tools/qa-process-workflow">QA Process Workflow</a></li>
                                <li><a href="/tools/sprint-report-template">Sprint Report Template</a></li>
                                <li><a href="/tools/evm-template">EVM Template</a></li>
                            </ul> */}

                            <h3 className="footer-column-title footer-title-mt">INDUSTRIES</h3>
                            <ul className="footer-menu">
                                <li><a href="/industries/industry-4-0">Industry 4.0</a></li>
                                <li><a href="/industries/insurance">Insurance</a></li>
                                <li><a href="/industries/financial">Financial</a></li>
                                <li><a href="/industries/edtech">EdTech</a></li>
                                <li><a href="/industries/ecommerce">eCommerce</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;