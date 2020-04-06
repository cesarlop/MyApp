const UserResolver = require('./UserResolvers');
const { GraphQLScalarType  } = require('graphql');

const DateTime = new GraphQLScalarType({
    name : 'DateTime',
    description:'My first scalar',
    serialize: (value) => new Date(value).toISOString(),
    parseValue : (value) => new Date(value),
    parseLiteral : (ast) => new Date(ast),
});

module.exports = {
    DateTime,
    Query:{
        time: () => new Date(),
        ...UserResolver.Query,
    },

    Mutation:{
        ...UserResolver.Mutation,    
    },
};