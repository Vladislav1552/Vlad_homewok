
import About from '../About/About';
import load from '../load/loadi';
import Table from '../Table/Table';
import Search from '../Search/Search';
import Convector from '../Convector/Convector.js';
import moment from 'moment';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import Menu from '../Menu/Menu';
import Currencies from '../Currencies/Currencies.js';
import TEST from '../TEST/TEST.js';
import Favorite from '../Favorite/Favorite';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';


class Main extends React.Component {
  render() {

    console.log(this.props.hello1)
    return (

      <Route
        path='/'
        render={() =>
          <div >
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
                  <TEST
                  />
                    <Currencies />
                  </div>

                }
              />

              <Route
                path='/favorite'
                render={() =>
                  <div>
                    <Favorite />
                  </div>

                }
              />
              <Route
                path='/'
                render={() => <div> 
                  <Search /> 
                  <Table />
                  <Currencies/>
                  <TEST
                  />
                </div>}
              />
            </Switch>


          </div>
        }
      />
    );
  }
}



export default connect(
  state => ({

    CutValue: state
  }),
  dispatch => ({
  })
)
  (Main);


