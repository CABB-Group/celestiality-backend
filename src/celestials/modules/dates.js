'use strict';

const randomDate = '01-06-1985';

let AriesMin = 'March 21';
let AriesMax = 'April 19';
// Taurus Dates: April 20-May 20
// Gemini Dates: May 21-June 20
// Cancer Dates: June 21-July 22
// Leo Dates: July 23-August 22
// Virgo Dates: August 23-September 22
// Libra Dates: September 23-October 22
// Scorpio Dates: October 23-November 21
// Sagittarius Dates: November 22-December 21
let CapricornMin = 'December 21';
let CapricornMax = 'January 20';
// Aquarius Dates: January 21-February 18
// Pisces Dates: February 19-March 20

function horiscopeName(dateEntry) {
  let AriesMin = new Date('March 21');
  let AriesMax = new Date('April 19');
  let CapricornMin = (new Date('December 21,1984').getTime());
  console.log('CapricornMin: ', CapricornMin);
  let CapricornMax = (new Date('January 20,1985').getTime());
  console.log('CapricornMax: ', CapricornMax);
  console.log('horiscopeName:', dateEntry);
  if (dateEntry <= CapricornMax && dateEntry >= CapricornMin) {
    return console.log('Capricorn it is!');
  } console.log('NOT Capricorn');

}

function convertDate() {

  let today = new Date(randomDate);
  let enteredDate = today.getTime();
  //   let convertedDate = today.getDate();
  //   console.log(convertedDate);
  //   console.log(randomDate.toString());
  //   console.log('test',today.getMilliseconds());
  console.log('convertDate: ', today.getTime());
  //   console.log(today.);
  horiscopeName(enteredDate);

}

module.exports = convertDate;
