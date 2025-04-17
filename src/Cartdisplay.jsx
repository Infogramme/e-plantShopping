import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartDisplay = ({ onContinueShopping }) => {
  const cartItems = useSelector(state => state.cart.items);

  // Calculate total cost of all items in cart
  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + parseFloat(item.cost) * item.quantity, 0)
      .toFixed(2);
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Go add some plants!</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.name} item={item} onContinueShopping={onContinueShopping} />
          ))}

          <h3>Total: ${calculateTotalAmount()}</h3>

          <div style={{ marginTop: '20px' }}>
            <button onClick={handleContinueShopping}>Continue Shopping</button>
            <button onClick={handleCheckoutShopping}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDisplay;
