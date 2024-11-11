import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch all plants
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plant data:", error));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleSearch(term) {
    setSearchQuery(term);
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={handleSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
