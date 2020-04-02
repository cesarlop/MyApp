/* FALATA LEVANTAR EL SERVER */

const { GraphQLServer } = require('graphql-yoga');


const typeDefs = `
    type Query {
        hello(name: String!) : String!
    }
`;

const resolvers = {
    Query:{
        hello:(root, params, context, info) => `Hola ${params.name} 🤣🤣 `
    }
};

/**
 * root
 * params
 * context
 * info
 */

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});

server.start(() => console.log('servisor arriba'));

