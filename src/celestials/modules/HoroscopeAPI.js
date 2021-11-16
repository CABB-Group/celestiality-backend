'use strict';

let axios = require('axios');
let request = require('request');

async function HoroscopeApi(sign, error, response, body) {
  // let request = require('request');
  try {
    let signInput = sign;
    // let data = [];
    let options = {
      url: `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${signInput}&day=today`,
      method: 'POST',
      params: { sign: `${signInput}`, day: 'today' },
      headers: {
        'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
        'x-rapidapi-key': '01586d7dbamshf432aca0cb8b0e2p1feb06jsn5faecbbee289'
      }
    };

    let horoscopeAPICall = await axios.request(options)
    // console.log(horoscopeAPICall.data);
    return horoscopeAPICall.data
  }

  catch (error) {
    console.log(error);
  };
}

module.exports = HoroscopeApi;
