import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TuneIcon from '@material-ui/icons/Tune';
import { useAppContext } from '../../../context/context';
import './SingleProduct.css';

const SingleProduct = ({ bottomClass, product }) => {
  const { id, image, price, title } = product;
  const [{}, dispatch] = useAppContext();
  const [favoriteIcon, setFavoriteIcon] = useState(false);
  return (
    <Link to={`/productDetail/${id}`} className="singleProduct__bottomLink">
      <div className="singleProduct">
        <div className="singleProduct__img">
          <img src={image} alt={title} />
          <Link
            to="/cart"
            className={`singleProduct__addCart ${bottomClass && 'bottom'}`}
            onClick={() =>
              dispatch({
                type: 'ADD_TO_CART',
                payload: product,
              })
            }
          >
            <ShoppingCartIcon className="singleProduct__Icon" />
          </Link>

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
          {title}
          <div className="singleProduct__price">
            <span>${price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
