const event = require('./event-model')
const express = require('express')
const { NotFoundError, InputError, DuplicateError, ServerError } = require("../services/error-handler");
const router = express.Router()

// GET Get all events
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

// POST Add an event to database
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

// PUT Change an event in database
router.put('/api/event/:id', (req, res) => {
  const { id } = req.params
  const newInfo = req.body
  event.findOne({ id : id }, (err, obj) => {
    if (err) {
      throw new NotFoundError()
    }
    Object.keys(newInfo).forEach((prop) => {
      obj[prop] = newInfo[prop]
    })
    obj.save((err) => {
      if (err) {
        throw new InputError();
      }
      else {
        res.status(200).send(obj)
      }
    })
  })
})

// DELETE delete an event in database
router.delete('/api/event/:id', (req, res) => {
  const { id } = req.params
  event.deleteOne({id : id}, (err) => {
    if (err) {
      throw new NotFoundError()
    }
    else {
      res.status(200).send({ message: "Delete success"})
    }
  })
})


module.exports = router;