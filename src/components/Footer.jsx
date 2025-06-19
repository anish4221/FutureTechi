import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import linkedinIcon from '../assets/linkedin.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content-row">
                {/* Left Section (LinkedIn and Contact Numbers) */}
                <div className="footer-left-content">
                    <a
                        href="https://www.linkedin.com/company/futuretechi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
                        <span>Follow us on LinkedIn</span>
                    </a>

                    <div className="footer-contact">
                        <p>📞 +91 9667294753</p>
                        <p>📞 +91 7407677179</p>
                        <p>📞 +91 9348779813</p>
                    </div>
                </div>

                {/* Right Section (FAQ link) */}

                <div className="footer-right">
                    <Link to="/faq" className="footer-link faq-link">
                        ❓ Visit our FAQ
                    </Link>
                    <Link to="/career" className="footer-link faq-link">
                        🚀 Careers
                    </Link>
                </div>

            </div>
            {/* Copyright */}
            <p className="footer-bottom">
                © {new Date().getFullYear()} FutureTechi. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;


