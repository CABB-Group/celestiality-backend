'use strict';
//const axios = require('axios');
const JournalModel = require('./../schema/celestialModel.js');

function deleteJournals(req, res) {
  console.log('deleteJournal');
  console.log(req.params);
  try {
    let id = req.params.id;
    let deleteJournal = JournalModel.findByIdAndDelete(id);
    res.status(200).send(deleteJournal);
  }
  catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = deleteJournals;
