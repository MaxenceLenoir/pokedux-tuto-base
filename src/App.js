import React, { useEffect } from "react";
import "./styles.css";
import { connect } from 'react-redux'

import { displayScreen, catchPokemon }  from './store/action'
import fetchPokemons from './store/fetchPokemons'

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import Loader from "./components/Loader";

const App = ({ fetchPokemons, pending, displayScreen, pokemons, catchPokemon }) => {
  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])

  if (pending) {
    return <Loader />
  }

  return (
    <div className="App">
      <GameBoy 
        displayScreen={() => displayScreen(pokemons)} 
        catchPokemon={catchPokemon}
      />
      <PokeList />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pending: state.pending,
    pokemons: state.pokemons,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemons: () => dispatch(fetchPokemons()),
    displayScreen: (pokemons) => dispatch(displayScreen(pokemons)),
    catchPokemon: () => dispatch(catchPokemon())
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
