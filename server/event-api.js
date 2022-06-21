const event = require('./event-model')
const express = require('express')
const router = express.Router()

router.get('/api/events', async (req, res) => {
  const eventData = await event.find({})
  if (eventData) {
    res.status(200).send(eventData)
  }
  else {
    res.status(500).send({ message: 'Something went wrong' })
  }
})

router.post('/api/event', async (req, res) => {
  const { title, content, date, amount, userName, onBalance } = req.body;
  const eventData = new event({ title: title, content: content, date: date, amount: amount, userName: userName, onBalance: onBalance })
  await eventData.save((err) => {
    if (err) {
      res.status(400).send({ message: 'Bad request' })
    } 
    else {
      res.status(200).send(eventData)
    }
  })
})

module.exports = router;