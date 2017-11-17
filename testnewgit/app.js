import {Rourer,Router,hashHistory} from 'react-router';
import moment from 'moment';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import load from './load';
import Menu from './Menu';
import {Convector} from './Convector';
//import logo from './logo.svg';
const now = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(now);
  class Table extends Component {
    render() {
      return( 
      <div className='tablee'>
        <table>
        <tr><td><th>Date</th></td><td><th> {this.props.Cur_Abbreviation +'..Currently'} {this.props.Cur_Name}</th></td></tr>
        <tr><td> {this.props.Date}</td><td>{this.props.Cur_OfficialRate}</td></tr>
        <tr><td>{this.props.Date2}</td><td>{this.props.Cur_OfficialRate2}</td></tr>
        
        </table>
      </div>
      )
    }
  }

class App extends Component {
  constructor(props) {
    super(props);
    this.gdfgd = this.gdfgd.bind(this),
    this.state = {
      activePlace: 0
         };
  }
gdfgd(){
  const place =  document.getElementById('div'); 
  ReactDOM.render(<div>
    <App />

    </div>,
    place
  );
  
}
  render(){

    const activePlace = this.state.activePlace;
    
     return(  
     <div className="App">

       <div class="stage">
    <div class="sun"></div>
    <div class="grass"></div>
    <div class="square"></div>
    <div class="round"></div>
  </div>
  <Convector 
 />
  <Search className='search' />
       <Table key={activePlace}
      Cur_Abbreviation={CURRENCIES[activePlace].Cur_Abbreviation}
      Date={CURRENCIES[activePlace].Date}
      Cur_OfficialRate={CURRENCIES[activePlace].Cur_OfficialRate}
      Date2={CURRENCIESY[activePlace].Date}
      Cur_OfficialRate3={CURRENCIESY[activePlace].Cur_OfficialRate} 
      Cur_OfficialRate2={CURRENCIESY[activePlace].Cur_OfficialRate+-CURRENCIES[activePlace].Cur_OfficialRate} 
 /> 
 <div className="App__value2">
{CURRENCIESY .map((place, index) => (
<button className='button'
 
  key={index}
  onClick={() => {
          this.gdfgd()
        
              this.setState(
                { activePlace: index,
                 });
            }}
>{(CURRENCIESY[index].Cur_OfficialRate)-+(CURRENCIES[index].Cur_OfficialRate)}
</button> 
))}
</div>
       <div  className="App__wrapper">

    <div className="App__name" >
    {CURRENCIES.map((type, index) => (
      <span className='App__name_span1'
     
        key={index}
        onClick={() => {
          this.gdfgd()
        
              this.setState(
                { activePlace: index,
                 });
            }}
      >
          {type.Cur_Abbreviation+':'}
      </span>
    ))}
    </div>

    <div className="App__value">
      {CURRENCIES.map((value, index) => (
      <span className='App__value_span2'
        key={index}
      >
          {value.Cur_OfficialRate}
      </span>
      
    ))}
   
    </div>



</div>

   </div>
     )
  }
}




class Search extends Component {
  render() {
    const pageElementClass = this.props.className;
    return (
      <div>
      <form className={`ik-search ${pageElementClass}`}>
        <input className="ik-search__search-place" type="text" placeholder="Search input" />
        <input className="ik-search__search-button" type="button" value="Search" />
      </form>
      </div>
    );
  }
}

/*
class Bla extends Component {
  render  () {
    return (
      <h1>Displaying weather for city {this.props.zip}</h1>
    );
    }
  }

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class WeatherDisplay extends Component {
  render() {
    return <h1>Displaying weather for city {this.props.zip}</h1>;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }}
          >
            {place.name}
          </button>
        ))}
        <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
      </div>
    );
  }
}
*/



