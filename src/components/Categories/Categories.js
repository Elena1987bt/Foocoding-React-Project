import React from 'react';
import Category from './Category/Category';
import imageOne from '../../assets/images/category1.jpg';
import './Categories.css';

const Categories = () => {
  return (
    <section className="categories">
      <h2 className="categories__title">Allow your style to match your ambition!</h2>
      <div className="categories__center container">
        <Category image={imageOne} title="Shop For Woman" numOfProducts={250} />
        <Category
          image="https://images.pexels.com/photos/5935744/pexels-photo-5935744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Shop For Man"
          numOfProducts={150}
        />
        <Category
          image="https://images.pexels.com/photos/7330352/pexels-photo-7330352.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Shop For Kids"
          numOfProducts={170}
        />
      </div>
    </section>
  );
};

export default Categories;
