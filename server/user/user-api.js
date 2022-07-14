const user = require("./user-model");
const {
  NotFoundError,
  InputError,
  UnauthorizedError,
  DuplicateError,
  ServerError,
} = require("../services/error-handler");
const express = require("express");
const router = express.Router();

// GET all users
router.get("/api/users", async (req, res) => {
  const userData = await user.find({});
  if (userData) {
    res.status(200).send(userData);
  } else {
    throw new ServerError();
  }
});

// GET user by id
router.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  user.findOne({ id: id }, (err, userData) => {
    if (err) {
      throw new ServerError();
    } else if (userData) {
      res.status(200).send(userData);
    } else {
      throw new InputError();
    }
  });
});

// POST sign up new user
router.post("/api/user/signup", async (req, res) => {
  const { realName, userId, userName, password, balance, userMail } = req.body;
  const userData = new user({
    realName: realName,
    userId: userId,
    userName: userName,
    password: password,
    balance: balance,
    userMail: userMail,
  });
  await userData.save((err) => {
    if (err) {
      throw new InputError();
    } else {
      res.status(200).send(userData);
    }
  });
});

// POST check valid id and password
router.post("/api/user/signin", (req, res) => {
  const { userId, password } = req.body;
  user.findOne({ userId: userId, password: password }, (err, obj) => {
    if (err) {
      throw new UnauthorizedError();
    } else {
      res.status(200).send({ login: true });
    }
  });
});

// POST check if there is the same userId
router.post("/api/user/checkid", (req, res) => {
  const { userId } = req.body;
  if (userId === undefined) {
    throw new InputError();
  }
  user.findOne({ userId: userId }, (err, obj) => {
    if (err) {
      throw new ServerError();
    }
    if (obj === null) {
      res.send({ available: "true" });
    } else {
      res.send({ available: "false" });
    }
  });
});

// POST check if there is the same userName
router.post("/api/user/checkname", (req, res) => {
  const { userName } = req.body;
  if (userName === undefined) {
    throw new InputError();
  }
  user.findOne({ userName: userName }, (err, obj) => {
    if (err) {
      throw new ServerError();
    }
    if (obj === null) {
      res.send({ available: "true" });
    } else {
      res.send({ available: "false" });
    }
  });
});

// POST check if there is the same userMail
router.post("/api/user/checkmail", (req, res) => {
  const { userMail } = req.body;
  if (userMail === undefined) {
    throw new InputError();
  }
  user.findOne({ userMail: userMail }, (err, obj) => {
    if (err) {
      throw new ServerError();
    }
    if (obj === null) {
      res.send({ available: true });
    } else {
      res.send({ available: false });
    }
  });
});

// POST find userId by realName and userMail
router.post("/api/user/findmyid", (req, res) => {
  const { realName, userMail } = req.body;
  if (userMail === undefined || realName === undefined) {
    throw new InputError();
  }
  user.findOne({ realName: realName, userMail: userMail }, (err, obj) => {
    if (err) {
      throw new ServerError();
    } else if (obj === null) {
      res.status(404).send({ message: "Incorrect info" });
    } else {
      res.send({ userId: obj.userId });
    }
  });
});

// POST find password by realName, userId, and userMail
router.post("/api/user/findmypw", (req, res) => {
  const { realName, userId, userMail } = req.body;
  if (
    userMail === undefined ||
    userId === undefined ||
    realName === undefined
  ) {
    throw new InputError();
  }
  user.findOne(
    { realName: realName, userId: userId, userMail: userMail },
    (err, obj) => {
      if (err) {
        throw new ServerError();
      } else if (obj === null) {
        res.status(404).send({ message: "Incorrect info" });
      } else {
        res.send({ password: obj.password });
      }
    }
  );
});

// PUT change user info
router.put("/api/user/:id", (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;
  user.findOne({ id: id }, (err, obj) => {
    if (err) {
      throw new NotFoundError();
    }
    Object.keys(newInfo).forEach((prop) => {
      obj[prop] = newInfo[prop];
    });
    obj.save((err) => {
      if (err) {
        throw new InputError();
      } else {
        res.status(200).send(obj);
      }
    });
  });
});

// DELETE delete a user document
router.delete("/api/user/:id", (req, res) => {
  const { id } = req.params;
  user.deleteOne({ id: id }, (err) => {
    if (err) {
      throw new NotFoundError();
    } else {
      res.status(200).send({ message: "Delete success" });
    }
  });
});

module.exports = router;
