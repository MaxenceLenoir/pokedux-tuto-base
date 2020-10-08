import React from "react";
import { connect } from 'react-redux'

import PokemonItem from "./PokemonItem";

const PokeList = ({ click, pokemons }) => {
  console.log(pokemons)
  return (
    <div className="list-container">
      <h2>Try : {click}</h2>
      <h2>Pokedex</h2>
      <ul>
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
      </ul>
    </div>
  );
};

// on peut importer soit en destructuring, soit tout le state
const mapStateToProps = (state) => {
  return {
    click: state.click,
    pokemons: state.pokemons
  };
};

export default connect(mapStateToProps)(PokeList);
