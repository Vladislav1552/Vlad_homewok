
import React, { Component } from 'react';
import ReactDOM from "react-dom";
//import './app.css';
import styles from './Convector.css';
//import {loader} from '../app.js';
import load from '../load/load';
import axios from 'axios';
import Menu from '../Menu/Menu';

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
    input(event){
   this.setState({value:event.target.value})
  }
    render() {
      const Currencies = this.props.Currencies;
      const scale = this.props.scale;
      return (
          <input  className="Convector__form-control" value={Currencies}
                 onChange={this.handleChange} />
      );
    }
  }
class Convector  extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Cur_Name1st_value: '',
        Cur_Name2wo_value: '',
        data:[]
          };
      this.Cur_Name1st = this.Cur_Name1st.bind(this);
      this.Cur_Name2wo = this.Cur_Name2wo.bind(this);
      this.firstСurrency = this.firstСurrency.bind(this);
      this.secondСurrency = this.secondСurrency.bind(this);
      this.loadData();
      // this.state = {Currencies: '', scale: 'c', data:[]};
    }
    loadData() {
        load(this.state.data).then(Cur_Abbreviation=> {
          this.setState({
              data:JSON.parse(Cur_Abbreviation)     
               });       
            });
    }
    firstСurrency(Currencies) {
      this.setState({scale: 'c', Currencies});
    }
     secondСurrency(Currencies) {
      this.setState({scale: 'f', Currencies});
    }
    Cur_Name1st(e){
       this.setState({Cur_Name1st_value:e.target.value});
     }
    Cur_Name2wo(ee){
      this.setState({Cur_Name2wo_value:ee.target.value})
     }
    render() { 
      
      const testt = this.state.data;  
      const Cur_Name1st = this.state.Cur_Name1st_value;
      const Cur_Name2wo = this.state.Cur_Name2wo_value;
      const ConvertVal1 = getValues( testt, Cur_Name1st)
      const ConvertVal2 = getValues( testt , Cur_Name2wo)
      function getValues( testt, search) {
        return testt.reduce(function(values, item){
            (item.Cur_Abbreviation === search) && values.push(item.Cur_OfficialRate);
            return values;
        }, []);
      
     }
        function toCurrencies_ferst(SecondСurrency) {
          return (SecondСurrency*ConvertVal1)/ConvertVal2 ;
        }
        function toCurrencies_second(FirstСurrency) {
          return (FirstСurrency *ConvertVal2 )/ConvertVal1;
        }
        function tryConvert(Currencies, convert) {
          const input = parseFloat(Currencies);
          if (Number.isNaN(input)) {
            return '';
          }
          const output = convert(input);
          const rounded = Math.round(output * 1000) / 1000;
          return rounded.toString();
        }
      const scale = this.state.scale;
      const Currencies = this.state.Currencies;
      const testtt = this.props.data;  
      const FirstСurrency = scale === 'f' ? tryConvert(Currencies, toCurrencies_ferst) : Currencies;
      const SecondСurrency = scale === 'c' ? tryConvert(Currencies, toCurrencies_second) : Currencies;
   return ( 
        <div className='Convector'> 
           
           <select  className="Convector__form-control" onChange={this.Cur_Name1st}> {  /*console.log(loader)*/}
        {
          testt.map((type, index)  => (
          <option className="Convector__form-control" 
        key={index}
          >
           {type.Cur_Abbreviation}
           </option>
         ))}
          </select>
          <ConvectorInput
            scale="c"
            Currencies={FirstСurrency}
            onValue={this.firstСurrency} />
          <select  className="Convector__form-control" onChange={this.Cur_Name2wo}>
        {testt.map((type, index) => (
          <option className="Convector__form-control" 
        key={index}
          >
          {type.Cur_Abbreviation}
           </option>
         ))}
          </select>
            <ConvectorInput
            scale="f"
            Currencies={SecondСurrency}
            onValue={this. secondСurrency} />
        </div>
      );
    }
  
  }
  Convector.defaultProps = {
   data:[]
  };
export default Convector ;