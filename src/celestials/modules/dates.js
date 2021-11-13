"use strict";


//let axios = require('axios');
const randomDate = "01-06-1990";


const horoscopeApi = require('./apis.js');

function horoscopeName(dateEntry, year) {
  let AriesMin = new Date(`March 21 ${year}`).getTime();
  let AriesMax = new Date(`April 20 ${year}`).getTime();
  let TaurusMin = new Date(`April 21 ${year}`).getTime();
  let TaurusMax = new Date(`May 21 ${year}`).getTime();
  let GeminiMin = new Date(`May 22'${year}`).getTime();
  let GeminiMax = new Date(`Jun 21 ${year}`).getTime();
  let CancerMin = new Date(`June 22 ${year}`).getTime();
  let CancerMax = new Date(`July 23 ${year}`).getTime();
  let LeoMin = new Date(`July 24 ${year}`).getTime();
  let LeoMax = new Date(`August 23 ${year}`).getTime();
  let VirgoMin = new Date(`August 24 ${year}`).getTime();
  let VirgoMax = new Date(`September 23 ${year}`).getTime();
  let LibraMin = new Date(`September 24 ${year}`).getTime();
  let LibraMax = new Date(`October 23 ${year}`).getTime();
  let ScorpioMin = new Date(`October 24 ${year}`).getTime();
  let ScoripoMax = new Date(`November 22 ${year}`).getTime();
  let SagittariusMin = new Date(`November 23 ${year}`).getTime();
  let SagittariusMax = new Date(`December 22 ${year}`).getTime();
  let AquariusMin = new Date(`January 21 ${year}`).getTime();
  let AquariusMax = new Date(`February 19 ${year}`).getTime();
  let PiscesMin = new Date(`February 20 ${year}`).getTime();
  let PiscesMax = new Date(`March 21' ${year}`).getTime();
  let CapricornMin = new Date(`December 23 ${year - 1}`).getTime();
  let CapricornMax = new Date(`January 20 ${year}`).getTime();
  // console.log('horiscopeName:', dateEntry);
  if (dateEntry <= AriesMax && dateEntry >= AriesMin) {
    console.log('Aries it is!');
    return 'Aries';
  } else if (dateEntry <= TaurusMax && dateEntry >= TaurusMin) {
    console.log('Taurus it is!');
    return 'Taurus';
  } else if ((dateEntry <= GeminiMax && dateEntry >= GeminiMin)) {
    console.log('Gemini it is!');
    return 'Gemini';
  } else if (dateEntry <= CancerMax && dateEntry >= CancerMin) {
    console.log('Taurus it is!');
    return 'Taurus';
  } else if (dateEntry <= LeoMax && dateEntry >= LeoMin) {
    console.log('Leo it is!');
    return 'Leo';
  } else if (dateEntry <= VirgoMax && dateEntry >= VirgoMin) {
    console.log('Virgo it is!');
    return 'Virgo';
  } else if (dateEntry <= LibraMax && dateEntry >= LibraMin) {
    console.log('Libra it is!');
    return 'Libra';
  } else if (dateEntry <= ScoripoMax && dateEntry >= ScorpioMin) {
    console.log('Scorpio it is!');
    return 'Scorpio';
  } else if (dateEntry <= SagittariusMax && dateEntry >= SagittariusMin) {
    console.log('Saggitarius it is!');
    return 'Saggitarius';
  } else if (dateEntry <= AquariusMax && dateEntry >= AquariusMin) {
    console.log('Aquarius it is!');
    return 'Aquarius';
  } else if (dateEntry <= PiscesMax && dateEntry >= PiscesMin) {
    console.log('Pisces it is!');
    return 'Pisces';
  } else if (dateEntry <= CapricornMax && dateEntry >= CapricornMin) {
    console.log('Capricorn it is!');
    return ('Capricorn');
  }

}

async function convertDate(req, res) {

  let today = new Date(randomDate);
  let year = randomDate.slice(6, 10);
  let enteredDate = new Date(today).getTime();
  // let convertedDate = today.getTime();
  // console.log('this is year', year);
  // console.log('today', today);
  // console.log('convertedDate: ', convertedDate);
  // console.log(randomDate.toString());
  // console.log('enteredDate', enteredDate);
  // console.log('test',today.getMilliseconds());
  // console.log('convertDate: ', today.getTime());
  let sign = horoscopeName(enteredDate, year);
  // console.log('this is sign ', sign);
  let horoscope = await horoscopeApi(sign);
  // console.log('horoscope ', horoscope);
  console.log(new UserInfo(sign, horoscope));
  const user = new UserInfo(horoscope);
  res.status(200).send(user);
}

class UserInfo {
  constructor(userSign, userinfo) {
    this.sign = userSign;
    this.horoscope = userinfo;

  }
}

module.exports = convertDate;
