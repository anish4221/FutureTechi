import React, { useEffect, useState } from 'react';
import logo from "../assets/Futuretechi-Picsart-BackgroundRemover.png";
import './Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      <div className="navbar-container">
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

