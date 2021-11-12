'use strict';

const JournalModel = require('./../schema/celestialModel.js');

async function postJournal(req, res) {
  console.log('postJournal');
  const {name,description,date} = req.body;
  try {
    const test = {
      name: 'yoname',
      description: 'description',
      date: 'date'
    };
    const journalEntry = JournalModel(test);
    journalEntry.save();
    ((err, journal) => {
      if (err) {
        console.log(err);
      }
      //console.log(journal._id);
      res.status(200).json(journal);
    });

    // console.log(recentUpdate);
    // res.status(200).json(recentUpdate);
  }
  catch (e) {
    console.log(e.message);
    res.status(400).send("Boo! You made a bad request", e.message);
  }
}
module.exports = postJournal;
