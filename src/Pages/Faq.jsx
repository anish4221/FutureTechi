import React from 'react';
import FaqContent from './FaqContent';
import './Faq.css';
import bgvideo from '../assets/futurevideo.mp4'

const FaqPage = () => {
  return (
    <div className="faq-page">
      <video autoPlay muted loop className="bg-video">
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="faq-overlay">
        <FaqContent />
      </div>
    </div>
  );
};

export default FaqPage;

