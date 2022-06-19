const event = require('./event')
const express = require('express')
const router = express.Router()

router.get('/api/events', async (req, res) => {
  const eventData = await event.find({})
  if (eventData) {
    res.status(200).send(eventData)
  }
  else {
    res.status(500).end({ message: 'Something went wrong' })
  }
})

router.post('/api/event', (req, res) => {
  const { title, content, date, amount, username, onBalance } = req.body;
  const eventData = new event({ title: title, content: content, date: date, amount: amount, username: username, onBalance: onBalance })
  await eventData.save((err) => {
    if (err) {
      res.status(400).end({ message: 'Bad request' })
    } 
    else {
      res.status(200).end({ data: eventData })
    }
  })
})

module.exports = router;