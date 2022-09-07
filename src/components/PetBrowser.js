import React from "react";

import Pet from "./Pet";

function PetBrowser({pets}) {
  const petComponents = pets.map((pet)=>{
    return (
      <Pet pet={pet} key={pet.id} />
    )
  })

  return <div className="ui cards">{petComponents}</div>;
}

export default PetBrowser;
