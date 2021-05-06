import ProductDetail from '../components/ProductDetail/ProductDetail';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';
import SingleProduct from '../components/Products/SingleProduct/SingleProduct';
import Loading from '../components/Loading/Loading';
import useFilterByCategory from '../hooks/useFilterByCategories';
import useFetchData from '../hooks/useFetchData';
import { useAppContext } from '../context/context';
import ScrollToTop from '../utils/ScrollToTop';

const ProductDetailPage = () => {
  const [{ loading }] = useAppContext();
  const { id } = useParams();
  const { products } = useFetchData('https://fakestoreapi.com/products');
  const product = products.find((el) => el.id === parseInt(id));
  const category = product.category;
  const filterProducts = useFilterByCategory(category, products);

  if (loading) return <Loading />;
  return (
    <div>
      <ScrollToTop />
      <ProductDetail product={product} />
      <Carousel
        Slide={SingleProduct}
        title="Related Products"
        slidesToShow={3}
        slideToShowMobile={1}
        products={filterProducts}
      />
    </div>
  );
};

export default ProductDetailPage;
