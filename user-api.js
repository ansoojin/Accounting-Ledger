const user = require('./user-model');
const express = require('express');
const router = express.Router();

router.get('/api/users', async (req, res) => {
  const userData = await user.find({})
  if (userData){
    res.status(200).send(userData)
  }
  else {
    res.status(500).send({ message: 'Something went wrong' })
  }
})

router.get('/api/users/:id', async (req, res) => {
  const { id } = req.params
  const userData = await user.findOne( { id: id } )
  if (userData) {
    res.status(200).send(userData)
  }
  else {
    res.status(400).send({ message: 'Bad request'})
  }
})

router.post('/api/user/signup', async (req, res) => {
  const { userId, userName, password, balance } = req.body;
  const userData = new user({ userId: userId, userName: userName, password: password, balance: balance })
  await userData.save((err) => {
    if (err) {
      console.log('error in signup')
      console.log(err)
      res.status(400).send({ message: 'Bad request' })
    }
    else {
      res.status(200).send(userData)
    }
  })
})

module.exports = router;