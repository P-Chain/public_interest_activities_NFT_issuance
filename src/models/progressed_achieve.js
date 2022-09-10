const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');


const Progressed_achieve = new Schema({ // 업적 달성여부 DB
    Id: String, // 사용자 ID
    ProgAchieve: {type:[{idAch: Number, nameAch: String, dateAch: Date}], default: []} // 달성업적 저장용 배열(업적id, 업적이름, 달성날짜 저장)
});

Progressed_achieve.statics.AddUser = function(id){
    //새로운 유저 추가
    const User = new this({
        Id:id
    });
    User.save();
};

Progressed_achieve.statics.findAchieveArray = function(id){
    // 사용자 ID입력받아 업적달성 배열 불러오기
    return this.findOne({Id:id}).exec();
};
Progressed_achieve.statics.AddProgAchieve = function(id, IdAch, NameAch, DateAch){
    // 사용자 달성 업적 추가
    this.updateOne({Id:id},{$push: {ProgAchieve: {idAch:IdAch, nameAch:NameAch, dateAch:DateAch}}}).exec();
    
};

module.exports = mongoose.model('Progressed_achieve', Progressed_achieve);