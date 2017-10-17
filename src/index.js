import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import registerServiceWorker from './registerServiceWorker';


import { drogoAppState } from './redux/reducers.js';
import { getAllBreeds } from './redux/actions.js'

let store = createStore(drogoAppState);
store.subscribe( () => {
  console.log("Store Updated - ", store.getState());
})

store.dispatch(getAllBreeds());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
// registerServiceWorker();