const CURRENCIES = [{ "Cur_ID": 170, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "AUD", "Cur_Scale": 1, "Cur_Name": "Австралийский доллар", "Cur_OfficialRate": 1.5191 }, { "Cur_ID": 191, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "BGN", "Cur_Scale": 1, "Cur_Name": "Болгарский лев", "Cur_OfficialRate": 1.1783 }, { "Cur_ID": 290, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "UAH", "Cur_Scale": 100, "Cur_Name": "Гривен", "Cur_OfficialRate": 7.3660 }, { "Cur_ID": 291, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "DKK", "Cur_Scale": 10, "Cur_Name": "Датских крон", "Cur_OfficialRate": 3.0964 }, { "Cur_ID": 145, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "USD", "Cur_Scale": 1, "Cur_Name": "Доллар США", "Cur_OfficialRate": 1.9855 }, { "Cur_ID": 292, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "EUR", "Cur_Scale": 1, "Cur_Name": "Евро", "Cur_OfficialRate": 2.3058 }, { "Cur_ID": 293, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "PLN", "Cur_Scale": 10, "Cur_Name": "Злотых", "Cur_OfficialRate": 5.4300 }, { "Cur_ID": 303, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "IRR", "Cur_Scale": 100000, "Cur_Name": "Иранских риалов", "Cur_OfficialRate": 5.6810 }, { "Cur_ID": 294, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "ISK", "Cur_Scale": 100, "Cur_Name": "Исландских крон", "Cur_OfficialRate": 1.8677 }, { "Cur_ID": 295, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "JPY", "Cur_Scale": 100, "Cur_Name": "Йен", "Cur_OfficialRate": 1.7405 }, { "Cur_ID": 23, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "CAD", "Cur_Scale": 1, "Cur_Name": "Канадский доллар", "Cur_OfficialRate": 1.5560 }, { "Cur_ID": 304, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "CNY", "Cur_Scale": 10, "Cur_Name": "Китайских юаней", "Cur_OfficialRate": 2.9907 }, { "Cur_ID": 72, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "KWD", "Cur_Scale": 1, "Cur_Name": "Кувейтский динар", "Cur_OfficialRate": 6.5593 }, { "Cur_ID": 296, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "MDL", "Cur_Scale": 10, "Cur_Name": "Молдавских леев", "Cur_OfficialRate": 1.1414 }, { "Cur_ID": 286, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "NZD", "Cur_Scale": 1, "Cur_Name": "Новозеландский доллар", "Cur_OfficialRate": 1.3714 }, { "Cur_ID": 297, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "NOK", "Cur_Scale": 10, "Cur_Name": "Норвежских крон", "Cur_OfficialRate": 2.4296 }, { "Cur_ID": 298, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "RUB", "Cur_Scale": 100, "Cur_Name": "Российских рублей", "Cur_OfficialRate": 3.3658 }, { "Cur_ID": 299, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "XDR", "Cur_Scale": 1, "Cur_Name": "СДР (Специальные права заимствования)", "Cur_OfficialRate": 2.7864 }, { "Cur_ID": 119, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "SGD", "Cur_Scale": 1, "Cur_Name": "Сингапурcкий доллар", "Cur_OfficialRate": 1.4546 }, { "Cur_ID": 300, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "KGS", "Cur_Scale": 100, "Cur_Name": "Сомов", "Cur_OfficialRate": 2.8893 }, { "Cur_ID": 301, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "KZT", "Cur_Scale": 1000, "Cur_Name": "Тенге", "Cur_OfficialRate": 5.9392 }, { "Cur_ID": 302, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "TRY", "Cur_Scale": 10, "Cur_Name": "Турецких лир", "Cur_OfficialRate": 5.1088 }, { "Cur_ID": 143, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "GBP", "Cur_Scale": 1, "Cur_Name": "Фунт стерлингов", "Cur_OfficialRate": 2.5963 }, { "Cur_ID": 305, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "CZK", "Cur_Scale": 100, "Cur_Name": "Чешских крон", "Cur_OfficialRate": 8.9742 }, { "Cur_ID": 306, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "SEK", "Cur_Scale": 10, "Cur_Name": "Шведских крон", "Cur_OfficialRate": 2.3544 }, { "Cur_ID": 130, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "CHF", "Cur_Scale": 1, "Cur_Name": "Швейцарский франк", "Cur_OfficialRate": 1.9841 }];
const CURRENCIESY  = [{ "Cur_ID": 170, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "AUD", "Cur_Scale": 1, "Cur_Name": "Австралийский доллар", "Cur_OfficialRate": 1.5199 }, { "Cur_ID": 191, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "BGN", "Cur_Scale": 1, "Cur_Name": "Болгарский лев", "Cur_OfficialRate": 1.1796 }, { "Cur_ID": 290, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "UAH", "Cur_Scale": 100, "Cur_Name": "Гривен", "Cur_OfficialRate": 7.3451 }, { "Cur_ID": 291, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "DKK", "Cur_Scale": 10, "Cur_Name": "Датских крон", "Cur_OfficialRate": 3.1003 }, { "Cur_ID": 145, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "USD", "Cur_Scale": 1, "Cur_Name": "Доллар США", "Cur_OfficialRate": 1.9806 }, { "Cur_ID": 292, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "EUR", "Cur_Scale": 1, "Cur_Name": "Евро", "Cur_OfficialRate": 2.3068 }, { "Cur_ID": 293, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "PLN", "Cur_Scale": 10, "Cur_Name": "Злотых", "Cur_OfficialRate": 5.4401 }, { "Cur_ID": 303, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "IRR", "Cur_Scale": 100000, "Cur_Name": "Иранских риалов", "Cur_OfficialRate": 5.6670 }, { "Cur_ID": 294, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "ISK", "Cur_Scale": 100, "Cur_Name": "Исландских крон", "Cur_OfficialRate": 1.8651 }, { "Cur_ID": 295, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "JPY", "Cur_Scale": 100, "Cur_Name": "Йен", "Cur_OfficialRate": 1.7361 }, { "Cur_ID": 23, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "CAD", "Cur_Scale": 1, "Cur_Name": "Канадский доллар", "Cur_OfficialRate": 1.5440 }, { "Cur_ID": 304, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "CNY", "Cur_Scale": 10, "Cur_Name": "Китайских юаней", "Cur_OfficialRate": 2.9881 }, { "Cur_ID": 72, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "KWD", "Cur_Scale": 1, "Cur_Name": "Кувейтский динар", "Cur_OfficialRate": 6.5399 }, { "Cur_ID": 296, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "MDL", "Cur_Scale": 10, "Cur_Name": "Молдавских леев", "Cur_OfficialRate": 1.1350 }, { "Cur_ID": 286, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "NZD", "Cur_Scale": 1, "Cur_Name": "Новозеландский доллар", "Cur_OfficialRate": 1.3716 }, { "Cur_ID": 297, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "NOK", "Cur_Scale": 10, "Cur_Name": "Норвежских крон", "Cur_OfficialRate": 2.4327 }, { "Cur_ID": 298, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "RUB", "Cur_Scale": 100, "Cur_Name": "Российских рублей", "Cur_OfficialRate": 3.3909 }, { "Cur_ID": 299, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "XDR", "Cur_Scale": 1, "Cur_Name": "СДР (Специальные права заимствования)", "Cur_OfficialRate": 2.7812 }, { "Cur_ID": 119, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "SGD", "Cur_Scale": 1, "Cur_Name": "Сингапурcкий доллар", "Cur_OfficialRate": 1.4549 }, { "Cur_ID": 300, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "KGS", "Cur_Scale": 100, "Cur_Name": "Сомов", "Cur_OfficialRate": 2.8821 }, { "Cur_ID": 301, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "KZT", "Cur_Scale": 1000, "Cur_Name": "Тенге", "Cur_OfficialRate": 5.9245 }, { "Cur_ID": 302, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "TRY", "Cur_Scale": 10, "Cur_Name": "Турецких лир", "Cur_OfficialRate": 5.1802 }, { "Cur_ID": 143, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "GBP", "Cur_Scale": 1, "Cur_Name": "Фунт стерлингов", "Cur_OfficialRate": 2.5878 }, { "Cur_ID": 305, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "CZK", "Cur_Scale": 100, "Cur_Name": "Чешских крон", "Cur_OfficialRate": 8.9848 }, { "Cur_ID": 306, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "SEK", "Cur_Scale": 10, "Cur_Name": "Шведских крон", "Cur_OfficialRate": 2.3574 }, { "Cur_ID": 130, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "CHF", "Cur_Scale": 1, "Cur_Name": "Швейцарский франк", "Cur_OfficialRate": 1.9820 }];


const place =  document.getElementById('div'); 
ReactDOM.render(<div>
  <App />
  <Rourer history={hashHistory}>
  <Route path='/' Component={Menu} />
   </ Rourer> 
  </div>,
  place
);



