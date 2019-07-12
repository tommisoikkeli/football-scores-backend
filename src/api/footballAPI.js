const { RESTDataSource } = require('apollo-datasource-rest');

class FootballAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.football-data.org/v2/';
  }

  willSendRequest(request) {
    request.headers.set('X-Auth-Token', this.context.token);
  }

  async getAllCompetitions() {
    try {
      return this.get('competitions?plan=TIER_ONE');
    } catch (error) {
      console.error(error);
    }
  }

  async getTeamsForCompetition(id) {
    try {
      return this.get(`competitions/${id}/teams`);
    } catch (error) {
      console.error(error);
    }
  }

  async getStandingsForCompetition(id) {
    try {
      return this.get(`competitions/${id}/standings?standingType=TOTAL`);
    } catch (error) {
      console.error(error);
    }
  }

  async getFixturesForCompetition(id) {
    try {
      return this.get(`competitions/${id}/matches?matchday`);
    } catch (error) {
      console.error(error);
    }
  }

  async getTeam(id) {
    try {
      return this.get(`teams/${id}`);
    } catch (error) {
      console.error(error);
    }
  }

  async getMatchesForTeam(id) {
    try {
      return this.get(`teams/${id}/matches`);
    } catch (error) {
      console.error(error);
    }
  }

  async getLatestMatchForTeam(id) {
    try {
      return this.get(`teams/${id}/matches?status=FINISHED&limit=1`);
    } catch (error) {
      console.error(error);
    }
  }

  async getNextMatchForTeam(id) {
    try {
      return this.get(`teams/${id}/matches?status=SCHEDULED&limit=1`);
    } catch (error) {
      console.error(error);
    }
  }

  async getScorers(id) {
    try {
      return this.get(`competitions/${id}/scorers`);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = FootballAPI;
