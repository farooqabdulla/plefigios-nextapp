'use client'; // Mark this file as a Client Component

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use next/navigation instead of next/router

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Get the current path

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const isActive = (path) => pathname === path;

    return (
        <>
            <nav className='flex justify-between z-50 sticky top-0 items-center w-[100%] bg-[#F3F7FE] h-[9vh] md:bg-white md:h-[11vh]'>             
                <Link href='/' className='h-[100%] bg-white px-[3.5vw] flex items-center justify-center'>
                    <h1 className='text-slate-800 text-[7vw] md:text-[1.7vw] font-bold hfont'>
                        PLEFI<span className='text-[#854CFE]'>GOS</span>
                    </h1>
                </Link>
                <div className='lg:hidden relative z-10' onClick={toggleMenu}>
                    <button className='text-3xl text-[#854CFE] pr-[7vw]'>
                        {isOpen ? '\u2715' : '\u2630'} {/* Change icon based on isOpen state */}
                    </button>
                </div>

                <ul className={`flex pfont text-slate-700  z-0 text-[6vw] h-[100vh] bg-[#061551] px-[4vw] pt-[20vh] pb-[30vh] md:pt-0 md:text-[0.9vw] items-center font-semibold md:pb-0 justify-between lg:static absolute lg:flex-row flex-col top-[0vh] left-0 lg:w-[40%] w-full lg:bg-transparent transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                    <li onClick={closeMenu}>
                        <Link href='/' className={isActive('/') ? 'text-[#854CFE]' : ''}>HOME</Link>
                    </li>
                    <li onClick={closeMenu}>
                        <Link href='/about' className={isActive('/about') ? 'text-[#854CFE]' : ''}>ABOUT</Link>
                    </li>
                    <li onClick={closeMenu}>
                        <Link href='/services' className={isActive('/services') ? 'text-[#854CFE]' : ''}>SERVICES</Link>
                    </li>
                    <li onClick={closeMenu}>
                        <Link href='/career' className={isActive('/career') ? 'text-[#854CFE]' : ''}>CAREER</Link>
                    </li>
                    <li onClick={closeMenu}>
                        <Link href='/contact' className={isActive('/contact') ? 'text-[#854CFE]' : ''}>CONTACT US</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
