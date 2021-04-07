import React from 'react';
import './HeroSlide.css';

const HeroSlide = ({ image, titleOne, titleTwo, titleThree, btnOne, btnTwo }) => {
  return (
    <div className="hero__slide">
      <img src={image} alt="" />
      <div className="hero__content">
        <span>{titleOne}</span>
        <h1>{titleTwo}</h1>
        <h3>{titleThree}</h3>
        <div class="hero__buttonsGroup">
          <button>{btnOne}</button>
          <button>{btnTwo}</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
