import React from 'react';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import Carousel from '../components/Carousel/Carousel';
import SingleProduct from '../components/Products/SingleProduct/SingleProduct';

const ProductDetailPage = () => {
  return (
    <div>
      <ProductDetail />
      <Carousel Slide={SingleProduct} title="Related Products" slidesToShow={3} />
    </div>
  );
};

export default ProductDetailPage;
