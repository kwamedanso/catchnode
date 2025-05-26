import React from 'react';
import styles from './styles/ProductsPage.module.css';
import { FaBriefcase, FaCode, FaPalette, FaDownload, FaCodeBranch, FaStar } from 'react-icons/fa';
import image from "../../assets/electrician.webp"

const Products = () => {
    return (
        <>
            <section className={styles.heroSection}>
                <div className={styles.heroHeader}>
                    <h1 className={styles.heroTitle}>
                        Products tailor-made for our clients
                    </h1>
                </div>
            </section>
            <section className={styles.nebularSection}>
                <div className={styles.container}>
                    <div className={styles.leftContent}>
                        <span className={styles.label}>ANGULAR UI LIBRARY</span>
                        <h1 className={styles.title}>Nebular</h1>
                        <p className={styles.description}>
                            Nebular is an Angular 8 UI Library based on Eva Design System,
                            focusing on beautiful design and the ability to adapt it to your brand.
                            The library is recognized at the Angular Connect 2018, Europe's largest
                            Angular conference.
                        </p>

                        <div className={styles.technologies}>
                            <h3 className={styles.techTitle}>Used Technologies</h3>
                            <div className={styles.techIcons}>
                                <div className={styles.techIcon}>
                                    <span className={styles.iconText}>NB</span>
                                </div>
                                <div className={styles.techIcon}>
                                    <span className={styles.iconText}>A</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.rightContent}>
                        <img
                            src={image}
                            alt="Nebular Dashboard Preview"
                            className={styles.productImage}
                        />
                    </div>
                </div>
            </section>

            <section className={styles.uiKittenSection}>
                <div className={styles.container}>
                    <div className={styles.leftContent}>
                        <div className={styles.businessSection}>
                            <div className={styles.sectionIcon}>
                                <FaBriefcase />
                            </div>
                            <h3 className={styles.sectionTitle}>For Business</h3>
                            <p className={styles.sectionDescription}>
                                It's essential to get the timing of your product launch right.
                                Use UI Kitten to bring your product from an MVP to the final
                                version faster.
                            </p>
                        </div>

                        <div className={styles.developersSection}>
                            <div className={styles.sectionIcon}>
                                <FaCode />
                            </div>
                            <h3 className={styles.sectionTitle}>For Developers</h3>
                            <p className={styles.sectionDescription}>
                                UI Kitten saves time and effort owing to ready-to-use layouts
                                and components. Open-source and free of charge, the
                                framework contains the manual that answers any questions
                                in a clear and accessible way.
                            </p>
                        </div>

                        <div className={styles.designersSection}>
                            <div className={styles.sectionIcon}>
                                <FaPalette />
                            </div>
                            <h3 className={styles.sectionTitle}>For Designers</h3>
                            <p className={styles.sectionDescription}>
                                Change themes on the fly and save time on styling
                                particular elements. The framework allows using default
                                themes or creating custom ones. Plus, UI Kitten allows
                                making quick component design changes in a single file.
                            </p>
                        </div>

                        <button className={styles.learnMore}>Learn more</button>
                    </div>

                    <div className={styles.rightContent}>
                        <div className={styles.statsCard}>
                            <div className={styles.statItem}>
                                <FaDownload className={styles.statIcon} />
                                <div className={styles.statInfo}>
                                    <span className={styles.statNumber}>6 400</span>
                                    <span className={styles.statLabel}>Downloads p/m</span>
                                </div>
                            </div>

                            <div className={styles.statItem}>
                                <FaCodeBranch className={styles.statIcon} />
                                <div className={styles.statInfo}>
                                    <span className={styles.statNumber}>890</span>
                                    <span className={styles.statLabel}>Forks</span>
                                </div>
                            </div>

                            <div className={styles.statItem}>
                                <FaStar className={styles.statIcon} />
                                <div className={styles.statInfo}>
                                    <span className={styles.statNumber}>8 900</span>
                                    <span className={styles.statLabel}>Stars</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;