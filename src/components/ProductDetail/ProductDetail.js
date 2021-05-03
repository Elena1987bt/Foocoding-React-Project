import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useAppContext } from '../../context/context';

import './ProductDetail.css';

const ProductDetail = ({ product }) => {
  const [{}, dispatch] = useAppContext();
  const { category, title, image, price, description } = product;

  return (
    <section className="productDetail">
      <div className="productDetail__center container">
        <div className="productDetail__left">
          <div className="mainImage">
            <img src={image} alt={title} />
          </div>
          <div className="thumbnails">
            <div className="thumbnail">
              <img src={image} alt="" />
            </div>
            <div className="thumbnail">
              <img src={image} alt="" />
            </div>
            <div className="thumbnail">
              <img src={image} alt="" />
            </div>
            <div className="thumbnail">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
        <div className="productDetail__right">
          <span>{category}</span>
          <h1>{title}</h1>
          <div className="productDetail__price">${price}</div>
          <form>
            <div>
              <select>
                <option value="Select Size" defaultValue disabled>
                  Select Size
                </option>
                <option value="1">32</option>
                <option value="2">42</option>
                <option value="3">52</option>
                <option value="4">62</option>
              </select>
              <span>
                <ArrowDropDownIcon />
              </span>
            </div>
          </form>

          <div className="productDetail__buttons">
            <Link
              to="/products"
              className="productDetail__button"
              onClick={() =>
                dispatch({
                  type: 'SET_ALL_PRODUCTS',
                  payload: 'All',
                })
              }
            >
              Back To Products
            </Link>
            <Link
              to="/cart"
              className="productDetail__button"
              onClick={() =>
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: product,
                })
              }
            >
              Add To Cart
            </Link>
          </div>
          <h3>Product Detail</h3>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
