
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../CartSlice';
import PropTypes from 'prop-types';

const CartItem = ({ onContinueShopping }) => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span> - <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={onContinueShopping}>Continue Shopping</button>
    </div>
  );
};

CartItem.propTypes = {
  onContinueShopping: PropTypes.func.isRequired,
};

export default CartItem;