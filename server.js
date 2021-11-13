'use strict';
// const mongoose = require('mongoose');

require('dotenv').config();

// Express Server Import
const express = require('express');
const app = express();
app.use(express.json());
// CORS: Security
const cors = require('cors');
app.use(cors());

const datesFunction = require('./src/celestials/modules/dates.js');
// datesFunction();
// .env file
require('dotenv').config();

//PORT assignment & assigned in .env
const PORT = process.env.PORT || 3002;
const deleteJournals = require('./src/celestials/modules/deleteJournal');
const getJournal = require('./src/celestials/modules/getJournal.js');
const updateJournal = require('./src/celestials/modules/updateJournal');
const postJournal = require('./src/celestials/modules/postJournal.js');
const HoriscopeAPI = require('./src/celestials/modules/apis.js');


// MONGO/MONGOOSE CONNECTION
// mongoose.connect(process.env.MONGO_CONNECTION_STRINGS, {
//   useNewUrlParser: true, useUnifiedTopology: true
// });

// try{
//   const db = mongoose.connection;
//   db.on('error', console.error.bind(console,"connetion error"));
//   db.once('open', () => console.log("succes"));
// } catch {
//   console.log("oops", e.message);
// }
// ROUTING


app.get('/', (req, res) => {
  res.send("test request received");
});
//horoscope routes
app.get('/horoscope', HoriscopeAPI );

// /journal
app.get('/journal', getJournal);
app.post('/journal', postJournal);
app.delete('/journal/:id', deleteJournals);
app.put('/journal/:id', updateJournal);

app.get('*', (req, res) => res.status(404).send("we don't understand you"));

app.listen(PORT, () => console.log(`listening on ${PORT}`));
