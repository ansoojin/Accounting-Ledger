const mongoose = require('mongoose');
const { Schema } = mongoose;
const autoIdSetter = require('../services/auto-id-setter');

/*
각각의 수입과 지출 내역을 event라고 합니다.
title : 제목
content : 내용
date : 날짜
amount : 금액(지출이면 음수, 수입이면 양수)
userId : event를 귀속시킬 유저의 아이디
onBalance : True(유저 잔액에 반영), False(유저 잔액에 반영하지 않음)
*/
const eventSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  userId: { type: String, required: true },
  onBalance: { type: Boolean, default: true }
});

autoIdSetter(eventSchema, mongoose, "event", "id")
module.exports = mongoose.model('event', eventSchema);