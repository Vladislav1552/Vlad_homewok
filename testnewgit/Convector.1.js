  import React, { Component } from 'react';
  import ReactDOM from "react-dom";
  import './app.css';
  import Menu from './Menu';
  

    const scaleNames = {
      c: 'Celsius',
      f: 'Fahrenheit'
    };
    function toCelsius(fahrenheit) {
      return (fahrenheit - 32) * 5 / 9;
    }
    
    function toFahrenheit(celsius) {
      return (celsius * 9 / 5) + 92;
    }
    
    function tryConvert(temperature, convert) {
      const input = parseFloat(temperature);
      if (Number.isNaN(input)) {
        return '';
      }
      const output = convert(input);
      const rounded = Math.round(output * 1000) / 1000;
      return rounded.toString();
    }
    
    function BoilingVerdict(props) {
      if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
      }
      return <p>The water would not boil.</p>;
    }
    class TemperatureInput extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
         value: ''
            };
        this.input = this.input.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
  
      }
      input(event){
     this.setState({value:event.target.value})
    }
    
      render() {
        const test = this.state.value
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
          <fieldset>
      <select  className="Convector__form-control" onChange={this.input}>
          {CURRENCIES.map((type, index) => (
            <option className="Convector__form-control" onChange={this.selectConversion}
          key={index}
        >
        {type.Cur_OfficialRate}
          
            </option>
      ))}
      </select>
     
            <legend>Enter temperature in {test}:</legend>
            <input value={temperature}
                   onChange={this.handleChange} />
          </fieldset>
        );
      }
    }
    
    class Calculator extends React.Component {
      constructor(props) {
        super(props);
        
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
      }
    
      handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
      }
    
      handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
      }
    
      render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
        return (
          <div>
            <TemperatureInput
              scale="c"
              temperature={celsius}
              onTemperatureChange={this.handleCelsiusChange} />
            <TemperatureInput
              scale="f"
              temperature={fahrenheit}
              onTemperatureChange={this.handleFahrenheitChange} />
            <BoilingVerdict
              celsius={parseFloat(celsius)} />
          </div>
        );
      }
    }
    
    const CURRENCIES = [{ "Cur_ID": 170, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "AUD", "Cur_Scale": 1, "Cur_Name": "Австралийский доллар", "Cur_OfficialRate": 1.5191 }, { "Cur_ID": 191, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "BGN", "Cur_Scale": 1, "Cur_Name": "Болгарский лев", "Cur_OfficialRate": 1.1783 }, { "Cur_ID": 290, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "UAH", "Cur_Scale": 100, "Cur_Name": "Гривен", "Cur_OfficialRate": 7.3660 }, { "Cur_ID": 291, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "DKK", "Cur_Scale": 10, "Cur_Name": "Датских крон", "Cur_OfficialRate": 3.0964 }, { "Cur_ID": 145, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "USD", "Cur_Scale": 1, "Cur_Name": "Доллар США", "Cur_OfficialRate": 1.9855 }, { "Cur_ID": 292, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "EUR", "Cur_Scale": 1, "Cur_Name": "Евро", "Cur_OfficialRate": 2.3058 }, { "Cur_ID": 293, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "PLN", "Cur_Scale": 10, "Cur_Name": "Злотых", "Cur_OfficialRate": 5.4300 }, { "Cur_ID": 303, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "IRR", "Cur_Scale": 100000, "Cur_Name": "Иранских риалов", "Cur_OfficialRate": 5.6810 }, { "Cur_ID": 294, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "ISK", "Cur_Scale": 100, "Cur_Name": "Исландских крон", "Cur_OfficialRate": 1.8677 }, { "Cur_ID": 295, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "JPY", "Cur_Scale": 100, "Cur_Name": "Йен", "Cur_OfficialRate": 1.7405 }, { "Cur_ID": 23, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "CAD", "Cur_Scale": 1, "Cur_Name": "Канадский доллар", "Cur_OfficialRate": 1.5560 }, { "Cur_ID": 304, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "CNY", "Cur_Scale": 10, "Cur_Name": "Китайских юаней", "Cur_OfficialRate": 2.9907 }, { "Cur_ID": 72, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "KWD", "Cur_Scale": 1, "Cur_Name": "Кувейтский динар", "Cur_OfficialRate": 6.5593 }, { "Cur_ID": 296, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "MDL", "Cur_Scale": 10, "Cur_Name": "Молдавских леев", "Cur_OfficialRate": 1.1414 }, { "Cur_ID": 286, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "NZD", "Cur_Scale": 1, "Cur_Name": "Новозеландский доллар", "Cur_OfficialRate": 1.3714 }, { "Cur_ID": 297, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "NOK", "Cur_Scale": 10, "Cur_Name": "Норвежских крон", "Cur_OfficialRate": 2.4296 }, { "Cur_ID": 298, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "RUB", "Cur_Scale": 100, "Cur_Name": "Российских рублей", "Cur_OfficialRate": 3.3658 }, { "Cur_ID": 299, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "XDR", "Cur_Scale": 1, "Cur_Name": "СДР (Специальные права заимствования)", "Cur_OfficialRate": 2.7864 }, { "Cur_ID": 119, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "SGD", "Cur_Scale": 1, "Cur_Name": "Сингапурcкий доллар", "Cur_OfficialRate": 1.4546 }, { "Cur_ID": 300, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "KGS", "Cur_Scale": 100, "Cur_Name": "Сомов", "Cur_OfficialRate": 2.8893 }, { "Cur_ID": 301, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "KZT", "Cur_Scale": 1000, "Cur_Name": "Тенге", "Cur_OfficialRate": 5.9392 }, { "Cur_ID": 302, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "TRY", "Cur_Scale": 10, "Cur_Name": "Турецких лир", "Cur_OfficialRate": 5.1088 }, { "Cur_ID": 143, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "GBP", "Cur_Scale": 1, "Cur_Name": "Фунт стерлингов", "Cur_OfficialRate": 2.5963 }, { "Cur_ID": 305, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "CZK", "Cur_Scale": 100, "Cur_Name": "Чешских крон", "Cur_OfficialRate": 8.9742 }, { "Cur_ID": 306, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "SEK", "Cur_Scale": 10, "Cur_Name": "Шведских крон", "Cur_OfficialRate": 2.3544 }, { "Cur_ID": 130, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "CHF", "Cur_Scale": 1, "Cur_Name": "Швейцарский франк", "Cur_OfficialRate": 1.9841 }];
    const CURRENCIESY  = [{ "Cur_ID": 170, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "AUD", "Cur_Scale": 1, "Cur_Name": "Австралийский доллар", "Cur_OfficialRate": 1.5199 }, { "Cur_ID": 191, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "BGN", "Cur_Scale": 1, "Cur_Name": "Болгарский лев", "Cur_OfficialRate": 1.1796 }, { "Cur_ID": 290, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "UAH", "Cur_Scale": 100, "Cur_Name": "Гривен", "Cur_OfficialRate": 7.3451 }, { "Cur_ID": 291, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "DKK", "Cur_Scale": 10, "Cur_Name": "Датских крон", "Cur_OfficialRate": 3.1003 }, { "Cur_ID": 145, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "USD", "Cur_Scale": 1, "Cur_Name": "Доллар США", "Cur_OfficialRate": 1.9806 }, { "Cur_ID": 292, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "EUR", "Cur_Scale": 1, "Cur_Name": "Евро", "Cur_OfficialRate": 2.3068 }, { "Cur_ID": 293, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "PLN", "Cur_Scale": 10, "Cur_Name": "Злотых", "Cur_OfficialRate": 5.4401 }, { "Cur_ID": 303, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "IRR", "Cur_Scale": 100000, "Cur_Name": "Иранских риалов", "Cur_OfficialRate": 5.6670 }, { "Cur_ID": 294, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "ISK", "Cur_Scale": 100, "Cur_Name": "Исландских крон", "Cur_OfficialRate": 1.8651 }, { "Cur_ID": 295, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "JPY", "Cur_Scale": 100, "Cur_Name": "Йен", "Cur_OfficialRate": 1.7361 }, { "Cur_ID": 23, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "CAD", "Cur_Scale": 1, "Cur_Name": "Канадский доллар", "Cur_OfficialRate": 1.5440 }, { "Cur_ID": 304, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "CNY", "Cur_Scale": 10, "Cur_Name": "Китайских юаней", "Cur_OfficialRate": 2.9881 }, { "Cur_ID": 72, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "KWD", "Cur_Scale": 1, "Cur_Name": "Кувейтский динар", "Cur_OfficialRate": 6.5399 }, { "Cur_ID": 296, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "MDL", "Cur_Scale": 10, "Cur_Name": "Молдавских леев", "Cur_OfficialRate": 1.1350 }, { "Cur_ID": 286, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "NZD", "Cur_Scale": 1, "Cur_Name": "Новозеландский доллар", "Cur_OfficialRate": 1.3716 }, { "Cur_ID": 297, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "NOK", "Cur_Scale": 10, "Cur_Name": "Норвежских крон", "Cur_OfficialRate": 2.4327 }, { "Cur_ID": 298, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "RUB", "Cur_Scale": 100, "Cur_Name": "Российских рублей", "Cur_OfficialRate": 3.3909 }, { "Cur_ID": 299, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "XDR", "Cur_Scale": 1, "Cur_Name": "СДР (Специальные права заимствования)", "Cur_OfficialRate": 2.7812 }, { "Cur_ID": 119, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "SGD", "Cur_Scale": 1, "Cur_Name": "Сингапурcкий доллар", "Cur_OfficialRate": 1.4549 }, { "Cur_ID": 300, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "KGS", "Cur_Scale": 100, "Cur_Name": "Сомов", "Cur_OfficialRate": 2.8821 }, { "Cur_ID": 301, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "KZT", "Cur_Scale": 1000, "Cur_Name": "Тенге", "Cur_OfficialRate": 5.9245 }, { "Cur_ID": 302, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "TRY", "Cur_Scale": 10, "Cur_Name": "Турецких лир", "Cur_OfficialRate": 5.1802 }, { "Cur_ID": 143, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "GBP", "Cur_Scale": 1, "Cur_Name": "Фунт стерлингов", "Cur_OfficialRate": 2.5878 }, { "Cur_ID": 305, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "CZK", "Cur_Scale": 100, "Cur_Name": "Чешских крон", "Cur_OfficialRate": 8.9848 }, { "Cur_ID": 306, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "SEK", "Cur_Scale": 10, "Cur_Name": "Шведских крон", "Cur_OfficialRate": 2.3574 }, { "Cur_ID": 130, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "CHF", "Cur_Scale": 1, "Cur_Name": "Швейцарский франк", "Cur_OfficialRate": 1.9820 }];
export default Calculator;
/*
    class Convector extends Component {
      constructor(props) {
        super(props);
        this.state = {
         value: ''
             };
             this.input = this.input.bind(this);
      }
   toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
      }
      
   toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
      }
     v
  
      render() {
        return( 
        <div className='Convector'>
          <h1>Good Convectorкк  </h1>
          <select  className="Convector__form-control" onChange={this.input}>
          {CURRENCIES.map((type, index) => (
            <option className="Convector__form-control" onChange={this.input}
          key={index}
        >
           {type.Cur_Abbreviation }
           {type.Cur_OfficialRate}
          
            </option>
      ))}
      </select>
      <select  className="Convector__form-control" onChange={this.input}>
          {CURRENCIES.map((type, index) => (
            <option className="Convector__form-control" onChange={this.selectConversion}
          key={index}
        >
        {type.Cur_OfficialRate}
          
            </option>
      ))}
      </select>
      <input type ='text'  onChange={this.input}   className="Convector__form-control"/>
      <input type ='text'className="Convector__form-control" value={this.state.value}  />
        </div>
        )
      }
    }
    */