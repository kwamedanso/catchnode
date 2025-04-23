import React from 'react'
import style from "./styles/HeroSection.module.css"
import { FaStar } from "react-icons/fa";
import images from "./images"

export default function HeroSection() {
    return (
        <div className={style.heroSectionContainer}>
            <div className={style.heroSection}>
                <h1>About Us</h1>
                <p>Driving growth and innovation through strategic solutions. Learn more about our journey and mission.</p>

                <div className={style.rating}>
                    <div><span>Ratings <FaStar /> 5.0</span></div>
                    <div className={style.ratingImages}>
                        {images?.map((image, index) => <img key={index} src={image} alt={`Customer ${index}`} />)}
                        <span className={style.blueCircle}>1k+</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
