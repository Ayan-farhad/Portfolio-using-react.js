import React, { useState } from 'react';
import './navbar.css';

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { LiaGraduationCapSolid } from "react-icons/lia";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // Toggle hamburger menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu after clicking a link
    const handleMenuItemClick = () => {
        setIsMobileMenuOpen(false);
    };
    
    // Scroll event handler
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('transparent');
        } else {
            navbar.classList.remove('transparent');
        }
    });

    return (
        <nav className="navbar">
            <div className='nav-logo'>Ayan.</div>

            <div className='nav-hamburger' onClick={toggleMobileMenu}>
                <div className={`icon-container ${isMobileMenuOpen ? 'open' : ''}`}>
                    {isMobileMenuOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
                </div>
            </div>

            <div className={`nav-bar ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li className='nav-li'>
                        <a href='#home' className='active' onClick={handleMenuItemClick}>
                            <IoHomeOutline className='nav-icon' />Home
                        </a>
                    </li>
                    <li className='nav-li'>
                        <a href='#about' onClick={handleMenuItemClick}>
                            <GoPerson className='nav-icon' />About
                        </a>
                    </li>
                    <li className='nav-li'>
                        <a href='#projects' onClick={handleMenuItemClick}>
                            <AiOutlineFundProjectionScreen className='nav-icon' />Projects
                        </a>
                    </li>
                    <li className='nav-li'>
                        <a href='#skills' onClick={handleMenuItemClick}>
                            <LiaGraduationCapSolid className='nav-icon' />Skills
                        </a>
                    </li>
                    <li className='nav-li'>
                        <a href='#contact' onClick={handleMenuItemClick}>
                            <AiOutlineMessage className='nav-icon' />Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
