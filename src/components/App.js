import React, {useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect(fetchCards, [])

  return (
    <div className="App">
      <PokemonPage pokemon={pokemon} setPokemon={setPokemon}/>
    </div>
  );

  function fetchCards()  {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(setPokemon)
  }
}

export default App;
