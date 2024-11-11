import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [name, plantName] = useState("");
  const [image, Image] = useState("");
  const [price, plantPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = { name, image, price }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newPlant),
    })

    .then((response) => response.json())
    .then((data) => {
      onAddPlant(data)
      plantName("")
      Image("")
      plantPrice("")
    })
  }



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(e) => plantName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL"  value={image} onChange={(e) => Image(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(e) => plantPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;