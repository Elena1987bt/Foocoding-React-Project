import React from 'react';
import Category from './Category/Category';
import imageOne from '../../assets/images/category1.jpg';
import './Categories.css';

const Categories = () => {
  return (
    <section className="categories">
      <h2 className="categories__title">Allow your style to match your ambition!</h2>
      <div className="categories__center container">
        <Category
          image={imageOne}
          title="Shop For Woman"
          numOfProducts={250}
          category="women's clothing"
        />
        <Category
          image="https://images.pexels.com/photos/5935744/pexels-photo-5935744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Shop For Man"
          numOfProducts={150}
          category="men's clothing"
        />
        <Category
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYLYn0JeLG9KshvtAxcteJBm1gHY8NjLqzg&usqp=CAU"
          title="Other..."
          numOfProducts={170}
          category="electronics"
        />
      </div>
    </section>
  );
};

export default Categories;
