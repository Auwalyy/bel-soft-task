import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { link: 'Home', path: '/' },
        { link: 'Services', path: '/services' },
        { link: 'Portfolio', path: '/portfolio' },
        { link: 'Contact', path: '/contact' },
    ];

    return (
        <div className="navbar">
            <nav className="navbar-container">
                <h1 className="logo">Logo</h1>
                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    {navLinks.map((item) => (
                        <a 
                            key={item.link} 
                            href={item.path} 
                            className="nav-link"
                        >
                            {item.link}
                        </a>
                    ))}
                </div>
                <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
