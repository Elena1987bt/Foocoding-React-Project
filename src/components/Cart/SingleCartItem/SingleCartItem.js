import React from 'react';
import './SingleCartItem.css';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../../context/context';
const SingleCartItem = ({ cartItem }) => {
  const { image, price, title } = cartItem;
  const [{}, dispatch] = useAppContext();
  return (
    <tr>
      <td>
        <div className="cart__info">
          <img src={image} alt="" />
          <div>
            <p>{title}</p>
            <span>Price: ${price}</span>
            <br />
            <button className="removeButton">remove</button>
            <Link
              to="/products"
              className="removeButton"
              onClick={() =>
                dispatch({
                  type: 'SET_ALL_PRODUCTS',
                  payload: 'All',
                })
              }
            >
              back to products
            </Link>
          </div>
        </div>
      </td>
      <td>
        <input type="number" value="1" min="1" />
      </td>
      <td>${price}</td>
    </tr>
  );
};

export default SingleCartItem;
