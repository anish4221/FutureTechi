import React from 'react';
import './Video.css'; // Make sure to create this CSS file
import videoBg from '../assets/futurevideo.mp4'; // ✅ Adjust path if needed
import Navbar from '../components/Navbar'


const Video = () => {
  return (
    <>
       <Navbar/>
    <div className="video-container" id="video-section">
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      
    </div>
    </>
  );
};

export default Video;

