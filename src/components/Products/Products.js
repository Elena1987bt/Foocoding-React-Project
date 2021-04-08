import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './Products.css';
import SingleProduct from './SingleProduct/SingleProduct';

const Products = () => {
  return (
    <section className="products">
      <div className="products__top container">
        <h1>All Products</h1>
        <form>
          <select>
            <option value="1">Default Sorting</option>
            <option value="2">Sort By Price</option>
            <option value="3">Sort By Popularity</option>
            <option value="4">Sort By Sale</option>
            <option value="5">Sort By Rating</option>
          </select>
          <span>
            <ArrowDropDownIcon />
          </span>
        </form>
      </div>

      <div className="products__center container">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
      <div className="pagination">
        <div className=" container">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span className="page__icon">
            <ArrowForwardIosIcon className="page__icon" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Products;
