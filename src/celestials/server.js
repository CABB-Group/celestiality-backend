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
mongoose.connect(process.env.MONGO_CONNECTION_STRINGS, {
    useNewUrlParser: true, useUnifiedTopology: true
});

try{
  const db = mongoose.connection;
  db.on('error', console.error.bind(console,"connetion error"));
  db.once('open', () => console.log("succes"));
} catch {
  console.log("oops", e.message);
}
// ROUTING
app.listen(PORT, () => console.log(`listening on ${PORT}`)
);

app.get('/', (req,res) => {
  res.send("test request received");
})
// /journal
app.get('/journal', getJournal)
app.post('/journal', postJournal)
app.delete('/journal/:id', deleteJournal)
app.put('/journal/:id', updateJournal)

app.get('*', (req,res) => res.status(404).send("we don't understand you"))
