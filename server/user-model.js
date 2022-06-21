const mongoose = require('mongoose');
const { Schema } = mongoose;
const autoIdSetter = require('./auto-id-setter');

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const userSchema = new Schema({
  realName: { 
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true,
    unique: true
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    default: 0
  },
  userMail: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, 'Please fill a valid email address'],
  }
});

autoIdSetter(userSchema, mongoose, "user", "id");
module.exports = mongoose.model('user', userSchema);
