
import moment from 'moment';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch,
  hashHistory
} from 'react-router-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import  Currencies   from './Currencies/Currencies.js';
import Convector from './Convector/Convector.js';
//import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import configureStore from './store/configureStore.js';



const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
  const place =  document.getElementById('div'); 
  ReactDOM.render(
    <Provider store={store}>
    <Router history={hashHistory}>
      <div>
      <Route path="/" component={Currencies}/>
      <Route path="/Convector" component={Convector}/>
      </div>
    </Router>
  </Provider>,
place 
  );
  




















/*
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import App from './App'
import configureStore from './store/configureStore'
const initialState = [
  'Smells like spirit',
  'Enter Sandman'
];

function playlist(state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(playlist);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('div')
);
*/