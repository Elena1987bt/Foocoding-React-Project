import React from 'react';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import image from '../../assets/images/promotionOne.jpg';
import './ProductDetail.css';

const ProductDetail = () => {
  return (
    <section className="productDetail">
      <div className="productDetail__center container">
        <div className="productDetail__left">
          <div className="mainImage">
            <img src={image} alt="" />
          </div>
          <div className="thumbnails">
            <div className="thumbnail">
              <img src={image} alt="" />
            </div>
            <div className="thumbnail">
              <img src={image} alt="" />
            </div>
            <div className="thumbnail">
              <img src={image} alt="" />
            </div>
            <div className="thumbnail">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
        <div className="productDetail__right">
          <span>Home/T-shirt</span>
          <h1>Boy’s T-Shirt By Handsome</h1>
          <div className="productDetail__price">$50</div>
          <form>
            <div>
              <select>
                <option value="Select Size" selected disabled>
                  Select Size
                </option>
                <option value="1">32</option>
                <option value="2">42</option>
                <option value="3">52</option>
                <option value="4">62</option>
              </select>
              <span>
                <ArrowDropDownIcon />
              </span>
            </div>
          </form>

          <div className="productDetail__buttons">
            <Link to="/products" className="productDetail__button">
              Back To Products
            </Link>
            <Link to="/cart" className="productDetail__button">
              Add To Cart
            </Link>
          </div>
          <h3>Product Detail</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima delectus nulla
            voluptates nesciunt quidem laudantium, quisquam voluptas facilis dicta in explicabo,
            laboriosam ipsam suscipit!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
