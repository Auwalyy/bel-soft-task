import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <h1 className="title">Get In Touch</h1>
                <input type="email" placeholder='Email' className="email-input" />
                <button className="submit-button">Submit</button>
                <div className="left-container">
                 
                </div>
            </div>
            <p className="footer-note">All rights reserved, 2024</p>
        </footer>
    );
}

export default Footer;
