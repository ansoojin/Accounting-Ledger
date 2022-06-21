const user = require('./user-model');
const { NotFoundError, InputError, DuplicateError, ServerError } = require("../services/error-handler");
const express = require('express');
const router = express.Router();

// GET all users
router.get('/api/users', async (req, res) => {
  const userData = await user.find({})
  if (userData){
    res.status(200).send(userData)
  }
  else {
    throw new ServerError();
  }
})

// GET user by id
router.get('/api/users/:id', (req, res) => {
  const { id } = req.params
  user.findOne( { id: id }, (err, userData) => {
    if (err) {
      throw new ServerError();
    }
    else if (userData) {
      res.status(200).send(userData)
    }
    else {
      throw new InputError();
    }
  })
})

// POST sign up new user
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
      throw new InputError();
    }
    else {
      res.status(200).send(userData)
    }
  })
})

router.post('/api/user/checkid', (req, res) => {
  const { userId } = req.body
  if (userId === undefined) {
    throw new InputError();
  }
  user.findOne({ userId: userId }, (err, obj) => {
    if (err) {
      throw new ServerError();
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
    throw new InputError();
  }
  user.findOne({ userName: userName }, (err, obj) => {
    if (err) {
      throw new ServerError();
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
    throw new InputError();
  }
  user.findOne({ userMail: userMail }, (err, obj) => {
    if (err) {
      throw new ServerError()
    }
    if (obj === null) {
      res.send({ available: true })
    } 
    else {
      res.send({ available: false })
    }
  })
})

router.put('/api/user/:id', (req, res) => {
  const { id } = req.params
  const newInfo = req.body
  user.findOne({ id : id }, (err, obj) => {
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

module.exports = router;