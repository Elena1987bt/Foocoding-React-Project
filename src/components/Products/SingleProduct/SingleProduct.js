import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/images/promotionOne.jpg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TuneIcon from '@material-ui/icons/Tune';
import './SingleProduct.css';

const SingleProduct = () => {
  const [favoriteIcon, setFavoriteIcon] = useState(false);
  return (
    <div className="singleProduct">
      <div className="singleProduct__img">
        <img src={image} alt="" />
        <div className="singleProduct__addCart">
          <ShoppingCartIcon className="singleProduct__Icon" />
        </div>

        <ul className="singleProduct__Icons">
          <span>
            <SearchIcon className="singleProduct__Icon" />
          </span>
          <span onClick={() => setFavoriteIcon(!favoriteIcon)}>
            {!favoriteIcon ? (
              <FavoriteBorderIcon className="singleProduct__Icon" />
            ) : (
              <FavoriteIcon className="singleProduct__Icon" />
            )}
          </span>
          <span>
            <TuneIcon className="singleProduct__Icon" />
          </span>
        </ul>
      </div>
      <div className="singleProduct__bottom">
        <Link to="/productDetail" className="singleProduct__bottomLink">
          Bambi Print Mini Backpack
        </Link>
        <div className="singleProduct__price">
          <span>$150</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
