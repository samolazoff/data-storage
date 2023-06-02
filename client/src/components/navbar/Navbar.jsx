import React from 'react';
import {NavLink} from 'react-router-dom';

import  './navbar.sass';

const Navbar = () => {
    return (
        <header className='appHeader'>
            <div className="navbar container f-r">
                <h1 className="logo"><NavLink to="/">My Data</NavLink></h1>
                <nav>
                    <ul className='links-navbar f-r'>
                        <li className='link__navbar'><NavLink to="/login">Sign In</NavLink></li>
                        <li className='link__navbar'><NavLink to="/registration">Sign Up</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;