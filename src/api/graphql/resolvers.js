const resolvers = {
  Query: {
    competitions: async (_source, _args, { dataSources }) => {
      return dataSources.footballAPI.getAllCompetitions();
    },
    teams: async (_source, { id }, { dataSources }) => {
      return dataSources.footballAPI.getTeamsForCompetition(id);
    }
  }
};

module.exports = {
  resolvers
};
