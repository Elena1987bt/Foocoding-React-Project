import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteProducts from '../FavoriteProducts/FavoriteProducts';
import { useAppContext } from '../../context/context';
import './FavoriteIconBtn.css';

const FavoriteIconBtn = ({ showLikes, setShowLikes }) => {
  const [{ favoriteProducts }] = useAppContext();
  return (
    <>
      <Link to="#" className="nav__icon favoriteProducts__icon" onClick={() => setShowLikes(true)}>
        {favoriteProducts.length === 0 ? <FavoriteBorderIcon /> : <FavoriteIcon />}
      </Link>
      {showLikes && <FavoriteProducts onClick={() => setShowLikes(false)} />}
    </>
  );
};
FavoriteIconBtn.propTypes = {
  showLikes: PropTypes.bool,
  setShowLikes: PropTypes.func,
};

export default FavoriteIconBtn;
