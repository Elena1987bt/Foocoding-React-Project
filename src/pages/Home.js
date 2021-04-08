import React from 'react';
import Hero from '../components/Hero/Hero';
import Categories from '../components/Categories/Categories';
import Promotion from '../components/Promotion/Promotion';
import Brands from '../components/Brands/Brands';

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Promotion />
      <Brands />
    </div>
  );
};

export default Home;
