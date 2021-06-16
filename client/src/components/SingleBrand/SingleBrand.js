import React from 'react';
import PropTypes from 'prop-types';

const SingleBrand = ({ image }) => {
  return (
    <div className="brands__slide">
      <img src={image} alt="" />
    </div>
  );
};
SingleBrand.propTypes = {
  image: PropTypes.string,
};
export default SingleBrand;
