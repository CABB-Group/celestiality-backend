'use strict';

function HoroscopeApi(error, response, body) {
  let request = require('request');

  let options = {
    url: 'https://aztro.sameerkumar.website/?sign=aries&day=today',
    method: 'POST'
  };

  request(options, () => {
    if (!error && response.statusCode === 200) {
      return console.log(body);
    }
  });
}
module.exports = HoroscopeApi;
