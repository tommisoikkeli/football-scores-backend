const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Competitions {
    count: Int!
    competitions: [Competition]
  }

  type Competition {
    id: Int!
    name: String!
    code: String
    area: Area
  }

  type Area {
    id: Int!
    name: String
  }

  type Teams {
    count: Int!
    teams: [Team]
  }

  type Team {
    id: Int!
    area: Area
    crestUrl: String
    founded: Int
    name: String
    tla: String
    venue: String
    clubColors: String
    squad: [Player]
  }

  type Player {
    id: Int!
    name: String
    position: String
    dateOfBirth: String
    nationality: String
    role: String
    shirtNumber: Int
  }

  type Standings {
    competition: Competition
    season: Season
    standings: [CompetitionStandings]
  }

  type Season {
    id: Int!
    startDate: String
    endDate: String
    currentMatchday: Int
  }

  type CompetitionStandings {
    stage: String
    type: String
    group: String
    table: [Standing]
  }

  type Standing {
    position: Int
    team: Team
    playedGames: Int
    won: Int
    draw: Int
    lost: Int
    points: Int
    goalsFor: Int
    goalsAgainst: Int
    goalDifference: Int
  }

  type Scorers {
    count: Int
    competition: Competition
    season: Season
    scorers: [Scorer]
  }

  type Scorer {
    player: Player
    team: Team
    numberOfGoals: Int
  }

  type Matches {
    count: Int
    matches: [Match]
  }

  type Match {
    id: Int!
    competition: Competition
    season: Season
    utcDate: String
    status: String
    matchday: Int
    stage: String
    group: String
    homeTeam: MatchTeam
    awayTeam: MatchTeam
    score: Score
  }

  type Fixtures {
    count: Int
    competition: Competition
    matches: [Match]
  }

  type MatchTeam {
    id: Int
    name: String
  }

  type Score {
    winner: String
    fullTime: Result
  }

  type Result {
    homeTeam: Int
    awayTeam: Int
  }

  type Query {
    competitions: Competitions
    teams(id: Int): Teams
    standings(id: Int): Standings
    team(id: Int): Team
    scorers(id: Int): Scorers
    matches(id: Int): Matches
    fixtures(id: Int): Fixtures
    latestMatch(id: Int): Matches
    nextMatch(id: Int): Matches
  }
`;

module.exports = {
  typeDefs
};
