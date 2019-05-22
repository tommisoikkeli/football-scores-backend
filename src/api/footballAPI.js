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
}

module.exports = FootballAPI;
