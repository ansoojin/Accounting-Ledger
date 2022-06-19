const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const autoIdSetter = require('./auto-id-setter');

const eventSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  amount: { type: Int32, required: true },
  userName: { type: String, required: true },
  onBalance: { type: Boolean, default: true }
});

autoIdSetter(eventSchema, mongoose, "event", "id")
module.exports = mongoose.model('event', eventSchema);