import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiUser, FiClock, FiEye, FiArrowRight } from 'react-icons/fi';
import { BsLaptop, BsPhone } from 'react-icons/bs';
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai';
import { FaRegNewspaper } from "react-icons/fa";
import { GoVersions } from "react-icons/go";
import styles from './styles/TemplatePage.module.css';
import plumber from "../../../assets/plumber.webp"
import electrician from "../../../assets/electrician.webp"
import constructionWorker from "../../../assets/construction-worker.webp"
import painter from "../../../assets/painter.webp"
import { Link } from 'react-router-dom';

const TemplateItem = () => {
    const [expandedFeature, setExpandedFeature] = useState(null);

    const toggleFeature = (feature) => {
        if (expandedFeature === feature) {
            setExpandedFeature(null);
        } else {
            setExpandedFeature(feature);
        }
    };

    const features = [
        {
            id: 'animations',
            title: 'Animations/Effects',
            content: (
                <div className={styles.featureContent}>
                    <div className={styles.featureImageWrapper}>
                        <img src={plumber} alt="Animation effects demo" />
                    </div>
                    <p>Smooth animations and effects that enhance user experience. Includes hover states, transitions, and scroll animations that bring your website to life without compromising performance.</p>
                </div>
            )
        },
        {
            id: 'colorStyles',
            title: 'Color Styles',
            content: (
                <div className={styles.featureContent}>
                    <div className={styles.featureImageWrapper}>
                        <img src={constructionWorker} alt="Color styles showcase" />
                    </div>
                    <p>Customizable color schemes that align with your brand identity. Easily change primary, secondary, and accent colors throughout the entire template with our global color variables.</p>
                </div>
            )
        },
        {
            id: 'components',
            title: 'Components',
            content: (
                <div className={styles.featureContent}>
                    <div className={styles.featureImageWrapper}>
                        <img src={painter} alt="Component library" />
                    </div>
                    <p>Rich set of pre-built components including hero sections, feature cards, testimonials, pricing tables, contact forms, and more. All components are fully customizable and responsive.</p>
                </div>
            )
        },
        { id: 'linkStyles', title: 'Link Styles' },
        { id: 'responsiveDesign', title: 'Responsive Design' },
        { id: 'scrollSections', title: 'Scroll Sections' },
        { id: 'seo', title: 'SEO & Performance' },
        { id: 'ticker', title: 'Ticker' },
        { id: 'textStyles', title: 'Text Styles' },
        { id: 'a11y', title: 'A11y Optimized' },
        { id: 'forms', title: 'Forms' }
    ];

    const relatedTemplates = [
        { id: 'dentify', title: 'Dentify', price: 'Free', creator: 'Muhammad Hossain', img: plumber },
        { id: 'blocky', title: 'Blocky', price: 'Free', creator: 'Forester', img: constructionWorker },
        { id: 'sonic', title: 'Sonic', price: 'Free', creator: 'Designzio', img: electrician }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.breadcrumb}>
                    <span>Marketplace</span> &gt; <span>Templates</span> &gt; <span>Plumber</span>
                </div>
                <h1 className={styles.title}>Catchnode — Plumber Template</h1>
                <p className={styles.description}>
                    Plumber is a modern and sleek website template designed specifically for AI Agency's
                    expertise and innovation. With its sleek and modern design, this template provides a
                    visually stunning platform to highlight your AI solutions and attract potential clients.
                </p>
                <div className={styles.ctaButtons}>
                    <button className={styles.primaryButton}>Use for Free</button>
                    <button className={styles.secondaryButton}>Preview</button>
                </div>
            </header>

            <div className={styles.stats}>
                <div className={styles.statItem}>
                    <FiUser className={styles.statIcon} />
                    <span className={styles.statValue}>David Danso</span>
                    <span className={styles.statLabel}>Creator</span>
                </div>
                <div className={styles.statItem}>
                    <FiClock className={styles.statIcon} />
                    <span className={styles.statValue}>3 months ago</span>
                    <span className={styles.statLabel}>Updated</span>
                </div>
                <div className={styles.statItem}>
                    <GoVersions className={styles.statIcon} />
                    <span className={styles.statValue}>5</span>
                    <span className={styles.statLabel}>Pages</span>
                </div>
                <div className={styles.statItem}>
                    <FiEye className={styles.statIcon} />
                    <span className={styles.statValue}>26.6K+</span>
                    <span className={styles.statLabel}>Views</span>
                </div>
            </div>

            <div className={styles.screenshotsGrid}>
                <div className={styles.screenshotItem}>
                    <img src={painter} alt="Transforming workflows with AI" className={styles.screenshot} />
                </div>
                <div className={styles.screenshotItem}>
                    <img src={plumber} alt="Innovative services" className={styles.screenshot} />
                </div>
                <div className={styles.screenshotItem}>
                    <img src={constructionWorker} alt="Flexible plans" className={styles.screenshot} />
                </div>
                <div className={styles.screenshotItem}>
                    <img src={electrician} alt="Mobile view" className={styles.screenshot} />
                </div>
            </div>

            <section className={styles.descriptionSection}>
                <h2>Radison: The Ultimate AI Automation Agency Template</h2>
                <p>
                    Introducing the Radison AI Automation Agency Template, a sleek and modern website template
                    designed specifically for AI automation businesses. Built on Framer, this dark theme agency
                    template offers a visually stunning and responsive design that looks great on any device.
                </p>
            </section>

            <section className={styles.highlightsSection}>
                <div className={styles.highlight}>
                    <h3>Easily Editable and Conversion-Driven</h3>
                    <p>
                        With its intuitive layout and design, Radison makes it easy to customize sections to fit your brand, making it perfect
                        for agencies looking to create a professional, high-converting website. Radison features engaging
                        sections, interactive elements, and client testimonials to build trust and boost conversion rates.
                    </p>
                </div>
                <div className={styles.highlight}>
                    <p>
                        Fully optimized for SEO, this website template ensures your agency stands out
                        in search results, driving more traffic and potential clients to your business.
                    </p>
                </div>
                <div className={styles.highlight}>
                    <p>
                        Launch your AI automation agency website today with the Radison automation agency
                        template designed for easy customization, seamless animations and maximum impact!
                    </p>
                </div>
            </section>

            <section className={styles.featuresSection}>
                <h3>Features</h3>
                <div className={styles.featuresList}>
                    {features.map(feature => (
                        <div
                            key={feature.id}
                            className={`${styles.featureItem} ${expandedFeature === feature.id ? styles.expanded : ''}`}
                        >
                            <div
                                className={styles.featureHeader}
                                onClick={() => toggleFeature(feature.id)}
                            >
                                <h4>{feature.title}</h4>
                                {expandedFeature === feature.id ?
                                    <FiChevronUp className={styles.featureIcon} /> :
                                    <FiChevronDown className={styles.featureIcon} />
                                }
                            </div>
                            {expandedFeature === feature.id && (
                                <div className={styles.featureBody}>
                                    {feature.content || <p>Detailed information about {feature.title} features.</p>}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* <section className={styles.moreFromCreator}>
                <div className={styles.sectionHeader}>
                    <h3>More from Kuraleb Dubey</h3>
                    <a href="#" className={styles.viewAllLink}>
                        Show Profile <FiArrowRight className={styles.arrowIcon} />
                    </a>
                </div>
                <div className={styles.creatorTemplates}>
                    <div className={styles.templateCard}>
                        <img src="/api/placeholder/300/200" alt="PixeLab Template" className={styles.templateThumb} />
                        <h4>PixeLab</h4>
                        <span className={styles.templatePrice}>$19</span>
                    </div>
                </div>
            </section> */}

            <section className={styles.relatedTemplates}>
                <div className={styles.sectionHeader}>
                    <h3>Related Templates</h3>
                    <Link to={"/templates"} className={styles.viewAllLink}>
                        All Templates <FiArrowRight className={styles.arrowIcon} />
                    </Link>
                </div>
                <div className={styles.templateGrid}>
                    {relatedTemplates.map(template => (
                        <div key={template.id} className={styles.templateCard}>
                            <img src={template.img} alt={`${template.title} Template`} className={styles.templateThumb} />
                            <h4>{template.title}</h4>
                            <div className={styles.templateMeta}>
                                <span className={styles.templatePrice}>{template.price}</span>
                                <span className={styles.templateCreator}>{template.creator}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <aside className={styles.sidebar}>
                <div className={styles.sidebarSection}>
                    <h4>Categories</h4>
                    <ul className={styles.categoryList}>
                        <li><span className={styles.categoryBadge}>Agency</span></li>
                        <li><span className={styles.categoryBadge}>Landing Page</span></li>
                        <li><span className={styles.categoryBadge}>Artificial Intelligence</span></li>
                        <li><span className={styles.priceBadge}>Free</span></li>
                    </ul>
                </div>

                <div className={styles.sidebarSection}>
                    <h4>Pages</h4>
                    <ul className={styles.pagesList}>
                        <li>Home, Coming soon, 404</li>
                    </ul>
                </div>

                <div className={styles.sidebarSection}>
                    <h4>Support</h4>
                    <ul className={styles.supportList}>
                        <li><FiUser className={styles.supportIcon} /> Contact Kuraleb Dubey</li>
                        <li><BsLaptop className={styles.supportIcon} /> How templates work</li>
                        <li><AiOutlineCheck className={styles.supportIcon} /> Get help from the community</li>
                        <li><AiOutlinePlus className={styles.supportIcon} /> Report this template</li>
                    </ul>
                </div>

                <div className={styles.sidebarSection}>
                    <h4>Refund Policy</h4>
                    <p className={styles.refundText}>
                        Framer does not handle refund processing. All refunds are at the discretion of template creators. Please contact the creator for refund policy before making any purchase.
                    </p>
                </div>
            </aside>
        </div>
    );
};

export default TemplateItem;