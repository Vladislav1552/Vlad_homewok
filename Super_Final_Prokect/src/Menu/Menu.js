import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import './Menu.css';
 class Menu extends React.Component {
  render() {
    return (
      <div  >
        <NavLink className='Menu' to='/' > Currencies </NavLink>
        <NavLink className='Menu' to='/Convector'  >Convector  </NavLink>
        <NavLink className='Menu' to='/About' > About  </NavLink>
        <NavLink className='Menu' to='/favorite'> Favorite</NavLink>
      </div>
    );
  }
}

export default Menu;
