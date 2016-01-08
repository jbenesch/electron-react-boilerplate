import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';
import { RelayRouter } from 'react-router-relay';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.css';

const store = configureStore({ counter: 10 });

render(
  <Provider store={store}>
    <RelayRouter history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
