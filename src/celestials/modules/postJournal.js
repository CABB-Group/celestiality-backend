'use strict';

const JournalModel = require('./../schema/celestialModel.js');

function postJournal(req, response) {
  console.log('postJournal');
  const newEntry = req.body;
  //let postedBook = await bookModel.create(bookInfo);
  try {
    const journalEntry = new JournalModel(newEntry);
    journalEntry.save();
    response.status(201).send(journalEntry);

    // console.log(recentUpdate);
    // res.status(200).json(recentUpdate);
  }
  catch (e) {
    console.log(e.message);
    response.status(400).send("Boo! You made a bad request", e.message);
  }
}
module.exports = postJournal;
