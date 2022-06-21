const event = require('./event-model')
const express = require('express')
const { NotFoundError, InputError, DuplicateError, ServerError } = require("../services/error-handler");
const router = express.Router()

router.get('/api/events', (req, res) => {
  event.find({}, (err, eventData) => {
    if (err) {
      throw new ServerError();
    }
    else if (eventData) {
      res.status(200).send(eventData)
    }
    else {
      throw new NotFoundError();
    }
  })
})

router.post('/api/event', async (req, res) => {
  const { title, content, date, amount, userName, onBalance } = req.body;
  const eventData = new event({ title: title, content: content, date: date, amount: amount, userName: userName, onBalance: onBalance })
  await eventData.save((err) => {
    if (err) {
      throw new InputError();
    } 
    else {
      res.status(200).send(eventData)
    }
  })
})

module.exports = router;