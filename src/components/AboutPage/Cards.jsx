import React from 'react'
import style from "./styles/Cards.module.css"
import { div } from 'framer-motion/m'


const cardsContent = [
    { title: "98%", description: "User Satisfaction Rate" },
    { title: "10X", description: "Faster response time" },
    { title: "24/7", description: "Availability" },
    { title: "10K+", description: "Interactions handled" }
]

export default function Cards() {
    return (
        <div>
            <div className={style.cardsGrid}>
                {cardsContent.map((card, index) => <div key={index} className={style.card}>
                    <p className={style.description}>{card.description}</p>
                    <p className={style.title}>{card.title}</p>
                </div>)}
            </div>
        </div>
    )
}
