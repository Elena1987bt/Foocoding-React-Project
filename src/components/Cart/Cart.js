import React from 'react';
import SingleCartItem from './SingleCartItem/SingleCartItem';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  return (
    <div className="cart container">
      <table>
        <tr className="cart__titles">
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        <SingleCartItem />
        <SingleCartItem />
        <SingleCartItem />
      </table>
      <div className="total__price">
        <table>
          <tr>
            <td>Subtotal</td>
            <td>$200</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>$50</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>$250</td>
          </tr>
        </table>
        <Link to="/checkout" className="checkout__btn">
          Proceed To Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
