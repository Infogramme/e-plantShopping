// CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

// Initial state of the cart
const initialState = {
  items: [], // Cart items will be stored here
};

// Creating the slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add an item to the cart
    addItem: (state, action) => {
      const item = action.payload; // The plant object
      const existingItem = state.items.find(i => i.name === item.name);
      
      if (existingItem) {
        // If the item already exists, increase the quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add a new item to the cart with quantity = 1
        state.items.push({ ...item, quantity: 1 });
      }
    },
    // Remove an item from the cart by name
    removeItem: (state, action) => {
      const itemName = action.payload; // Name of the plant to remove
      state.items = state.items.filter(item => item.name !== itemName);
    },
    // Update the quantity of a cart item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Name and the new quantity
      const item = state.items.find(i => i.name === name);

      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

// Export the actions so they can be used in components
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer to be used in store.js
export default cartSlice.reducer;