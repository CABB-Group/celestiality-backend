'use strict';

const mongoose = require('mongoose');
const { MongoMissingCredentialsError } = require('mongoose/node_modules/mongodb');

const Journal = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true }
});

const JournalModel = mongoose.model('Entry', Journal);

module.exports = JournalModel;

