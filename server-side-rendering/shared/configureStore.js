import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers.js';
import reduxThunk from 'redux-thunk';
 

export default (initialState = {}) => {
   return createStore(reducers, initialState, applyMiddleware(reduxThunk));
}