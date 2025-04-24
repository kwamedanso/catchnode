import React from 'react'
import styles from "./styles/HeroSection.module.css"
import { LuPencilRuler, LuMessageCircle } from "react-icons/lu";
import { BsPersonCircle } from "react-icons/bs";
import { GiHazardSign } from "react-icons/gi";
import { MdMonitor } from "react-icons/md";



const gridOneContent = [
    {
        icon: LuPencilRuler,
        title: "Premium support",
        description: "Get help from a product expert.",
        linkText: "Start chat",
        mail: "sales@catchnode.com",
        text: "For scale and enterprise plans"
    }, {
        icon: LuMessageCircle,
        title: "Talk to sales",
        description: "Work with our team on enterprise solutions.",
        linkText: "Talk ot sales",
        mail: "sales@catchnode.com",
        text: ""
    }
]

const gridTwoContent = [
    {
        icon: MdMonitor,
        title: "Product support",
        description: "Submit a request to our support team.",
        linkText: "Learn more",
        mail: "support@chatchnode.com",
    },
    {
        icon: BsPersonCircle,
        title: "Billing support",
        description: "Fix account or billing issues.",
        linkText: "Start chat",
        mail: "support@chatchnode.com",
    },
    {
        icon: GiHazardSign,
        title: "Emergency support",
        description: "Urgent help when your site's down.",
        linkText: "Emergency",
        mail: "support@chatchnode.com",
    }, {
    }
]
export default function HeroSection() {
    return (
        <>
            <div className={styles.hero}>
                <h1 className={styles.title}>Contact</h1>
                <p className={styles.subtitle}>Get help from support, sales, or experts.</p>
            </div>

            <ContactPage />
        </>
    )
}


const ContactCard = ({ icon, title, description, buttonText, isEmergency = false }) => {
    return (
        <div className={`${styles.card} ${isEmergency ? styles.emergencyCard : ''}`}>
            <div className={styles.iconContainer}>
                {icon}
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
            <button className={`${styles.button} ${isEmergency ? styles.emergencyButton : ''}`}>
                {buttonText}
            </button>
        </div>
    );
};

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <ContactCard
                    icon={<LuPencilRuler size={24} />}
                    title="Premium support"
                    description="Get help from a product expert."
                    buttonText="Start chat"
                />

                <ContactCard
                    icon={<LuMessageCircle size={24} />}
                    title="Talk to sales"
                    description="Work with our team on enterprise solutions."
                    buttonText="Talk to sales"
                />

                <ContactCard
                    icon={<MdMonitor size={24} />}
                    title="Product support"
                    description="Submit a request to our support team."
                    buttonText="Learn more"
                />

                <ContactCard
                    icon={<BsPersonCircle size={24} />}
                    title="Billing support"
                    description="Fix account or billing issues."
                    buttonText="Start chat"
                />

                <ContactCard
                    icon={<GiHazardSign size={24} />}
                    title="Emergency support"
                    description="Urgent help when your site's down."
                    buttonText="Emergency"
                    isEmergency={true}
                />
            </div>
        </div>
    );
};