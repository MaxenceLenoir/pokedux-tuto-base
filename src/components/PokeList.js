import React from "react";
import { connect } from 'react-redux'

import PokemonItem from "./PokemonItem";

const PokeList = ({ click, pokemons }) => {
  return (
    <div className="list-container">
      <h2>Try : {click}</h2>
      <h2>{
        `${pokemons.filter(pokemon => pokemon.isCatch).length} / ${pokemons.length}`
      }
      </h2>
      <ul>
        {
          pokemons.map(pokemon => (
            <PokemonItem key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </ul>
    </div>
  );
};

// on peut importer soit en destructuring, soit tout le state
const mapStateToProps = (state) => {
  return {
    click: state.click,
    pokemons: state.pokemons,
    pending: state.pending
  };
};

export default connect(mapStateToProps)(PokeList);
