import React from 'react';
import loader from '../../assets/images/loader.svg';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loader">
      <img src={loader} alt="loader" />
    </div>
  );
};

export default Loading;
