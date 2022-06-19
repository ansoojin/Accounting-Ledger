const event = require('./event')
const express = require('express')
const router = express.Router()

router.get('/api/events', async (req, res) => {
  res.send(await event.find({}))
})

router.post('/api/event', (req, res) => {
  const { title, content, date, amount, username, onBalance } = req.body;
  const eventData = new event({ title: title, content: content, date: date, amount: amount, username: username, onBalance: onBalance })
  await eventData.save((err) => {
    if (err) {
      res.status(404).end('Bad request')
    } 
    else {
      res.status(200).end({ data: eventData })
    }
  })
})

module.exports = router;