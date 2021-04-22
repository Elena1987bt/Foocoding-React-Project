import React, { useEffect } from 'react';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';
import SingleProduct from '../components/Products/SingleProduct/SingleProduct';
import Loading from '../components/Loading/Loading';
import useFetchData from '../hooks/useFetch';
import { useAppContext } from '../context/context';

const ProductDetailPage = () => {
  const [{ product, loading }, dispatch] = useAppContext();
  const [relatedProducts] = useFetchData(product.category);
  console.log(relatedProducts);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    dispatch({
      type: 'LOADING',
    });
    const fetchData = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();

        dispatch({
          type: 'SET_PRODUCT',
          payload: data,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, dispatch]);
  console.log(product);

  if (loading) return <Loading />;
  return (
    <div>
      <ProductDetail />
      <Carousel
        Slide={SingleProduct}
        title="Related Products"
        slidesToShow={3}
        slideToShowMobile={1}
        products={relatedProducts}
      />
    </div>
  );
};

export default ProductDetailPage;
