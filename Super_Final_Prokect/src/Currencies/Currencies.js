import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import moment from 'moment';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Currencies.css';
import load from '../load/loadi';

import Table from '../Table/Table';
import Search from '../Search/Search';
import Convector from '../Convector/Convector.js';
import { connect } from 'react-redux'
import Menu from '../Menu/Menu';
import { composeWithDevTools } from 'redux-devtools-extension';
import { addTodo, addPIDR,givCur,loadi} from '../actions/givCur'




class Currencies extends Component {
  constructor(props) {
    super(props);
    this.Ivent = this.Ivent.bind(this),
      this.state = {
        activePlace: 0,
        Now: [],
        API:[],
        
      };

 this.loadData();

  }
  Ivent() {  
    const place = document.getElementById('a');
    ReactDOM.render(<div>
    </div>,
      place
    )
  }
  loadData() {
    load(this.state.Now).then(Cur_Abbreviation => {
      this.setState({
        Now: JSON.parse(Cur_Abbreviation)
      });
    });
  }

  render() {
    const Now = this.state.Now;
    const Past = this.state.Past;
    const activePlace = this.state.activePlace;
    return (
 
      <div className="App" >

        <div className="App__wrapper">
 
        <div className='tablee'>
     
    </div>
          <div className="App_Currencies">
            <div className="App__value2" >
              {Now.map((place, index) => (
                <button className='button'
                  key={index}
                  onClick={() => {
                    this.props.onClickButton({
                     API:this.state.Now,
                      Cur_Abbreviation: Now[activePlace].Cur_Abbreviation,  
                      Date:Now[activePlace].Date,
                      Cur_OfficialRate:Now[activePlace].Cur_OfficialRate,
                      Date2: Now[activePlace].Date,
                      Cur_OfficialRate3:Now[activePlace].Cur_OfficialRate,
                      Cur_OfficialRate2:Now[activePlace].Cur_OfficialRate + -CURRENCIESY[activePlace].Cur_OfficialRate,
                      })
                    this.Ivent()
                    this.setState(
                      {
                        activePlace: index,
                      });
                  }}
                >
                  {Math.round((Now[index].Cur_OfficialRate -+CURRENCIESY[index].Cur_OfficialRate) * 1000) / 1000}
                </button>
              ))}
            </div>
            <div className="App__name" >
              {Now.map((type, index) => (
                <span className='App__name_span1'
                  key={index}
                  onClick={() => {
     
                    this.setState(
                      {
                        activePlace: index,
                      
                      });
                  }}
                >
                  {type.Cur_Abbreviation + ':'}
                </span>
              ))}
            </div>
            <div className="App__value">
              {Now.map((value, index) => (
                <span className='App__value_span2'
                  key={index}
                >
                  {value.Cur_OfficialRate}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}




const CURRENCIESY = [{ "Cur_ID": 170, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "AUD", "Cur_Scale": 1, "Cur_Name": "Австралийский доллар", "Cur_OfficialRate": 1.5199 }, { "Cur_ID": 191, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "BGN", "Cur_Scale": 1, "Cur_Name": "Болгарский лев", "Cur_OfficialRate": 1.1796 }, { "Cur_ID": 290, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "UAH", "Cur_Scale": 100, "Cur_Name": "Гривен", "Cur_OfficialRate": 7.3451 }, { "Cur_ID": 291, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "DKK", "Cur_Scale": 10, "Cur_Name": "Датских крон", "Cur_OfficialRate": 3.1003 }, { "Cur_ID": 145, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "USD", "Cur_Scale": 1, "Cur_Name": "Доллар США", "Cur_OfficialRate": 1.9806 }, { "Cur_ID": 292, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "EUR", "Cur_Scale": 1, "Cur_Name": "Евро", "Cur_OfficialRate": 2.3068 }, { "Cur_ID": 293, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "PLN", "Cur_Scale": 10, "Cur_Name": "Злотых", "Cur_OfficialRate": 5.4401 }, { "Cur_ID": 303, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "IRR", "Cur_Scale": 100000, "Cur_Name": "Иранских риалов", "Cur_OfficialRate": 5.6670 }, { "Cur_ID": 294, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "ISK", "Cur_Scale": 100, "Cur_Name": "Исландских крон", "Cur_OfficialRate": 1.8651 }, { "Cur_ID": 295, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "JPY", "Cur_Scale": 100, "Cur_Name": "Йен", "Cur_OfficialRate": 1.7361 }, { "Cur_ID": 23, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "CAD", "Cur_Scale": 1, "Cur_Name": "Канадский доллар", "Cur_OfficialRate": 1.5440 }, { "Cur_ID": 304, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "CNY", "Cur_Scale": 10, "Cur_Name": "Китайских юаней", "Cur_OfficialRate": 2.9881 }, { "Cur_ID": 72, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "KWD", "Cur_Scale": 1, "Cur_Name": "Кувейтский динар", "Cur_OfficialRate": 6.5399 }, { "Cur_ID": 296, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "MDL", "Cur_Scale": 10, "Cur_Name": "Молдавских леев", "Cur_OfficialRate": 1.1350 }, { "Cur_ID": 286, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "NZD", "Cur_Scale": 1, "Cur_Name": "Новозеландский доллар", "Cur_OfficialRate": 1.3716 }, { "Cur_ID": 297, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "NOK", "Cur_Scale": 10, "Cur_Name": "Норвежских крон", "Cur_OfficialRate": 2.4327 }, { "Cur_ID": 298, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "RUB", "Cur_Scale": 100, "Cur_Name": "Российских рублей", "Cur_OfficialRate": 3.3909 }, { "Cur_ID": 299, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "XDR", "Cur_Scale": 1, "Cur_Name": "СДР (Специальные права заимствования)", "Cur_OfficialRate": 2.7812 }, { "Cur_ID": 119, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "SGD", "Cur_Scale": 1, "Cur_Name": "Сингапурcкий доллар", "Cur_OfficialRate": 1.4549 }, { "Cur_ID": 300, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "KGS", "Cur_Scale": 100, "Cur_Name": "Сомов", "Cur_OfficialRate": 2.8821 }, { "Cur_ID": 301, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "KZT", "Cur_Scale": 1000, "Cur_Name": "Тенге", "Cur_OfficialRate": 5.9245 }, { "Cur_ID": 302, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "TRY", "Cur_Scale": 10, "Cur_Name": "Турецких лир", "Cur_OfficialRate": 5.1802 }, { "Cur_ID": 143, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "GBP", "Cur_Scale": 1, "Cur_Name": "Фунт стерлингов", "Cur_OfficialRate": 2.5878 }, { "Cur_ID": 305, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "CZK", "Cur_Scale": 100, "Cur_Name": "Чешских крон", "Cur_OfficialRate": 8.9848 }, { "Cur_ID": 306, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "SEK", "Cur_Scale": 10, "Cur_Name": "Шведских крон", "Cur_OfficialRate": 2.3574 }, { "Cur_ID": 130, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "CHF", "Cur_Scale": 1, "Cur_Name": "Швейцарский франк", "Cur_OfficialRate": 1.9820 }];
export default connect(
state =>({
  good:state
}),
dispatch =>({onClickButton:(ButtonValue)=>{
  dispatch(givCur(ButtonValue))
}
}),

)
(Currencies);




