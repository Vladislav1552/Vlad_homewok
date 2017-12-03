import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker';
import moment from 'moment';
//import {Link} from 'react-router';
import './react-datepicker-cssmodules.css';
import Menu from '../Menu/Menu';
import './react-datepicker-cssmodules.css';
import load from '../load/loadi';
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

class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data:[],
          PROMO:''
            };
            this.loadData();
      }
      
      loadData() {
        load(this.state.Now).then(Cur_Abbreviation => {
          this.setState({
            data: JSON.parse(Cur_Abbreviation)
          });
        });
      }
  render() {
    const Cur_Name1st = this.state.PROMO
    const Giv_cur =  this.state.data
    const ConvertVal = getValues(Giv_cur, Cur_Name1st) 
    function getValues( search_value, search) {
        return search_value.reduce(function(values, item){
            (item.Cur_Abbreviation === search) 
            && values.push(item.Cur_Abbreviation)
            && values.push(item.Cur_OfficialRate)
            && values.push(item.Cur_Name)
            && values.push(item.Date)
            return values;
        }, []);
     }
    return( 
      <div className = 'tablee'>
          <Calendar />
     <button  onClick={() => {
                    this.setState(
                      {
                        PROMO:'USD' 
                      });
                  }}>USD </button>
     <button
     onClick={() => {
                    this.setState(
                      {
                        PROMO:'EUR' 
                      });
                  }}>EUR </button>
     <button
     onClick={() => {
                    this.setState(
                      {
                        PROMO:'RUB' 
                      });
                  }}>RUB </button>
     <div>

       {ConvertVal.map((Cur_Name1st, index) => (
        <span className='Search__result_span' 
          key={index}
        >
            {Cur_Name1st}
        </span>
      ))}

       
              </div>
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
  (Favorite);
  /*
<span id='table' >
   
     <td>

   {this.props.good.map((type,activePlace) =>
  
     <span key={ activePlace} >
       {type.Cur_Abbreviation}</span>
   )}

   </td>
 
   
   <td>
   {this.props.good.map((type,activePlace) =>
     <tr key={activePlace} >
       {type.Cur_OfficialRate}</tr>
   )}
   </td>
   </span>
 */