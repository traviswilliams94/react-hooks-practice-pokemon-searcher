import React, {useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemon, setPokemon}) {

  const [searchState, setSearchState] = useState("")

  function handleSearch(e) {
      setSearchState(e.target.value)
  }

  function addPokemon(newPokemon) {
    const updatedPokemon = [newPokemon, ...pokemon]
    setPokemon(updatedPokemon)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search searchState={searchState} setSearchState={setSearchState} handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemon={pokemon} setPokemon={setPokemon} searchState={searchState } setSearchState={{setSearchState}} />
    </Container>
  );
}

export default PokemonPage;
