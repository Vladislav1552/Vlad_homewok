
import { ADD_TODO, ADD_Currency,Load_Value} from '../actions/givCur'

import { combineReducers } from 'redux'
//import currence from './add_Currency'
//import Load_Change from './load'


 function currence(state = {}, action) {
    if (action.type === 'ADD_TODO') {
        return [
            ...state,
            action.payload
        ] 
    }

    if (action.type === 'ADD_Currency') {
        return [
            ...state,
            action.payload

        ] 
        
    }

  } 

function Load_Change(state = {initialState}, action) {
    
    if (action.type === 'Load_Value') {
      return [
          ...state,
          action.payload
      ] 
    }
    return state;
      } 
  

const reduce = combineReducers({
    currence,
    Load_Change
})
export default  reduce