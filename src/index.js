import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import registerServiceWorker from './registerServiceWorker';


import { ACTION_TYPES, ACTION_CREATORS } from './redux/actions.js'
import { drogoAppState } from './redux/reducers.js';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

let store = createStore(drogoAppState,  applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware // neat middleware that logs actions
));

store.subscribe( () => {
  console.log("Store Updated - ", store.getState());
})

store.dispatch(ACTION_CREATORS.getAllBreedsAsync());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
// registerServiceWorker();
