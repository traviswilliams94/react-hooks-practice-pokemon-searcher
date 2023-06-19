import React, {useState, useEffect} from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";
import PokemonPage from "./PokemonPage";


function PokemonCollection({ pokemon, setPokemon, searchState, setSearchState }) {

const filteredPokemon = pokemon.filter(pokemonObj => pokemonObj.name.includes(searchState))



  return (
    <Card.Group itemsPerRow={6}>
      
        {filteredPokemon.map((pokemonObj) => (
          <PokemonCard key={pokemonObj.id} name={pokemonObj.name} sprite={pokemonObj.sprites} hp={pokemonObj.hp} />
        ))}
    
    </Card.Group>
  );
}

export default PokemonCollection;
