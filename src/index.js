import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import registerServiceWorker from './registerServiceWorker';


import { drogoAppState } from './redux/reducers.js';
import { getAllBreeds } from './redux/actions.js'
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

store.dispatch(getAllBreeds());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
// registerServiceWorker();
