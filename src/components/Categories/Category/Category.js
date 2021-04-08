import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const Category = ({ image, title, numOfProducts }) => {
  return (
    <div className="category">
      <img src={image} alt="" />
      <div className="category__content">
        <h2>{title}</h2>
        <span>{numOfProducts} Products</span>
        <Link to="/products" className="category__link">
          View Collection
        </Link>
      </div>
    </div>
  );
};

export default Category;
