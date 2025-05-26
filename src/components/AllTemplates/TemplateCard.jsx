// TemplateCard.jsx
import React, { useState } from 'react';
import { IoChevronBack, IoChevronForward, IoStar, IoGlobe, IoDocumentText, IoCalendar } from 'react-icons/io5';
import styles from './styles/TemplateCard.module.css';

const TemplateCard = ({
    images,
    title,
    industry,
    pages,
    hasBooking,
    rating,
    price
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    const getIndustryIcon = (industry) => {
        switch (industry.toLowerCase()) {
            case 'travel':
                return <IoGlobe className={styles.icon} />;
            case 'business':
                return <IoDocumentText className={styles.icon} />;
            default:
                return <IoGlobe className={styles.icon} />;
        }
    };

    return (
        <div className={styles.card}>
            <div className={styles.industryIcon}>
                {getIndustryIcon(industry)}
            </div>

            <div className={styles.starRating}>
                <IoStar className={styles.star} />
                <span className={styles.ratingText}>{rating}</span>
            </div>

            <div className={styles.imageSlider}>
                <div
                    className={styles.imageContainer}
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Template ${index + 1}`}
                            className={styles.image}
                        />
                    ))}
                </div>

                <button
                    onClick={prevImage}
                    className={`${styles.navButton} ${styles.prevButton}`}
                >
                    <IoChevronBack className={styles.navIcon} />
                </button>
                <button
                    onClick={nextImage}
                    className={`${styles.navButton} ${styles.nextButton}`}
                >
                    <IoChevronForward className={styles.navIcon} />
                </button>

                <div className={styles.indicators}>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToImage(index)}
                            className={`${styles.indicator} ${index === currentImageIndex ? styles.indicatorActive : ''
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.details}>
                <h3 className={styles.title}>{title}</h3>

                <div className={styles.features}>
                    <div className={styles.feature}>
                        <IoGlobe className={styles.featureIcon} />
                        <span>Industry: {industry}</span>
                    </div>

                    <div className={styles.feature}>
                        <IoDocumentText className={styles.featureIcon} />
                        <span>Pages: {pages}</span>
                    </div>

                    {hasBooking && (
                        <div className={styles.feature}>
                            <IoCalendar className={styles.featureIcon} />
                            <span>Appointment Booking</span>
                        </div>
                    )}
                </div>

                <div className={styles.price}>
                    {price}
                </div>
            </div>
        </div>
    );
};

export default TemplateCard;

{/* <div key={page.id} className={styles.card}>
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
                    </div> */}