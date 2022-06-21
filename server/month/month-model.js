const mongoose = require('mongoose');
const { Schema } = mongoose;
const autoIdSetter = require('../services/auto-id-setter');

function dateIsValid(dateStr) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (dateStr.match(regex) === null) {
    return false;
  }

  const date = new Date(dateStr);
  const timestamp = date.getTime();

  if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
    return false;
  }

  return date.toISOString().startsWith(dateStr);
}

const monthSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  date: {
    type: String,
    validate: [dateIsValid, 'Please fill a valid yyyy-mm-dd'],
    required: true
  },
  targetExpense: {
    type: Number,
    default: 0
  }
});

autoIdSetter(monthSchema, mongoose, "month", "id")
module.exports = mongoose.model('month', monthSchema);