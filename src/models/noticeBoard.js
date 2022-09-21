const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');


const noticeBoard = new Schema({ // 공지사항 DB
    index: Number, // 글번호
    title: String, // 게시글 제목
    date: Date, // 작성시간
    mustRead: Boolean // 필독여부
});

noticeBoard.statics.viewMustread = function(){
    // 필독 공지사항 불러오기
    return this.find({"mustRead": true},{"index":true,"title":true}).sort({index:1}).exec();
};

noticeBoard.statics.viewNotice = function(){
    // 전체 공지사항 불러오기
    return this.find({"index": {$gt: 0}},{"index":true,"title":true}).sort({index:1}).exec();
};