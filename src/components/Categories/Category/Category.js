import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../../context/context';
import './Category.css';

const Category = ({ image, title, numOfProducts, category }) => {
  const [{}, dispatch] = useAppContext();
  return (
    <div className="category">
      <img src={image} alt="" />
      <div className="category__content">
        <h2>{title}</h2>
        <span>{numOfProducts} Products</span>
        <Link
          to="/products"
          className="category__link"
          onClick={() => {
            dispatch({
              type: 'SET_ALL_PRODUCTS',
              payload: category,
            });
          }}
        >
          View Collection
        </Link>
      </div>
    </div>
  );
};

export default Category;
