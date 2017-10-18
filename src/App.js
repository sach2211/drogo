import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './components/api.js';
import { connect } from 'react-redux';
import { ACTION_CREATORS } from './redux/actions.js';

const client = new api();

class App extends Component {
  render() {
    console.log("The props are => ", this.props);
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Drogo</h2>
        </div>

        <div className="App-intro">
          <button onClick={() => {this.props.getBreedImages()}}>Get Images</button>
        </div>

      </div>
    );
  }
}

const stateToProps = (storeState) =>  {
  return {
    allBreeds: storeState
  }
};

const dispatchToProps = (dispatch) =>  {
  return {
    getBreedImages: () => {
      dispatch(ACTION_CREATORS.getImagesForBreed())
    }
  }
};

const AppCont = connect(stateToProps, dispatchToProps)(App);


export default AppCont;
