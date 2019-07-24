# football-scores-backend

GraphQL wrapper for [football-data.org API](https://www.football-data.org/).

## Running locally

Running this server locally requires the following steps:

1. Get an API key here: https://www.football-data.org/client/register.

2. Create a file called 'secrets.js' on project root with the following content:
`module.exports = {
  API_KEY: <API_KEY_HERE>
}`

3. Install dependencies with `npm install`.

4. Run server with `npm start`.

5. The graphql playground is live at localhost:8080/graphql.