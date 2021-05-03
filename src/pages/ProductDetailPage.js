import ProductDetail from '../components/ProductDetail/ProductDetail';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';
import SingleProduct from '../components/Products/SingleProduct/SingleProduct';
import useFilterByCategory from '../hooks/useFilterByCategories';
import { useAppContext } from '../context/context';

const ProductDetailPage = () => {
  const [{ products }] = useAppContext();
  const { id } = useParams();
  const product = products.find((el) => el.id === parseInt(id));
  const category = product.category;

  console.log(category);
  const filterProducts = useFilterByCategory(category, products);
  console.log(filterProducts);

  return (
    <div>
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
