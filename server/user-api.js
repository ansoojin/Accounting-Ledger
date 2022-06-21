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
  const { realName, userId, userName, password, balance, userMail } = req.body;
  const userData = new user({
    realName: realName,
    userId: userId,
    userName: userName,
    password: password,
    balance: balance,
    userMail: userMail
  })
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

router.post('/api/user/checkid', (req, res) => {
  const { userId } = req.body
  if (userId === undefined) {
    res.status(400).send({ message: 'Bad request' })
    return
  }
  user.findOne({ userId: userId }, (err, obj) => {
    if (err) {
      res.status(500).send({ message: 'Something went wrong' })
      return;
    }
    if (obj === null) {
      res.send({ available: true })
    } 
    else {
      res.send({ available: false })
    } 
  })
})

router.post('/api/user/checkname', (req, res) => {
  const { userName } = req.body
  if (userName === undefined) {
    res.status(400).send({ message: 'Bad request' })
    return
  }
  user.findOne({ userName: userName }, (err, obj) => {
    if (err) {
      res.status(500).send({ message: 'Something went wrong' })
      return;
    }
    if (obj === null) {
      res.send({ available: true })
    } 
    else {
      res.send({ available: false })
    }
  })
})

router.post('/api/user/checkmail', (req, res) => {
  const { userMail } = req.body
  if (userMail === undefined) {
    res.status(400).send({ message: 'Bad request' })
    return
  }
  user.findOne({ userMail: userMail }, (err, obj) => {
    if (err) {
      res.status(500).send({ message: 'Something went wrong' })
      return;
    }
    if (obj === null) {
      res.send({ available: true })
    } 
    else {
      res.send({ available: false })
    }
  })
})

module.exports = router;