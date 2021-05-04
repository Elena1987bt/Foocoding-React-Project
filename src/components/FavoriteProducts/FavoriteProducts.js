import React from 'react';
import { useAppContext } from '../../context/context';
import './FavoriteProducts.css';

const FavoriteProducts = () => {
  const [{ favoriteProducts }] = useAppContext();
  console.log(favoriteProducts);
  return (
    <div className="favoritePanel">
      <ul className="favoriteProducts__list">
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((el) => (
            <li key={el.id}>
              <img src={el.image} alt="" />
              <div className="favoriteProducts__data">
                <h4 className="favoriteProducts__name">{el.title}</h4>
                <p className="favoriteProducts__price">{el.price}</p>
              </div>
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
