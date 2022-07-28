const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');

function hash(password) {
    return crypto.createHmac('sha256', process.env.SECRET_KEY).update(password).digest('hex');
}

const Progressed_achieve = new Schema({ // 업적 달성여부 DB
    Id: String, // 사용자 ID
    Prog_achieve: [{id_ach: Number, name_ach: String, date_ach: Date}] // 달성업적 저장용 배열(업적id, 업적이름, 달성날짜 저장)
});