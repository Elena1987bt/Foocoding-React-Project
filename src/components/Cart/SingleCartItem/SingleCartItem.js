import React, { useState } from 'react';
import './SingleCartItem.css';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../../context/context';
import { subTotal } from '../../../utils/calculateTotal';

const SingleCartItem = ({ cartItem }) => {
  const { id, image, price, title } = cartItem;
  console.log(id);
  const [{}, dispatch] = useAppContext();
  const [quantity, setQuantity] = useState(1);

  return (
    <tr>
      <td>
        <div className="cart__info">
          <img src={image} alt="" />
          <div>
            <p>{title}</p>
            <span>Price: ${price}</span>
            <br />
            <button
              className="removeButton"
              onClick={() =>
                dispatch({
                  type: 'REMOVE_ITEM',
                  payload: id,
                })
              }
            >
              remove
            </button>
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
        <input
          type="number"
          value={quantity}
          min={1}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
      </td>
      <td>${subTotal(quantity, price).toFixed(2)}</td>
    </tr>
  );
};

export default SingleCartItem;
