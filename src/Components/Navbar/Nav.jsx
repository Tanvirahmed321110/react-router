import React from 'react';
import Link from './Link';

const Nav = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/blog', name: 'Blog' },
        { id: 6, path: '/faq', name: 'FAQ' }
    ];

    return (
        <div className='md:flex gap-x-4'>
            {routes.map(route => <Link key={routes.id} route={route}></Link>)}
        </div>
    );
};

export default Nav;