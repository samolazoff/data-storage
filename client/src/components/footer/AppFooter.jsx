import React from 'react';
import { Link } from 'react-router-dom';
import './appFooter.sass';

const AppFooter = () => {
    return (
        <footer className='appFooter'>
            <div className="container f-r">
                <Link to="https://github.com/samolazoff/data-storage">@Samolazoff</Link>
            </div>
        </footer>
    );
};

export default AppFooter;