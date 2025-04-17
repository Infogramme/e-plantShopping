// App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './ProductList';
import CartItem from './CartItem';

// Sample plant data
const plantsArray = [
  { name: 'Cactus', imageURL: 'cactus.jpg', description: 'A beautiful cactus plant', cost: 12.99 },
  { name: 'Fern', imageURL: 'fern.jpg', description: 'A vibrant fern plant', cost: 15.99 },
  { name: 'Succulent', imageURL: 'succulent.jpg', description: 'A trendy succulent plant', cost: 8.99 },
];

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Plant Shop</h1>
        <ProductList plantsArray={plantsArray} />
        {/* Render Cart Items (this would be a separate cart page or section) */}
      </div>
    </Provider>
  );
};

export default App;