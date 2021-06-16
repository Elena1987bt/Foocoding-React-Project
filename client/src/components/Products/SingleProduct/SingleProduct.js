import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TuneIcon from '@material-ui/icons/Tune';
import { useAppContext } from '../../../context/context';
import './SingleProduct.css';

const SingleProduct = ({ bottomClass, product }) => {
  const { id, image, price, title, isFavorite } = product;
  const [{}, dispatch] = useAppContext();
  return (
    <Link to={`/productDetail/${id}`}>
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
              <ZoomInIcon className="singleProduct__Icon" />
            </span>
            <Link
              to="#"
              className="singleProducts__favoritesLink"
              onClick={() => {
                if (!isFavorite) {
                  dispatch({
                    type: 'ADD_TO_FAVORITES',
                    payload: product,
                  });
                } else {
                  dispatch({
                    type: 'REMOVE_FROM_FAVORITES',
                    payload: product,
                  });
                }
              }}
            >
              {!isFavorite ? (
                <FavoriteBorderIcon className="singleProduct__Icon" />
              ) : (
                <FavoriteIcon className="singleProduct__Icon" />
              )}
            </Link>
            <span>
              <TuneIcon className="singleProduct__Icon" />
            </span>
          </ul>
        </div>

        <div className="singleProduct__bottom singleProduct__bottomLink">
          {title}
          <div className="singleProduct__price">
            <span>${price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

SingleProduct.propTypes = {
  bottomClass: PropTypes.bool,
  product: PropTypes.object,
};
export default SingleProduct;
