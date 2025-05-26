import React from 'react';
import { MdArchitecture } from 'react-icons/md';
import styles from './styles/TemplateCategoryCard.module.css';

const TemplateCategoryCard = ({
    icon,
    title, imageUrl, count, desc,
}) => {
    return (
        <a href={"/templates/all"} className={styles.card}>
            <div className={styles.header}>
                <div className={styles.iconContainer}>
                    {icon}
                </div>
                <span className={styles.count}>{count}</span>
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{desc}</p>
            </div>

            <div className={styles.imageContainer}>
                <img src={imageUrl} alt="Template preview" className={styles.previewImage} />
            </div>
        </a>
    );
};

export default TemplateCategoryCard;