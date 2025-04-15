import React from 'react';
import './styles/Logo.css';
import { TbNavigationFilled } from "react-icons/tb";


const Logo = () => {
    return (
        <a href="/" className="logo-link">
            <div className="logo">
                <span className="logo-text">CatchNode</span>
                <TbNavigationFilled className='logo-svg-icon' />
            </div>
        </a>
    );
};

export default Logo;