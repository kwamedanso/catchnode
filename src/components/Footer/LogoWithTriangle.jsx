import React from 'react';
import './styles/LogoWithTriangle.css';
import { TbNavigationFilled } from "react-icons/tb";


const LogoWithTriangle = () => {
    return (
        <a href="/" className="logo-link">
            <div className="logo-with-triangle">
                <span className="logo-text">NaviTek</span>
                <TbNavigationFilled className='logo-svg-icon' />
            </div>
        </a>
    );
};

export default LogoWithTriangle;