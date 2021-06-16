import React from 'react';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import image from '../../assets/images/payment.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__item">
            <h3>EXTRAS</h3>
            <Link to="/" className="footer__link">
              Brands
            </Link>
            <Link to="/" className="footer__link">
              Gift Certificates
            </Link>
            <Link to="/" className="footer__link">
              Affiliate
            </Link>
            <Link to="/" className="footer__link">
              Specials
            </Link>
            <Link to="/" className="footer__link">
              Site Map
            </Link>
          </div>
          <div className="footer__item">
            <h3>INFORMATION</h3>
            <Link to="/" className="footer__link">
              About Us
            </Link>
            <Link to="/" className="footer__link">
              Privacy Policy
            </Link>
            <Link to="/" className="footer__link">
              Terms & Conditions
            </Link>
            <Link to="/" className="footer__link">
              Contact Us
            </Link>
            <Link to="/" className="footer__link">
              Site Map
            </Link>
          </div>
          <div className="footer__item">
            <h3>MY ACCOUNT</h3>
            <Link to="/" className="footer__link">
              My Account
            </Link>
            <Link to="/" className="footer__link">
              Order History
            </Link>
            <Link to="/" className="footer__link">
              Wish List
            </Link>
            <Link to="/" className="footer__link">
              Blog letter
            </Link>
            <Link to="/" className="footer__link">
              Returns
            </Link>
          </div>
          <div className="footer__item">
            <h3>CONTACT US</h3>
            <div>
              <LocationOnIcon className="footer__icon" />
              <span>52 Dream House, SWEDEN</span>
            </div>
            <div>
              <EmailIcon className="footer__icon" />
              <span>company@gmail.com</span>
            </div>
            <div>
              <PhoneIcon className="footer__icon" />
              <span>0442 4242 4242</span>
            </div>
            <div>
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
