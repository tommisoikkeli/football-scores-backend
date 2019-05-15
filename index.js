const app = require('express')();
const request = require('request');
const cors = require('cors');
const secrets = require('./secrets');

app.use(cors());
const port = process.env.port || 8080;

const FOOTBALL_API_BASE_URL = 'https://api.football-data.org/v2';
const options = {
  headers: { 'X-Auth-Token': secrets.API_KEY }
};

app.get('/competitions', (req, res) => {
  request(
    `${FOOTBALL_API_BASE_URL}/competitions?plan=TIER_ONE`,
    options,
    (error, response) => {
      if (error) {
        console.error(error);
      }
      res.send(response.body);
    }
  );
});

app.get('/competitions/:id', (req, res) => {
  request(
    `${FOOTBALL_API_BASE_URL}/competitions/${req.params.id}/teams`,
    options,
    (error, response) => {
      if (error) {
        res.status(400).send({ message: 'Invalid competition id' });
      }
      res.send(response.body);
    }
  );
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
