import React from "react";
import { connect } from 'react-redux'


const Screen = ({ onScreen }) => {
  if(onScreen) {
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
  };
};

export default connect(mapStateToProps)(Screen);
