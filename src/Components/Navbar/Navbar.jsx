import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';
const navigationData = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Portfolio", path: "/portfolio" },
    { id: 5, name: "Contact", path: "/contact" },
  ];
  
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links = navigationData.map(route => 
        <Link key={route.id} route={route}></Link>);


    return (
        <nav className='flex justify-between items-center
        mx-10 mt-4'>
            <span className='flex' onClick={() => setOpen(!open)}>
                {
                    open ? <X className='md:hidden'/> :
                    <Menu className='md:hidden' />
                }
                <ul className={`md:hidden absolute duration-1000
                    ${open ? 'top-12' : '-top-40'}
                    bg-amber-200 text-black`}>
                    {links}
                </ul>
            
            <h3 className='ml-4'>My Navbar</h3>
            </span>
            <ul className='hidden md:flex'>

                {
                    links
                }

                {/* {
                    navigationData.map(route => <li className='mr-10'>
                        <a href={route.path}>{route.name}</a></li>)
                } */}

                {/* <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li> */}
            </ul>
            <button className='btn'>Sign In</button>
        </nav>
    );
};

export default Navbar;