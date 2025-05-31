import React from 'react';
import { IoSearchSharp, IoArrowForward } from 'react-icons/io5';
import { MdBusiness, MdComputer, MdArticle, MdHome, MdStore, MdDesignServices } from 'react-icons/md';
import TemplateCard from './TemplateCard';
import styles from './styles/TemplateGallery.module.css';
import construction from "../../assets/construction-worker.webp"
import { Link } from "react-router-dom"
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

const TemplateGallery = () => {
    const categories = [
        { name: 'Portfolio & Agency', icon: <MdBusiness />, href: '/category/portfolio' },
        { name: 'Technology', icon: <MdComputer />, href: '/category/technology' },
        { name: 'Blog & Editorial', icon: <MdArticle />, href: '/category/blog' },
        { name: 'Professional Services', icon: <MdDesignServices />, href: '/category/services' },
        { name: 'Real Estate', icon: <MdHome />, href: '/category/real-estate' },
        { name: 'Retail', icon: <MdStore />, href: '/category/retail' }
    ];

    const featuredTemplates = [
        {
            id: 1,
            images: [
                ecommerce, travel
            ],
            title: 'Albeit',
            industry: 'Business',
            pages: 12,
            hasBooking: true,
            rating: 4.9,
            price: '$129'
        },
        {
            id: 2,
            images: [
                architecture, personal, technology
            ],
            title: 'Smart One',
            industry: 'Technology',
            pages: 8,
            hasBooking: false,
            rating: 4.8,
            price: '$99'
        },
        {
            id: 3,
            images: [
                food, beauty, community
            ],
            title: 'Evantine',
            industry: 'Events',
            pages: 15,
            hasBooking: true,
            rating: 5.0,
            price: '$149'
        },
        {
            id: 4,
            images: [
                photography, community
            ],
            title: 'Q Studio',
            industry: 'Creative',
            pages: 10,
            hasBooking: true,
            rating: 4.7,
            price: '$119'
        }
    ];

    const newTemplates = [
        {
            id: 5,
            images: [
                podcast, portfolio
            ],
            title: 'APTLO',
            industry: 'Travel',
            pages: 9,
            hasBooking: true,
            rating: 4.6,
            price: '$89'
        },
        {
            id: 6,
            images: [
                art, food, architecture
            ],
            title: 'Fent',
            industry: 'Design',
            pages: 7,
            hasBooking: false,
            rating: 4.8,
            price: '$79'
        },
        {
            id: 7,
            images: [
                education, personal
            ],
            title: 'Themgroup',
            industry: 'Business',
            pages: 11,
            hasBooking: true,
            rating: 4.9,
            price: '$109'
        },
        {
            id: 8,
            images: [
                services, community, technology
            ],
            title: 'Rozanna',
            industry: 'Fashion',
            pages: 13,
            hasBooking: true,
            rating: 5.0,
            price: '$139'
        }
    ];

    const freeTemplates = [
        {
            id: 9,
            images: [
                education,
            ],
            title: 'Lun Dark',
            industry: 'Portfolio',
            pages: 5,
            hasBooking: false,
            rating: 4.5,
            price: 'Free'
        },
        {
            id: 10,
            images: [
                art, services
            ],
            title: 'Syrup Tennis',
            industry: 'Sports',
            pages: 6,
            hasBooking: true,
            rating: 4.3,
            price: 'Free'
        },
        {
            id: 11,
            images: [
                food, beauty
            ],
            title: 'Ptech',
            industry: 'Technology',
            pages: 8,
            hasBooking: false,
            rating: 4.7,
            price: 'Free'
        },
        {
            id: 12,
            images: [
                photography, beauty
            ],
            title: 'TechTree',
            industry: 'Business',
            pages: 7,
            hasBooking: true,
            rating: 4.4,
            price: 'Free'
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    Website templates for designers, businesses, and personal use
                </h1>
                <p className={styles.subtitle}>
                    Create beautiful websites with our curated collection of stunning Website Templates.
                </p>

                <div className={styles.searchContainer}>
                    <IoSearchSharp className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search all templates (e.g. Business, Portfolio)"
                        className={styles.searchInput}
                    />
                </div>
            </div>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Popular categories</h2>
                    <Link to={"/templates/categories"} className={styles.browseAll}>
                        Browse all categories <IoArrowForward />
                    </Link>
                </div>

                <div className={styles.categoriesGrid}>
                    {categories.map((category, index) => (
                        <Link key={index} to={"/templates/all"} className={styles.categoryCard}>
                            <div className={styles.categoryImage}>
                                <img src={construction} alt="construction" />
                            </div>
                            <h3 className={styles.categoryName}>{category.name}</h3>
                        </Link>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Featured</h2>
                    <Link to={"/templates/all"} className={styles.browseAll}>
                        Browse all featured website templates <IoArrowForward />
                    </Link>
                </div>
                <p className={styles.sectionSubtitle}>Monthly selection of curated templates</p>

                <div className={styles.templatesGrid}>
                    {featuredTemplates.map((template) => (
                        <TemplateCard {...template} key={template.id} />
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>New</h2>
                    <Link to={"/templates/all"} className={styles.browseAll}>
                        Browse all new website templates <IoArrowForward />
                    </Link>
                </div>
                <p className={styles.sectionSubtitle}>Recently updated from our expert template creators</p>

                <div className={styles.templatesGrid}>
                    {newTemplates.map((template) => (
                        <TemplateCard {...template} key={template.id} />
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Free</h2>
                    <Link to={"/templates/all"} className={styles.browseAll}>
                        Browse all free website templates <IoArrowForward />
                    </Link>
                </div>
                <p className={styles.sectionSubtitle}>Free templates to get started</p>

                <div className={styles.templatesGrid}>
                    {freeTemplates.map((template) => (
                        <TemplateCard {...template} key={template.id} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TemplateGallery;
