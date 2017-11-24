
import React, { Component } from 'react';
import ReactDOM from "react-dom";
//import './app.css';
import styles from './Convector.css';
//import {loader} from '../app.js';
import load from '../load/load';
import axios from 'axios';
import Menu from '../Menu/Menu';
import  Currencies from '../Currencies/Currencies.js';
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
      const Сurrency = this.props.Сurrency;
      const scale = this.props.scale;
      return (
          <input  className="Convector__form-control" value={Сurrency}
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
      // this.state = {Сurrency: '', scale: 'c', data:[]};
    }
    loadData() {
        load(this.state.data).then(Cur_Abbreviation=> {
          this.setState({
              data:JSON.parse(Cur_Abbreviation)     
               });       
            });
    }
    firstСurrency(Сurrency) {
      this.setState({scale: 'c', Сurrency});
    }
     secondСurrency(Сurrency) {
      this.setState({scale: 'f', Сurrency});
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
        function toСurrency_ferst(SecondСurrency) {
          return (SecondСurrency*ConvertVal1)/ConvertVal2 ;
        }
        function toСurrency_second(FirstСurrency) {
          return (FirstСurrency *ConvertVal2 )/ConvertVal1;
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
      const testtt = this.props.data;  
      const FirstСurrency = scale === 'f' ? tryConvert(Сurrency, toСurrency_ferst) : Сurrency;
      const SecondСurrency = scale === 'c' ? tryConvert(Сurrency, toСurrency_second) : Сurrency;
   return ( 
  <div> 


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
            Сurrency={FirstСurrency}
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
            Сurrency={SecondСurrency}
            onValue={this. secondСurrency} />
        </div>
        </div>
      );
    }
  
  }
  Convector.defaultProps = {
   data:[]
  };
export default Convector ;