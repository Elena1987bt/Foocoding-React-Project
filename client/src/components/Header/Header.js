import React, { useState, useEffect, useRef } from 'react';
import Adverts from '../Adverts/Adverts';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import './Header.css';
import FavoriteIconBtn from '../_favoriteIcon/FavoriteIconBtn';
import scrollAd from '../../utils/scrollAd';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showFavoriteIcon, setShowFavoriteIcon] = useState(true);
  const [showLikes, setShowLikes] = useState(false);
  const [{ amountTotal, user }, dispatch] = useAppContext();
  const navBar = useRef(null);

  const toggleButton = () => {
    setShowNav(!showNav);
    setShowFavoriteIcon(!showFavoriteIcon);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => scrollAd(navBar));
    return () => {
      window.removeEventListener('scroll', () => scrollAd(navBar));
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
            <button className={`nav__toggleBtn ${showNav && 'hide'}`} onClick={toggleButton}>
              <MenuIcon className="MenuIcon" />
            </button>
          </div>

          <div className={`nav__menu ${showNav && 'show'}`}>
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
                  onClick={() => {
                    toggleButton();
                    dispatch({
                      type: 'SET_PRODUCTS',
                      payload: 'All',
                    });
                  }}
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
                <FavoriteIconBtn showLikes={showLikes} setShowLikes={setShowLikes} />
              </li>
              <li className="nav__item">
                <Link to="/cart" className="nav__icon" onClick={toggleButton}>
                  <LocalMallIcon />
                  <small className="count">{amountTotal}</small>
                </Link>
              </li>
              <li className="nav__item">
                {user ?  <Link to="/login" onClick={() =>
                 dispatch({
                  type:'SET_USER',
                  payload:null
                })}>
                  Log Out
                </Link> : 
                <Link to="/login" className="nav__icon" onClick={toggleButton}>
                  <PersonOutlineIcon />
                </Link> }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
