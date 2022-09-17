const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');


const noticeBoard = new Schema({ // 공지사항 DB
    title: String, // 게시글 제목
    date: Date, // 작성시간
    comments: {type:[{comment: String, commenter: String, comDate: Date}], default: []}, //댓글 
});