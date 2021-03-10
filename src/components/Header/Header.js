import React from 'react';
import head from '../photo/head.png'
import './Header.css'
const Header = () => {
    return (
        <div className="card bg-dark text-white img-responsive">
            <img src={head} className="card-img" alt="heading" />    
        </div>
    );
};

export default Header;