// include the server here:
const { ApolloServer } = require("apollo-server");


// Data Goes here:
const jokes = [
    {
      id: "0",
      type: "knock_knock?",
    },
    {
        id: "1",
        type: "walks_into_a_bar?",
      },
  ];

 // Schema: Joke is defined as being in an array as it is an array type
 const typeDefs = `
  type Joke {
    id: ID!
    type: String!
  }
  type Query {
 
    getJokes: [Joke!]
  }
`;


const resolvers = {
    Query: {
      getJokes: (root, args, context) => {
        return jokes;
      },
    }
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  
  server.listen({ port: 3000 }).then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });