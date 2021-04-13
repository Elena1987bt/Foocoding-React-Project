import React, { useState, useEffect } from 'react';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';
import SingleProduct from '../components/Products/SingleProduct/SingleProduct';
import Loading from '../components/Loading/Loading';

const ProductDetailPage = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  console.log(product);
  if (loading) return <Loading />;
  return (
    <div>
      <ProductDetail product={product} />
      {/* <Carousel
        Slide={SingleProduct}
        title="Related Products"
        slidesToShow={3}
        slideToShowMobile={1}
      /> */}
    </div>
  );
};

export default ProductDetailPage;
