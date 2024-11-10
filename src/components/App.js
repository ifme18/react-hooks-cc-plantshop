import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage /> {/* PlantPage handles state, fetching, and UI logic */}
    </div>
  );
}

export default App;

