import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  session: sessionReducer
});
console.log("combined reducers");

export default rootReducer;
