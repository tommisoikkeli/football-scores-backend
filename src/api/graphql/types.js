const typeDefs = `
type Competitions {
  count: Int!
  competitions: [Competition]
}

type Competition {
  id: Int!
  name: String!
  code: String
}

type Teams {
  count: Int!
  teams: [Team]
}

type Team {
  id: Int
  crestUrl: String
  founded: Int
  name: String
  tla: String
  venue: String
}

type Query {
  competitions: Competitions
  teams(id: Int): Teams
}
`;

module.exports = {
  typeDefs
};
