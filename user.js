const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const autoIdSetter = require('./auto-id-setter');

const userSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  balance: { type: Number, default: 0},
});

autoIdSetter(userSchema, mongoose, "user", "id");
module.exports = mongoose.model('user', userSchema);