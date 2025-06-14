import React from 'react';
import './Video.css';
import videoBg from '../assets/futurevideo.mp4';


const Video = () => {
  return (
    <>
      
      <div className="video-container" id="home">
        <video className="video-bg" autoPlay loop muted playsInline>
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="video-overlay-content">
          <h1>Welcome to Future Techi</h1>
          <p>Innovate. Build. Grow.</p>
        </div>
      </div>
    </>
  );
};

export default Video;

