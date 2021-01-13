import {combineReducers} from 'redux';
import {authReducer, usersReducer} from './Reducer';

const reducerz = combineReducers({
  authReducer,
  usersReducer,
});
export default reducerz;
