'use strict';
const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const deleteJournal = require('./modules/deleteJournal.js');
const getJournal = require('./modules/getJournal.js');
const updateJournal = require('./modules/updateJournal');
const postJournal = require('./modules/postJournal.js');

// Express Setup
const app = express();
const PORT = process.env.PORT || 3001;

// Express permissions/setup
app.use(express.json());
app.use(cors());

// MONGO/MONGOOSE CONNECTION


// ROUTING

// /journal
