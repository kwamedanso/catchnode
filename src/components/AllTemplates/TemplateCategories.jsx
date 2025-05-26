import React from 'react';
import styles from './styles/TemplatesCategories.module.css';
import TemplateCategoryCard from './TemplateCategoryCard';
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
import plumber from "../../assets/plumber.webp"
import {
    MdArchitecture, MdBrush, MdSpa, MdPeople, MdShoppingCart, MdSchool, MdRestaurant, MdPerson, MdPhotoCamera, MdMic, MdFolderShared, MdHandshake, MdFlight, MdDevices, MdCategory,
} from 'react-icons/md';

// Placeholder data - replace with your actual data
const categoriesData = [
    {
        "title": "Architecture & Design",
        "imageUrl": architecture,
        "icon": <MdArchitecture />,
        "desc": "Interior design, building and home",
        "count": 14
    },
    {
        "title": "Art & Illustration",
        "imageUrl": art,
        "icon": <MdBrush />,
        "desc": "Creative portfolios, digital art, and galleries",
        "count": 28
    },
    {
        "title": "Beauty & Wellness",
        "imageUrl": beauty,
        "icon": <MdSpa />,
        "desc": "Salons, spas, fitness studios, and health services",
        "count": 35
    },
    {
        "title": "Community & Non-Profit",
        "imageUrl": community,
        "icon": <MdPeople />,
        "desc": "Charities, organizations, and local groups",
        "count": 18
    },
    {
        "title": "eCommerce",
        "imageUrl": ecommerce,
        "icon": <MdShoppingCart />,
        "desc": "Online stores, product showcases, and retail",
        "count": 52
    },
    {
        "title": "Education & Online Courses",
        "imageUrl": education,
        "icon": <MdSchool />,
        "desc": "Schools, universities, and e-learning platforms",
        "count": 22
    },
    {
        "title": "Food & Drink",
        "imageUrl": food,
        "icon": <MdRestaurant />,
        "desc": "Restaurants, cafes, recipes, and culinary blogs",
        "count": 41
    },
    {
        "title": "Personal Website",
        "imageUrl": personal,
        "icon": <MdPerson />,
        "desc": "Personal blogs, resumes, and individual pages",
        "count": 30
    },
    {
        "title": "Photography",
        "imageUrl": photography,
        "icon": <MdPhotoCamera />,
        "desc": "Photographer portfolios, galleries, and studios",
        "count": 25
    },
    {
        "title": "Podcast & Music",
        "imageUrl": podcast,
        "icon": <MdMic />,
        "desc": "Audio shows, bands, musicians, and music labels",
        "count": 19
    },
    {
        "title": "Portfolio & CV",
        "imageUrl": portfolio,
        "icon": <MdFolderShared />,
        "desc": "Professional portfolios, resumes, and CVs",
        "count": 33
    },
    {
        "title": "Services",
        "imageUrl": services,
        "icon": <MdHandshake />,
        "desc": "Consulting, agencies, and professional services",
        "count": 48
    },
    {
        "title": "Travel",
        "imageUrl": travel,
        "icon": <MdFlight />,
        "desc": "Travel agencies, blogs, and destination guides",
        "count": 20
    },
    {
        "title": "Technology",
        "imageUrl": technology,
        "icon": <MdDevices />,
        "desc": "Tech companies, software, and IT solutions",
        "count": 38
    },
    {
        "title": "Other",
        "imageUrl": plumber,
        "icon": <MdCategory />,
        "desc": "Miscellaneous categories and general purpose",
        "count": 10
    }
]

const TemplateCategories = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    All template categories
                </h1>
            </div>
            <div className={styles.grid}>
                {categoriesData.map((category, index) => (
                    <TemplateCategoryCard
                        key={index}
                        {...category}
                    />
                ))}
            </div>
        </div>
    );
};

export default TemplateCategories;