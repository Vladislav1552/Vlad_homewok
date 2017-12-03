//import { combineReducers } from 'redux'
//import Currency from './reducers';

//export default combineReducers({
//Currency
//})

import { combineReducers } from 'redux'
import { ADD_TODO, ADD_Currency,Load_Value} from '../actions/givCur'


export default function currence(state = {}, action) {
    if (action.type === 'ADD_Currency') {
        return [
            ...state,
            action.payload

        ] 
    }
        return state;
  } 


  


  /*export function loadData(state = {load},action) {
   
    return load(data).then(Cur_Abbreviation => {
        return data = JSON.parse(Cur_Abbreviation)
    });
  }
*/


//export default  reduce