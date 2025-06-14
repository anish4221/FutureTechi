import React, { useEffect, useState,useRef } from 'react';
import logo from "../assets/Futuretechi-Picsart-BackgroundRemover.png";
import './Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false); // scroll down -> hide
      } else {
        setShow(true); // scroll up -> show
      }
      setLastScrollY(currentScrollY);
    };
      window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);


  

  return (
    <nav className={`navbar ${show ? 'navbar-show' : 'navbar-hide'}`}>
      <div className="logo-wrapper">
        <img className="logo" src={logo} alt="logo" />
      </div>

      {/* Hamburger Icon */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <div className={`navbar-container ${menuOpen ? 'active' : ''}`}>
        <ul className="navbar-links">
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact-us</a></li>
          <li><a href="#testimonial" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
