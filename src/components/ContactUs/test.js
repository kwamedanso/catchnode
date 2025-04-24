// import React from 'react'
// import style from "./styles/HeroSection.module.css"
// import { LuPencilRuler, LuMessageCircle } from "react-icons/lu";
// import { BsPersonCircle } from "react-icons/bs";
// import { GiHazardSign } from "react-icons/gi";
// import { MdMonitor } from "react-icons/md";



// const gridOneContent = [
//     {
//         icon: LuPencilRuler,
//         title: "Premium support",
//         description: "Get help from a product expert.",
//         linkText: "Start chat",
//         mail: "sales@catchnode.com",
//         text: "For scale and enterprise plans"
//     }, {
//         icon: LuMessageCircle,
//         title: "Talk to sales",
//         description: "Work with our team on enterprise solutions.",
//         linkText: "Talk ot sales",
//         mail: "sales@catchnode.com",
//         text: ""
//     }
// ]

// const gridTwoContent = [
//     {
//         icon: MdMonitor,
//         title: "Product support",
//         description: "Submit a request to our support team.",
//         linkText: "Learn more",
//         mail: "support@chatchnode.com",
//     },
//     {
//         icon: BsPersonCircle,
//         title: "Billing support",
//         description: "Fix account or billing issues.",
//         linkText: "Start chat",
//         mail: "support@chatchnode.com",
//     },
//     {
//         icon: GiHazardSign,
//         title: "Emergency support",
//         description: "Urgent help when your site's down.",
//         linkText: "Emergency",
//         mail: "support@chatchnode.com",
//     }, {
//     }
// ]
// export default function HeroSection() {
//     return (
//         <section className={style.heroContainer}>
//             <div className={style.heroText}>
//                 <h1>Contact</h1>
//                 <p>Get help from support,</p>
//                 <p>sales, or experts</p>
//             </div>

//             <div className={style.heroGridOne}>
//                 {gridOneContent.map((item, index) => <div key={index} className={style.gridItem}>
//                     <div className={style.icon}><item.icon /></div>
//                     <div className={style.description}>
//                         <p>{item.title}</p>
//                         <p>{item.description}</p>
//                     </div>
//                     <div className={style.footer}>
//                         <a href="mailto:">{item.linkText}</a>
//                         {item.text ? <p>{item?.text}</p> : null}
//                     </div>
//                 </div>)}
//             </div>

//             <div className={style.heroGridTwo}>
//                 {gridTwoContent.map((item, index) => (
//                     <div key={index} className={style.gridItem}>
//                         <div className={style.icon}>
//                             <item.icon />
//                         </div>
//                         <div className={style.description}>
//                             <p>{item.title}</p>
//                             <p>{item.description}</p>
//                         </div>
//                         <div className={style.footer}>
//                             <a href="mailto:">{item.linkText}</a>
//                             {item.text ? <p>{item?.text}</p> : null}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     )
// }


// .heroContainer{

//     margin-top: 7rem;
// }

// .heroText{
//     text-align: center;
// }

// .heroText h1{
//     font-size: 4rem;
//     margin-bottom: .5rem;
// }

// .heroGridOne{

// }

// .gridItem{

// }

// .icon{

// }

// .description{

// }

// .footer{

// }


// .heroGridTwo{

// }

