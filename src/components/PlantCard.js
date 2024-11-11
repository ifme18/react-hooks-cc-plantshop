import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  function handleToggleSoldOut() {
    setIsSoldOut(!isSoldOut);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price.toFixed(2)}</p>
      {isSoldOut ? (
        <button className="primary" onClick={handleToggleSoldOut}>
          Out of Stock
        </button>
      ) : (
        <button onClick={handleToggleSoldOut}>In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
