import React from 'react';
import logo from './logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            {/* Logo */}
            <div className="logo"><img src={logo} alt=""/></div>
        </div>
    );
};

export default Header;