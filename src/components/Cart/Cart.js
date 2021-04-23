import React, { useEffect } from 'react';
import SingleCartItem from './SingleCartItem/SingleCartItem';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import './Cart.css';

const Cart = () => {
  const [{ cart, total }, dispatch] = useAppContext();
  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [cart, dispatch]);

  return (
    <div className="cart container">
      <table>
        <tr className="cart__titles">
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        {cart.length === 0 && <p className="empty"> Your cart is empty. </p>}
        {cart.map((cartItem) => (
          <SingleCartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </table>
      <div className="total__price">
        <table>
          <tr>
            <td>Total</td>
            <td>${total}</td>
          </tr>
        </table>
        <Link to="/checkout" className="checkout__btn">
          Proceed To Checkout
        </Link>
        <Link
          to="/cart"
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
