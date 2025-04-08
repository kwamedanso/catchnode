import React from 'react';
import styles from './styles/ImageSlider.module.css';

const ImageSlider = ({ images }) => {
    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderWrapper}>
                {images.map((image, index) => (
                    <div key={index} className={styles.slide}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
                {/* Duplicate images for continuous loop */}
                {images.map((image, index) => (
                    <div key={`duplicate-${index}`} className={styles.slide}>
                        <img src={image} alt={`Slide ${images.length + index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;