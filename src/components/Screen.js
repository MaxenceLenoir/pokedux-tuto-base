import React from "react";
import { connect } from 'react-redux'

const Screen = ({ onScreen, pokemons }) => {
  if(onScreen.id) {
    if(pokemons[onScreen.id - 1].isCatch) {
      return <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png' alt={onScreen.name}/>
    }
    return(
      <div>
        <h3 className="screen-name">{onScreen.name}</h3>
        <img src={onScreen.img} alt={onScreen.name}/>
      </div>
    )
  }
  return (
    <>
      <div className="screen-logo">GAME BOY</div>
      <div className="screen-logo-shadow">GAME BOY</div>
      <div className="nintendo-logo-screen">Nintendo&reg;</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    onScreen: state.onScreen,
    pokemons: state.pokemons
  };
};

export default connect(mapStateToProps)(Screen);
