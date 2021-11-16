'use strict';

const axios = require('axios');


async function onThisDayApi(searchQuery) {
    // let request = require('request');
    //   let { searchQuery } = req.query;
    try {
        // console.log('onThisDatApi API: req',searchQuery);

        let today = new Date(searchQuery);
        let day = (today.getDate()) + 1;
        // console.log('this is day: ',day)
        let month = (today.getMonth()) + 1;
        // console.log('this is month: ',month)
        let onThisdayURL = `https://byabbe.se/on-this-day/${month}/${day}/events.json`
        // console.log('onThisDayURL: ', onThisdayURL);
        let onThisDayInfo = await axios.get(onThisdayURL);
        let sentInfo = onThisDayInfo.data.events
        // console.log('onThisDay sentInfo: ', sentInfo);
        return sentInfo;
        // res.status(200).send(sentInfo);

    }

    catch (error) {
        console.log('onThisDay failed: ', error.message);
        // res.status(404).send(error.message);
    };
}

module.exports = onThisDayApi;
