const graphql = require('graphql');

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
      resolve: (row) => row.host
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
    }
  })
});

module.exports = new graphql.GraphQLSchema({
  query: boomtown
});

/*
args: {
        id: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString),
          description: `Blog ID`
        },
        host: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString),
          description: `Blog Hostname`
        }
      },
      */
