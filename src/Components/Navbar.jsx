import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

    const [toggleBar, setToggleBar] = useState(true)
    const dropDown = (e) => {
        const toggleNav = document.querySelector('.toggle-side-bar')
        if (toggleBar === true) {
            toggleNav.style.right = '0'
            setToggleBar(false)
        } else {
            toggleNav.style.right = '-40%'
            setToggleBar(true)
        }
    }
    // useEffect(() => {
    // }, toggleBar)

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

    }, []);

    return (
        <nav className={isScrolled ? 'scrolled': ''} >
            <div className="logo"><img src="/images/Cloud.svg" alt="" /></div>
            <div className="drop-down-btn"><FontAwesomeIcon icon={faBars} className='menu' onClick={dropDown} /></div>
            <div className="toggle-side-bar">
                <ul>
                    <li className="op" id="ab"><a href="#home">Home</a></li>
                    <li className="op" id="ab"><a href="#about">About Us</a></li>
                    <li className="op" id="se"><a href="/services">Services</a></li>
                    <li className="op" id="co"><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
            <ul className='option'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    )
}
