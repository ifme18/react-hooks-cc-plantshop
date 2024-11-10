import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch plant data when the component mounts
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        // Set the state with the fetched plant data
        setPlants(data);
      })
      .catch((error) => {
        console.error("Error fetching plant data:", error);
      });
  }, []);

  function handleSearch(term) {
    setSearchQuery(term);
  }

  // Filter plants based on the search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={(newPlant) => setPlants([...plants, newPlant])} />
      <Search onSearch={handleSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;

