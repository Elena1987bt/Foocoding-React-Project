import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSlide.css';

const HeroSlide = ({ image, titleOne, titleTwo, titleThree, btnOne, btnTwo, different }) => {
  return (
    <div className="hero__slide">
      <img src={image} alt="" />
      <div className={`hero__content ${different && 'different__hero__content'} `}>
        <span>{titleOne}</span>
        <h1>{titleTwo}</h1>
        <h3>{titleThree}</h3>
        <div className="hero__buttonsGroup">
          <Link to="/products" className="hero__button">
            {btnOne}
          </Link>
          <Link to="/products" className="hero__button">
            {btnTwo}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
