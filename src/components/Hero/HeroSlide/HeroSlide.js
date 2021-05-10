import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../../context/context';
import './HeroSlide.css';

const HeroSlide = ({ image, titleOne, titleTwo, titleThree, btnOne, btnTwo, different }) => {
  const [{}, dispatch] = useAppContext();
  return (
    <div className="hero__slide">
      <img src={image} alt="" />
      <div className={`hero__content ${different && 'different__hero__content'} `}>
        <span>{titleOne}</span>
        <h1>{titleTwo}</h1>
        <h3>{titleThree}</h3>
        <div className="hero__buttonsGroup">
          <Link
            to="/products"
            className="hero__button"
            shopCollection="electronics"
            onClick={() => {
              dispatch({
                type: 'SET_ALL_PRODUCTS',
                payload: "women's clothing",
              });
            }}
          >
            {btnOne}
          </Link>
          <Link
            to="/products"
            className="hero__button"
            onClick={() => {
              dispatch({
                type: 'SET_ALL_PRODUCTS',
                payload: "men's clothing",
              });
            }}
          >
            {btnTwo}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
