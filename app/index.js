import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.css';

const store = configureStore({ counter: 10 });

setTimeout(() => {
  const mysql = require('remote').require('./app/api/mysql');
  mysql.allBlogs((err, data) => {
    console.log(typeof data);
  });
}, 10000);


render(
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
