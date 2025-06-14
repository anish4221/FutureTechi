import React from 'react';
import './Footer.css';
import linkedinIcon from '../assets/linkedin.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                {/* LinkedIn Section */}
                <a
                    href="https://www.linkedin.com/company/futuretechi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                >
                    <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
                    <span>Follow us on LinkedIn</span>
                </a>

                {/* Contact Numbers */}
                <div className="footer-contact">
                    <p>📞 +91 9667294753</p>
                    <p>📞 +91 7407677179</p>
                    <p>📞 +91 9348779813</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

