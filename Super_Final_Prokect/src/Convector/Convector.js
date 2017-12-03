import { connect } from 'react-redux'
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import styles from './Convector.css';
import load from '../load/Loading';
import axios from 'axios';
import Menu from '../Menu/Menu';
import Currencies from '../Currencies/Currencies.js';
import { addTodo, addPIDR,givCur,loadi} from '../actions/givCur'

class ConvectorInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.input = this.input.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }
  handleChange(e) {
    this.props.onValue(e.target.value);
  }
  input(event) {
    this.setState({ value: event.target.value })
  }
  render() {
    const Сurrency = this.props.Сurrency;
    const scale = this.props.scale;
    return (
      <input className="Convector__form-control" value={Сurrency}
        onChange={this.handleChange} />
          
    );
  }
}
export function giveLink(){
  const link = 23
  return link 
  } 
class Convector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Cur_Name1st_value: '',
      Cur_Name2wo_value: '',
      data: [],
      table:[]
    };
    this.Cur_Name1st = this.Cur_Name1st.bind(this);
    this.Cur_Name2wo = this.Cur_Name2wo.bind(this);
    this.firstСurrency = this.firstСurrency.bind(this);
    this.secondСurrency = this.secondСurrency.bind(this);
    this.secondСurrency = this.secondСurrency.bind(this);
    // this.Ivent = this.Ivent.bind(this);
    this.loadNow();
    this.LoadloaDinamic();
  }
  loadNow() {
    const API_CurrencyY = this.props.hello
    const nameLengthss = API_CurrencyY.map(function(API_CurrencyY){
      return API_CurrencyY.API;
      }
     )
     const lastItemm = nameLengthss[nameLengthss.length - 1]  
     load(this.state.data).then(lastItemmn => {
      this.setState({
        data:lastItemm
      });
    });
  }
    LoadloaDinamic() {
     load(this.state.table).then(Cur_Abbreviation => {
      this.setState({
        table: JSON.parse(Cur_Abbreviation)
      });
    });
  }

  firstСurrency(Сurrency) {
    this.setState({ scale: 'c', Сurrency });
  }
  secondСurrency(Сurrency) {
    this.setState({ scale: 'f', Сurrency });
  }
  Cur_Name1st(e) {
    
    this.setState({ Cur_Name1st_value: e.target.value });
  }
  Cur_Name2wo(ee) {

    this.setState({ Cur_Name2wo_value: ee.target.value}) // смотри СЮДА
  } 

  render() {
    const API_CurrencyY = this.props.hello
    const API_Currency = this.props.hello
    const nameLengthss = API_CurrencyY.map(function(API_CurrencyY){
      return API_CurrencyY.API;
      }
     )
    const lastItemm = nameLengthss[nameLengthss.length - 1]  
    const nameLengths = API_Currency.map(function(API_Currency){
      return API_Currency.Cur_Abbreviation;
     }
    )
    const lastItem = nameLengths[nameLengths.length - 1]  
    const Curs= this.state.data;
    const table = this.state.table
    //const testing = this.state.data
    const Cur_Name1st = this.state.Cur_Name1st_value;
    const Cur_Name2wo = lastItem;
    const ConvertVal1 = getValuesCur_Abbreviation(Curs, Cur_Name1st)
    const ConvertVal2 = getValuesCur_Abbreviation(Curs, Cur_Name2wo)
    function getValuesCur_Abbreviation(Curs, search) {
      return Curs.reduce(function (values, item) {
        (item.Cur_Abbreviation === search) && values.push(item.Cur_OfficialRate);
        return values;
      }, []);

    }
  
      
    const getID =  getValuesCur_ID(Curs, Cur_Name2wo)
    function getValuesCur_ID(Curs, search) {
      return Curs.reduce(function (values, item) {
        (item.Cur_Abbreviation === search) && values.push(item.Cur_ID);
        return values;
      }, []);

    }
 
    function toСurrency_ferst(SecondСurrency) {
      return (SecondСurrency * ConvertVal1) / ConvertVal2;
    }
    function toСurrency_second(FirstСurrency) {
      return (FirstСurrency * ConvertVal2) / ConvertVal1;
    }
    function tryConvert(Сurrency, convert) {
      const input = parseFloat(Сurrency);
      if (Number.isNaN(input)) {
        return '';
      }
      const output = convert(input);
      const rounded = Math.round(output * 1000) / 1000;
      return rounded.toString();
    }
    const scale = this.state.scale;
    const Сurrency = this.state.Сurrency;
    const FirstСurrency = scale === 'f' ? tryConvert(Сurrency, toСurrency_ferst) : Сurrency;
    const SecondСurrency = scale === 'c' ? tryConvert(Сurrency, toСurrency_second) : Сurrency;
    return (
      <div>
      
        <div className='Convector'>
        <div className = 'Convector__dinamic'>
          DINAMIC
            <td className = 'fsd'>
              {table.map((type, index) => (
                <tr
                >
                  {type.Cur_OfficialRate}
                </tr>
              ))}
            </td>
            </div>
          <select className="Convector__form-control" onChange={this.Cur_Name2wo}>
              <option className="Convector__form-control">
                {Cur_Name2wo}
              </option>

          </select>
          <ConvectorInput
            scale="f"
           Сurrency={SecondСurrency}
           onValue={this.secondСurrency} 
           />
          <select className="Convector__form-control" onChange={this.Cur_Name1st}>
            {
              Curs.map((type, index) => (
                <option className="Convector__form-control"
                  key={index}
                >
                  {type.Cur_Abbreviation}
                </option>
              ))}
          </select>
          <ConvectorInput
            scale="c"
            Сurrency={FirstСurrency}
            //onValue={this.firstСurrency} 
            />
    
        </div>
       
      </div>
    );
  }

}


export default connect(
  state => ({
    hello: state
  }),
  dispatch =>({onClickButton:(ButtonValue)=>{
    dispatch(givCur(ButtonValue))
  }
  })
)
  (Convector);
 /*
  <button className='button'
  onClick={() => {
    this.Ivent()
  }}
>

</button>
*/

  /*
  export default connect(
    state => ({
      hello: state
    }),
    dispatch =>({onloadValuee:(loadValue)=>{
      dispatch(loadi(loadValue))
    }
    })
  )
    (Convector);
    */
    /*
            <button onClick={this.addTrack.bind(this)}>Add track</button>
        <input type="text" ref={(input) => { this.trackInput = input; }} />
        <input type="text" ref={(input) => { this.trackInput = input; }} />
        */