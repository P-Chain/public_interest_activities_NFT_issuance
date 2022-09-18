const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');


const vmsManage = new Schema({ // 봉사시간 갱신 신청 관리 DB
    index: Number, // 신청 번호
    id: String, // 신청자 ID
    volIss: String, // 봉사시간 인증서
    volTime: Number, // 현재 봉사시간
    state: String, // 신청 상태(대기, 수락, 거부)
    username: String // 신청자 이름
});