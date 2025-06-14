import React from 'react';
import './Home.css'
import Navbar from '../components/Navbar'


import home from '../assets/customizeimg.png';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='hero-section' id="about">
        <div className="hero-left">
          <h1>Future Techi — Powering Your Digital Growth</h1>
          <p>
            We provide smart, scalable, and efficient software solutions — <br />
            ERP systems, Mobile & Web Apps, and more tailored for your organization.
          </p>
        </div>
        <div className="hero-right">
          <div className="image-box">
            <img src={home} alt="Future Techi" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
