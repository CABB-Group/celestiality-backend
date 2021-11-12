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

// .env file
require('dotenv').config();

//PORT assignment & assigned in .env
const PORT = process.env.PORT || 3001;
// const deleteJournal = require('./src/celestials/modules/deleteJournal.js');
// const getJournal = require('./src/celestials/modules/getJournal.js');
// const updateJournal = require('./src/celestials/modules/updateJournal');
// const postJournal = require('./src/celestials/modules/postJournal.js');




// MONGO/MONGOOSE CONNECTION
// mongoose.connect(process.env.MONGO_CONNECTION_STRINGS, {
//     useNewUrlParser: true, useUnifiedTopology: true
// });

// try{
//   const db = mongoose.connection;
//   db.on('error', console.error.bind(console,"connetion error"));
//   db.once('open', () => console.log("succes"));
// } catch {
//   console.log("oops", e.message);
// }
// ROUTING


app.get('/', (req,res) => {
  res.send("test request received");
});
// /journal
// app.get('/journal', getJournal);
// app.post('/journal', postJournal);
// app.delete('/journal/:id', deleteJournal);
// app.put('/journal/:id', updateJournal);

app.get('*', (req,res) => res.status(404).send("we don't understand you"));

app.listen(PORT, () => {console.log(`listening on ${PORT}`)});
