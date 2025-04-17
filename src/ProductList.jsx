// ProductList.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const ProductList = ({ plantsArray }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant)); // Dispatching addItem with the selected plant
  };

  return (
    <div className="product-grid">
      {plantsArray.map(plant => (
        <div key={plant.name} className="product-item">
          <h3>{plant.name}</h3>
          <img src={plant.imageURL} alt={plant.name} />
          <p>{plant.description}</p>
          <p>Price: ${plant.cost}</p>
          <button onClick={() => handleAddToCart(plant)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;