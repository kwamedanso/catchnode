import React, { useState } from 'react';
import {
    IoSearchSharp, IoGridOutline, IoStarOutline, IoGiftOutline, IoHammerOutline, IoColorPaletteOutline, IoNewspaperOutline, IoPeopleOutline, IoDocumentTextOutline, IoSchoolOutline, IoLeafOutline, IoRestaurantOutline, IoBusinessOutline, IoPeopleCircleOutline, IoChevronDown
} from 'react-icons/io5';
import TemplateCard from './TemplateCard';
import styles from './styles/TemplatesFilter.module.css';
import architecture from "../../assets/architecture.webp"
import art from "../../assets/art.webp"
import beauty from "../../assets/beauty.webp"
import community from "../../assets/beauty.webp"
import ecommerce from "../../assets/ecommerce.webp"
import education from "../../assets/education.webp"
import food from "../../assets/food.webp"
import personal from "../../assets/personal.webp"
import photography from "../../assets/photography.webp"
import podcast from "../../assets/podcast.webp"
import portfolio from "../../assets/portfolio.webp"
import services from "../../assets/services.webp"
import travel from "../../assets/travel.webp"
import technology from "../../assets/it.webp"
import { Link } from 'react-router-dom';

const TemplatesFilter = () => {
    const [showNavigation, setshowNavigation] = useState(false)
    const sidebarItems = [
        { name: 'All', icon: <IoGridOutline />, href: '/templates/all', active: true },
        { name: 'Featured', icon: <IoStarOutline />, href: '/templates/featured' },
        { name: 'Free', icon: <IoGiftOutline />, href: '/templates/free' },
        { name: 'Architecture & Design', icon: <IoHammerOutline />, href: '/templates/architecture' },
        { name: 'Arts & Entertainment', icon: <IoColorPaletteOutline />, href: '/templates/arts' },
        { name: 'Blog & Editorial', icon: <IoNewspaperOutline />, href: '/templates/blog' },
        { name: 'Community & Nonprofit', icon: <IoPeopleOutline />, href: '/templates/community' },
        { name: 'Documentation', icon: <IoDocumentTextOutline />, href: '/templates/documentation' },
        { name: 'Education', icon: <IoSchoolOutline />, href: '/templates/education' },
        { name: 'Environment', icon: <IoLeafOutline />, href: '/templates/environment' },
        { name: 'Food & Drink', icon: <IoRestaurantOutline />, href: '/templates/food' },
        { name: 'Government', icon: <IoBusinessOutline />, href: '/templates/government' },
        { name: 'HR & Hiring', icon: <IoPeopleCircleOutline />, href: '/templates/hr' }
    ];

    const breadcrumbs = [
        { name: 'Templates', href: '/templates' },
        { name: 'Categories', href: '/templates/categories' },
        { name: 'All' }
    ];

    const templates = [
        {
            id: 1,
            images: [
                food, architecture
            ],
            title: 'Kofeo',
            industry: 'Restaurant',
            pages: 8,
            hasBooking: true,
            rating: 4.8,
            price: '$59 USD',
            author: 'Aartic'
        },
        {
            id: 2,
            images: [
                portfolio, personal
            ],
            title: 'Oscar Nilsson',
            industry: 'Portfolio',
            pages: 12,
            hasBooking: false,
            rating: 4.9,
            price: '$59 USD',
            author: 'Lightning Lab'
        },
        {
            id: 3,
            images: [
                technology, services
            ],
            title: 'DevEx',
            industry: 'Technology',
            pages: 15,
            hasBooking: true,
            rating: 5.0,
            price: '$129 USD',
            author: 'Factor Theme'
        },
        {
            id: 4,
            images: [
                ecommerce, food
            ],
            title: 'Focusly',
            industry: 'Business',
            pages: 10,
            hasBooking: true,
            rating: 4.7,
            price: '$129 USD',
            author: 'template.supply'
        },
        {
            id: 5,
            images: [
                photography, podcast
            ],
            title: 'Creative Studio',
            industry: 'Design',
            pages: 9,
            hasBooking: false,
            rating: 4.6,
            price: '$89 USD',
            author: 'Design Co'
        },
        {
            id: 6,
            images: [
                art, education
            ],
            title: 'Fashion Forward',
            industry: 'Fashion',
            pages: 11,
            hasBooking: true,
            rating: 4.8,
            price: '$99 USD',
            author: 'Style Labs'
        },
        {
            id: 7,
            images: [
                community, beauty
            ],
            title: 'Tech Innovate',
            industry: 'Technology',
            pages: 13,
            hasBooking: false,
            rating: 4.9,
            price: '$119 USD',
            author: 'Tech Themes'
        },
        {
            id: 8,
            images: [
                architecture, travel
            ],
            title: 'Modern Architecture',
            industry: 'Architecture',
            pages: 14,
            hasBooking: true,
            rating: 5.0,
            price: '$149 USD',
            author: 'Arch Studio'
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.searchContainer}>
                    <IoSearchSharp className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search for templates"
                        className={styles.searchInput}
                    />
                </div>

                <nav className={styles.navigation}>
                    {sidebarItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className={`${styles.navItem} ${item.active ? styles.navItemActive : ''}`}
                        >
                            <span className={styles.navIcon}>{item.icon}</span>
                            <span className={styles.navText}>{item.name}</span>
                        </a>
                    ))}
                </nav>
            </div>

            <div className={styles.main}>
                <div className={styles.breadcrumbs}>
                    {breadcrumbs.map((crumb, index) => (
                        <span key={index} className={styles.breadcrumb}>
                            {crumb.href ? (
                                <Link to={crumb.href} className={styles.breadcrumbLink}>
                                    {crumb.name}
                                </Link>
                            ) : (
                                <span className={styles.breadcrumbCurrent}>{crumb.name}</span>
                            )}
                            {index < breadcrumbs.length - 1 && (
                                <span className={styles.breadcrumbSeparator}>›</span>
                            )}
                        </span>
                    ))}
                </div>

                <h1 className={styles.title}>All Website Templates</h1>

                <div className={styles.categoryNavigation}>
                    <div className={styles.searchContainer}>
                        <IoSearchSharp className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Search for templates"
                            className={styles.searchInput}
                        />
                    </div>
                    <button className={styles.categoriesButton} onClick={() => setshowNavigation(!showNavigation)}>
                        <div>Categories</div>
                        <div><IoChevronDown /></div>
                    </button>

                    {showNavigation ? <nav className={styles.navigation}>
                        {sidebarItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className={`${styles.navItem} ${item.active ? styles.navItemActive : ''}`}
                            >
                                <span className={styles.navIcon}>{item.icon}</span>
                                <span className={styles.navText}>{item.name}</span>
                            </a>
                        ))}
                    </nav> : null}
                </div>

                <div className={styles.templatesGrid}>
                    {templates.map((template) => (
                        <TemplateCard {...template} key={template.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TemplatesFilter;
