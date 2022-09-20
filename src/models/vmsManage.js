const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');


const vmsManage = new Schema({ // 봉사시간 갱신 신청 관리 DB
    index: Number, // 신청 번호
    id: String, // 신청자 ID
    volIss: String, // 봉사시간 인증서
    volTime: Number, // 현재 봉사시간
    state: {type: String, default: "대기"}, // 신청 상태(대기, 수락, 거부)
    username: String // 신청자 이름
});

vmsManage.statics.newApply = function(id,volIss,volTime,username){ // 새로운 유저DB생성
    const user = new this({index: this.count()+1,id,volIss,volTime,username});
    return user.save();
};

vmsManage.statics.allowApply = function(index){
    this.updateOne({index},{$set: {state: "수락"}}).exec();
};

vmsManage.statics.denApply = function(index){
    this.updateOne({index},{$set: {state: "거부"}}).exec();
};