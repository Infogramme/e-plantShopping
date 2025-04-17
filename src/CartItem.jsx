import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, amount: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, amount: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (itemName) => {
    dispatch(removeItem(itemName));
  };

  const calculateTotalCost = (item) => {
    return parseFloat(item.cost.substring(1)) * item.quantity;
  };

  const calculateTotalAmount = () => {
    return items.reduce((total, item) => {
      return total + parseFloat(item.cost.substring(1)) * item.quantity;
    }, 0);
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-container">
      <h2>Cart Items</h2>
      {items.length === 0 ? <p>Your cart is empty</p> :
        items.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Unit Price: {item.cost}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ${calculateTotalCost(item).toFixed(2)}</p>
              <button onClick={() => handleIncrement(item)}>+</button>
              <button onClick={() => handleDecrement(item)}>-</button>
              <button onClick={() => handleRemove(item.name)}>Remove</button>
            </div>
          </div>
        ))
      }

      <h3>Total: ${calculateTotalAmount().toFixed(2)}</h3>
      <button onClick={onContinueShopping}>Continue Shopping</button>
      <button onClick={handleCheckoutShopping}>Checkout</button>
    </div>
  );
};

export default CartItem;