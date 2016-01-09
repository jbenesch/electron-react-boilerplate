// https://github.com/louischatriot/nedb
require('dotenv').load();
require('es6-promise').polyfill();
const graphql = require('graphql');
const mysql = require('mysql');
// const php = require('php-unserialize');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

const Blog = new graphql.GraphQLObjectType({
  name: 'Blog',
  description: `A Wordpress Blog`,
  fields: () => ({
    id: {
      type: graphql.GraphQLString,
      description: `Unique Blog ID`,
      resolve: (row) => row.blog_id
    },
    host: {
      type: graphql.GraphQLString,
      description: `Unique Hostname of Blog`,
      resolve: (row) => row.domain
    }
  })
});

const boomtown = new graphql.GraphQLObjectType({
  name: 'BoomTown',
  fields: () => ({
    blog: {
      type: Blog,
      description: `Retrieve the details of a blog`,
      resolve: () => {
        return { blog_id: 3, host: 'www.thecassinagroup.dev' };
      }
    },
    blogs: {
      type: new graphql.GraphQLList(Blog),
      description: `Retrieve all blogs!`,
      resolve: () => {
        return new Promise((resolve, reject) => {
          db.query('SELECT blog_id, domain FROM wp_blogs WHERE public=1 AND deleted=0;', (err, data) => {
            if (err) reject(err);
            resolve(data);
          });
        });
      }
    }
  })
});

module.exports = new graphql.GraphQLSchema({
  query: boomtown
});
