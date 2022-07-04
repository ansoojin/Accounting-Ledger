const mongoose = require('mongoose');
const { Schema } = mongoose;
const autoIdSetter = require('../services/auto-id-setter');

// 이메일 유효성 검증
var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

/*
유저 정보를 관리하는 테이블
realName : 실명
userId : 로그인에 사용되는 아이디
userName : 유저가 설정한 닉네임
password : 비밀번호
balance : 잔액
userMail : 유저의 이메일
*/
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
