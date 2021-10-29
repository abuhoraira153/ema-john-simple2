import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className = "header">
            <img  className = "logo" src= {logo} alt="" />
            <nav>
                <NavLink to = "/shop">Shop</NavLink>
                <NavLink to = "/review">Order Review</NavLink>
                <NavLink to = "/inventory">Manage Inventory Here</NavLink>
            </nav>
        </div>
    );
};

export default Header;