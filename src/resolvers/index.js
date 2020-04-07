const UserResolver = require('./UserResolvers');
const RiderResolver = require('./RiderResolvers');

const { GraphQLScalarType  } = require('graphql');

const DateTime = new GraphQLScalarType({
    name : 'DateTime',
    description:'My first scalar',
    serialize: (value) => new Date(value).toISOString(),
    parseValue : (value) => new Date(value),
    parseLiteral : (ast) => new Date(ast),
});

module.exports = {
    
    Query:{
        ...UserResolver.Query,
        ...RiderResolver.Query,
    },

    Mutation:{
        ...UserResolver.Mutation,    
    },

    DateTime,
};