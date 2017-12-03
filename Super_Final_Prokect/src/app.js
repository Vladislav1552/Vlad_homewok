
import moment from 'moment';
import {
  HashRouter as Router,
  Route,
  hashHistory
} from 'react-router-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import  Currencies   from './Currencies/Currencies.js';
import Convector from './Convector/Convector.js';
import Table from './Table/Table.js';
//import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import  Main  from './Main/Main.js';
import currence  from './reducers/reducers';
import Load_Change  from './reducers/load';
import { addTodo, loadi,givCur} from './actions/givCur'
import reduce from './reducers/Combine'
import load from './load/loadi';
import configureStore from './store/configureStore'
import Favorite from './Favorite/Favorite';
const store = createStore(currence,Load_Change, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 
store.subscribe(()=>{
  console.log('subscribe', store.getState());
})
const ButtonValue = {a:'hello'}
store. dispatch(givCur(ButtonValue))
  const place =  document.getElementById('div'); 
  ReactDOM.render(
    <Provider store={store}>
    <Router history={hashHistory}>
      <div>
      <Route path="/" component={Main}/>
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