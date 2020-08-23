import React from 'react';
import configureStore from '../shared/configureStore';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from '../shared/Routes';

const _initialState = window.INITIAL_STATE;

hydrate(
    <Provider store={configureStore(_initialState)}>
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>,
    </Provider>,
    document.getElementById('app')
  );


