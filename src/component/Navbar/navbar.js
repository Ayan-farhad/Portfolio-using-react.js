import React, { useState } from 'react';
import './navbar.css';

import {  RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { LiaGraduationCapSolid } from "react-icons/lia";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className='nav-logo'>Ayan.</div>

            <div className='nav-hamburger' onClick={toggleMobileMenu}>
                <div className={`icon-container ${isMobileMenuOpen ? 'open' : ''}`}>
                    {isMobileMenuOpen ? <AiOutlineClose /> : < RxHamburgerMenu />}
                </div>
            </div>

            <div className={`nav-bar ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li className='nav-li'>
                        <a href='#' className='active'><IoHomeOutline className='nav-icon' />Home</a>
                    </li>
                    <li className='nav-li'>
                        <a href='#'><GoPerson className='nav-icon' />About</a>
                    </li>
                    <li className='nav-li'>
                        <a href='#'><AiOutlineFundProjectionScreen className='nav-icon' />Projects</a>
                    </li>
                    <li className='nav-li'>
                        <a href='#'><LiaGraduationCapSolid className='nav-icon' />Skills</a>
                    </li>
                    <li className='nav-li'>
                        <a href='#'><AiOutlineMessage className='nav-icon' />Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
