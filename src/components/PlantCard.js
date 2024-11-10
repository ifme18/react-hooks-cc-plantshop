import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isInStock, setIsInStock] = useState(true); // State to manage stock status

  function handleStockToggle() {
    setIsInStock((prev) => !prev); // Toggle stock status
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image || "https://via.placeholder.com/400"} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleStockToggle}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
