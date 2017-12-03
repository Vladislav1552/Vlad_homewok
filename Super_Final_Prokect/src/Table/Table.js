import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker';
import moment from 'moment';
//import {Link} from 'react-router';
import './Table.css';
import Menu from '../Menu/Menu';
import './react-datepicker-cssmodules.css';

class Calendar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
    />;
  }
}

class Table extends Component {
  render() {
    return( 
      <div className = 'tablee'>
     <table id='table' >
   
     <td>

   {this.props.good.map((type,activePlace) =>
  
     <tr key={ activePlace} >
       {type.Cur_Abbreviation}</tr>
   )}

   </td>
 
   
   <td>
   {this.props.good.map((type,activePlace) =>
     <tr key={activePlace} >
       {type.Cur_OfficialRate}</tr>
   )}
   </td>
   </table>
 
 </div>
    )
  }
}


export default connect(
  state => ({
    good:state
  }),
  dispatch => ({
  })
)
  (Table);
