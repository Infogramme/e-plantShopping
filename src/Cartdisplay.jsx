// CartDisplay.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartDisplay = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <CartItem key={item.name} item={item} />
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default CartDisplay;