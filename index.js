/* FALATA LEVANTAR EL SERVER */

const { GraphQLServer } = require('graphql-yoga');


const typeDefs = `
    type Query {
        hello(name: String!):String!
        getUsers:[User]!
        getUser(id: Int!):User!
    }

    type Mutation{
        createUser(name:String!,age:Int!): User!
        deleteUser(id: Int):String!
        updateUser(id: Int, name:String!,age:Int!):User!
    }
    
    type User{
        id:Int!
        name:String!
        age:Int!
    }
`;

const users = [];

const resolvers = {
    Query:{
        hello:(root, params, context, info) => `Hola ${params.name}`,
        getUsers:(root,params,context,info) => users,
        getUser:(root,{id},context,info)    => users.find(u => u.id == id),
        
    },
    Mutation:{
        createUser:(root, {name, age}, context, info) => {
            const user = {
                id: users.length + 7522946,
                name,
                age,
            }
            users.push(user);
            return user;
        },
        deleteUser:(root,{id},context,info) => {
            users.pop(u => u.id == id);
            return "BORRADO";
        },
        updateUser:(root, {id,name,age},context,info) => {
            let user = users.find(u => u.id == id);
            user = {
                id,
                name,
                age,
            }
            users.push(user);
            return user;
        }    
    },

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

