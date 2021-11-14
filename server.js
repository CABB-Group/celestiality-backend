'use strict';
const mongoose = require('mongoose');

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
const deleteJournal = require('./src/celestials/modules/deleteJournal');
const getJournal = require('./src/celestials/modules/getJournal.js');
const updateJournal = require('./src/celestials/modules/updateJournal');
const postJournal = require('./src/celestials/modules/postJournal.js');
const convertDate = require('./src/celestials/modules/dates.js');
const JournalModel = require('./src/celestials/schema/celestialModel.js');


//MONGO/MONGOOSE CONNECTION
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
app.get('/', (req, res) => {
  res.send("test request received");
});
//horoscope routes
app.get('/horoscope', convertDate );

// /journal
app.get('/journal', getJournal);
app.post('/journal', postJournal);
app.delete('/journal/:id', deleteJournal);
app.put('/journal/:id', updateJournal);
app.get('/journalseed', getSeed);
app.get('/clear', bombTheBase);
app.get('*', (req, res) => res.status(404).send("we don't understand you"));
app.listen(PORT, () => console.log(`listening on ${PORT}`));


//make seed function
function getSeed (req,res){
  const seedArr= [
    {
      name: "TBD",
      description: "TBD",
      date: "TBD"
    },
    {
      name: "TBD2",
      description: "TBD2",
      date: "TBD2"
    },
    {
      name: "TBD3",
      description: "TBD3",
      date: "TBD3"
    }
  ];
  seedArr.forEach(person => {
    let entry = new JournalModel(person);
    entry.save();
    console.log('seeded:  ',entry);
  });
  res.status(200).send('Seeded data');
}

//clear the database
async function bombTheBase(req, res) {
  try {
    await JournalModel.deleteMany({});
    console.log('Database cleared')
      ;
    res.status(200).send('cleared');
  }
  catch (e) {
    console.log('error:', e.message);
  }
}