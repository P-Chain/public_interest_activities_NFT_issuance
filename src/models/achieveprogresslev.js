const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');


const AchieveProgressLev = new Schema({ // 개인 진행도 저장용 DB
    Id: String, // 사용자 ID
    vol_time: {type: Number, default: 0}, // 봉사시간
    Progressed_achieve_num: {type: Number, default: 0}, // 업적 달성 갯수
    Done_num: {type: Number, default: 0} // 기부액
});

AchieveProgressLev.static.userRegist = function(Id){ // 새로운 유저DB생성
    const user = new this({
        Id
    });
    return user.save();
};

AchieveProgressLev.static.findVolTime = function(id){
    // ID입력해 봉사시간 불러오기
    var data = this.findOne({'Id':id}).exec();
    return data.vol_time;
};

AchieveProgressLev.static.VolTimeUpdate = function({id, VolTime}){
    // 봉사시간 업데이트
    var User = this.findOne({'Id':id}).exec();
    User.vol_time = VolTime;
};

AchieveProgressLev.static.findDoneNum = function(id){
    // ID입력해 기부액 불러오기
    var data = this.findOne({'Id':id}).exec();
    return data.Done_num;
};
AchieveProgressLev.static.DoneUpdate = function({id, DoneNum}){
    // 기부액 업데이트
    var User = this.findOne({'Id':id}).exec();
    User.Done_num = DoneNum
};
AchieveProgressLev.static.findAchieveNum = function(id){
    // ID입력해 업적 달성갯수 불러오기
    var data = this.findOne({'Id':id}).exec();
    return data.Progressed_achieve_num;
};
AchieveProgressLev.static.AchieveCount = function(id){
    // ID입력해 업적 달성갯수 올리기
    var User = this.findOne({'Id':id}).exec();
    User.Progressed_achieve_num++;
};
AchieveProgressLev.static.findAllProgress = function(id){
    // ID 입력해 전체 진행도 불러오기
    return this.findOne({'Id':id}).exec();
};

module.exports = mongoose.model('AchieveProgressLev', AchieveProgressLev);