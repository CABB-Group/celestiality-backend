'use strict';
let axios = require('axios');

function HoroscopeApi(error, response, body) {
  let request = require('request');
  let options = {
    url: `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${convertDate}&day=today`,
    method: 'POST',
    params: { sign: 'aquarius', day: 'today' },
    headers: {
      'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
      'x-rapidapi-key': '01586d7dbamshf432aca0cb8b0e2p1feb06jsn5faecbbee289'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}

//   request(options, () => {
//   if (!error && response.statusCode === 200) {
//     return console.log(body);
//   }
// });

// }
module.exports = HoroscopeApi;

// var axios = require("axios").default;

// var options = {
//   method: 'POST',
//   url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
//   params: {sign: 'aquarius', day: 'today'},
//   headers: {
//     'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
//     'x-rapidapi-key': '01586d7dbamshf432aca0cb8b0e2p1feb06jsn5faecbbee289'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });