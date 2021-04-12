import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import brandOne from '../../assets/images/brand1.png';
import brandTwo from '../../assets/images/brand2.png';
import brandThree from '../../assets/images/brand3.png';
import brandFour from '../../assets/images/brand4.png';
import brandFive from '../../assets/images/brand5.png';
import brandSix from '../../assets/images/brand6.png';
import brandSeven from '../../assets/images/brand7.png';
import './Carousel.css';

const Carousel = ({ Slide, title, subtitle, slidesToShow, slideToShowMobile }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: slideToShowMobile,
        },
      },
    ],
  };
  return (
    <section className="carousel">
      <div className="carousel__title">
        <h2>{title}</h2>
        <span>{subtitle}</span>
      </div>
      <div className="container">
        <Slider {...settings}>
          <Slide image={brandOne} bottomClass />
          <Slide image={brandTwo} bottomClass />
          <Slide image={brandThree} bottomClass />
          <Slide image={brandFour} bottomClass />
          <Slide image={brandFive} bottomClass />
          <Slide image={brandSix} bottomClass />
          <Slide image={brandSeven} bottomClass />
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
