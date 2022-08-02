const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');


const Progressed_achieve = new Schema({ // 업적 달성여부 DB
    Id: String, // 사용자 ID
    Prog_achieve: [{id_ach: Number, name_ach: String, date_ach: Date}] // 달성업적 저장용 배열(업적id, 업적이름, 달성날짜 저장)
});

Progressed_achieve.static.findAchieveArray = function(id){
    // 사용자 ID입력받아 업적달성 배열 불러오기
    return this.findOne({'Id':id}).exec();
}

module.exports = mongoose.model('Progressed_achieve', Progressed_achieve);