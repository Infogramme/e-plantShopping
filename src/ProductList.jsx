import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice'; // Adjust the path as needed

function ProductList({ onHomeClick }) {
    const [addedToCart, setAddedToCart] = useState({});
    const dispatch = useDispatch();

    const plantsArray = [
        {
            category: "Flowers",
            plants: [
                {
                    name: "Rose",
                    image: "https://example.com/rose.jpg",
                    description: "A beautiful red rose.",
                    cost: "$10.00",
                },
                {
                    name: "Tulip",
                    image: "https://example.com/tulip.jpg",
                    description: "A bright yellow tulip.",
                    cost: "$8.00",
                },
            ],
        },
        {
            category: "Cactus",
            plants: [
                {
                    name: "Barrel Cactus",
                    image: "https://example.com/barrel-cactus.jpg",
                    description: "A round cactus with spines.",
                    cost: "$15.00",
                },
            ],
        },
    ];

    const handleAddToCart = (plant) => {
        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true,
        }));
        dispatch(addItem(plant));
    };

    return (
        <div>
            <div className="product-grid">
                {plantsArray.map((category) => (
                    <div key={category.category}>
                        <h2>{category.category}</h2>
                        <div className="plant-cards">
                            {category.plants.map((plant) => (
                                <div key={plant.name} className="plant-card">
                                    <img
                                        src={plant.image}
                                        alt={plant.name}
                                        className="plant-image"
                                    />
                                    <h3>{plant.name}</h3>
                                    <p>{plant.description}</p>
                                    <p className="cost">{plant.cost}</p>
                                    <button
                                        onClick={() => handleAddToCart(plant)}
                                        className="add-to-cart-button"
                                    >
                                        {addedToCart[plant.name]
                                            ? "Added"
                                            : "Add to Cart"}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;