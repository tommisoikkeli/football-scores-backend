const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./src/api/graphql/types');
const { resolvers } = require('./src/api/graphql/resolvers');
const FootballAPI = require('./src/api/footballAPI');
const { API_KEY } = process.env.TOKEN || require('./secrets');

console.log('API KEY', process.env);

const PORT = process.env.PORT || 8080;
const app = express();

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
  },
  introspection: true,
  playground: true
});

server.applyMiddleware({ app });
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
