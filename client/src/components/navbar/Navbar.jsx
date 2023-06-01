import React from 'react';

import  './navbar.sass';

const Navbar = () => {
    return (
        <header className='appHeader'>
            <div className="container f-r">
                <h1 className="logo">MyData</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="">Sign In</a></li>
                    <li><a href="">Sign Up</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;