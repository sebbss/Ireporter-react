import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import redFlagReducer from './redFlagReducer';

export default combineReducers({
  loginReducer,
  redFlagReducer,
});
