import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Query:{
    greeting:String
  }
`;

const resolvers = {
  Query:{
    greeting:()=> `Hello world!`
  }
}

const server = ApolloServer({typeDefs,resolvers});

startStandaloneServer(server,{listen:{port:9000}}).then(info=>{
  console.log(`server is running on port ${info?.url}`)
}).catch(error=> console.log(error));
