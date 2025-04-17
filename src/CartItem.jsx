// CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(item.name)); // Dispatch removeItem with item name
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) {
      dispatch(updateQuantity({ name: item.name, quantity: newQuantity })); // Dispatch updateQuantity
    }
  };

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <img src={item.imageURL} alt={item.name} />
      <p>{item.description}</p>
      <p>Price: ${item.cost}</p>
      <p>Quantity: 
        <input 
          type="number" 
          value={item.quantity} 
          onChange={handleQuantityChange} 
          min="1"
        />
      </p>
      <button onClick={handleRemoveItem}>
        Remove from Cart
      </button>
    </div>
  );
};

export default CartItem;