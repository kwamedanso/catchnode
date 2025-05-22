import { MdOutlineRocketLaunch } from "react-icons/md";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TbDeviceMobileCode } from "react-icons/tb";
import { TbCloudDown } from "react-icons/tb";
import { TbBox } from "react-icons/tb";
import { GiProcessor } from "react-icons/gi";
import { TbSettingsCheck } from "react-icons/tb";
import { LuDatabase } from "react-icons/lu";
import { SiDatabricks } from "react-icons/si";
import { FaStarOfLife } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { GiGuardedTower } from "react-icons/gi";
import { FaAngular } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { TbBrandReactNative } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { MdOutlineLocalHospital } from "react-icons/md";
import { FaBalanceScaleRight } from "react-icons/fa";
import { LuHeartPulse } from "react-icons/lu";
import { FaChartBar } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { SiPinetwork } from "react-icons/si";
import { FaBlog } from "react-icons/fa6";
import { TiContacts } from "react-icons/ti";




export const NavData = [
    {
        title: 'Services',
        path: '/services',
        hasChildren: true,
        children: [
            {
                title: 'Web App Development',
                description: 'All-inclusive services',
                path: '/services',
                icon: MdOutlineRocketLaunch,
            },
            {
                title: 'Front-End Development',
                description: 'Case-by-case basis approach',
                path: '/services',
                icon: LiaLaptopCodeSolid,
            },
            {
                title: 'Mobile Development',
                description: 'Taking project off in two weeks',
                path: '/services',
                icon: TbDeviceMobileCode,
            },
            {
                title: 'Cloud Consulting',
                description: 'Renovate your business app',
                path: '/services',
                icon: TbCloudDown,
            },
            {
                title: 'Content Management Systems (CMS)',
                description: 'The power of innovations',
                path: '/services',
                icon: TbBox,
            },
            {
                title: 'E-commerce Development',
                description: 'Unlocking new possibilities',
                path: '/services/',
                icon: GiProcessor,
            },
            {
                title: 'Website Maintenance and Support',
                description: 'Save up to 40% of dev costs',
                path: '/services',
                icon: TbSettingsCheck,
            },
            {
                title: 'Web Hosting and Deployment',
                description: 'Make your business grow',
                path: '/services',
                icon: LuDatabase,
            },
            {
                title: 'Content Management Systems (CMS)',
                description: 'Your effective strategy',
                path: '/services',
                icon: SiDatabricks,
            },
            {
                title: 'Design Services',
                description: '* The Dept. – part of CatchNode',
                path: '/services/design-services',
                icon: FaStarOfLife,
                isExternal: true
            }
        ],
        industriesSection: {
            title: 'INDUSTRIES',
            items: [
                {
                    title: 'EdTech',
                    icon: HiOutlineAcademicCap,
                    path: '/industries/edtech'
                },
                {
                    title: 'Financial',
                    icon: LiaPiggyBankSolid,
                    path: '/industries/financial'
                },
                {
                    title: 'eCommerce',
                    icon: IoCartOutline,
                    path: '/industries/ecommerce'
                },
                {
                    title: 'Industry 4.0',
                    icon: MdOutlineSettingsSuggest,
                    path: '/industries/industry-4-0'
                },
                {
                    title: 'Insurance',
                    icon: GiGuardedTower,
                    path: '/industries/insurance'
                }
            ]
        },
        technologiesSection: {
            title: 'TECHNOLOGIES',
            items: [
                {
                    title: 'Angular',
                    icon: FaAngular,
                    path: '/technologies/angular'
                },
                {
                    title: 'React Native',
                    icon: TbBrandReactNative,
                    path: '/technologies/react-native'
                },
                {
                    title: 'Azure',
                    icon: VscAzure,
                    path: '/technologies/azure'
                },
                {
                    title: 'React JS',
                    icon: FaReact,
                    path: '/technologies/react-js'
                }
            ]
        }
    },
    {
        title: 'Templates',
        path: '/templates',
        hasChildren: true,
        children: [
            {
                title: 'Fleet Management',
                description: 'Functional and stylish front-end',
                path: '/templates/fleet-management',
                icon: LiaTruckMovingSolid,
            },
            {
                title: 'Healthcare',
                description: 'Ready-to-use dashboard',
                path: '/templates/healthcare',
                icon: LuHeartPulse,
            },
            {
                title: 'Digital Clinic',
                description: 'Ready-made mobile template',
                path: '/templates/digital-clinic',
                icon: MdOutlineLocalHospital,
            },
            {
                title: 'Power BI',
                description: 'Your data in one place',
                path: '/templates/power-bi',
                icon: FaChartBar,
            },
            {
                title: 'RegTech',
                description: 'Accurate reporting',
                path: '/templates/regtech',
                icon: FaBalanceScaleRight,
            }
        ]
    },
    {
        title: 'Products',
        path: '/products',
        hasChildren: false
    },
    {
        title: 'Case Studies',
        path: '/case-studies',
        hasChildren: false
    },
    {
        title: 'Company',
        path: '/company',
        hasChildren: true,
        children: [
            {
                title: 'About Us',
                description: 'What we do best',
                path: '/about',
                icon: GrContactInfo,
            },
            {
                title: 'Blog',
                path: '/company/blog',
                description: 'Read about interesting topics',
                icon: FaBlog,
            },
            // {
            //     title: 'Careers',
            //     path: '/company/careers',
            //     icon: 'careers-icon',
            // },
            {
                title: 'Contact',
                path: '/contact',
                description: 'Reach out to us',
                icon: TiContacts,
            }
        ]
    }
];