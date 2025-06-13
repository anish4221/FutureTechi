import React from 'react';
import './Services.css';
import erp from '../assets/erpss.png';
import mobile from '../assets/app.png';
// import mobile from '../assets/mobileapp.png'; // example second service image

const Services = () => {
  return (
    <div className="services-wrapper" id="services">
      <h1 className="services-heading">Our Services</h1>

      {/* First Service (Normal Layout) */}
      <div className="service-section">
        <div className="service-left">
          <h2>Custom ERP Development</h2>
          <p>
            Streamline your business operations with our custom-built ERP solutions. 
            Designed for scalability, efficiency, and real-time data handling — 
            built to match your unique organizational workflows.
          </p>
        </div>
        <div className="service-right">
          <div className="service-image-box">
            <img src={erp} alt="ERP Service" />
          </div>
        </div>
      </div>

      {/* Second Service (Reverse Layout) */}
      <div className="service-section reverse">
        <div className="service-left">
          <h2>Mobile App Development</h2>
          <p>
            Create intuitive and high-performance mobile apps tailored for both Android and iOS platforms.
          </p>
        </div>
        <div className="service-right">
          <div className="service-image-box">
           <img src={mobile} alt="Mobile App Development" /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

