const mongoose = require('mongoose');
const { Schema } = mongoose;
const autoIdSetter = require('../services/auto-id-setter');

// Date의 유효성 검증
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

/*
각 유저의 이달의 목표 지출을 관리하기 위한 테이블
userName : 유저 닉네임
date : 달(2022년 6월 -> 2022-06-01)
targetExpense : 목표 지출
*/
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