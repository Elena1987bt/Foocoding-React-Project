import React from 'react';
import { useAppContext } from '../../context/context';
import CloseIcon from '@material-ui/icons/Close';
import './FavoriteProducts.css';

const FavoriteProducts = ({ onMouseLeave }) => {
  const [{ favoriteProducts }, dispatch] = useAppContext();

  return (
    <div className="favoritePanel" onMouseLeave={onMouseLeave}>
      <ul className="favoriteProducts__list">
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt="" />
              <div className="favoriteProducts__data">
                <h4 className="favoriteProducts__name">{product.title}</h4>
                <p className="favoriteProducts__price">{product.price}</p>
              </div>
              <button
                className="favoriteProducts__button"
                onClick={() =>
                  dispatch({
                    type: 'REMOVE_FROM_FAVORITES',
                    payload: product,
                  })
                }
              >
                <CloseIcon />
              </button>
            </li>
          ))
        ) : (
          <p>You have no favorite products.</p>
        )}
      </ul>
    </div>
  );
};

export default FavoriteProducts;
