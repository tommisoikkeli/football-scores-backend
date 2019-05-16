const request = require('request');
const secrets = require('./secrets');

module.exports = {
  requestDataFromAPI: function(url, callback) {
    const options = {
      headers: { 'X-Auth-Token': secrets.API_KEY }
    };
    request(url, options, (error, response) => {
      if (error) {
        console.error(error);
      }
      callback(response.body);
    });
  }
}
