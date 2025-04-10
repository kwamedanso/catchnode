import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { GrMapLocation } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";

import style from "./styles/ReachOutSection.module.css"

export default function ReachOutSection() {

    const reachoutData = [
        { title: "Email", path: "support@catchnode.come", icon: TfiEmail },
        { title: "Phone", path: "+1 (234) 87903678", icon: RiCustomerService2Line },
        { title: "Address", path: "12 Santonio, Canada", icon: GrMapLocation }

    ]
    return (
        <div>
            <div className={style.headings}>
                <h3>Reach out to us today</h3>
                <p>Whether you need support or want to learn more, we're here to assist you</p>
            </div>
            <div className={style.reactoutCards}>
                {reachoutData.map((item) => <div key={item.title} className={style.reachoutCard}>
                    <item.icon /> <div>
                        <p className={style.cardTitle}>{item.title}</p>
                        <p className={style.cardDesc}>{item.path}</p>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
