const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');


const Achieve_progress_lev = new Schema({ // 개인 진행도 저장용 DB
    Id: String, // 사용자 ID
    vol_time: Number, // 봉사시간
    Progressed_achieve_num: Number, // 업적 달성 갯수
    Done_num: Number // 기부액
});

Achieve_progress_lev.static.findVolTime = function(id){
    // ID입력해 봉사시간 불러오기
    var data = this.findOne({'Id':id}).exec();
    return data.vol_time;
}

Achieve_progress_lev.static.findDoneNum = function(id){
    // ID입력해 기부액 불러오기
    var data = this.findOne({'Id':id}).exec();
    return data.Done_num;
}
Achieve_progress_lev.static.findAchieveNum = function(id){
    var data = this.findOne({'Id':id}).exec();
    return data.Progressed_achieve_num;
}
Achieve_progress_lev.static.findAllProgress = function(id){
    // ID 입력해 전체 진행도 불러오기
    return this.findOne({'Id':id}).exec();
}

module.exports = mongoose.model('Achieve_progress_lev', Achieve_progress_lev);