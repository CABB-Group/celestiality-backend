'use strict';
//const axios = require('axios');
const JournalModel = require('./../schema/celestialModel.js');
require('dotenv').config;

async function deleteJournal(req, res) {
  console.log('deleteJournal');
  console.log(req.params);
  try {
    let id = req.params.id;
    let deleteJournal = await JournalModel.findByIdAndDelete(id);
    res.status(200).send(deleteJournal);
  }
  catch (err) {
    res.status(500).send('unable to delete: ',err.message);
  }
}

module.exports = deleteJournal;