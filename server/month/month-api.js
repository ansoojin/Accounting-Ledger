const month = require('./month-model')
const express = require('express')
const { NotFoundError, InputError, DuplicateError, ServerError } = require("../services/error-handler");
const router = express.Router()

// GET find a month document with userName and date
router.get('/api/months/:userName/:yyyymmdd', (req, res) => {
  const { userName, yyyymmdd } = req.params
  yyyymmdd = yyyymmdd.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
  month.findone({ userName: userName, date: yyyymmdd}, (err, monthData) => {
    if (err) {
      throw new ServerError();
    }
    else if (monthData) {
      res.status(200).send(monthData)
    }
    else {
      throw new NotFoundError();
    }
  })
})

// POST add a month document
router.post('/api/month', async (req, res) => {
  const { userName, date, targetExpense } = req.body
  const monthData = new month({ userName: userName, date: date, targetExpense: targetExpense })
  await monthData.save((err) => {
    if (err) {
      throw new InputError();
    }
    else {
      res.status(200).send(monthData)
    }
  })
})

// PUT Change a targetExpense in month
router.put('/api/month/:id', (req, res) => {
  const { id } = req.params
  const { targetExpense } = req.body
  month.findOne({ id : id }, (err, obj) => {
    if (err) {
      throw new NotFoundError()
    }
    obj.targetExpense = targetExpense
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

module.exports = router;