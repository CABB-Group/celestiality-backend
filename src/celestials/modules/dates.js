"use strict";


//let axios = require('axios');
// const randomDate = "01-06-1990";


const horoscopeApi = require('./HoroscopeAPI.js');
const onThisDayApi = require('./onThisDay.js');


function horoscopeName(dateEntry, year) {
  let AriesMin = new Date(`March 21 ${year}`).getTime();
  let AriesMax = new Date(`April 19 ${year}`).getTime();
  let TaurusMin = new Date(`April 20 ${year}`).getTime();
  let TaurusMax = new Date(`May 20 ${year}`).getTime();
  let GeminiMin = new Date(`May 21'${year}`).getTime();
  let GeminiMax = new Date(`Jun 21 ${year}`).getTime();
  let CancerMin = new Date(`June 22 ${year}`).getTime();
  let CancerMax = new Date(`July 22 ${year}`).getTime();
  let LeoMin = new Date(`July 23 ${year}`).getTime();
  let LeoMax = new Date(`August 22 ${year}`).getTime();
  let VirgoMin = new Date(`August 23 ${year}`).getTime();
  let VirgoMax = new Date(`September 22 ${year}`).getTime();
  let LibraMin = new Date(`September 23 ${year}`).getTime();
  let LibraMax = new Date(`October 22 ${year}`).getTime();
  let ScorpioMin = new Date(`October 23 ${year}`).getTime();
  let ScoripoMax = new Date(`November 22 ${year}`).getTime();
  let SagittariusMin = new Date(`November 23 ${year}`).getTime();
  let SagittariusMax = new Date(`December 21 ${year}`).getTime();
  let AquariusMin = new Date(`January 20 ${year}`).getTime();
  let AquariusMax = new Date(`February 18 ${year}`).getTime();
  let PiscesMin = new Date(`February 19 ${year}`).getTime();
  let PiscesMax = new Date(`March 20' ${year}`).getTime();
  let CapricornMin = new Date(`December 22 ${year - 1}`).getTime();
  let CapricornMax = new Date(`January 19 ${year}`).getTime();
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
    console.log('Cancer it is!');
    return 'Cancer';
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
    console.log('Sagitarius it is!');
    return 'Sagitarius';
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
  try {
    let { searchQuery } = req.query;
    console.log('this is the searchQuery: ', searchQuery);
    // console.log('this randomDate', randomDate);
    let today = new Date(searchQuery);
    let year = searchQuery.slice(0, 4);
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
    let onThisDay = await onThisDayApi(searchQuery);
    // console.log('dates onThisDay: ', onThisDay);
    // console.log('horoscope ', horoscope);
    // console.log(new UserInfo(sign, horoscope));
    const user = new UserInfo(sign, horoscope, onThisDay);
    let getDataArray = [user];
    console.log('this is user: ', getDataArray)
    res.status(200).send(getDataArray);
  } catch (error) {
    res.status(404).send('One or more APIs not found: ')
  }
}

class UserInfo {
  constructor(userSign, userinfo, events) {
    this.sign = userSign;
    this.horoscope = userinfo;
    this.events = [
      this.eventOne = events[0],
      this.eventTwo = events[1],
      this.eventThree = events[2]
    ]

  }
}

module.exports = convertDate;
