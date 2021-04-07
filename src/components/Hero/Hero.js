import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeroSlide from './HeroSlide/HeroSlide';
import hero1 from '../../assets/images/hero1.jpg';
import hero2 from '../../assets/images/hero2.jpg';
import hero4 from '../../assets/images/hero4.jpg';

import './Hero.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: 'slides',
  };
  return (
    <Slider {...settings}>
      <HeroSlide
        image={hero1}
        titleOne="New Inspiration 2021"
        titleTwo="CLOTHING MADE FOR YOU!"
        titleThree="Trending from men and women style collection"
        btnOne="shop women's"
        btnTwo="shop men's"
      />
      <HeroSlide
        image={hero2}
        titleOne="New Inspiration 2021"
        titleTwo="CLOTHING MADE FOR YOU!"
        titleThree="Trending from men and women style collection"
        btnOne="shop women's"
        btnTwo="shop men's"
      />
      <HeroSlide
        image={hero4}
        titleOne="New Inspiration 2021"
        titleTwo="CLOTHING MADE FOR YOU!"
        titleThree="Trending from men and women style collection"
        btnOne="shop women's"
        btnTwo="shop men's"
      />
    </Slider>
  );
};

export default Hero;
