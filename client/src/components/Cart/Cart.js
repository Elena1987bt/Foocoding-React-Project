import React, { useEffect } from 'react';
import SingleCartItem from './SingleCartItem/SingleCartItem';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import './Cart.css';

const Cart = () => {
  const [{ cart, total }, dispatch] = useAppContext();

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="cart container">
      <table>
        <tbody>
          <tr className="cart__titles">
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {cart.length === 0 && (
            <tr className="empty">
              <td> Your cart is empty.</td>
            </tr>
          )}
          {cart.map((cartItem) => (
            <SingleCartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </tbody>
      </table>
      <div className="total__price">
        <table>
          <tbody>
            <tr>
              <td>Total</td>
              <td>${total}</td>
            </tr>
          </tbody>
        </table>
        <div className="checkout__btns">
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
    </div>
  );
};

export default Cart;
