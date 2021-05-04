import React, { useState, useEffect, useRef } from 'react';
import Adverts from '../Adverts/Adverts';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import './Header.css';
import FavoriteProducts from '../FavoriteProducts/FavoriteProducts';

const Header = () => {
  const [show, setShow] = useState(false);
  const [{ amountTotal, favoriteProducts }] = useAppContext();
  const navBar = useRef(null);

  const toggleButton = () => {
    setShow(!show);
  };
  const scrollAd = () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.current.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
      navBar.current.classList.add('fix__nav');
    } else {
      navBar.current.classList.remove('fix__nav');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollAd);
    return () => {
      window.removeEventListener('scroll', scrollAd);
    };
  }, []);
  return (
    <header>
      <Adverts />
      <nav ref={navBar}>
        <div className="container">
          <div className="nav-center">
            <Link to="/" className="nav__logo">
              Sho<span>p</span>ify
            </Link>
            <button className={`nav__toggleBtn ${show && 'hide'}`} onClick={toggleButton}>
              <MenuIcon className="MenuIcon" />
            </button>
          </div>

          <div className={`nav__menu ${show && 'show'}`}>
            <div className="nav__topMobile">
              <Link to="/" className="nav__logo">
                Sho<span>p</span>ify
              </Link>
              <button className="nav__toggleBtn" onClick={toggleButton}>
                <CloseIcon />
              </button>
            </div>
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link" onClick={toggleButton}>
                  Home
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  to="/products"
                  className="nav__link"
                  onClick={toggleButton}
                  // onClick={() =>
                  //   dispatch({
                  //     type: 'SET_ALL_PRODUCTS',
                  //     payload: 'All',
                  //   })
                  // }
                >
                  Products
                </Link>
              </li>

              <li className="nav__item">
                <Link to="/About" className="nav__link" onClick={toggleButton}>
                  About
                </Link>
              </li>

              <li className="nav__item">
                <Link to="/login" className="nav__icon" onClick={toggleButton}>
                  <PersonOutlineIcon />
                </Link>
              </li>
              <li
                className="nav__item favoriteProducts"
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
              >
                <Link to="/" className="nav__icon favoriteProducts__icon" onClick={toggleButton}>
                  {favoriteProducts.length === 0 ? <FavoriteBorderIcon /> : <FavoriteIcon />}
                </Link>
                {show && <FavoriteProducts />}
              </li>
              <li className="nav__item">
                <Link to="/cart" className="nav__icon" onClick={toggleButton}>
                  <LocalMallIcon />
                  <small className="count">{amountTotal}</small>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/" className="nav__icon">
                  <SearchIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
