import React, { useEffect, useRef } from 'react';
import TemplateCard from './TemplateCard';
import styles from './styles/Templates.module.css';
import { MdOutlineImagesearchRoller, MdOutlinePlumbing, MdOutlineConstruction, MdOutlineElectricalServices } from "react-icons/md";

import plumber from "../../../assets/plumber.webp"
import electrician from "../../../assets/electrician.webp"
import constructionWorker from "../../../assets/construction-worker.webp"
import painter from "../../../assets/painter.webp"

const Templates = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const templateData = [
        {
            id: 1,
            title: 'Plumber Services',
            icon: MdOutlinePlumbing,
            bgColor: '#e6f7ef',
            iconColor: '#10b981',
            imageSrc: plumber,
        },
        {
            id: 2,
            title: 'House Painter',
            icon: MdOutlineImagesearchRoller,
            bgColor: '#ffefef',
            iconColor: '#ef4444',
            imageSrc: painter,
        },
        {
            id: 3,
            title: 'Construction Company',
            icon: MdOutlineConstruction,
            bgColor: '#f6f0ff',
            iconColor: '#8b5cf6',
            imageSrc: constructionWorker,
        },
        {
            id: 4,
            title: 'Electrical Services',
            icon: MdOutlineElectricalServices,
            bgColor: '#fff8e6',
            iconColor: '#f59e0b',
            imageSrc: electrician,
        },
    ];

    return (
        <section className={styles.templates_section} ref={sectionRef}>
            <h2 className={styles.templates_title}>Templates for all your needs</h2>
            <p className={styles.templates_description}>
                Get started with a template to get up and running instantly.
            </p>

            <div className={styles.templates_grid}>
                {templateData.map((template, index) => (
                    <div
                        className={styles.template_card_container}
                        key={template.id}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <TemplateCard template={template} />
                    </div>
                ))}
            </div>

            <div className={styles.templates_button_container}>
                <button className={styles.browse_button}>Browse template library</button>
            </div>
        </section>
    );
};

export default Templates;