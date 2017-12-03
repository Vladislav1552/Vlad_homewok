
//import load from '../load/load';
import { combineReducers } from 'redux'




export default function Load_Change(state = {}, action) {
  
  if (action.type === 'Load_Value') {
    return [
        ...state,
        action.payload
    ] 
  }

    } 

/*
export default function load(state ={}, action) {
    load(this.state.data).then(Cur_Abbreviation=> {
      this.setState({
          data:JSON.parse(Cur_Abbreviation)     
           });       
        });
}
export default function loadData(state ={}, action) {
    load().then(Cur_Abbreviation=> {
      const adsa = JSON.parse(Cur_Abbreviation) 
      console.log(adsa)
        });
}
*/
