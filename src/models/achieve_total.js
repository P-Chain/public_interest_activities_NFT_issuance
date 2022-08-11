const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');


const Achieve_total = new Schema({ // 업적 종류 저장용 DB
    Id: Number, // 업적 구분용 ID
    Image: String, // 업적 이미지
    Name: String, // 업적 이름
    Condition: {name: String, clear: Number} // 자동발급 업적을 위한 달성조건
});

Achieve_total.static.findAchieveByID = function(id){
    // 업적 ID 입력해서 해당 업적 정보 불러오기
    return this.findOne({'Id':id}).exec();
};

Achieve_total.static.findImageByID = function(id){
    // 업적 ID 입력해서 업적 이미지 불러오기
    var data = this.findOne({'Id':id}).exec();
    return data.Image;
};
Achieve_total.static.findImageAndName = function(id){
    // 업적 ID 입력해서 업적 이미지와 업적 이름 불러오기
    var data = this.findOne({'Id':id}).exec();
    return {image : data.Image, name : data.Name}
};
module.exports = mongoose.model('Achieve_total', Achieve_total);