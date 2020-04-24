require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import'); /* importa de forma recursiva los datos de graphql */
const { makeExecutableSchema } = require('graphql-tools'); 

const AuthDirective = require('./src/resolvers/Directives/AuthResolver');

const resolvers = require('./src/resolvers');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const mongo = mongoose.connection;

mongo.on('error', error => console.log(error))
    .once('open', () => console.log('Conected to DataBase 😆'));

const typeDefs = importSchema(__dirname + '/schema.graphql');

const schema =  makeExecutableSchema({
    typeDefs,
    resolvers,
    SchemaDirectives:{
        AuthDirective,
    }
});

const server = new GraphQLServer({
    schema,
    context
});

server.start(() => console.log('servisor arriba'));

