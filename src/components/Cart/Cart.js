import React from 'react';
import SingleCartItem from './SingleCartItem/SingleCartItem';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import { total } from '../../utils/calculateTotal';
import './Cart.css';

const Cart = () => {
  const [{ cart }, dispatch] = useAppContext();
  console.log(cart);
  return (
    <div className="cart container">
      <table>
        <tr className="cart__titles">
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        {cart.length === 0 && <p> Your cart is empty. </p>}
        {cart.map((cartItem) => (
          <SingleCartItem key={cartItem.id} cartItem={cartItem} />
        ))}
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
            <td>{total(cart)}</td>
          </tr>
        </table>
        <Link to="/checkout" className="checkout__btn">
          Proceed To Checkout
        </Link>
        <Link
          to=""
          className="clear__btn"
          onClick={() =>
            dispatch({
              type: 'CLEAR_CART',
            })
          }
        >
          Clear Cart
        </Link>
      </div>
    </div>
  );
};

export default Cart;
