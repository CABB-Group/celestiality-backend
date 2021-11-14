'use strict';

// const axios = require('axios');
const JournalModel = require('./../schema/celestialModel.js');

function getJournal(req, res) {
  console.log('getJournal');
  try {
    JournalModel.find((err, entry) => {
      if (err) return res.status(500).send('No journals FOR YOU!');
      res.status(200).send(entry);
    }).clone();
    // Clone to allow re query the same request. Duplicate Query Execution
  }
  catch (e) {
    console.log('getJournal Error: ', e.message);
    res.send(e.message);
  }
}
module.exports = getJournal;
