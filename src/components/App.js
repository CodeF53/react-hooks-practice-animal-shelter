import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  // get pets when we first render the app
  useEffect(() => {
    fetch("http://localhost:3001/pets").then(r=>r.json()).then((data)=>{
      setPets(data)
    })
  }, [])
  

  const filteredPets = pets.filter((pet) => {
    if (filters.type === "all") {
      return true;
    }
    return pet.type === filters.type
  })

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={(e)=>{setFilters({type: e.target.value })}}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={filteredPets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
