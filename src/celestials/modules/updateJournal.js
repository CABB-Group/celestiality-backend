"use strict";

// const axios = require('axios');
const JournalModel = require("./../schema/celestialModel.js");
require("dotenv").config;

async function updateJournal(request, response) {
  try {
    const id = request.params.id;
    const updateObj = request.body;

    const JournalUpdate = await JournalModel.findByIdAndUpdate(id, updateObj, {
      new: true,
      overwrite: true,
    });
    console.log(JournalUpdate);
    response.status(200).send(JournalUpdate);
  } catch (error) {
    response.status(500).send("Unable to perform put.", error.message);
  }
}

module.exports = updateJournal;
