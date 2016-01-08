import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';

import Relay from 'react-relay';
const BlogQuery = {
  blog: () => Relay.QL`query { blog }`
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} queries={BlogQuery} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
