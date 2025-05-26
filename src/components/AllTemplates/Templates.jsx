import { useState } from 'react';
import { FaPlaneDeparture } from "react-icons/fa";
import plumber from "../../assets/plumber.webp"
import electrician from "../../assets/electrician.webp"
import constructionWorker from "../../assets/construction-worker.webp"
import painter from "../../assets/painter.webp"
import styles from './styles/Templates.module.css';
import { Link } from 'react-router-dom';
import TemplateCard from './TemplateCard';



export default function Templates() {
    const [activeTab, setActiveTab] = useState('Trending');

    const templateData = [
        {
            "images": [
                plumber, electrician, constructionWorker, painter
            ],
            "title": "E-commerce Template",
            "industry": "E-commerce",
            "pages": 12,
            "hasBooking": false,
            "rating": 4.8,
            "price": "Premium Template"
        },
        {
            "images": [
                constructionWorker, painter
            ],
            "title": "Construction Industry Template",
            "industry": "Education",
            "pages": 6,
            "hasBooking": false,
            "rating": 4.5,
            "price": "Standard"
        },
        {
            "images": [
                painter, plumber
            ],
            "title": "Painter Template",
            "industry": "Healthcare",
            "pages": 10,
            "hasBooking": true,
            "rating": 4.9,
            "price": "Premium"
        },
        {
            "images": [
                electrician, constructionWorker
            ],
            "title": "Electrician Template",
            "industry": "Construction",
            "pages": 7,
            "hasBooking": false,
            "rating": 4.6,
            "price": "Basic"
        },
        {
            "images": [
                plumber, electrician
            ],
            "title": "Plumber Template",
            "industry": "Trades",
            "pages": 5,
            "hasBooking": true,
            "rating": 4.7,
            "price": "Standard"
        },
        {
            "images": [
                painter, constructionWorker
            ],
            "title": "Restaurant Template",
            "industry": "Technology",
            "pages": 9,
            "hasBooking": false,
            "rating": 4.9,
            "price": "Premium"
        },
        {
            "images": [
                electrician, plumber
            ],
            "title": "Electrician Template",
            "industry": "Food & Beverage",
            "pages": 4,
            "hasBooking": true,
            "rating": 4.4,
            "price": "Basic"
        }
    ]

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
        ? templateData.filter(data => data.title.includes('Trending'))
        : templateData.filter(data => data.title.includes(activeTab));

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
                {templateData.map((template, index) => (
                    <TemplateCard key={index} {...template} />

                ))}
            </div>
        </div>
    );
}