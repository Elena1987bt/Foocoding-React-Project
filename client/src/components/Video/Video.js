import React from 'react';
import video from '../../assets/video/video.mp4';
import './Video.css';

const Video = () => {
  return (
    <div className="video">
      <video src={video} muted loop autoPlay={true}>
        <div className="overlay"></div>
      </video>
      <h3 className="video__text">Enjoy in shopping!</h3>
    </div>
  );
};

export default Video;
