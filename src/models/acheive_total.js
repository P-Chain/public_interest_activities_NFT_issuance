const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');

function hash(password) {
    return crypto.createHmac('sha256', process.env.SECRET_KEY).update(password).digest('hex');
}

const Acheive_total = new Schema({
    Id: Number,
    Image: String,
    Name: String,
    Condition: {name: String, clear: Number}
});