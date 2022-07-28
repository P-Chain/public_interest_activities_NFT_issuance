const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');

function hash(password) {
    return crypto.createHmac('sha256', process.env.SECRET_KEY).update(password).digest('hex');
}

const Acheive_total = new Schema({ // 업적 종류 저장용 DB
    Id: Number, // 업적 구분용 ID
    Image: String, // 업적 이미지
    Name: String, // 업적 이름
    Condition: {name: String, clear: Number} // 자동발급 업적을 위한 달성조건
});