import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SingleBrand from './SingleBrand/SingleBrand';
import brandOne from '../../assets/images/brand1.png';
import brandTwo from '../../assets/images/brand2.png';
import brandThree from '../../assets/images/brand3.png';
import brandFour from '../../assets/images/brand4.png';
import brandFive from '../../assets/images/brand5.png';
import brandSix from '../../assets/images/brand6.png';
import brandSeven from '../../assets/images/brand7.png';
import './Brands.css';

const Brands = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <section className="brands">
      <div className="brands__title">
        <h2>Shop by Brand</h2>
        <span>Select from the premium product brands and save plenty money</span>
      </div>
      <div className="container">
        <Slider {...settings}>
          <SingleBrand image={brandOne} />
          <SingleBrand image={brandTwo} />
          <SingleBrand image={brandThree} />
          <SingleBrand image={brandFour} />
          <SingleBrand image={brandFive} />
          <SingleBrand image={brandSix} />
          <SingleBrand image={brandSeven} />
        </Slider>
      </div>
    </section>
  );
};

export default Brands;
