import { useDispatch } from 'react-redux';
import { addItem } from '../CartSlice';
import './ProductList.css';
import { useState } from 'react';
const ProductList = () => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      name: 'Aloe Vera',
      image: '/images/aloe.jpg',
      description: 'Healing and easy-to-maintain plant.',
      cost: '$10'
    },
    {
      name: 'Snake Plant',
      image: '/images/snake.jpg',
      description: 'Tough and air-purifying.',
      cost: '$15'
    },
    {
      name: 'Spider Plant',
      image: '/images/spider.jpg',
      description: 'Beginner-friendly with charming arching leaves.',
      cost: '$8'
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 }));
    setAddedToCart(prev => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant, index) => (
        <div key={index} className="product-card">
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p>{plant.cost}</p>
          <button
            onClick={() => handleAddToCart(plant)}
            disabled={addedToCart[plant.name]}
          >
            {addedToCart[plant.name] ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
