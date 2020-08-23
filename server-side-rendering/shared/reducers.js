import { combineReducers } from 'redux';
import home from '../client/app/home/state/reducer.js';
import detail from '../client/app/detail/state/reducer.js';

export default combineReducers({
  home,
  detail
});