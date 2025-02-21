import './Navbar.css';
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);
    const location = useLocation();

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeColor);
        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Link to="/" className="logo">
                <h1>SHM<span>.</span></h1>
            </Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link 
                        to="/" 
                        className={location.pathname === "/" ? "active" : ""}
                        onClick={closeMenu}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/project" 
                        className={location.pathname === "/project" ? "active" : ""}
                        onClick={closeMenu}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className={location.pathname === "/about" ? "active" : ""}
                        onClick={closeMenu}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/contact" 
                        className={location.pathname === "/contact" ? "active" : ""}
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: "#fff" }} />
                )}
            </div>
        </div>
    )
}

export default Navbar