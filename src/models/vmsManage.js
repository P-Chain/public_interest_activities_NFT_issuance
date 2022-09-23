const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');


const vmsManage = new Schema({ // 봉사시간 갱신 신청 관리 DB
    index: Number, // 신청 번호
    nickname: String, // 신청자 닉네임
    volIss: String, // 봉사시간 인증서
    volTime: Number, // 현재 봉사시간
    state: {type: String, default: "대기"}, // 신청 상태(대기, 수락, 거부)
    username: String // 신청자 이름
});

vmsManage.statics.newApply = function({index,volTime,volIss,nickname,username}){ // 신청 문서 생성
    const user = new this({index,volTime,volIss,nickname,username});
    console.log(user);
    return user.save();
};

vmsManage.statics.allowApply = function({index,volTime}){
    this.updateOne({index},{$set: {state: "수락"}}).exec();
};

vmsManage.statics.denyApply = function(index){
    this.updateOne({index},{$set: {state: "거부"}}).exec();
};

vmsManage.statics.viewApply = function(index){
    return this.find({"state": "대기"}).sort({index:1}).exec();
};

vmsManage.statics.getCount = function(){
    return this.count();
}

module.exports = mongoose.model('vmsManage', vmsManage);