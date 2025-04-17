import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from './CartSlice';

const CartItem = ({ item, onContinueShopping }) => {
  const dispatch = useDispatch();

  // Calculate subtotal for each item
  const calculateTotalCost = () => {
    const price = parseFloat(item.cost); // Assuming cost is a number like 12.99
    return (price * item.quantity).toFixed(2);
  };

  // Remove the item from cart
  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  // Increment the quantity of item
  const handleIncrement = () => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Decrement the quantity or remove if it's 1
  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  return (
    <div className="cart-item">
      <img src={item.imageURL} alt={item.name} style={{ width: '100px' }} />
      <div className="cart-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>Price: ${item.cost}</p>
        <div className="cart-actions">
          <button onClick={handleDecrement}>-</button>
          <span style={{ margin: '0 10px' }}>{item.quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <p>Subtotal: ${calculateTotalCost()}</p>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
