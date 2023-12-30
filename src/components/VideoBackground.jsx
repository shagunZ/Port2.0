// VideoBackground.js
import React from 'react';
import './VideoBackground.css';
import Video from "../assets/video/video3.mp4"
const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline >
        <source src={Video} type='video/mp4'/>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
