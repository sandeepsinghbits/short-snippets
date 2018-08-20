import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import App from './components/App';
import allReducers from './reducers';
import {createStore,applyMiddleware} from 'redux';
import customThunk from './thunkMiddleware/customThunkImplementation.js';


// passing the customThunk middleware to applyMiddleware to handle the async dispatch calls.
const store = createStore(
    allReducers,applyMiddleware(customThunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);








