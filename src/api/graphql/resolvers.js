const resolvers = {
  Query: {
    competitions: async (_, _args, { dataSources }) => {
      return dataSources.footballAPI.getAllCompetitions();
    },
    teams: async (_, { id }, { dataSources }) => {
      return dataSources.footballAPI.getTeamsForCompetition(id);
    },
    standings: async (_, { id }, { dataSources }) => {
      return dataSources.footballAPI.getStandingsForCompetition(id);
    },
    team: async (_, { id }, { dataSources }) => {
      return dataSources.footballAPI.getTeam(id);
    },
    scorers: async (_, { id }, { dataSources }) => {
      return dataSources.footballAPI.getScorers(id);
    },
    matches: async (_, { id }, { dataSources }) => {
      return dataSources.footballAPI.getMatchesForTeam(id);
    },
    fixtures: async(_, { id, matchday }, { dataSources }) => {
      return dataSources.footballAPI.getFixturesForCompetition(id, matchday);
    }
  }
};

module.exports = {
  resolvers
};
