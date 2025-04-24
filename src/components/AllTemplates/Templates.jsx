import { useState } from 'react';
import { FaPlaneDeparture } from "react-icons/fa";
import plumber from "../../assets/plumber.webp"
import electrician from "../../assets/electrician.webp"
import constructionWorker from "../../assets/construction-worker.webp"
import painter from "../../assets/painter.webp"
import styles from './styles/Templates.module.css';
import { Link } from 'react-router-dom';

export default function Templates() {
    const [activeTab, setActiveTab] = useState('Trending');

    const tabOptions = [
        { id: 'Trending', label: 'Trending' },
        { id: 'Websites', label: 'Websites' },
        { id: 'Products', label: 'Products' },
        { id: 'Emails', label: 'Emails' }
    ];

    const pageTypes = [
        {
            id: 'landing',
            icon: <FaPlaneDeparture />,
            title: 'Landing Page',
            screens: 6,
            image: constructionWorker,
            tags: ['Trending', 'Websites']
        },
        {
            id: 'pricing',
            icon: <FaPlaneDeparture />,
            title: 'Pricing Page',
            screens: 4,
            image: painter,
            tags: ['Trending', 'Websites']
        },
        {
            id: 'about',
            icon: <FaPlaneDeparture />,
            title: 'About Page',
            screens: 7,
            image: electrician,
            tags: ['Websites']
        },
        {
            id: 'dashboard',
            icon: <FaPlaneDeparture />,
            title: 'Dashboard',
            screens: 5,
            image: plumber,
            tags: ['Products', 'Trending']
        },
        {
            id: 'add-create',
            icon: <FaPlaneDeparture />,
            title: 'Add & Create',
            screens: 4,
            image: plumber,
            tags: ['Products']
        },
        {
            id: 'account',
            icon: <FaPlaneDeparture />,
            title: 'Account Setup',
            screens: 6,
            image: electrician,
            tags: ['Products', 'Emails']
        }
    ];

    const filteredPages = activeTab === 'Trending'
        ? pageTypes.filter(page => page.tags.includes('Trending'))
        : pageTypes.filter(page => page.tags.includes(activeTab));

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Discover</h1>

            <div className={styles.tabsContainer}>
                <div className={styles.tabsScroll}>
                    {tabOptions.map(tab => (
                        <button
                            key={tab.id}
                            className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.id === 'Trending' && <span className={styles.trendingIcon}>●</span>}
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.cardsGrid}>
                {filteredPages.map(page => (
                    <div key={page.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapper}>
                                {page.icon}
                            </div>
                            <div className={styles.cardInfo}>
                                <h3 className={styles.cardTitle}>{page.title}</h3>
                                <p className={styles.screenCount}>{page.screens} pages</p>
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <Link to={"/templates/plumber1"}>
                                <img
                                    src={page.image}
                                    alt={page.title}
                                    className={styles.cardImage}
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}