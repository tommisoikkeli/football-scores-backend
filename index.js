const app = require('express')();
const cors = require('cors');
const { requestDataFromAPI } = require('./request');

app.use(cors());
const port = process.env.port || 8080;

const FOOTBALL_API_BASE_URL = 'https://api.football-data.org/v2';

app.get('/competitions', (req, res) => {
  requestDataFromAPI(`${FOOTBALL_API_BASE_URL}/competitions?plan=TIER_ONE`, data => {
    res.send(data);
  });
});

app.get('/competitions/:id', (req, res) => {
  requestDataFromAPI(`${FOOTBALL_API_BASE_URL}/competitions/${req.params.id}/teams`, data => {
    res.send(data);
  });
});

app.get('/competitions/:id/standings', (req, res) => {
  requestDataFromAPI(`${FOOTBALL_API_BASE_URL}/competitions/${req.params.id}/standings`, data => {
    res.send(data);
  });
});

app.get('/competitions/:id/scorers', (req, res) => {
  requestDataFromAPI(`${FOOTBALL_API_BASE_URL}/competitions/${req.params.id}/scorers`, data => {
    res.send(data);
  });
});

app.get('/teams/:id/', (req, res) => {
  requestDataFromAPI(`${FOOTBALL_API_BASE_URL}/teams/${req.params.id}`, data => {
    res.send(data);
  });
});

app.get('/teams/:id/matches', (req, res) => {
  requestDataFromAPI(`${FOOTBALL_API_BASE_URL}/teams/${req.params.id}/matches`, data => {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
