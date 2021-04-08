import React from 'react';
import promotionOne from '../../assets/images/promotionOne.jpg';
import promotionTwo from '../../assets/images/promotionTwo.jpg';
import { Link } from 'react-router-dom';
import './Promotion.css';

const Promotion = () => {
  return (
    <section className="promotion">
      <div className="promotion__center container">
        <div className="promotion__item">
          <img src={promotionOne} alt="" />
          <div className="promotion__content left">
            <span>Exclusive Sales</span>
            <h3>Spring Collections</h3>
            <Link to="/products" className="promotion__contentLink">
              View Collection
            </Link>
          </div>
        </div>
        <div className="promotion__item">
          <img src={promotionTwo} alt="" />
          <div className="promotion__content right">
            <span>Exclusive Sales</span>
            <h3>Spring Collections</h3>
            <Link to="/products" className="promotion__contentLink">
              View Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
