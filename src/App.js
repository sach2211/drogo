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
          <h2>Select a dog to know more about it : </h2>
          {
            Object.keys(this.props.allBreeds).map((thisBreed) => (
              <div style={{ 
                display: 'inline-block',
                width: '30%', 
                fontSize: '16px', 
                border: '2px solid cornflowerblue', 
                borderRadius: '2px', 
                padding: '5px',
                margin: '15px',
                background: 'floralwhite'
              }}>{thisBreed}</div>
            ))
          }
        </div>
        <button onClick={() => {this.props.getBreedImages()}}>Get Images</button>

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
