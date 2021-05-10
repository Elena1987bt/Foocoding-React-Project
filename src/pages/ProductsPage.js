import React from 'react';
import Products from '../components/Products/Products';

const ProductsPage = ({ shopCollection }) => {
  return (
    <div>
      <Products shopCollection={shopCollection} />
    </div>
  );
};

export default ProductsPage;
