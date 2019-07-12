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
    latestMatch: async (_, { id }, { dataSources }) => {
      return dataSources.footballAPI.getLatestMatchForTeam(id);
    },
    nextMatch: async (_, { id }, { dataSources }) => {
      return dataSources.footballAPI.getNextMatchForTeam(id);
    },
    fixtures: async (_, { id }, { dataSources }) => {
      return dataSources.footballAPI.getFixturesForCompetition(id);
    }
  }
};

module.exports = {
  resolvers
};
