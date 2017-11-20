
import React, { Component } from 'react';
import ReactDOM from "react-dom";
//import './app.css';
import styles from './Convector.css';
//import {loader} from '../app.js';
import load from '../load/load';

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
      this.state = {Currencies: '', scale: 'c'};
    }
    
    loadData() {
            load(this.props.data).then(Cur_Abbreviation=> {
              var abr = JSON.parse(Cur_Abbreviation)   
              this.setState({
                  data: abr    
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
      Convector.defaultProps = {
        data:CURRENCIES,
    }
      const Cur_Name1st = this.state.Cur_Name1st_value;
      const Cur_Name2wo = this.state.Cur_Name2wo_value;
      const ConvertVal1 = getValues( CURRENCIES, Cur_Name1st)
      const ConvertVal2 = getValues( CURRENCIES, Cur_Name2wo)
      function getValues( CURRENCIES, search) {
        return CURRENCIES.reduce(function(values, item){
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
      const testt = this.state.data;  
  
      const FirstСurrency = scale === 'f' ? tryConvert(Currencies, toCurrencies_ferst) : Currencies;
      const SecondСurrency = scale === 'c' ? tryConvert(Currencies, toCurrencies_second) : Currencies;
    alert(testt)
    
   return ( 
        <div className='Convector'> 
           <select  className="Convector__form-control" onChange={this.Cur_Name1st}> {  /*console.log(loader)*/}
        {
          CURRENCIES.map((type, index)  => (
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
        {CURRENCIES.map((type, index) => (

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



  const CURRENCIES = [{ "Cur_ID": 170, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "AUD", "Cur_Scale": 1, "Cur_Name": "Австралийский доллар", "Cur_OfficialRate": 1.5191 }, { "Cur_ID": 191, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "BGN", "Cur_Scale": 1, "Cur_Name": "Болгарский лев", "Cur_OfficialRate": 1.1783 }, { "Cur_ID": 290, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "UAH", "Cur_Scale": 100, "Cur_Name": "Гривен", "Cur_OfficialRate": 7.3660 }, { "Cur_ID": 291, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "DKK", "Cur_Scale": 10, "Cur_Name": "Датских крон", "Cur_OfficialRate": 3.0964 }, { "Cur_ID": 145, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "USD", "Cur_Scale": 1, "Cur_Name": "Доллар США", "Cur_OfficialRate": 1.9855 }, { "Cur_ID": 292, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "EUR", "Cur_Scale": 1, "Cur_Name": "Евро", "Cur_OfficialRate": 2.3058 }, { "Cur_ID": 293, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "PLN", "Cur_Scale": 10, "Cur_Name": "Злотых", "Cur_OfficialRate": 5.4300 }, { "Cur_ID": 303, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "IRR", "Cur_Scale": 100000, "Cur_Name": "Иранских риалов", "Cur_OfficialRate": 5.6810 }, { "Cur_ID": 294, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "ISK", "Cur_Scale": 100, "Cur_Name": "Исландских крон", "Cur_OfficialRate": 1.8677 }, { "Cur_ID": 295, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "JPY", "Cur_Scale": 100, "Cur_Name": "Йен", "Cur_OfficialRate": 1.7405 }, { "Cur_ID": 23, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "CAD", "Cur_Scale": 1, "Cur_Name": "Канадский доллар", "Cur_OfficialRate": 1.5560 }, { "Cur_ID": 304, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "CNY", "Cur_Scale": 10, "Cur_Name": "Китайских юаней", "Cur_OfficialRate": 2.9907 }, { "Cur_ID": 72, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "KWD", "Cur_Scale": 1, "Cur_Name": "Кувейтский динар", "Cur_OfficialRate": 6.5593 }, { "Cur_ID": 296, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "MDL", "Cur_Scale": 10, "Cur_Name": "Молдавских леев", "Cur_OfficialRate": 1.1414 }, { "Cur_ID": 286, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "NZD", "Cur_Scale": 1, "Cur_Name": "Новозеландский доллар", "Cur_OfficialRate": 1.3714 }, { "Cur_ID": 297, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "NOK", "Cur_Scale": 10, "Cur_Name": "Норвежских крон", "Cur_OfficialRate": 2.4296 }, { "Cur_ID": 298, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "RUB", "Cur_Scale": 100, "Cur_Name": "Российских рублей", "Cur_OfficialRate": 3.3658 }, { "Cur_ID": 299, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "XDR", "Cur_Scale": 1, "Cur_Name": "СДР (Специальные права заимствования)", "Cur_OfficialRate": 2.7864 }, { "Cur_ID": 119, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "SGD", "Cur_Scale": 1, "Cur_Name": "Сингапурcкий доллар", "Cur_OfficialRate": 1.4546 }, { "Cur_ID": 300, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "KGS", "Cur_Scale": 100, "Cur_Name": "Сомов", "Cur_OfficialRate": 2.8893 }, { "Cur_ID": 301, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "KZT", "Cur_Scale": 1000, "Cur_Name": "Тенге", "Cur_OfficialRate": 5.9392 }, { "Cur_ID": 302, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "TRY", "Cur_Scale": 10, "Cur_Name": "Турецких лир", "Cur_OfficialRate": 5.1088 }, { "Cur_ID": 143, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "GBP", "Cur_Scale": 1, "Cur_Name": "Фунт стерлингов", "Cur_OfficialRate": 2.5963 }, { "Cur_ID": 305, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "CZK", "Cur_Scale": 100, "Cur_Name": "Чешских крон", "Cur_OfficialRate": 8.9742 }, { "Cur_ID": 306, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "SEK", "Cur_Scale": 10, "Cur_Name": "Шведских крон", "Cur_OfficialRate": 2.3544 }, { "Cur_ID": 130, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "CHF", "Cur_Scale": 1, "Cur_Name": "Швейцарский франк", "Cur_OfficialRate": 1.9841 }];
  

export default Convector ;