import {combineReducers} from 'redux';
import users from './users/reducer';
import address from './address/reducer';

export default combineReducers({
  users,
  address,
});
