import React from 'react';
import './SingleCartItem.css';
import image from '../../../assets/images/promotionOne.jpg';

const SingleCartItem = () => {
  return (
    <tr>
      <td>
        <div className="cart__info">
          <img src={image} alt="" />
          <div>
            <p>Bambi Print Mini Backpack</p>
            <span>Price: $900.00</span>
            <br />
            <button>remove</button>
          </div>
        </div>
      </td>
      <td>
        <input type="number" value="1" min="1" />
      </td>
      <td>$90.00</td>
    </tr>
  );
};

export default SingleCartItem;
