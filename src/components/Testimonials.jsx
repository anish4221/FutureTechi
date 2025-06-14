// TestimonialSlider.jsx
import React, { useEffect, useState } from 'react';
import {testimonials}  from '../Utils/Testimonials';
import './Testimonials.css';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [length]);

  return (
    
     <div className="testimonial-section" id="testimonial">
      <h2 className="testimonial-heading">What Our Clients Say</h2>
      
      <div className="slider-wrapper">
        {testimonials.map((item, index) => (
          <div
            className={`card ${index === current ? 'active' : ''}`}
            key={index}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>"{item.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;










{/* <img src={nxtbtn} alt="" className='nxt-btn'/>
        <img src={backbtn} alt="" className='back-btn' />
        <div className="slider"></div> */}