import React from 'react';
import PropTypes from 'prop-types';
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
              type: 'SET_PRODUCTS',
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
Category.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  numOfProducts: PropTypes.number,
  category: PropTypes.string,
};
export default Category;
