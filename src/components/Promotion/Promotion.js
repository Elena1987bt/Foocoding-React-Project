import React from 'react';
import promotionOne from '../../assets/images/promotionOne.jpg';
import promotionTwo from '../../assets/images/promotionTwo.jpg';
import { useAppContext } from '../../context/context';
import { Link } from 'react-router-dom';
import './Promotion.css';

const Promotion = () => {
  const [{}, dispatch] = useAppContext();
  return (
    <section className="promotion">
      <div className="promotion__center container">
        <div className="promotion__item">
          <img src={promotionOne} alt="" />
          <div className="promotion__content left">
            <span>Exclusive Sales</span>
            <h3>Spring Collections</h3>
            <Link
              to="/products"
              className="promotion__contentLink"
              onClick={() => {
                dispatch({
                  type: 'SET_ALL_PRODUCTS',
                  payload: 'All',
                });
              }}
            >
              View Collection
            </Link>
          </div>
        </div>
        <div className="promotion__item">
          <img src={promotionTwo} alt="" />
          <div className="promotion__content right">
            <span>Exclusive Sales</span>
            <h3>Spring Collections</h3>
            <Link
              to="/products"
              className="promotion__contentLink"
              onClick={() => {
                dispatch({
                  type: 'SET_ALL_PRODUCTS',
                  payload: 'All',
                });
              }}
            >
              View Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
