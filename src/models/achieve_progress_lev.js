const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');

function hash(password) {
    return crypto.createHmac('sha256', process.env.SECRET_KEY).update(password).digest('hex');
}

const Acheive_progress_lev = new Schema({ // 개인 진행도 저장용 DB
    Id: String, // 사용자 ID
    vol_time: Number, // 봉사시간
    Progressed_acheive_num: Number, // 업적 달성 갯수
    Done_num: Number // 기부액
});