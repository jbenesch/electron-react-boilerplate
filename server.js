/* eslint strict: 0, no-console: 0 */
'use strict';

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.development');
const graphqlHTTP = require('express-graphql');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const schema = require('./app/schema/schema.js');
const app = express();
const compiler = webpack(config);
const PORT = 3000;
const compilerOptions = {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
};

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));
app.use(devMiddleware(compiler, compilerOptions));
app.use(hotMiddleware(compiler));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'app', 'hot-dev-app.html'));
});

app.listen(PORT, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://localhost:${PORT}`);
});
