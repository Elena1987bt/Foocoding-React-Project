import PropTypes from 'prop-types';
import './SingleCartItem.css';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../../context/context';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { subTotal } from '../../../utils/calculateSubTotal';

const SingleCartItem = ({ cartItem }) => {
  const { id, image, price, title, amount } = cartItem;
  const [{}, dispatch] = useAppContext();

  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
  };

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
      <td className="buttons__group">
        <button onClick={() => toggleAmount(id, 'inc')}>
          <AddIcon />
        </button>
        <p className="amount">{amount}</p>
        <button onClick={() => toggleAmount(id, 'dec')}>
          <RemoveIcon />
        </button>
      </td>
      <td>${subTotal(price, amount).toFixed(2)}</td>
    </tr>
  );
};
SingleCartItem.propTypes = {
  cartItem: PropTypes.object,
};

export default SingleCartItem;
