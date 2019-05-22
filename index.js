const {ApolloServer} = require('apollo-server');
const { typeDefs } = require('./src/api/graphql/types');
const { resolvers } = require('./src/api/graphql/resolvers');
const FootballAPI = require('./src/api/footballAPI');
const { API_KEY } = require('./secrets');

const PORT = process.env.PORT || 8080;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      footballAPI: new FootballAPI()
    };
  },
  context: () => {
    return {
      token: API_KEY
    };
  }
});

server.listen(PORT).then(({ url }) => {
  console.log(`Server listening at ${url}`);
});
