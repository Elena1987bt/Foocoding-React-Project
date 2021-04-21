import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Carousel.css';

const Carousel = ({ Slide, title, subtitle, slidesToShow, slideToShowMobile, products }) => {
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
          {products.map((el, index) => (
            <Slide image={el} bottomClass product={el} key={index} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
