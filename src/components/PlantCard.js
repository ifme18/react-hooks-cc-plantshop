import React, { useState } from "react";

function PlantCard({ plant }) {
  
  const [isInStock, setIsInStock] = useState(true);

  function handleClick() {
    setIsInStock(!isInStock);
  }

  return (
    <li data-testid="plant-item" key={plant.id} className="card">
      <img alt={plant.name} src={plant.image} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
