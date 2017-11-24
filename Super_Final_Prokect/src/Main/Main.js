
import About from '../About/About';
import load from '../load/load';
import Table from '../Table/Table';
import Search from '../Search/Search';
import Convector from '../Convector/Convector.js';
import moment from 'moment';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import Menu from '../Menu/Menu';
import  Currencies   from '../Currencies/Currencies.js';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
  } from 'react-router-dom';
  

class Main extends React.Component {
    render() {
      return (
        <Route
        path='/'
        render={() =>
        <div  >
            <Menu />
              <Switch>
                <Route
                  path='/About'
                  render={() => 
                  <div>
                    <About />
                    
                  </div>}
                />
                <Route
                path='/Convector'
                render={() => 
                <div>
                  <Convector                
                />
                <Currencies />
                </div>
                
                }
              />
              <Route
                path='/'
                render={() => <Currencies
                />}
              />
            </Switch>
                
             
        </div>
             }
          />
      );
    }
  }
  
  export default Main;
  
