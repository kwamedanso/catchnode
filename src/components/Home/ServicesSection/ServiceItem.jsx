import React from 'react';
import styles from './styles/ServiceItem.module.css';

const ServiceItem = ({ title, features, link }) => {
    return (
        <a href={link} className={styles.service_item}>
            <h3 className={styles.service_title}>{title}</h3>

            <div className={styles.service_features}>
                {features.map((feature, index) => (
                    <React.Fragment key={index}>
                        <span className={styles.feature_item}>{feature}</span>
                        {index < features.length - 1 && <span className={styles.feature_separator}>/</span>}
                    </React.Fragment>
                ))}
            </div>
            <svg className={styles.arrow_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
        </a>
    );
};

export default ServiceItem;